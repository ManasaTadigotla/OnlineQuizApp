export class Question {
    id:number;
    subject:string;
    desc:string;
   options:any=[];
   
    firstoption:string;
    secondoption:string;
    thirdoption:string;
    correctanswer:string;
    isAttempted:boolean;
    isCorrect:boolean;
}
