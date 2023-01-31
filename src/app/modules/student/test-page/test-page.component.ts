import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
})
export class TestPageComponent implements OnInit {
  testQuestions: any = [];
  answers: any = [];
  correctAnswers: any = [];
  temp: any = [];
  mySet1: any = new Set();
  results: any = [];
  tempIndex: any;
  testId: any;
  currentPage = 0;
  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.testId = this.api.getTestId();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any) => {
      this.testId = data.testId;
    });
    this.api.getData().subscribe((res: any) => {
      for (let i = 0; i < res.tests.length; i++) {
        if (res.tests[i]._id === this.testId) {
          this.testQuestions = res.tests[i].questions;
          console.log(this.testQuestions);
        }
      }
    });
    this.answersArray();
  }

  answersArray() {
    for (let i = 0; i < this.testQuestions.length; i++) {
      this.correctAnswers.push(this.testQuestions[i].correctOptionIndex);
    }
  }

  handleCheckChange(event: any, index: number) {
    this.temp.push(parseInt(event.target.value));
    this.mySet1 = [...this.temp];
  }
  handleRadioChange(event: any) {
    this.temp = event.target.value;
  }

  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      console.log(this.currentPage);
    }
  }
  next() {
    if (this.currentPage < this.testQuestions.length) {
      this.currentPage++;
      this.answers.push(this.temp);
      this.temp = [];
      console.log('Current Page : ', this.currentPage);
      this.correctAnswers.push(
        this.testQuestions[this.currentPage - 1].correctOptionIndex
      );
      console.log(this.answers);
    }
  }
  finishTest() {
    this.router.navigateByUrl('/result');
    this.answers.push(this.temp);
    this.temp = [];
    this.correctAnswers.push(
      this.testQuestions[this.currentPage - 1].correctOptionIndex
    );
    console.log(this.answers);
    console.log('Correct', this.correctAnswers);
    for (let i = 0; i < this.testQuestions.length; i++) {
      if (this.correctAnswers[i] == this.answers[i]) {
        this.results.push(true);
      } else {
        this.results.push(false);
      }
    }
    console.log(this.results);
    this.api.setResult(this.results);
  }
}
