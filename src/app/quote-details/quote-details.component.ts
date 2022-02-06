import { Quote } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { QuotePhrase } from '../quote-phrase';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input()quote?:QuotePhrase;
  

  constructor() { }

  ngOnInit(): void {
  }

}
