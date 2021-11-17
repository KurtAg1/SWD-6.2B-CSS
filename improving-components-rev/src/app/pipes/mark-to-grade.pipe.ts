import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'markToGrade'
})
export class MarkToGradePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        if(value < 50){
            return "Fail";
        }
        else if(value <= 60){
            return "Pass";
        }
        else if(value < 80){
            return "Merit";
        }
        else{
            return "Distinction";
        }
    }
    
}