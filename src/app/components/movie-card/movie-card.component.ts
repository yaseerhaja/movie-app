import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/app.types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent implements OnInit {
  @HostBinding('class.app-movie-card') ComponentClass = true;
  @Input() movie: MovieList | undefined;

  constructor() {}

  ngOnInit(): void {}
}
