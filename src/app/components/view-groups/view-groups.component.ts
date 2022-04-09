import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { GroupService } from 'src/app/services/group.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { GroupThread } from 'src/app/models/group-thread';

@Component({
  selector: 'app-view-groups',
  templateUrl: './view-groups.component.html',
  styleUrls: ['./view-groups.component.css']
})
export class ViewGroupsComponent implements OnInit {
  title: string;
  groups: GroupThread[];
  errMsg:string;
  //GroupService: any[];
  showGroup:boolean = false;

  constructor(public groupService:GroupService) { }

  ngOnInit(): void
  {
    this.title = 'groups';
    this.groupService.getAllGroups().subscribe((data)=>{ this.groups = data;}, err => this.errMsg = err );
  }
  openGroup(index:number)
  {
    console.log("Opening Group of index i=" + index);
    this.groupService.setCurrentGroup(this.groups[index]);
    this.showGroup = true;
  }
    
}
function searchGroup(searchGroup: any) {
  throw new Error('Function not implemented.');
}

 