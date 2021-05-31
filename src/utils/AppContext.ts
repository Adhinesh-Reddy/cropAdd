/* eslint-disable no-unused-vars */
import * as React from 'react'

export interface AppContextInterface {
  locale: string
  ulSetter: (lang: string) => void
}

export const ctxt = React.createContext<AppContextInterface | null>(null)

export const AppContextProvider = ctxt.Provider

export const AppContextConsumer = ctxt.Consumer
