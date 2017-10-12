import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public items: Array<any> = [];
public itemRef: firebase.database.Reference = firebase.database().ref('/items');
  constructor(public navCtrl: NavController) {

  }

ionViewDidLoad() {
  this.itemRef.on('value', itemSnapshot => {
    // Here we'll work with the list
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      return false;
    });
  });
}

openAddItem() {
	this.navCtrl.push('AddItemPage');
}
}