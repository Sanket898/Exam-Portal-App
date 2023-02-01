import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api-service.service";

@Component({
  selector: "app-test-result",
  templateUrl: "./test-result.component.html",
  styleUrls: ["./test-result.component.css"],
})
export class TestResultComponent implements OnInit {
  result: any;
  correctAnswersCount: number = 0;
  wrongAnswersCount: number = 0;
  totalQuestions: number;
  constructor(private api: ApiService) {
    this.result = this.api.getResult();
    this.totalQuestions = this.api.getTotalQuestions();
  }
  ngOnInit() {
    console.log(this.result);
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i]) {
        this.correctAnswersCount++;
      } else {
        this.wrongAnswersCount++;
      }
    }
  }
}
