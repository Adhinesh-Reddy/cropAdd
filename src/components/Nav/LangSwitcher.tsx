import React from "react"
import { Dropdown } from "react-bootstrap"
// import {Link, NavLink} from "react-router-dom"
// import {FormattedMessage} from "react-intl"
import { ctxt } from '../../utils/AppContext';

// interface LangSwitcherInterface {
    
// }
const LangSwitcher = () => {
    const localeContext = React.useContext(ctxt);
    const { locale, languages, ulSetter } = localeContext!; //eslint-disable-line
    const codes = Object.keys(languages);
    return (
      <Dropdown className='mx-2'>
        <Dropdown.Toggle size='lg' className='btn btn-light'>
          {languages[locale]}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {codes.map(code => {
            return (
              <Dropdown.Item key={code} active={code == locale} className='btn btn-light py-2' onClick={() => ulSetter(code)}>
                {languages[code]}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  };
export default React.memo(LangSwitcher)