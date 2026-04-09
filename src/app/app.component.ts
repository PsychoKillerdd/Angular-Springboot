import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  //esto es una clase como tal su nobre es appComponent se exporta como guard
export class AppComponent {
  public title:string = '¡Hola mundo! En angular';
  public name:string = 'Angular';
  public users:string[] = [];
  public items:string[] = ['Item 1', 'Item 2', 'Item 3'];

  public greet():void {
    console.log('Hola mundo');
  }
}
