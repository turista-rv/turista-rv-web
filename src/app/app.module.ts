import { Interceptor } from './app.interceptor.module';
import { ButtonOutlineComponent } from './components/button-outline/btn-outline';
import { ButtonFilledComponent } from './components/button-filled/btn-filled';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { AboutComponent } from './views/about/about.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HostessComponent } from './views/hostess/hostess.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ButtonFilledComponent,
    ButtonOutlineComponent,
    HeaderComponent,
    FooterComponent,
    CreateAccountComponent,
    AboutComponent,
    NavbarComponent,
    HostessComponent,
    AdminPanelComponent,
    ResetPasswordComponent,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Interceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
