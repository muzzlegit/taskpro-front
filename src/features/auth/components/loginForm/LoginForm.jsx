import { useFormik } from 'formik';

import { Input } from 'components';

const LoginForm = () => {
  const { values, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: () => {
      console.log('first');
    },
  });
  return (
    <form name="loginFortm">
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        value={values.name}
      />
    </form>
  );
};

export default LoginForm;
