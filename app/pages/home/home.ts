import {Component} from '@angular/core';
import {
  NavController, Loading, Toast, Modal, ViewController
} from 'ionic-angular';
import {Register} from '../home/register';
import {ImagePicker} from "ionic-native";
import {Http} from "@angular/http";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public user = {
    username: '',
    password: '',
    headface: 'images/4.jpg'
  }
  private local;

  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private http: Http) {
  }

  login() {
    if (this.user.username == '') { // || this.user.username.length <= 3
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
        spinner: "dots",
        duration: 3000
        // dismissOnPageChange: true
      });
      this.navCtrl.present(loading);
      // setTimeout(() => {
      //   loading.dismiss();
      // }, 3000);
      // if (this.user.password == '1') {
      //   localStorage.setItem('username', this.user.username);
      //   localStorage.setItem('Logined', 'true');
      //   setTimeout(() => {
      //     this.viewCtrl.dismiss(this.user.username);
      //     loading.dismiss();
      //   }, 1000);
      // } else {
      //   let toast = Toast.create({
      //     message: "登录失败！",
      //     duration: 2000
      //   });
      //   this.navCtrl.present(toast);
      // }
      debugger;
      this.http.get("http://rap.taobao.org/mockjs/7418/login?username=" + this.user.username + "&password=" + this.user.password).subscribe(data => {
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('Logined', 'true');
        loading.dismiss();
        this.viewCtrl.dismiss(this.user.username);
      }, error => {
        let toast = Toast.create({
          message: "登录失败！",
          duration: 2000
        });
        this.navCtrl.present(toast);
      });
    }
  }

  openRegisterPage() {
    var modal = Modal.create(Register);
    this.navCtrl.present(modal);
  }

  uploadImage() {
    ImagePicker.getPictures({}).then((result) => {
      for (var i = 0; i < result.length; i++) {
        this.user.headface = result[i];
      }
    }, (err) => {
      alert(err);
    });
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
