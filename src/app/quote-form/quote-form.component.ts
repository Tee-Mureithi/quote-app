import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { QuotePhrase } from '../quote-phrase';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new QuotePhrase (0,"","","",0,0,new Date());
 

  @Output() sendQuote =new EventEmitter <QuotePhrase> ();

  postQuote(){
    this.sendQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
