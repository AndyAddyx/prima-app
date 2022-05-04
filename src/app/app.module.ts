import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TitoloComponent } from './components/titolo.component';
import { SottotitoloComponent } from './components/sottotitolo.component';
import { ParComponent } from './components/par.component';
import { ProvaComponent } from './components/prova.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TitoloComponent,
    SottotitoloComponent,
    ParComponent,
    ProvaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
