import { UserService } from './user/user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {

    // cada vez que el usuario se loguee o desloguee
    // el observable va a a emitir un nuevo valor
    // con tal de volver donde estaba antes de loguearse
    auth.user$.subscribe(user => {
      if (!user) return;

      userService.save(user);
      
      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;
      
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
