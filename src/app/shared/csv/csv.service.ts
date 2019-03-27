import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CsvService {
  public API = '//localhost:8991';
  public CSV_API = this.API + '/get-csv-hbase/hbase';
  constructor(private http: HttpClient) { }

  sendReport(start :String, end:String, account: String): any {
    return this.http.get(this.CSV_API + '/scan1?start=' + start +'&end='+ end +'&account='+ account);
  }
  
}