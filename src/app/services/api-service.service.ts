import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  APIURL = "http://xapi.ngminds.com/getQuizData";
  result: any = [];
  totalQuestions: number = 0;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.APIURL);
  }

  setResult(result: any) {
    this.result = result;
  }

  getResult() {
    return this.result;
  }
  setTotalQuestions(totalQuestions: any) {
    this.totalQuestions = totalQuestions;
  }

  getTotalQuestions() {
    return this.totalQuestions;
  }
}
