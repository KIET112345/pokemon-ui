import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../core/pokemon.service';

@Component({
  selector: 'app-favorites',
  template: `
  <h2>Your Favorites</h2>
  <div class="card-grid">
    <mat-card *ngFor="let p of data" class="pokemon-card">
      <img [src]="p.image || 'assets/pokemon/placeholder.png'" (error)="onErr($event)">
      <h3>{{ p.name }}</h3>
    </mat-card>
  </div>
  `
})
export class FavoritesComponent implements OnInit {
  data: Pokemon[] = [];
  constructor(private api: PokemonService) {}
  ngOnInit(){ this.api.favorites().subscribe(d => this.data = d); }
  onErr(e:any){ e.target.src='assets/pokemon/placeholder.png'; }
}
