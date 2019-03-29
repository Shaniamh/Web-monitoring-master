import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountGroupService {
  public API = '//192.168.20.222:8991/kp-pens';
  public ACCOUNT_API = this.API + '/account/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.ACCOUNT_API);
  }
}