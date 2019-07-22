import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ChallengeModule } from './challenge/challenge.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ChallengeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
