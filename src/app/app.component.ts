import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectf5';

  obtaindata(demoForm:any){
    console.log(demoForm);
  }

  collectvalue(data:any)
  {
    console.log(data);
    
  }
  demodata(data:any){
    console.log(data)
  }
  policydata(data:any){
    console.log(data);
    
  }
}

