// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// server: 'https://staging-biosys.gaiaresources.com.au',

export const environment = {
    production: false,
    server: 'https://uat-mksas-api.gaiaresources.com.au',
    apiExtension: '/api/',
    logoutUrl: '/#/login/',
    cookieAuthToken: 'auth_token'
};