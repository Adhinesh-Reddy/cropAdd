import { getUserLocale } from 'get-user-locale'

/**
 * Utility helper to handle user locale.
 *
 */
export class LocaleHelper {
  /**
   * Default language code set to en i.e. English.
   */
  public static defaultLanguageCode(): string {
    return 'en'
  }

  /**
   * Returns default user locale from browser settings.
   */
  public static getUserLocale(): string {
    const userLocale = getUserLocale()

    return userLocale
  }

  /**
   * Returns default user locale without country code from browser settings.
   */
  public static getUserLanguageCode(): string {
    const userLocale = getUserLocale()
    if (userLocale) {
      return userLocale.split(/-|_/)[0]
    }
    console.log('fall back to default language.')
    return LocaleHelper.defaultLanguageCode()
  }
}
