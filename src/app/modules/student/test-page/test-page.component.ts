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
  results: any = [];
  eventTargetAdd: any = [];
  tempIndex: any;
  testId: any;
  currentPage = 0;
  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any) => {
      this.testId = data.testId;
    });
    this.api.getData().subscribe((res: any) => {
      for (let i = 0; i < res.tests.length; i++) {
        if (res.tests[i]._id === this.testId) {
          this.testQuestions = res.tests[i].questions;
          console.log(this.testQuestions);
          this.api.setTotalQuestions(this.testQuestions.length);
        }
      }
    });
  }

  handleCheckChange(event: any) {
    // Checking For duplicate elements in array
    // Avoiding duplicate selection of checkboxes
    let flag = this.eventTargetAdd.findIndex((target: any) => {
      return target.value === event.target.value;
    });
    if (flag == -1) {
      this.eventTargetAdd.push(event.target);
    }
  }
  handleRadioChange(event: any) {
    this.temp = parseInt(event.target.value);
  }

  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      console.log(this.currentPage);
    }
  }
  next() {
    if (this.currentPage < this.testQuestions.length) {
      for (let i = 0; i < this.eventTargetAdd.length; i++) {
        if (this.eventTargetAdd[i].checked == true) {
          this.temp.push(parseInt(this.eventTargetAdd[i].value));
        }
      }
      this.currentPage++;
      console.log(this.temp);
      this.answers.push(this.temp);
      localStorage.setItem('answers', JSON.stringify(this.answers));
      this.temp = [];
      this.eventTargetAdd = [];
      this.correctAnswers.push(
        this.testQuestions[this.currentPage - 1].correctOptionIndex
      );
    }
  }
  finishTest() {
    for (let i = 0; i < this.eventTargetAdd.length; i++) {
      if (this.eventTargetAdd[i].checked == true) {
        this.temp.push(parseInt(this.eventTargetAdd[i].value));
      }
    }
    this.router.navigateByUrl('/result');
    this.answers.push(this.temp);
    this.temp = [];
    this.correctAnswers.push(
      this.testQuestions[this.currentPage - 1].correctOptionIndex
    );
    console.log('Submitted Answers : ', this.answers);
    console.log('Correct', this.correctAnswers);
    localStorage.removeItem('answers');
    for (let i = 0; i < this.testQuestions.length; i++) {
      if (
        JSON.stringify(this.correctAnswers[i]) ==
        JSON.stringify(this.answers[i])
      ) {
        this.results.push(true);
      } else {
        this.results.push(false);
      }
    }
    console.log('Results Array :', this.results);
    this.api.setResult(this.results);
  }
}
