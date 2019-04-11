import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusHbaseService {
  public API = '//192.168.20.222:8991/kp-pens/hbase/monitoring/issue1';
  // public API = '//localhost:8991/hbase/monitoring/issue1';
  

  constructor(private http:HttpClient) { }

  getAll(date: string, tableName: string): Observable<any> {
    return this.http.get(this.API + '?date=' + date + '&tableName=' + tableName);
  }

  get(date: string) {
    return this.http.get(this.API + '/' + date);
  }

  findByDate(date: string, tableName: string): Observable<any> {
    return this.http.get(this.API + '?date=' + date + '&tableName=' + tableName);
  }

  save(status: any): Observable<any> {
    let result: Observable<Object>;
    if (status['href']) {
      result = this.http.put(status.href, status);
    } else {
      result = this.http.post(this.API, status);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
