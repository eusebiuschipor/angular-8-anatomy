import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
@Component({
  selector: 'app-article-add',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ArticlesService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Title: ['', Validators.required ],
      Url: ['', Validators.required ],
      Content: ['', Validators.required ],
      First_paragraph: ['', Validators.required ],
      Category: ['', Validators.required ],
      Image: ['', Validators.required ],
      Author: ['', Validators.required ],
      Popular: ['', Validators.required ]
    });
  }
  addArticle(Title, Url, Content, First_paragraph, Category, Image, Author, Popular) {
    this.ps.addArticle(Title, Url, Content, First_paragraph, Category, Image, Author, Popular);
  }
  ngOnInit() {
  }
}
