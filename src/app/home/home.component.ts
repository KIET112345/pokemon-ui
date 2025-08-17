import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  trailers = [
    'https://www.youtube.com/embed/uBYORdr_TY8',
    'https://www.youtube.com/embed/bILE5BEyhdo',
    'https://www.youtube.com/embed/EMJ2V9W4V_A',
    'https://www.youtube.com/embed/bvSe6pMvUj8'
  ];

  // featured = Array.from({ length: 10 }).map((_, i) => ({
  //   id: i + 1,
  //   name: `Pokemon ${i + 1}`,
  //   image: `assets/pokemon/${i + 1}.png`
  // }));
}
