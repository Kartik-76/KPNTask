import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ApplicationlistComponent } from './core/components/applicationlist/applicationlist.component';
import { NewemployeeapplicationComponent } from './core/components/newemployeeapplication/newemployeeapplication.component';
import { FormsModule } from '@angular/forms';
import { UpdateemployeeComponent } from './core/components/updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ApplicationlistComponent,
    NewemployeeapplicationComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
