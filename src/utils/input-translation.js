import React from 'react';
import { useTranslation } from 'react-i18next';

function InputTranslation(props) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = React.useState("");
  
  // or const [t, i18n] = useTranslation();
  function handleChange(event){
    setInputValue(event.target.value)
    props.onchange(event);
    
  }





  return <input autoComplete="off"   {...props}    value={inputValue} onChange={handleChange} placeholder={t(props.text)} />
}

export default InputTranslation;