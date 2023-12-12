import { GalleriaModule } from 'primeng/galleria';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
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
import { ImgUploadComponent } from './components/img-upload/img-upload.component';

import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'primeng/fileupload';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CampingBoxComponent } from './components/camping-box/camping-box.component';
import { ModalComponent } from './components/modal/modal.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CampingRulesComponent } from './views/rules-politics/camping-rules/camping-rules.component';
import { CampingPoliticsComponent } from './views/rules-politics/camping-politics/camping-politics.component';
import { MotorReservaModule } from './motor-reserva/motor-reserva.module';
import { AppAdminModule } from './motor-reserva/layout/app.admin.module';

import { LoadingModule } from './components/loading/loading.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MatSelectModule } from '@angular/material/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CampingSearchComponent } from './views/camping-search/camping-search.component';
import { DataViewModule } from 'primeng/dataview';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';

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
    ImgUploadComponent,
    SidebarComponent,
    CampingBoxComponent,
    CampingRulesComponent,
    CampingPoliticsComponent,
    ModalComponent,
    CampingSearchComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
    CommonModule,
    // FileDemoComponent,
    FileUploadModule,
    TieredMenuModule,
    MotorReservaModule,
    AppAdminModule,
    ToastModule,
    ButtonModule,
    LoadingModule,
    GalleriaModule,
    CarouselModule,
    CalendarModule,
    ChipModule,
    DropdownModule,
    MatSelectModule,
    SelectButtonModule,
    DialogModule,
    DataViewModule,
    SkeletonModule,
    SliderModule,
    RatingModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, MessageService],
})
export class AppModule {}
