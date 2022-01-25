import { Component, HostBinding, Input } from '@angular/core';
import { MovieList } from 'src/app/app.types';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @HostBinding('class.app-movie-card') ComponentClass = true;
  @Input() movie: MovieList | undefined;
  @Input() plotData = '';
}
