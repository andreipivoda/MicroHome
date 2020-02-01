import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService] 
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.extractData();
  }


  extractData() {
    console.log('Extracting data:')
    this.data.getData()
      .subscribe((result) => {
        this.onGetDataSuccess(result as Response);
      }, (error) => {
        console.log(error);
      });
  }

  private onGetDataSuccess(res:Response) {
    console.log(res);
  }


}
