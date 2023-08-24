import { useFormik } from 'formik';

import { Input } from 'components';

import { authSchema } from 'libs';

import { Container } from './RegisterForm.styled';

const RegisterForm = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: () => {
      console.log('first');
    },
    validationSchema: authSchema,
  });
  return (
    <Container name="registerForm">
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      {errors.name && touched.name ? (
        <span style={{ color: 'white' }}>{errors.name}</span>
      ) : null}
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Create a password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
    </Container>
  );
};

export default RegisterForm;
