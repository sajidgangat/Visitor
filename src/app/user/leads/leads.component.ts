import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  @Output() public childdata = new EventEmitter();
  constructor() { }



  ngOnInit() {
  }


  send()
  {
    alert("called");
   this.childdata.emit("from child controller");
    }

}
