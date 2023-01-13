import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from './shared/inmemoryeventdb.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './app.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './navbar/header.component';
import { TopheaderComponent } from './navbar/topheader.component';
import { CartModule } from './cart/cart.module';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './users/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagenotfoundComponent,
    AboutUsComponent,
    ContactusComponent,
    HeaderComponent,
    TopheaderComponent,
    PaymentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialExampleModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    NgbModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
