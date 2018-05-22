import moment from 'moment';
import I18n from 'react-native-i18n';
import {LOCALE_DEFAULT} from 'react-native-dotenv';

import en from './ru.json';
import ru from './ru.json';
import ua from './ua.json';

I18n.fallbacks = true;
I18n.defaultLocale = LOCALE_DEFAULT;
moment.locale(I18n.defaultLocale);
// Define the supported translations
I18n.translations = {
    ru,
    ua,
    en
};

export function translate(name, params = {}) {
    return I18n.t(name, params);
}

export default I18n;
