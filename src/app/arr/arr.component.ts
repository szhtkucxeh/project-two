import { Component, OnInit } from '@angular/core';
import {LetmeService} from 'src/app/letme.service';
import { from } from 'rxjs';
import { CardModel } from '../modelss/models';


@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.css']
})


export class ArrComponent implements OnInit {
  coins: any;
 

  constructor(private LetmeService:LetmeService) { }


  ngOnInit(): void {
      this.LetmeService.get('').subscribe((coinsdata: any)=>{
      console.log(coinsdata);
      this.coins=coinsdata
    })
        
      
    
  }
}