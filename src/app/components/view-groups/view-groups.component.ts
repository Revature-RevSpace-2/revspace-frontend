import { Component, OnInit } from '@angular/core';
import { LoginService } from 'RevSpaceWebApp/src/app/services/login.service';
import { GroupService } from 'src/app/services/group.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-view-groups',
  templateUrl: './view-groups.component.html',
  styleUrls: ['./view-groups.component.css']
})
export class ViewGroupsComponent implements OnInit {
  title: string;
  groups: any;
  GroupService: any[];

  constructor(public groupService:GroupService, public loginService:LoginService) { }

  ngOnInit(): void {

    this.title = 'groups';
       this.GroupService=[]
       this.groups = this.groupService[0];
  }
    
}
function searchGroup(searchGroup: any) {
  throw new Error('Function not implemented.');
}

 