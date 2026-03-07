import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LoadDefaultImage');

  onImageError(event: any) {
    event.target.src = 'images/NotFound.png';
    event.target.onerror = null
  }

}
