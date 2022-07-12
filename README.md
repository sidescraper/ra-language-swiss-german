# ra-language-swiss-german
Swiss-German translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST services.


## Installation

```sh
npm install --save https://github.com/sidescraper/ra-language-swiss-german
```

## Usage

```js
import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from 'ra-language-english';
import ch from 'ra-language-swiss-german';

const translations = { en, ch };
export const i18nProvider = polyglotI18nProvider(locale => translations[locale], 'ch');

<Admin
  i18nProvider={i18nProvider}
>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).
