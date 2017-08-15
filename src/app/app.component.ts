import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giełda';
  spolki=SPOLKI;
  transakcje=TRANSAKCJE;
  ccc : Spolka={
           id:1,
           name:'CCC',
           cena:249
  };
}
export class Spolka{
  id:number;
  name:string;
  cena:number;
}
export class Transakcja{
  id:number;
  idSpolka:number;
  data:string;
  cenaZak:number;
  ilosc:number;
  prowizja:number;
}
const SPOLKI: Spolka[]=[
{id:1,name:'CCC', cena:149},
{id:2,name:'ETF 20',cena:288},
{id:3,name:'Comarch',cena:195}
]
const TRANSAKCJE:Transakcja[]=[
{id:1,idSpolka:1,data:'2017-05-05',cenaZak:23,ilosc:12,prowizja:3.12}

]
