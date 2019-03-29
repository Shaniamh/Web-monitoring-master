import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusKafkaService {

  public API = '//192.168.20.222:8991/kp-pens';
  public CAR_API = this.API + '/sql';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/sql');
  }

  get(date: string) {
    return this.http.get(this.CAR_API + '/' + date);
  }

  findByDate(date: string): Observable<any> {
    return this.http.get(this.CAR_API + '/date/' + date);
  }

  save(status: any): Observable<any> {
    let result: Observable<Object>;
    if (status['href']) {
      result = this.http.put(status.href, status);
    } else {
      result = this.http.post(this.CAR_API, status);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
