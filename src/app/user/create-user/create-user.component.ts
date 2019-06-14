import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {

  showError = false;
  users: User[];
  user: User;

  constructor(
    private userService: UserService,
  ) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  nameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);
  emailControl =  new FormControl('');

  userForm: FormGroup = new FormGroup({
    nameControl: this.nameControl,
    lastNameControl: this.lastNameControl,
    emailControl: this.emailControl,
  });

  save() {
    console.log('save', this.userForm.valid);
    if (this.userForm.valid) {
      const name = this.nameControl.value;
      const lastName = this.lastNameControl.value;
      const email = this.emailControl.value;

      this.user = {id: 42, name: (name), lastName: (lastName), email: (email)};
      this.users.push(this.user);
      console.log('users', this.users);
    } else {
      this.showError = true;
    }
  }

}
