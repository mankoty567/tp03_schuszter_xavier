import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  UserCreationComponent,
  PhonePipe,
} from './user-creation/user-creation.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserCreationComponent,
    CatalogPageComponent,

    PhonePipe,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, UserCreationComponent],
})
export class AppModule {}
