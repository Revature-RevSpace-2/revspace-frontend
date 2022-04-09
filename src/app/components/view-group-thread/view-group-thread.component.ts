import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GroupThread } from 'src/app/models/group-thread';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-view-group-thread',
  templateUrl: './view-group-thread.component.html',
  styleUrls: ['./view-group-thread.component.css']
})
export class ViewGroupThreadComponent implements OnInit, OnChanges {

  title: string;
  group:GroupThread = null;
  errMsg:string;
  //GroupService: any[];

  @Input() updateFlag:boolean;

  constructor(public groupService:GroupService) { }

  ngOnInit(): void
  {
    this.title = 'groups';
    this.group = this.groupService.getCurrentGroup();
    //this.groupService.getAllGroups().subscribe((data)=>{ this.groups = data;}, err => this.errMsg = err );
  }
  ngOnChanges()
  {
    this.group = this.groupService.getCurrentGroup();
    this.updateFlag = false;
  }

}





