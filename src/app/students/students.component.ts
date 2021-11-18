import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent  implements OnChanges {
  housemembers: any[] = [];
 
  @Input()
  house!: string;
  
  constructor( private http: HttpClient) { }

  ngOnChanges(): void {
    this.http.get('http://hp-api.herokuapp.com/api/characters/house/'+this.house).subscribe((housemembers: any) => {
      this.housemembers = housemembers;
    });
    
  }

}
