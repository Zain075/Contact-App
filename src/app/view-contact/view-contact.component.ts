import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  groupId:string=''// to hold the group Id of the contact
  contactId:string=''// to hold the id of the contact
  contact:any=[]// to hold all the information
  groupName:string=''// to hold the group name of the contact
    constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);//Id: "1"  object
    console.log(data.Id);//1
    this.contactId=data.Id;
    // to get details of particular contact
    this.api.viewContactDetail(this.contactId).subscribe((result:any)=>{
      console.log(result);// contact details - object
      this.contact=result; 
      this.groupId=result.GroupId 
     this.api.getGroupName(this.groupId).subscribe((data:any)=>{
      console.log(data);
      this.groupName=data.name

     })
    })
    
   })
  }
}
