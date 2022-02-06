export class QuotePhrase {
    public showDetails: boolean;
    constructor(public id:number, public saying : string, public author : string , public submitter : string , public upvote : number , public downvote: number , public date :Date){
        this.showDetails=false;
    }
}
