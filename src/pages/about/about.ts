import { Component } from '@angular/core';
import { CameraProvider } from '../../providers/camera/camera';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:  [Camera, CameraProvider
  ]


})
export class AboutPage {
  //img="";
  constructor(public navCtrl: NavController,public CameraProvider:CameraProvider) {
    
  }
  tirarFoto(){
  this.CameraProvider.FazerFoto();
    
    
   //this.img= this.CameraProvider.foto
  }
  
  
 
}



