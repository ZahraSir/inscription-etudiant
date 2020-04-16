import { Component, OnInit } from '@angular/core';
import {InscriptionService} from '../controller/service/inscription.service';
import {Inscription} from '../controller/model/inscription.model';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private inscriptionService: InscriptionService
              ) { }

  get inscription(): Inscription {
    return this.inscriptionService.inscription;
  }
  get inscriptions(): Array<Inscription> {
    return this.inscriptionService.inscriptions;
  }
 ngOnInit() {}

public save() {
    this.inscriptionService.save();
  }

}
