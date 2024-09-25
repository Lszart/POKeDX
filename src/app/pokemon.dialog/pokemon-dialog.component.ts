import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-pokemon-dialog-component',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <audio autoplay src="{{pokemon.cries.latest}}"></audio>
    <h4 mat-dialog-title>{{pokemon.name}}</h4>
    <mat-dialog-content>
      <img src="{{ pokemon.sprites.front_default }}" alt="{{ pokemon.name }}">
      TYPES
      <ul class="card-types">
         <br>
            @for (type of pokemon.types; track $index) {
                <li>{{type.type.name}}</li>
            }
      </ul>
      <div class="stats">
      @for (stat of pokemon.stats; track $index) {
        <tr><th>{{stat.stat.name}}</th><th class="stat-value">{{stat.base_stat}}</th></tr>
      }
      </div>
      <br>
      HEIGHT - {{pokemon.height}} <br>
      WEIGHT - {{pokemon.weight}} <br>
    </mat-dialog-content>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: `
    h2{
      text-align: center;
    }
    .mat-dialog-container {
      transition: opacity 300ms ease-in-out;
    }

    .mat-dialog-entering {
      opacity: 0;
    }

    .mat-dialog-enter {
      opacity: 1;
    }
    img{
      animation: MoveUpDown 1s steps(1,end) infinite both;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      bottom: 0;
      display: block;
    }
    @keyframes MoveUpDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
    ul{
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: center; 
      width: auto;
      white-space: nowrap;
      padding: 0;
      text-align: center;
    }
    li{
      margin-left: 10px;
      margin-right: 10px;
      padding: 3px;
      background-color: lightblue;
      border-radius: 15%
    }
    .stats{
      width: 100%;
      text-align: left;
      padding: 5px;
    }
    .stat-value{
      text-align: right;
      width: 50%;
    }
  `
})
export class PokemonDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public pokemon: Pokemon) {}
}
