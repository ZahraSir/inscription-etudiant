import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inscription} from '../model/inscription.model';
import {Etudiant} from '../model/etudiant.model';


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private _http: HttpClient) { }
  private _inscription: Inscription;
  private _inscriptions: Array<Inscription>;
  private _etudiant: Etudiant;
  private _etudiants: Array<Etudiant>;
  private _urlinscription =  'http://localhost:8090/examen-api/inscriptions/';
  private _urletudiant =  'http://localhost:8090/examen-api/etudiants/';

  get etudiant(): Etudiant {
    if (this._etudiant == null) {
      this._etudiant = new Etudiant();
    }
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  get etudiants(): Array<Etudiant> {
    if (this._etudiants == null) {
      this._etudiants = new Array<Etudiant>();
    }
    return this._etudiants;
  }

  set etudiants(value: Array<Etudiant>) {
    this._etudiants = value;
  }

  get inscription(): Inscription {
    if (this._inscription == null) {
    this._inscription = new Inscription();
  }
    return this._inscription;
  }

  set inscription(value: Inscription) {
    this._inscription = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  get inscriptions(): Array<Inscription> {
    if (this._inscriptions == null) {
      this._inscriptions = new Array<Inscription>();
    }
    return this._inscriptions;
  }

  set inscriptions(value: Array<Inscription>) {
    this._inscriptions = value;
  }

  get urletudiant(): string {
    return this._urletudiant;
  }

  set urletudiant(value: string) {
    this._urletudiant = value;
  }

  get urlinscription(): string {
    return this._urlinscription;
  }

  set urlinscription(value: string) {
    this._urlinscription = value;
  }

  public save() {
    console.log('haa lien ' + this._urlinscription);
    console.log('haa personnel ' + this.inscription);

    this.http.post<number>(this._urlinscription, this.inscription).subscribe(
      data => {
        if (data > 0) {
          this.inscriptions.push(this.clonePersonnel(this.inscription));
          this.inscription = null;
        }
      }, error => {
        console.log(error);
      }
    );
  }
  private clonePersonnel(inscription: Inscription) {
    const myClone = new Inscription();
    myClone.cne = inscription.cne ;
    myClone.dateNaissance = inscription.dateNaissance  ;
    myClone.filiere = inscription.filiere ;
    myClone.lieuNaissance = inscription.lieuNaissance  ;
    myClone.mail = inscription.mail;
    myClone.telephone = inscription.telephone;
    myClone.nationalite = inscription.nationalite;
    myClone.nom = inscription.nom;
    myClone.prenom = inscription.prenom;
    myClone.sexe = inscription.sexe;
    myClone.serieBac = inscription.serieBac;
    return myClone;
  }
  public findInscriptionByCne(inscription: Inscription) {
    this.http.get<Inscription>( this._urlinscription + 'cne/' + inscription.cne).subscribe(
      data => {
        this.inscription = data;
      }
    );
  }

}
