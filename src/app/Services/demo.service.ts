import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient:HttpClient) { }
  //1-URL ??
  private URL_DB = "https://jsonplaceholder.typicode.com/users";
  //2-Methods
  GetAllUsers(){
    return this.myClient.get(this.URL_DB);
  }

  GetUserByID(id:any){
    return this.myClient.get(this.URL_DB+"/"+id);
  }

  AddNewUser(newUser:any){
    return this.myClient.post(this.URL_DB, newUser)
  }

  UpdateUserByID(id:any,UpdatedUser:any){
    return this.myClient.put(this.URL_DB+"/"+id,UpdatedUser);
  }
}


// @HTTPPOST
// GetAllUsers(){
//   // return db.users
// }
// @HttpPUT
// UpdateUser(id,data){
//   //var oldUser = find(id)?? ==>
//   // oldUser.name = data.name;
//   // .....
// }


