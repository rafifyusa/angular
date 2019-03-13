import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up he

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked');
  }

  getProducts(){
    return this.http.get('http://localhost:8282/products/all')
  }
}
