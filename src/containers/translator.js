import React from 'react'

import { Translation } from 'react-i18next';





// i18n.changeLanguage('en');
 


 function Translator({text}) {
    return (
          
        <Translation>
        {
            (t, { i18n }) => <>{t(text)}</>
        }
        </Translation>

)
}
// class Testing extends Component {
 
//     componentDidMount(){
//         i18n.changeLanguage('chi');
//     }
//     render() {
        
//     }
// }

export default Translator;
