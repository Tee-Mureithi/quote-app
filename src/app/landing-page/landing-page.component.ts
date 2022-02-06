import { Component, OnInit } from '@angular/core';
import { QuotePhrase } from '../quote-phrase';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  quotes : QuotePhrase[] = [
    new QuotePhrase(1, 'If you want to live a happy life, tie it to a goal, not to people or things','Babe Ruth','Tee-Mureithi',80,4,new Date(2019,0,18)),

    new QuotePhrase(2,'Money and success don’t change people; they merely amplify what is already there.','Will Smith',
    'Habiba Ali',50,2,new Date(2021,3,12)),

    new QuotePhrase(3,'Not how long, but how well you have lived is the main thing.','Alber Einstein','Josh Kamau',30,4,new Date (2021,8,11))

  ]

  // toggleDetails(index:number){
  //   this.quotes?[index].showDetails = !this.quotes?[index].showDetails;
  // }

  liking(i:number){
    this.quotes[i].upvote +=1;
  }

  disLiking(i:any){
    this.quotes[i].downvote +=1;
  }

  deleted(toDelete:boolean,i:number){
    if (toDelete) {
      let yesDelete=confirm("Do you want to delete the quote?")
      if(yesDelete){
        this.quotes.splice(i,1);
    } 
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
