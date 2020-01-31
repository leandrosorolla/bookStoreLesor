import { AuthService } from 'src/app/servicio/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../model/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
// agregar edicion de imagen
  user: UserInterface ={
    name: '',
    email: '',
     photoUrl: '',
     roles:{}
  }
  public providerId = 'null';

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
       // this.user = user;
       // console.log('USER', user);
      }
    });
  }

}
