import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users:any;
  field:any;
  
  constructor( private service:UserRegistrationService) { }


  public deleteUser(userId:number){
   let resp= this.service.deleteUser(userId);
   resp.subscribe((data)=>this.users=data);
  }

  public findUserByField(field:String){
    let resp= this.service.getUserByField(field);
    resp.subscribe((data)=>this.users=data);
   }

  
  ngOnInit(): void {

  
    let resp = this.service.getUserSortedByDob();
    resp.subscribe((data)=>this.users=data);

    let resp1 = this.service.getUserSortedByDoj();
    resp1.subscribe((data)=>this.users=data);
  }

}
