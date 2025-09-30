import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogoApi {
  baseUrl = environment.logoProviderApiBaseUrl;

  constructor() {}

  getUrlToLogo(sourceUrl: string) {
    return `${this.baseUrl}${new URL(sourceUrl).hostname}`;
  }
}
