import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(private navCtrl: NavController) {
  }

  onPageWillEnter() {
    //在这里可以做页面初始化的一些事情
    console.log("contact: page will enter");
  }

  onPageDidEnter() {
    console.log("contact: page did enter");
  }
}
