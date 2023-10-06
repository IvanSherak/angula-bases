import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public ege:  number = 45;

  get capitalizedName() :string {
    return  this.name.toUpperCase();
  }


  getHeroDescription() :string {

  return `${ this.name } - ${ this.ege }`;

  }

  changeHero() :void {

    console.log(this.name);
      this.name = 'spiderman';

  }

  changeAge() :void{

    this.ege = 25;

  }

  resetForm() :void{

    this.name = 'ironman';
    this.ege  = 45;

  }


}
