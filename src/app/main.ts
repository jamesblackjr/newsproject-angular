/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/browser/ambient/es6-shim/index.d.ts"/>

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);
