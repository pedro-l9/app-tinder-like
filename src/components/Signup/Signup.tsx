import { Button, TextField } from '@mui/material';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Controller, useForm } from 'react-hook-form';
import UserPool from '../../UserPool';
import './Signup.css';

type FormData = {
  phone: string;
  password: string;
};

const userData = {
  name: 'Pedro',
  email: 'contato@placerda.dev',
  gender: 'M',
  birthdate: '19/02/1999',
};

const attributesList = Object.entries(userData).map(
  ([Name, Value]) => new CognitoUserAttribute({ Name, Value })
);

function Signup() {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ phone, password }) => {
    UserPool.signUp(phone, password, attributesList, [], (err, data) => {
      if (err) {
        console.error(err);
      }

      console.log(data);
    });
  });

  return (
    <div className="Wrapper">
      <form onSubmit={onSubmit}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Phone" focused type="tel" {...field} />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Password" focused type="password" {...field} />
          )}
        />

        <Button type="submit" variant="contained" color="success">
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Signup;
