import { createContext, useEffect, useState } from 'react';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

import Pool from '../UserPool';

interface IAccountContext {
  authenticate: (
    Username: string,
    Password: string
  ) => Promise<CognitoUserSession>;
  getSession: () => Promise<CognitoUserSession>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AccountContext = createContext<IAccountContext | undefined>(undefined);

const AccountProvider: React.FC = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      getSession()
        .then(() => {
          setIsAuthenticated(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setIsLoading(false);
    }
  }, []);

  const getSession = () => {
    return new Promise<CognitoUserSession>((resolve, reject) => {
      const user = Pool.getCurrentUser();

      if (user) {
        user.getSession(
          (err: Error | null, session: CognitoUserSession | null) => {
            if (err || session === null) {
              reject();
            } else {
              resolve(session);
            }
          }
        );
      } else {
        reject();
      }
    });
  };

  const authenticate = (Username: string, Password: string) =>
    new Promise<CognitoUserSession>((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log(data);
          setIsAuthenticated(true);
          resolve(data);
        },
        onFailure: (err) => {
          console.error(err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('New password', data);
          setIsAuthenticated(true);
          resolve(data);
        },
      });
    });

  const logout = () => {
    const user = Pool.getCurrentUser();

    if (user) {
      user.signOut(() => {
        setIsAuthenticated(false);
      });
    }
  };

  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, isAuthenticated, isLoading }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountProvider, AccountContext };
