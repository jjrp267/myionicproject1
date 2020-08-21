import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {

  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;

  constructor(public actionSheetController: ActionSheetController,
              public formBuilder: FormBuilder) { }

  ngOnInit() {

      this.ionicForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        dob: [this.defaultDate],
        mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
      })
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log('estos son los datos del formulario',this.ionicForm.value);
      alert('estos son los datos del formulario'+JSON.stringify(this.ionicForm.value));
    }
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  callModal(){

    this.presentActionSheet();
  }

}
