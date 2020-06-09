import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { UsersService } from './users/users.service';



@NgModule({
  // remove if you use forRoot()
  providers: [UsersService],
})
export class ServiceModule {

  constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
    if (parentModule) {
      throw new Error('Core module already provided! Please provide it only in the App Module!');
    }
  }

  /*  uncomment if you need application light instance.
      This way you can import the ServiceModule in many other modules.

  static forRoot(): ModuleWithProviders {
      return {
        ngModule: ServiceModule,
        providers: [UsersService]
      };
    }
  */

}
