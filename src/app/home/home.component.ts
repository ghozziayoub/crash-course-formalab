import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categoriesList: any[] = [
    {
      id: 0,
      name: "all"
    },
    {
      id: 1,
      name: "smartphones"
    },
    {
      id: 2,
      name: "laptops"
    },
    {
      id: 3,
      name: "softwares"
    }]

  public productsList: any[] = [
    {
      image: "assets/images/iphone.jpg",
      name: "Iphone 13",
      price: 200,
      description: "Telifoun behy",
      rating: 3,
      category_id: 1
    },
    {
      image: "assets/images/macbookpro.jpg",
      name: "Macbook Pro",
      price: 20000,
      description: "Mac behy",
      rating: 5,
      category_id: 2
    },
  ]

  products = this.productsList

  constructor() { }

  ngOnInit(): void {
  }

  filterProducts(category_id: number) {
    if (category_id == 0) {
      this.productsList = this.products
    }
    else {
      this.productsList = this.products.filter(function (p) { return p.category_id == category_id })

    }
  }

}
