import * as React from 'react'

export interface LocaleContextInterface {
  locale: string
  ulSetter: (lang: string) => void // eslint-disable-line
  languages: {[key: string] : string}
}

export const ctxt = React.createContext<LocaleContextInterface | null>(null)

export const LocaleContextProvider = ctxt.Provider

export const LocaleContextConsumer = ctxt.Consumer