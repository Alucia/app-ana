import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserModule } from './create-user/create-user.module';
import { ListUserModule } from './list-user/list-user.module';
import { User } from './user.service';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CreateUserModule,
    ListUserModule,
  ],
  declarations: [UserComponent],
  exports: [UserComponent]
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
