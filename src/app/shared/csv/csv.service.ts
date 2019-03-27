import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  public API = '//192.168.20.99:8991';
  public CSV_API = this.API + '/get-csv-hbase/hbase/scan1' + 'start' + 'end' + 'account';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/get-csv-hbase/hbase/scan1' + 'start' + 'end' + 'account');
  }
  
}
