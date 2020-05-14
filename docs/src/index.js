import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import Backend from 'i18next-xhr-backend'
import LngDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import WebFont from 'webfontloader'

import Home from './Home'
import Privacy from './Privacy'

WebFont.load({
  google: {
    families: ['M PLUS 1p', 'Montserrat']
  }
})

i18next
  .use(LngDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './locales/{{lng}}.json',
    },
    react: {
      useSuspense: false,
    },
  }, function(err, t) {
    // i18n initialized.
    const urlParams = new URLSearchParams(location.search)
    const pageParam = urlParams.get('page');
    let page = <Home/>
    if (pageParam == 'privacy') {
      page = <Privacy/>
    }
    ReactDOM.render(
      page,
      document.getElementById('root')
    )
  })
