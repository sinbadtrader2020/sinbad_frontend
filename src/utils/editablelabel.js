import React from 'react';


function EditLabel(props) {

  const [inputValue, setInputValue] = React.useState("");
  
  // or const [t, i18n] = useTranslation();
  function handleChange(event){
    setInputValue(event.target.value)
    props.onchange(event);
    
  }





  return <input {...props}  value={inputValue} onChange={handleChange} placeholder={props.text} />
}

export default EditLabel;