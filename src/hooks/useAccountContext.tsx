import { useContext } from 'react';
import { AccountContext } from '../components/AccountProvider';

function useAccountContext() {
  const context = useContext(AccountContext);

  if (context === undefined) {
    throw new Error('useAccountContext must be within AccountProvider');
  }

  return context;
}

export default useAccountContext;
