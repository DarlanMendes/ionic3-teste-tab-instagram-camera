import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraProvider } from '../../providers/camera/camera';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public CameraProvider:CameraProvider) {

  }
  fotoPerfil(){
    this.CameraProvider.FazerFoto();
  }

}
