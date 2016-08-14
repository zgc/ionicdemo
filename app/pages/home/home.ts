import {Component} from '@angular/core';
import {NavController, Loading, Alert, Toast} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public user = {
    username: 'zgc',
    password: ''
  }

  constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  login() {
    if (this.user.username == '' || this.user.username.length <= 3) {
      // let alertUserNameError = Alert.create({
      //   title: "Ionic Demo",
      //   subTitle: "输入的用户名格式不正确！",
      //   buttons: ["OK"]
      // });
      // this.navCtrl.present(alertUserNameError);

      let toast = Toast.create({
        message: "输入的用户名格式不正确！",
        duration: 2000
      });
      this.navCtrl.present(toast);
    } else {
      console.log(this.user.username);
      let loading = Loading.create({
        content: "Please wait...",
        duration: 3000
        // dismissOnPageChange: true
      });
      this.navCtrl.present(loading);
      setTimeout(() => {
        loading.dismiss();
      }, 3000);
    }
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
