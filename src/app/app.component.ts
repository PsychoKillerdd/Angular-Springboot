import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  //esto es una clase como tal su nobre es appComponent se exporta como guard
export class AppComponent {
  public title:string = '¡Hola mundo! En angular';

  public subtitle:string = 'Contador con estado de session Storage';

  public name:string = 'Angular';
  public users:string[] = [];
  public items:string[] = ['Item 1', 'Item 2', 'Item 3','Item 4'];

  public counter:number;

  public visible: boolean = false;

  public ternario:boolean = true;

  public buttonText:boolean = true;

  setButtonText = (): void => {
    this.buttonText = !this.buttonText;
  };

  setTernario(): void {
    this.ternario = !this.ternario;
    console.log("Hiciste click en el boton de cambio de persona");
  };

  setVisibility(): void {
    this.visible = !this.visible;
    this.buttonText = !this.buttonText;
  }

  public greet():void {
    console.log('Hola mundo');
  }
}
