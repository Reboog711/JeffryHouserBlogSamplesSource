import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResetJasmineSpys';

  method1 () {
    this.method2();
  }

  method2(input: string = 'abc') {
    return input;
  }

}
