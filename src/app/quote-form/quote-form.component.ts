import { Component, OnInit } from '@angular/core';
import { QuotePhrase } from '../quote-phrase';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new QuotePhrase (0,"","","",0,0,new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
