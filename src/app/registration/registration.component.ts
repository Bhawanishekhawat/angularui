import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User=new User("","",new Date,new Date,0,"","","");
  message:any;
  messages: any ;
  exform:FormGroup;
  
  constructor( private service : UserRegistrationService) { }

  ngOnInit(): void {

    this.exform= new FormGroup({

      'userName' : new FormControl('', Validators.required),
      'surName': new FormControl('', Validators.required),
      'dateOfJoining' : new FormControl('', Validators.required),
      'dateOfBirth' : new FormControl('', Validators.required),
      'mobileNo' : new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      'email' : new FormControl('', [Validators.required,Validators.email]),
      'city' : new FormControl('', Validators.required),
      'state' : new FormControl('', Validators.required)
    })

    }
  get userName(){return this.exform.get('userName')}
  get surName(){return this.exform.get('surName')}
  get dateOfJoining(){return this.exform.get('dateOfJoining')}
  get dateOfBirth(){return this.exform.get('dateOfBirth')}
  get mobileNo(){return this.exform.get('mobileNo')}
  get email(){return this.exform.get('email')}
  get city(){return this.exform.get('city')}
  get state(){return this.exform.get('state')}

  public registerNow(){
   let resp =  this.service.doRegistration(this.user);
    resp.subscribe((data: any)=>{

      this.messages =data.userName + ' : you have been successfully registered';      
      this.message=data
       alert(': you have been successfully registered')
    }
      ) , error => {
      alert('Sorry Somethine went wrong')
    };
    
    
  }
  
}
