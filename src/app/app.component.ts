import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'dynamic :D';
  imgUrl: string = 'https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain'
  isDisable: boolean = false
  isActive: boolean = true
  fruitName: string = 'Apple'
  press(event : any) {
    console.log(event);
  }
  press2() {
    console.log('submit');
  }
}
