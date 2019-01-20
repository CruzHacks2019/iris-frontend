// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDLWu_MUM65r8j3lqUhIyj0YBNLFQYcgi4',
    authDomain: 'project-anti-alz.firebaseapp.com',
    databaseURL: 'https://project-anti-alz.firebaseio.com',
    projectId: 'project-anti-alz',
    storageBucket: 'project-anti-alz.appspot.com',
    messagingSenderId: '381046946192'
  },
  apiUrl: 'http://1f757ced.ngrok.io'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
