import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  templateUrl: 'build/pages/home/register.html'
})

export class Register {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
