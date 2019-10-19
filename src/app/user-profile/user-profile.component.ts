import { UserProfile } from './../models/user-profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

UserProfile = {
  name : 'Moignet',
  firstName : 'Antoine',
  age : 34,
  quote : '',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
};

isVisible: boolean = true;

estAffiche: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  disparition() {
    this.isVisible=!this.isVisible
  }

  cacheLaPhoto() {
   this.estAffiche=!this.estAffiche
  }

}
