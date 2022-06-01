
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';


/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {
  foto=""
  constructor(private camera:Camera){}
  FazerFoto(){
    
    console.log("entrou")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true
    }


    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
       this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
   
  }
  
  }
