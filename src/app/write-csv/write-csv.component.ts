import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CsvService } from '../shared/csv/csv.service';
import { AccountGroupService } from '../shared/account-group/account-group.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-write-csv',
  templateUrl: './write-csv.component.html',
  styleUrls: ['./write-csv.component.css']
})

export class WriteCsvComponent implements OnInit {
  time: FormGroup;
  states: string[] = [
    '00.00','01.00','02.00','03.00','04.00','05.00',
    '06.00','07.00','0800','09.00','10.00','11.00',
    '12.00','13.00','14.00','15.00','16.00','17.00',
    '18.00','19.00','20.00','21.00','22.00','23.00'
  ];

  group: Array<any>;
  message: any;
  constructor(private csvService : CsvService, private accountGroupService : AccountGroupService) {
      this.time=new FormGroup({
      startTime: new FormControl(),
      endTime: new FormControl(),
      accountGroup: new FormControl()
    });
   
   }

  ngOnInit() {
    this.accountGroupService.getAll().subscribe(data => {
      this.group = data;
    });
  }

  onSubmit(){
    console.log(this.time.value);
    this.csvService.sendReport(this.convertParameter(this.time.get('startTime').value), this.convertParameter(this.time.get('endTime').value), 
    this.time.get('accountGroup').value ).subscribe(data => {
      this.message = data;
    });
  }

  convertParameter(parameter:String): String{
     return parameter.replace('.','');
  }

}

