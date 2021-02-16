import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
i:number;
fam : any;

buttonDisabled=false;
  constructor() { 
this.i=1;
this.fam =[{

  names: 'tct',
  eig: 12,},{
  names: 'hartk',
  eig: 66
}];
  }
  ngOnInit(): void {
  }
  onUserKlik():void{ 
     
    if (this.i>5) {
        this.buttonDisabled = true;
    }
  }
}


