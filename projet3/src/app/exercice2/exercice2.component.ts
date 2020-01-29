import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
	@ViewChild('newvalue') public el: ElementRef; 
  	valeurinput: string = '';

  	constructor() { }

  ngOnInit() {
  }

  modifyValue(){
  	console.log(this.el.nativeElement.value);
	this.valeurinput=this.el.nativeElement.value
  }
}
