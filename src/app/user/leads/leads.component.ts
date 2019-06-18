import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  @Output() childdata = new EventEmitter();


  constructor() { }



  ngOnInit() {
  }


  send()
  {
    //alert("called");
   let a = this.childdata.emit({username:"usename",password:"password"});
   
   console.log(a);
    }

}
