import React from 'react';
import { useTranslation } from 'react-i18next';

function OptionTranslation(props) {
  const { t } = useTranslation();
  
  // or const [t, i18n] = useTranslation();

  return <option {...props} >{t(props.text)}</option>
}

export default OptionTranslation;