import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { GetArticleComponent } from './get-article/get-article.component';  

const routes: Routes = [
  {
    path: 'article/create',
    component: AddArticleComponent
  },
  {
    path: 'edit/:id',
    component: EditArticleComponent
  },
  {
    path: 'articles',
    component: GetArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
