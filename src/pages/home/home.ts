import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items=[];
  constructor(public navCtrl: NavController) {
   for (let index = 0; index < 10; index++) {
     let element={
       user:'usuario'+ index,
       foto:'https://picsum.photos/200/200'+index,
       texto:'Bem vindo'+index,


     }
    this.items.push(element)
   }
    
  }

}
