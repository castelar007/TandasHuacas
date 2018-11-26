import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HTTP) {
    console.log('Hello HttpProvider Provider');
  }
  login(){
    return new Promise((resolve, reject) => {
      //http request
      // setTimeout(() => {
        resolve('Http Provider Response');
      // }, 3000);
      //error
    });
  }
}
