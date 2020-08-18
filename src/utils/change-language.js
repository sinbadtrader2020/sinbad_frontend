import React from 'react'

import i18n from './i18n';
i18n.changeLanguage('en');


function ChangeLanguage(){



    return (
        <div>
            <button onClick={()=>i18n.changeLanguage('bn')}>Bangla</button>
            <button onClick={()=>i18n.changeLanguage('en')}>English</button>
            

        </div>
    );
}
export default ChangeLanguage;