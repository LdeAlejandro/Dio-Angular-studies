import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = "enable";
  corFundo:string = "blue";
  corDaFonte:string = "yellow";
  item:string = "";
  lista:string[] = [];
  isEnableBlock:boolean = true;

  constructor() { }

  adicionarLista(){
    this.lista.push(this.item);
  }
  ngOnInit(): void {
  }

  trocarEstilo(){
    this.estilo === "enable" ? this.estilo = "disable" : this.estilo = "enable";
  }
}
