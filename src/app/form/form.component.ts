import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  simpleForm = new FormGroup ({
    username: new FormControl,
    password: new FormControl
  })

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(data:any){

    console.log(data);
    
  }

  collectdata(data:any){
    console.log(data);
    
  }

}
