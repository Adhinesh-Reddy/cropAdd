import { LocaleHelper } from './LocaleHelper'
import messages_en from '../lang/en.json'
import messages_fr from '../lang/fr.json'
import messages_te from '../lang/te.json'
import messages_hi from '../lang/hi.json'
import messages_ma from '../lang/ma.json'
import messages_ka from '../lang/ka.json'

// Add languge support here..: We can still enhance loading the values from DB or Using the single file to load the translations.
// We can check based no of values that is used.
const messages = new Map()
messages.set('en', messages_en)
messages.set('fr', messages_fr)
messages.set('te', messages_te)
messages.set('hi', messages_hi)
messages.set('ma', messages_ma)
messages.set('ka', messages_ka)

/**
 * Helper utility to provide support for i18n.
 */
export class I18NHelper {
  /**
   * Get default messages to React Intl.
   */
  public static getMessages() {
    const defaultLanguageCode: string = LocaleHelper.getUserLanguageCode()
    if (defaultLanguageCode && messages.has(defaultLanguageCode)) {
      return messages.get(defaultLanguageCode)
    }
    console.log(
      'fallback with default language..',
      LocaleHelper.defaultLanguageCode()
    )
    return messages.get(LocaleHelper.defaultLanguageCode())
  }

  /**
   * Get i18n messages by user locale..
   */
  public static getMessagesByLanguageCode(languageCode: string) {
    if (languageCode && messages.has(languageCode)) {
      return messages.get(languageCode)
    }
    console.log('fallback with default language..')
    return messages.get(LocaleHelper.defaultLanguageCode())
  }
}
