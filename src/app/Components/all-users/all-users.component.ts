import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users:any;
  constructor(myService:DemoService){
    // console.log(myService.GetAllUsers())
    // myService.GetAllUsers().subscribe(
    //   (data)=>{console.log(data)},
    //   (err)=>{console.log(err)}
    //   )

    myService.GetAllUsers().subscribe(
        {
          next:(data)=>{
            //console.log(data)
            this.users = data;
          },
          error:(err)=>{console.log(err)}
        }
      )
  }

}
