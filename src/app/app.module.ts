import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Directive } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note/add-note';
import { NavigationPage } from '../pages/navigation/navigation';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/view-note/view-note';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNotePage,
    NavigationPage,
    ViewNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // any pages we want to visit on our app
    MyApp,
    HomePage,
    AddNotePage,
    NavigationPage,
    ViewNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService
  ]
})
export class AppModule {}
