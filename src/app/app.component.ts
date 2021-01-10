import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 msg1:string ="welcome";
 msg2:string ="to";
 msg3:string ="Angular11";




     var_one:string = "Welcome to Andhra";
     var_two:string ="Angular12";
     var_three:string ="kokkandla malli";  
     var_four:number =100.123454455;
     var_five:any={"key1":"hello1","key2":"hello2","key3":"hello3"};
    var_six:Date=new Date();
    var_seven:number[] =[10,20,30,40,50,60,70,80,0,100]
 
          var_eight: number=100;
      var_ten:any;
      constructor(){
        this.var_ten=new Promise ((resolve,reject)=>{
                 setTimeout(() => {
                   resolve("Brothers");
                 }, 5000);
        })
      };


       my_var:string="hello"; 
    
        }
        
             
           
