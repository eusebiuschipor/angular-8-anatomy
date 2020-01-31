import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  uri = 'http://localhost:4000/products';
  constructor(private http: HttpClient) { }
  addArticle(Name, Text, Author) {
    const obj = {
      Name: Name,
      Text: Text,
      Author: Author
    };
    console.log('Send to server (add article): ', obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
