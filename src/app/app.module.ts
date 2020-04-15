import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantListComponent } from './Etudiant/etudiant-list/etudiant-list.component';
import { EtudiantCreateComponent } from './Etudiant/etudiant-create/etudiant-create.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionListComponent } from './Inscription/inscription-list/inscription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantListComponent,
    EtudiantCreateComponent,
    InscriptionComponent,
    InscriptionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
