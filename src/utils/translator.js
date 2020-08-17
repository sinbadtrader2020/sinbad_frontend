import React from 'react'
import { Translation } from 'react-i18next';


 function Translator({text}) {
    return (
    
          
        <Translation>
        {
            (t, { i18n }) => <>{t(text)}  </>
            
        }
        </Translation>
)
}

export default Translator;


// i18n.changeLanguage('en');
// class Testing extends Component {
 
//     componentDidMount(){
//         i18n.changeLanguage('chi');
//     }
//     render() {
        
//     }
// }