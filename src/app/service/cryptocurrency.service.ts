import { Injectable } from '@angular/core';
import { Credentials } from '../Credentials/credentials';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
const CryptoJS = require('crypto-js/hmac-sha256');

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyService {

  credentials: Credentials;
  header: string;
  payload: string;
  digestValue: string;
  dateTime = Date.now();
  timestamp = Math.floor(this.dateTime / 1000);


  constructor() { }

  HMACgenerator() {
    this.credentials = new Credentials();
    this.payload = this.timestamp + '.' + this.credentials.getPublicKey();
    this.digestValue = CryptoJS(this.payload, this.credentials.getSecretKey()).toString();
  }

  createHeader() {
    this.HMACgenerator();
    this.header = this.payload + '.' + this.digestValue;
    console.log(this.header);
  }



}
