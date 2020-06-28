import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-register',
  templateUrl: './profile-register.component.html',
  styleUrls: ['./profile-register.component.scss']
})
export class ProfileRegisterComponent implements OnInit {

  profile: any = {
    name: '',
    age: '',
    movie: '',
    genre: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.profile.name = form.value.name;
    this.profile.age = form.value.age;
    this.profile.movie = form.value.movie;
    this.profile.genre = form.value.genre;

    window.console.log(this.profile);
  }

}
