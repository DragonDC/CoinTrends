import { Component, OnInit } from '@angular/core';
import {CryptocurrencyService} from '../service/cryptocurrency.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public chartData1: Object[];
  public chartData2: Object[];

  constructor(private cryptocurrencyService: CryptocurrencyService) { }

  ngOnInit(): void {
    this.chartData1 = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];

    this.chartData2 = [
      { month: 'Jan', sales: 25 }, { month: 'Feb', sales: 18 },
      { month: 'Mar', sales: 24 }, { month: 'Apr', sales: 22 },
      { month: 'May', sales: 30 }, { month: 'Jun', sales: 22 },
      { month: 'Jul', sales: 25 }, { month: 'Aug', sales: 45 },
      { month: 'Sep', sales: 28 }, { month: 'Oct', sales: 20 },
      { month: 'Nov', sales: 15 }, { month: 'Dec', sales: 22 }
    ];

    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.primaryYAxis = {
      valueType: 'Logarithmic',
      labelFormat: '${value}K'
    };

    this.cryptocurrencyService.createHeader();
  }


}
