import { ButtonOutlineComponent } from './components/button-outline/btn-outline';
import { ButtonFilledComponent } from './components/button-filled/btn-filled';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormatPipesModule } from './pipes/format-pipes'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ButtonFilledComponent,
    ButtonOutlineComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormatPipesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
