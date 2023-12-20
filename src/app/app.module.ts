import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { GalleriaModule } from 'primeng/galleria';
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
import { CampingCheckoutComponent } from './views/camping-checkout/camping-checkout.component';
import { CampingsComponent } from './views/campings/campings.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { HomeComponent } from './views/home/home.component';
import { HostessComponent } from './views/hostess/hostess.component';
import { LoginComponent } from './views/login/login.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CaroselComponent } from './components/carosel/carosel.component';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { LoadingSkeletonComponent } from './components/loading.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { LeadsComponent } from './views/leads/leads.component';
import { PostsComponent } from './views/posts/posts.component';

import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'primeng/fileupload';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CampingBoxComponent } from './components/camping-box/camping-box.component';
import { ModalComponent } from './components/modal/modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppAdminModule } from './motor-reserva/layout/app.admin.module';
import { MotorReservaModule } from './motor-reserva/motor-reserva.module';
import { CampingPoliticsComponent } from './views/rules-politics/camping-politics/camping-politics.component';
import { CampingRulesComponent } from './views/rules-politics/camping-rules/camping-rules.component';

import { MatSelectModule } from '@angular/material/select';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';
import { LoadingModule } from './components/loading/loading.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { CampingSearchComponent } from './views/camping-search/camping-search.component';
import { UserPanelComponent } from './views/user-panel/user-panel.component';
import { ScheduleCheckoutComponent } from './views/schedule-checkout/schedule-checkout.component';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
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
    UserPanelComponent,
    ScheduleCheckoutComponent,
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
    InputNumberModule,
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
    PanelMenuModule,
    CardModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, MessageService],
})
export class AppModule {}
