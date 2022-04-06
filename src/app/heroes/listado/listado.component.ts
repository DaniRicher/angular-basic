import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[]=["Spider man", "Iron man","Hulk", "Thor","Capitán America"];
  heroeborrado:string="";

  BorrarHeroe(){
    this.heroeborrado=this.heroes.shift()||"";
  }
}
