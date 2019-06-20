import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateUserRoutingModule,
  ],
  declarations: [CreateUserComponent],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
