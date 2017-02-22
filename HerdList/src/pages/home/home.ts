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
          name: 'numberOfCalves',
          placeholder: "Number Of Calves"
        },
        {
          name: 'dob',
          placeholder: "Date Of Birth"
        },
        {
          name: 'breeds',
          placeholder: "Breed"
        },
        {
          name: 'comp',
          placeholder: "Complications"
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
                numberOfCalves: data.numberOfCalves,
              dob: data.dob,
              breeds: data.breeds,
              comp: data.comp

            })
          }
        }
      ]
    });

    prompt.present();
  }
  editHerd(herd):void {
    let prompt = this.alertCtrl.create({
      title: 'Edit Herd',
      message: 'Edit the Herd Information',
      inputs:[
        {
          name: 'tagNumber',
          placeholder: herd.tagNumber
        },
        {
          name: 'numberOfCalves',
          placeholder: herd.numberOfCalves
        },
        {
          name: 'dob',
          placeholder: herd.dob
        },
        {
          name: 'breeds',
          placeholder: herd.breed
        },
        {
          name: 'comp',
          placeholder: herd.comp
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
            let newTagNumber:String = herd.tagNumber;
            let newNumberOfCalves:String = herd.numberOfCalves;
            let newdob:String = herd.dob;
            let newBreeds:String = herd.breeds;
            let newComp:String = herd.comp;

            if(data.tagNumber != ''){
              newTagNumber = data.tagNumber;
            }
            if(data.numberOfCalves != ''){
              newNumberOfCalves = data.numberOfCalves;
            }
            if(data.dob != ''){
              newdob = data.dob;
            }
            if(data.breeds != ''){
              newBreeds = data.breeds;
            }
            if(data.comp != ''){
              newComp = data.comp;
            }

            this.herds.update(herd.$key,{
              tagNumber: newTagNumber,
              numberOfCalves: newNumberOfCalves,
              dob: newdob,
              breeds: newBreeds,
              comp: newComp

            })
          }
        }
      ]
    });

    prompt.present();
  }
  deleteHerd(herdID):void {
    let prompt = this.alertCtrl.create({
      title: 'Delete Herd Info:',
      message: 'Delete Herd Information',

      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Delete Info",
          handler: data => {
            this.herds.remove(herdID);
          }
        }
      ]
    });

    prompt.present();
  }

}
