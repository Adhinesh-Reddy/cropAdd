import React, { useState } from 'react';

import { LocaleHelper } from '../utils/LocaleHelper';
import { I18NHelper } from '../utils/I18NHelper';
import { IntlProvider } from 'react-intl';
import { AppContextInterface, AppContextProvider } from '../utils/AppContext';

import './App.css';
import Layout from './Layout/Layout';

function App() {
  const [userLocale, setUL] = useState(LocaleHelper.getUserLanguageCode());

  const ulSetter = (lang: string) => setUL(lang);

  const AppContext: AppContextInterface = {
    locale: userLocale,
    ulSetter
  };

  return (
    <div className='App'>
      <AppContextProvider value={AppContext}>
        <IntlProvider
          messages={I18NHelper.getMessagesByLanguageCode(userLocale)}
          locale={userLocale}
          defaultLocale={LocaleHelper.defaultLanguageCode()}
        >
          <Layout />
        </IntlProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
