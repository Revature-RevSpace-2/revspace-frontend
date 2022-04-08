import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-view-group-thread',
  templateUrl: './view-group-thread.component.html',
  styleUrls: ['./view-group-thread.component.css']
})
export class ViewGroupThreadComponent implements OnInit {

  title: string;
  groups: any;
  GroupService: any[];


  constructor(public groupService:GroupService) { }

  ngOnInit(): void {
  
  this.title = 'groups';
  this.GroupService=[]
  this.groups = this.groupService[0];
  }
  }
  function searchGroup(searchGroup: any) {
    throw new Error('Function not implemented.');
}


