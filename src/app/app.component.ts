import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hogwarts';
  thehouse = 'gryffindor';
  gryffindor: any[] = [];
  hufflepuff: any[] = [];
  slytherin: any[] = [];
  ravenclaw: any[] = [];
  constructor(
    private http: HttpClient,
  ) {
    
  }

  ngOnInit() {
    this.http.get('http://hp-api.herokuapp.com/api/characters/house/gryffindor').subscribe((gryffindor: any) => {
      this.gryffindor = gryffindor;
    });
    this.http.get('http://hp-api.herokuapp.com/api/characters/house/hufflepuff').subscribe((hufflepuff: any) => {
      this.hufflepuff= hufflepuff;
    });
    this.http.get('http://hp-api.herokuapp.com/api/characters/house/slytherin').subscribe((slytherin: any) => {
      this.slytherin= slytherin;
    });
    this.http.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw').subscribe((ravenclaw: any) => {
      this.ravenclaw= ravenclaw;
    });
    
  }

  changehouse(housename:string) {
    this.thehouse = housename;
    console.log(housename);
   }

  
}