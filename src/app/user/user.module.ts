import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateUserComponent]
})
export class UserModule {
  constructor(@Optional() @SkipSelf() parentModule: UserModule) {
    if (parentModule) {
      throw new Error(
        'UserModule is already loaded. Import it in the parent only');
    }
  }

  static forRoot(config: User): ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: [
        {provide: User, useValue: config }
      ]
    };
  }
}
