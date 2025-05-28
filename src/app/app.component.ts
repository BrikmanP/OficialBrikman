import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-brikman';

  // Método para cerrar menú en móviles
  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }
  }
}
