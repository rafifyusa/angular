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

  getProducts() {
    return this.http.get('http://localhost:8282/products/all');
  }

  insertProductIntoDB(data) {
    return this.http.post('http://127.0.0.1:8282/products/create', data);
  }

  updateProductFromDB(data, id) {
    return this.http.put('http://127.0.0.1:8282/products/' + id+ '/update', data );
  }

  findById(id) {
    return this.http.get('http://127.0.0.1:8282/products/' + id);
  }
}
