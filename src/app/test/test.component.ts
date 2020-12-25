import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name: String = "maissa"
  public user = {
    firstname: "maissa",
    lastname: "soussi",
    age: 23
  }
  public technos: String[] = ["Angular", "Laravel", ".Net", "Vue", "Symphony"]
  public students: any[] = [
    {
      image: "https://cdn1.booknode.com/author_picture/1402/full/maissa-gargouri-1402000.jpg",
      username: "maissa",
      mail: "maissa.soussi@ensi-uma.tn",
      age: 23,
      university: "ENSI",
      isAdmis: true
    },
    {
      image: "https://i1.wp.com/www.lecourrierdelatlas.com/wp-content/uploads/2020/03/1143605279.jpg?resize=518%2C352&ssl=1",
      username: "kenza",
      mail: "kenza@gmail.tn",
      age: 21,
      university: "TBS",
      isAdmis: true
    },
    {
      image: "https://www.espacemanager.com/sites/default/files/field/image/achreff.jpg",
      username: "achref",
      mail: "achref@gmail.tn",
      age: 28,
      university: "Université Centrale",
      isAdmis: true
    },
    {
      image: "https://www.rihabchaieb.com/wp-content/uploads/2016/12/rihab-chaieb-headshot.jpg",
      username: "rihab",
      mail: "rihab@gmail.tn",
      age: 28,
      university: "TBS",
      isAdmis: false
    }
  ]

  public categoriesList: any[] = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
      .subscribe(
        (result) => { this.categoriesList = result },
        (error) => { console.log(error) }
      )
  }

  deleteStudent(std: any): void {
    let indice = this.students.indexOf(std)
    this.students.splice(indice, 1)
  }

}
