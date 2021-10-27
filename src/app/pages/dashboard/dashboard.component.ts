import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public classNames:string = 'btn btn-primary';
  public isRed:boolean = false;
  public studenti:any[]=[
    {
      nume:'Ionel',
      ani:30
    },
    {
      nume:'Irina',
      ani:20
    },
    {
      nume:'Ana',
      ani:24
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleIsRed(){
    this.isRed= !this.isRed;
  }

  addStudent(){
    this.studenti.push({
      nume:'George',
      ani:50
    })
  }

  stergeStudent(index:number){
    this.studenti.splice(index,1);
  }

  stergeStudentInFunctieDeNume(numeStudent:string){
    this.studenti = this.studenti.filter((student)=>{return student.nume!==numeStudent})
  }

}
