import 'i18next';

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface CustomTypeOptions {
    returnNull: false;
  }
}
