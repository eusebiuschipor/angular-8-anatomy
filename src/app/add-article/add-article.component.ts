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
      Name: ['', Validators.required ],
      Text: ['', Validators.required ],
      Author: ['', Validators.required ]
    });
  }
  addArticle(Name, Text, Author) {
    this.ps.addArticle(Name, Text, Author);
  }
  ngOnInit() {
  }
}
