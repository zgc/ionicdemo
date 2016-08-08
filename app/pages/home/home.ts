import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

  onPageLoaded() {
    console.log("home: page loaded");
  }

  onPageWillEnter() {
    //在这里可以做页面初始化的一些事情
    console.log("home: page will enter");
  }

  onPageDidEnter() {
    console.log("home: page did enter");
  }

  onPageWillLeave() {
    console.log("home: page will leave");
  }

  onPageDidLeave() {
    console.log("home: page did leave");
  }

  onPageWillUnload() {
    //从 DOM 中移除的时候执行的生命周期。
    console.log("home: page will unload");
  }

  onPageDidUnload() {
    // DOM 中移除执行完成的时候。
    console.log("home: page did unload");
  }
}
