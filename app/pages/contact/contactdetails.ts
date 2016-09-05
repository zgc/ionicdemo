import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'build/pages/contact/contactdetails.html'
})

export class ContactDetails {

  private item;

  constructor(private navParams: NavParams) {
    this.item = navParams.data.item;
  }
}
