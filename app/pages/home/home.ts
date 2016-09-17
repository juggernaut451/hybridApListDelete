import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private items;
  constructor(public navCtrl: NavController) {
    this.items = [
      {title: 'item1'},
      {title: 'item2'},
      {title: 'item3'},
      {title: 'item4'},
      {title: 'item5'},
      {title: 'item6'},
      {title: 'item7'},
    ];
  }

  removeItem(item){
    for(var i=0; i < this.items.length; i++){
      if (this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
  }
}
