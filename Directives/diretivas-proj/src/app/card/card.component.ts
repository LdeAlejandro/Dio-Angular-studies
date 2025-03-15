import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] =[];
  menuType:string = "superuser";
  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "monitor",
      "gabinete",
      "placa de vídeo",
     ]
   }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("novo produto");
  }

  remover(index:number){
    this.produtos.splice(index,1);
  }

}
