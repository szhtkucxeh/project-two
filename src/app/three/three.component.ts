import { Component, OnInit } from '@angular/core';
import {Subscriber} from 'rxjs';
import {LetmeService} from 'src/app/letme.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  coins: any;
  constructor(private LetmeService:LetmeService) { }

  ngOnInit(): void {
  }
}