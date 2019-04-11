import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StatusHbaseService } from '../shared/hbase/status-hbase.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ews-hbase',
  templateUrl: './ews-hbase.component.html',
  styleUrls: ['./ews-hbase.component.css'],
  providers: [DatePipe]
})
export class EwsHbaseComponent implements OnInit {
  date: FormGroup;
  dateString: any;
  statuses: Array<any>;
  loading: any;
  dialog: any;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  displayedColumns = ['date', 'status'];
  table: string[] = [
    'cyber-data-v4',
    'ews-data'
  ];

constructor(
  private statusHbaseService : StatusHbaseService, public datepipe: DatePipe) {
  this.date = new FormGroup({
    date: new FormControl(),
    table: new FormControl()
  })
 }

 onSubmit(): void {
    this.statuses=null;
    console.log(this.date.value);
    console.log('Proses Scan Data');
    this.loading = true;
    this.loading = setTimeout(()=>{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Waktu scan telah melebihi batas. Silahkan coba lagi'
      })
      this.loading = false;
    }, 900000);
    this.dateString = this.date.get('date').value;
    let formatDate =this.datepipe.transform(this.dateString, 'yyyyMMdd');
    this.statusHbaseService.getAll(formatDate, this.date.get('table').value).subscribe(data => {
    this.statuses = data;
    this.loading = false;
    });
 }

ngOnInit(){
}
}
