import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationErrors: string[] = [];
  user: User = new User();

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  onSubmit(user: User): void {
    this.auth.register(user).subscribe(
      createdUser => {
        console.log('created', createdUser);

        this.router.navigateByUrl('books');
      },
      error => {
        console.log('error', error);

        this.registrationErrors = error.error;
      }
    );
  }
}
