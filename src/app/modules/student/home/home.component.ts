import { ApiService } from './../../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tests: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getData().subscribe((res: any) => {
      console.log(res);
      this.tests = res.tests;
    });
  }

  startTest(id: any) {
    this.router.navigateByUrl(`/test/${id}`);
  }
}
