import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  // se puede declarar vacio el arreglo
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharecter( id?:string ) :void{

    if ( !id ) return;

    //TODO: Emitir el  ID del personaje
    this.onDelete.emit(id);
    console.log(id);

  };


}
