import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDays'
})
export class CountDaysPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var differenceInDates = Math.abs( todayWithNoTime -value ) 
    const secondsInDay = 86400; 
    var differenceInDatesSeconds = differenceInDates*0.001;
    var dateCounter = differenceInDatesSeconds/secondsInDay;

    if (dateCounter >= 1 && todayWithNoTime > value ){
      return dateCounter;
    }else{
      return 0;
    }
  }

}


