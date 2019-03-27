import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusKafkaService {

  public API = '//localhost:8080';
  public CAR_API = this.API + '/usercar';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/usercar');
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
