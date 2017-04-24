import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  herds: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
      this.herds = angFire.database.list('/HerdLists');
  }

  addList():void {
    let prompt = this.alertCtrl.create({
        title: 'Herd Info:',
      message: 'Enter Herd Information',
      inputs:[
        {
          name: 'tagNumber',
          placeholder: "Tag Number"
        },
        {
          name: 'numberOfCalfs',
          placeholder: "Number Of Calfs"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Save",
          handler: data => {
            this.herds.push({
              tagNumber: data.tagNumber,
                numberOfCalfs: data.numberOfCalfs
            })
          }
        }
      ]
    });

    prompt.present();
  }

}
