import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GetAllFoodItemsService } from './services/get-all-food-items.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CartService } from './services/cart.service';
import { SelectedFoodPageComponent } from './components/selected-food-page/selected-food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidenavComponent,
    BreakfastComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    SelectedFoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    RatingModule,
    FormsModule
  ],
  providers: [GetAllFoodItemsService, AuthService, NotificationService, AuthGuard, CartService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
