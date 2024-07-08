import React, { createContext, useState, useContext } from 'react';

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
