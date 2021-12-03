import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user){
    

    return this.http.post("http://localhost:8081/api/userdata/saveUser",user);
  }

  public getUserSortedByDob(){

    return this.http.get("http://localhost:8081/api/userdata/sortByDob");
  }
  
  public getUserByField(field){

    return this.http.get("http://localhost:8081/api/userdata/findByfield/"+field);
  }
  public getUserSortedByDoj(){

    return this.http.get("http://localhost:8081/api/userdata/sortByDoj");
  }
  public deleteUser(UserId){
    return this.http.get("http://localhost:8081/api/userdata/deleteUser/"+ UserId);
  }
}
