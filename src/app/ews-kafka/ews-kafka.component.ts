import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StatusKafkaService } from '../shared/status/status-kafka.service';
@Component({
  selector: 'app-ews-kafka',
  templateUrl: './ews-kafka.component.html',
  styleUrls: ['./ews-kafka.component.css'],
  providers: [DatePipe]
})
export class EwsKafkaComponent implements OnInit {
  submit: FormGroup;
  dateString: any;
  statuses: Array<any>;
  todayDate = new Date();
  displayedColumns = ['DATE', 'STATUS'];

constructor(private statusKafkaService : StatusKafkaService,public datepipe: DatePipe) {
  this.submit = new FormGroup({
  });
 
 }
 onSubmit(): void {
  let formatDate =this.datepipe.transform(this.todayDate, 'yyyyMMdd');
  this.statusKafkaService.findByDate(formatDate).subscribe(data => {
    this.statuses = data;
  });
}
ngOnInit(){
  let formatDate =this.datepipe.transform(this.todayDate, 'yyyyMMdd');
  this.statusKafkaService.findByDate(formatDate).subscribe(data => {
    this.statuses = data;
  });
}


}
