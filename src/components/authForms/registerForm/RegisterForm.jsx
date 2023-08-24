import { useFormik } from 'formik';

import { Input } from 'components';

import { authSchema } from 'libs';

import { Container, Error } from './RegisterForm.styled';

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
        isError={errors.name}
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
    </Container>
  );
};

export default RegisterForm;
