import React from 'react';
import { useTranslation } from 'react-i18next';

function InputTranslation(props) {
  const { t } = useTranslation();
  
  // or const [t, i18n] = useTranslation();

  return <input {...props}  placeholder={t(props.text)} />
}

export default InputTranslation;