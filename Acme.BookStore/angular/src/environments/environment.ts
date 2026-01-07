import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'http://localhost:44388/', // Port 44388 yapıldı ve http'ye çekildi
  redirectUri: baseUrl,
  clientId: 'BookStore_App',
  responseType: 'code',
  scope: 'offline_access BookStore',
  requireHttps: false, // Docker üzerinde SSL kurulu olmadığı için false olmalı
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'http://localhost:44388', // Burası da güncellendi
      rootNamespace: 'Acme.BookStore',
    },
    AbpAccountPublic: {
      url: 'http://localhost:44388', // Burası da güncellendi
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;