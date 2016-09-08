import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactDetails} from "./contactdetails";

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

  public contacts = [{
    contactid: 1,
    contactname: "test1",
    contacttext: "t1"
  }, {
    contactid: 2,
    contactname: "test2",
    contacttext: "t2"
  }, {
    contactid: 3,
    contactname: "test3",
    contacttext: "t3"
  }, {
    contactid: 4,
    contactname: "test4",
    contacttext: "t4"
  }, {
    contactid: 5,
    contactname: "test5",
    contacttext: "t5"
  }]

  constructor(private navCtrl: NavController) {
  }

  onPageWillEnter() {
    //在这里可以做页面初始化的一些事情
    console.log("contact: page will enter");
  }

  onPageDidEnter() {
    console.log("contact: page did enter");
  }

  itemClick(event, contact) {
    // alert(contact.contactname);
    this.navCtrl.push(ContactDetails, {item: contact});
  }

  removeConnection(contact) {
    for (var i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i] == contact) {
        this.contacts.splice(i, 1)
      }
      console.log("request api: " + contact.contactid + " removed!");
    }
  }
}
