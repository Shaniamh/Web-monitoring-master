import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountGroupService {
  public API = '//localhost:8991/get-csv-hbase';
  public ACCOUNT_API = this.API + '/sql/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.ACCOUNT_API);
  }
}