import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Http} from '@angular/http';
import "rxjs/add/operator/map"

import * as _ from './foo';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform, private http: Http) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.http.get('http://www.kuaidi100.com/query?type=shunfeng&postid=667687969479').map(res => res.json()).subscribe(data => {
        _.log(data);
        _.log(data.com)
      });
    });
  }
}

ionicBootstrap(MyApp);
