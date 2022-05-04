import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  template: `
  <h1 class="text-center">{{nome}} ha {{anni}} anni e vive in {{getIndirizzo()}}</h1>
  <!--<input type="text" (input)="cambianome2($event)")>-->
  <!--<input class="form-control" type="text" [(ngModel)]="nome">-->
  <input class="form-control" type="text" [(ngModel)]="nome2">
  <!--<button class='btn btn-primary' (click)="cambiaNome()") [disabled]='!getVisualizza()'> Cambia </button>-->
  <!--<p [innerText]="visualizza"{{visualizza}}></p>-->
  <button class='btn btn-primary' (click)="cambiaUtente()") [disabled]='!getVisualizza()'> Cambia </button>
  <p>{{utente2}}</p>

  `,
  styles: [`
  h1 {
    color: red;
  }
  
  `]
})
export class TitoloComponent implements OnInit {

  nome = '';

  anni = 18;

  utente2= '';

  nome2 = ''

  visualizza = false

  constructor() { 
    setTimeout(() => {
      this.visualizza = true
      this.nome = 'Luigi'
    }, 1000);
  }

  getIndirizzo(){
    return 'via Rossi'
  }
  getVisualizza() {
    return this.visualizza
  }

  cambianome2(event: Event) {
    const target = <HTMLInputElement> event.target;
    console.log(target.value);
    this.nome = target.value
  }

  cambiaNome(){
   
    this.nome = 'Luca'
  }

  cambiaUtente(){
    this.utente2 = `${this.nome2} è il più alto` 
  }

  ngOnInit(): void {
  }

}
