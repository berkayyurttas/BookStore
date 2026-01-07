export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://localhost:44388/',  // BURASI 44388 OLMALI
    redirectUri: 'http://localhost:4200/',
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    showDebugInformation: true,
  },
  apis: {
    default: {
      url: 'http://localhost:44388',     // BURASI 44388 OLMALI
      rootNamespace: 'Acme.BookStore',
    },
  },
};