import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {

  name:string = "Ishan";
  title:string = "Todo App";
  tasks:Task[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
