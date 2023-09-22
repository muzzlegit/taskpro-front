import { useCallback, useState } from 'react';

const useAuthForms = defaultForm => {
  const [selectedForm, setSelectedForm] = useState(defaultForm);

  const handleFormSelect = useCallback(formName => {
    setSelectedForm(formName);
  }, []);

  return { selectedForm, handleFormSelect };
};

export default useAuthForms;
