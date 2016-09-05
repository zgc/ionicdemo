import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  templateUrl: 'build/pages/home/register.html'
})

export class Register {

  constructor(private viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
