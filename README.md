# ra-language-swiss-german
Swiss-German translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST services.


## Installation

```sh
npm install --save ra-language-swiss-german
```

## Usage

```js
import swissgermanMessages from 'ra-language-swiss-german';

const messages = {
    'ch': swissgermanMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="ch" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).
