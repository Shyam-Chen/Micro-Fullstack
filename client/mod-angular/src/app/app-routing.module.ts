declare const window: any;
import { NgModule } from '@angular/core';
import { Location, APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    Location,
    { provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/angular9' : '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
