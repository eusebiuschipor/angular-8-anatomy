import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  uriLocal = 'http://localhost/api-loopevo-cms/post/create.php';
  uriLive = 'http://cms.loopevo.com/api/post/create.php';

  constructor(private http: HttpClient) { }

  addArticle(Title, Url, Content, First_paragraph, Category, Image, Author, Popular) {
    const obj = {
      title: Title,
      url: Url,
      content: Content,
      first_paragraph: First_paragraph,
      category: Category,
      image: Image,
      author: Author,
      popular: Popular
    };

    this.http.post(`${this.uriLive}`, obj)
        .subscribe(res => console.log('Done'));
  }
}
