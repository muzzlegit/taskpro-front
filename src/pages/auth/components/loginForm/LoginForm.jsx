import { useFormik } from 'formik';

import { Input, PrimaryButton } from 'components';

import { Container, Error } from './LoginForm.styled';

import { useAuth } from 'pages/auth/hooks';
import { authSchema } from 'utils';

const LoginForm = () => {
  const { handleLogin } = useAuth();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: handleLogin,
      validationSchema: authSchema,
    });
  return (
    <Container
      name="registerForm"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        isError={errors.email && touched.email ? true : null}
      />
      {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
      <Input
        type="password"
        name="password"
        placeholder="Confirm a password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        isError={errors.password && touched.password ? true : null}
      />
      {errors.password && touched.password ? (
        <Error>{errors.password}</Error>
      ) : null}
      <PrimaryButton style={{ marginTop: '10px' }}>Log in Now</PrimaryButton>
    </Container>
  );
};

export default LoginForm;
