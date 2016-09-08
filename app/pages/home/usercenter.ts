import {Component} from '@angular/core';
import {Modal, NavController, Storage, LocalStorage} from "ionic-angular";
import {HomePage} from "./home";

@Component({
  templateUrl: 'build/pages/home/usercenter.html'
})

export class UserCenter {

  public user = {
    username: 'zgc',
    password: '',
    headface: 'images/4.jpg'
  }

  private local;

  constructor(private navCtrl: NavController) {
    if (localStorage.getItem('Logined') == 'true') {
      this.user.headface = 'images/' + localStorage.getItem('username') + '.jpg';
    } else {
      let modal = Modal.create(HomePage);
      modal.onDismiss(data => {
        this.user.headface = 'images/' + data + '.jpg';
      });
      this.navCtrl.present(modal);
    }
  }

  logout() {
    localStorage.clear();
    let modal = Modal.create(HomePage);
    modal.onDismiss(data => {
      this.user.headface = 'images/' + data + '.jpg';
    });
    this.navCtrl.present(modal);
  }
}
