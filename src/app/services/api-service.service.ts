import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  APIURL = 'http://xapi.ngminds.com/getQuizData';
  testId: any;
  result: any = [];
  
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.APIURL);
  }

  setTestId(id: any) {
    this.testId = id;
  }

  getTestId() {
    return this.testId;
  }
  setResult(result: any) {
    this.result = result;
  }

  getResult() {
    return this.result;
  }
}
