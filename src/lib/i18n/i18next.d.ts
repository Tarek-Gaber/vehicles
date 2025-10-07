import 'i18next';
import { resources } from './messages';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof resources['en'];
  }
}
