import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ews-issue',
  templateUrl: './ews-issue.component.html',
  styleUrls: ['./ews-issue.component.css']
})
export class EwsIssueComponent implements OnInit {
  issue: FormGroup;
  istimes: string[] = [
    '00.00','01.00','02.00','03.00','04.00','05.00',
    '06.00','07.00','08.00','09.00','10.00','11.00',
    '12.00','13.00','14.00','15.00','16.00','17.00',
    '18.00','19.00','20.00','21.00','22.00','23.00'
  ];
  constructor() { 
    this.issue = new FormGroup({
    issueDate:new FormControl(),
    issueTime:new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.issue.value);
  }
  convertParameter(parameter:String): String{
    return parameter.replace('.','');
 }

}
