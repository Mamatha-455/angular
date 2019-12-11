import { Component, OnInit,ViewChild,AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit,AfterViewInit {
  changeDetection: ChangeDetectionStrategy.OnPush;
  parentMessage = "message from parent to child" ;
  @ViewChild(ChildCompComponent, {static: false}) child:any;
  messageParent:any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.messageParent=this.child.message;
  }
}
