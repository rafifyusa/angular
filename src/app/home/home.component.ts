import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  products: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );
  }

  firstClick() {
    //this.h1Style = true;
    this.data.firstClick();
  }

  secondClick() {
    this.h1Style = true;
  }

}
