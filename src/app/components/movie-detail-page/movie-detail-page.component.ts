import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { MovieDetail } from 'src/app/app.types';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
})
export class MovieDetailPageComponent implements OnInit {
  public movieDetails: MovieDetail | undefined;

  private imdbId = null;
  private plot = '';
  private unsubscribe$ = new Subject();

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.imdbId = this.route.snapshot.params['id'];
      this.plot = this.route.snapshot.params['slot'];
      this.getMovieById();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }
  private getMovieById(): void {
    this.appService
      .getMovieById(this.imdbId, this.plot)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response: any) => {
        this.movieDetails = response;
      });
  }
}
