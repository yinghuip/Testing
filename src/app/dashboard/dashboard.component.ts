import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
import { CustomerModel } from '../model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  customer: string[];
  cusomerFilter;
  customerDataItem: CustomerModel = new CustomerModel();
  HaulioRefOption: any[] = [
    { Id: 1, Name: "Round trip" }
    , { Id: 2, Name: "Single trip" }];

  DateOptions;
  constructor(private commonService: CommonService) {
    this.commonService.getCustomerName()
      .subscribe((data) => {
        this.customer = data.map(s => s['Name']);
        this.cusomerFilter = this.customer.slice();

        const current = new Date();     // get current date    
        let weekstart = current.getDate() - current.getDay() + 1;
        let weekend = weekstart + 6;       // end day is the first day + 6 
        let monday = new Date(current.setDate(weekstart));
        let sunday = new Date(current.setDate(weekend));
        let thisWeek = [monday.getDate() + '/' + current.getMonth(), sunday.getDate() + '/' + current.getMonth()];
        this.DateOptions = [
          { Id: 1, Label: "All Time" }
          , { Id: 2, Label: thisWeek.join('-') }
        ]

      })


  }

  ngOnInit() {
  }

  filterName(value) {
    this.cusomerFilter = value ? this.customer.filter(s => s.toLowerCase().includes(value.toLowerCase()))
      : this.customer.slice();
  }

}
