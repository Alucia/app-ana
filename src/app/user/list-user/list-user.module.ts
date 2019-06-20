import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user.component';
import { ListUserRoutingModule } from './list-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListUserRoutingModule,
  ],
  declarations: [ListUserComponent],
  exports: [ListUserComponent]
})
export class ListUserModule { }
