import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }
  public valeurCompteur:number=0;
    @Output() changementCompteur = new EventEmitter();

  miseAjourCompteur(event){
  	this.valeurCompteur=event.value;
  }


  ngOnInit() {
  }
  

}
