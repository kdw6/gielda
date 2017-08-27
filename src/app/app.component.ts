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
{id:1,name:'Centrum Klima', cena:149},
{id:2,name:'Boryszew',cena:288},
{id:3,name:'Lotos',cena:196},
{id:4,name:'Etf Wig 20',cena:195},
{id:5,name:'Comarch',cena:100},
{id:6,name:'CCC',cena:195},
{id:7,name:'Live Chat',cena:195},
{id:8,name:'Ursus',cena:195}
]
const TRANSAKCJE:Transakcja[]=[
{id:1,idSpolka:1,data:'2012-03-06',cenaZak:11.49,ilosc:86,prowizja:3.85},
{id:2,idSpolka:2,data:'2012-04-04',cenaZak:0.72,ilosc:1364,prowizja:3.83},
{id:3,idSpolka:1,data:'2012-04-04',cenaZak:11.4,ilosc:87,prowizja:3.87},
{id:4,idSpolka:2,data:'2012-04-20',cenaZak:0.75,ilosc:1992,prowizja:5.83}


]
