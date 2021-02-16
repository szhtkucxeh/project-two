import { EventEmitter, Input } from '@angular/core';
import { Component, Output, OnInit } from '@angular/core';
import {LetmeService} from 'src/app/letme.service';


@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})

export class fatherComponent implements OnInit {
    @Input() card;
 

    id:any;
    show= false;
    coinsa: any;
    
  constructor(private letmeService:LetmeService) {

  }
  ngOnInit(): void {
  
    
  } 
    
    onUserClick ():void{
      
             this.letmeService.get(this.card.id).subscribe((coinsdata: any)=>{ 
        this.coinsa=coinsdata;

        console.log(coinsdata);

      })
      

      if (! this.show){
        this.show= true;}
      else{this.show= false;}

    
        }}