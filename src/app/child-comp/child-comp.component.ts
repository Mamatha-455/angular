import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input() childMessage: string;
  message:string='message from child to parent using viewchild.'
  constructor() {
   }

  ngOnInit() {
  }

}
