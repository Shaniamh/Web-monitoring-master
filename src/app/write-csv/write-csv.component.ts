import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-write-csv',
  templateUrl: './write-csv.component.html',
  styleUrls: ['./write-csv.component.css']
})

export class WriteCsvComponent implements OnInit {
  time: FormGroup;
  states: string[] = [
    '00.00','01.00','02.00','03.00','04.00','05.00',
    '06.00','07.00','08.00','09.00','10.00','11.00',
    '12.00','13.00','14.00','15.00','16.00','17.00',
    '18.00','19.00','20.00','21.00','22.00','23.00'
  ];

  group: string[]=[
    'Monitoring-issue-ews'
  ];
 
  constructor() {
      this.time=new FormGroup({
      startTime: new FormControl(),
      endTime: new FormControl(),
      accountGroup: new FormControl()
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.time.value);
  }

}

