import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() name:string="";
  username="";
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
this.username=this.name
  }
onclick()
{
  this.clicked.emit();
  this.router.navigate(['/home/dashboard'])
}
  
}
