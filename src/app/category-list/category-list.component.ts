import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css', './../../assets/css/sb-admin-2.css']
})
export class CategoryListComponent implements OnInit {
  public categoriesList: any[] = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
      .subscribe(
        (result) => { this.categoriesList = result },
        (error) => { console.log(error) }
      )
  }

}
