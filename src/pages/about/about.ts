import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    Camera
  ]


})
export class AboutPage {
  img = "";

  constructor(public navCtrl: NavController, private camera: Camera) {
  }
  tirarFoto() {
    console.log("entrou")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }


    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      this.img = 'data:image/jpeg;base64,' + imageData;
      console.log(this.img)
    }, (err) => {
      // Handle error
    });
  }
}



