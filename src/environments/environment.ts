// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  betfair_app_key: 'mV2RjYhVRVtgwWo2',
  betfair_session_key: 'pbjPWujQbHb8qimqDGEXOn5IYMPm1N+AsenK7eRFaEg=',
  /* Using CORS Anywhere (https://github.com/Rob--W/cors-anywhere) to do 3rd party API calls */
  api_url: 'https://cors-anywhere.herokuapp.com/https://api.betfair.com/exchange/betting/rest/v1.0/',
};
