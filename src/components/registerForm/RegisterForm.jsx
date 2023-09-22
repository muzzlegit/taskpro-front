import { useFormik } from 'formik';

import { Input, PrimaryButton } from 'components';

import { Container, Error } from './RegisterForm.styled';

import { useAuth } from 'hooks';
import { authSchema } from 'utils';

const RegisterForm = () => {
  const { handleRegister } = useAuth();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      onSubmit: handleRegister,
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
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        isError={errors.name && touched.name ? true : null}
      />
      {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
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
        placeholder="Create a password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        isError={errors.password && touched.password ? true : null}
      />
      {errors.password && touched.password ? (
        <Error>{errors.password}</Error>
      ) : null}
      <PrimaryButton style={{ marginTop: '10px' }}>Register Now</PrimaryButton>
    </Container>
  );
};

export default RegisterForm;
