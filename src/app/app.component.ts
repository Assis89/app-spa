import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RodapeComponent } from './pages/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-spa';
}
