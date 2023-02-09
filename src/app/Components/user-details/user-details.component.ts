import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  ID=0;
 
    
  user:any;
  constructor(myService:DemoService,myActivated:ActivatedRoute){
    // console.log(myService.GetAllUsers())
    // myService.GetAllUsers().subscribe(
    //   (data)=>{console.log(data)},
    //   (err)=>{console.log(err)}
    //   )
    this.ID = myActivated.snapshot.params["id"];
  
    myService.GetUserByID(this.ID).subscribe(
        {
          next:(data)=>{
            //console.log(data)
            this.user = data;
            console.log(data)
          },
          error:(err)=>{console.log(err)}
        }
      )
  }
}
