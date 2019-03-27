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

  date: FormGroup;
  dateString: any;
  statuses: Array<any>;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();

constructor(private statusKafkaService : StatusKafkaService,public datepipe: DatePipe) {
  this.date = new FormGroup({
    date: new FormControl()
  });
 
 }
 onSubmit(): void {
  console.log(this.date.value);
  this.dateString = this.date.get('date').value;
  let formatDate =this.datepipe.transform(this.dateString, 'yyyyMMdd');
  this.statusKafkaService.findByDate(formatDate).subscribe(data => {
    this.statuses = data;
  });
}
ngOnInit(){
}
}
