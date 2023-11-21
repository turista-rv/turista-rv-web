import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonFilledComponent } from './components/button-filled/btn-filled';
import { ButtonOutlineComponent } from './components/button-outline/btn-outline';
import { CampingShowComponent } from './components/camping-show/camping-show.component';
import { CampingComponent } from './components/camping/camping.component';
import { Interceptor } from './services/app.interceptor.module';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { AboutComponent } from './views/about/about.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { CreateCampingComponent } from './views/create-camping/create-camping.component';
import { CampingsComponent } from './views/campings/campings.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { HomeComponent } from './views/home/home.component';
import { HostessComponent } from './views/hostess/hostess.component';
import { LoginComponent } from './views/login/login.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { CampingCheckoutComponent } from './views/camping-checkout/camping-checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingSkeletonComponent } from './components/loading.component';
import { PostsComponent } from './views/posts/posts.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { LeadsComponent } from './views/leads/leads.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './components/loading/loading.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

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
    CampingComponent,
    CampingsComponent,
    CampingShowComponent,
    CreateCampingComponent,
    CampingCheckoutComponent,
    PostsComponent,
    TitleSectionComponent,
    LeadsComponent,
    CaroselComponent,
    LoadingSkeletonComponent,
    LoadingComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Interceptor,
    CKEditorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
