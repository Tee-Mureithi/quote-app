import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuotePhrase } from '../quote-phrase';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input()quote?:QuotePhrase;
 
 @Output()toDelete=new EventEmitter  <boolean> ();

deleteQuote(){
this.toDelete.emit(true)
}
  constructor() { }

  ngOnInit(): void {
  }

}
