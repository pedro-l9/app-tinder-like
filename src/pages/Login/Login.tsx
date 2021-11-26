import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

import useAccountContext from '../../hooks/useAccountContext';
import './Login.css';
import { useNavigate } from 'react-router';

type FormData = {
  phone: string;
  password: string;
};

function Login() {
  const { control, handleSubmit } = useForm<FormData>();
  const { authenticate } = useAccountContext();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async ({ phone, password }) => {
    try {
      const data = await authenticate(phone, password);

      navigate('/');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <div className="Wrapper">
      <form onSubmit={onSubmit}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Phone"
              focused
              type="tel"
              variant="filled"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Password"
              focused
              type="password"
              variant="filled"
              {...field}
            />
          )}
        />

        <Button
          className="login-button"
          type="submit"
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
