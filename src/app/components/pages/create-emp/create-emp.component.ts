import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  Createemp?:FormGroup;

  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.Createemp=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid:['',Validators.required]
    })
  }

}
