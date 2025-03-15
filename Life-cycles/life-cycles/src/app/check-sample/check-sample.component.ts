import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0;

  constructor() { 
  }
  adicionar(){
    this.quantidade++;
  }

  decrementar(){
    this.quantidade--;
  }


  ngOnInit(): void {
    console.log('***************');

    console.log('ngOnInit');
  }
  
  ngDoCheck(): void {
    console.log('DoCheck');
  }
   //cheked -> content -> view

   //Quando primeiro conteudo é inicializado
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
   //Depois da inicialização da view
   ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  //Apos alguma alteração, verificar o conteudo 
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  //Apos alguma alteração, verifica a view 
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Bye Bye');
  }
}
