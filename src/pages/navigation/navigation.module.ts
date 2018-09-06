import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationPage } from './navigation';

@NgModule({
  declarations: [
    NavigationPage, // imported from ./navigation, aka "navigation.html"
  ],
  imports: [
    IonicPageModule.forChild(NavigationPage)
  ],
})
export class NavigationPageModule {}
