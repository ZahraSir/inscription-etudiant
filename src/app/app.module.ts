import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantListComponent } from './Etudiant/etudiant-list/etudiant-list.component';
import { EtudiantCreateComponent } from './Etudiant/etudiant-create/etudiant-create.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantListComponent,
    EtudiantCreateComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [InscriptionComponent]
})
export class AppModule { }
