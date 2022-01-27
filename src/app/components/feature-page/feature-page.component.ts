import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { MovieDetail } from 'src/app/app.types';
import { TruncatePipe } from 'src/app/pipe/truncate';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
})
export class FeaturePageComponent implements OnInit {
  @HostBinding('class.app-feature-page') ComponentClass = true;
  public movieDetails: MovieDetail | undefined;

  public truncValue = 'less';

  private imdbId = null;
  private plot = '';
  private unsubscribe$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private truncatePipe: TruncatePipe
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.imdbId = this.route.snapshot.params['id'];
      this.plot = this.truncValue = this.route.snapshot.params['slot'];
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
        if (this.movieDetails) {
          this.movieDetails.Plot = this.truncatePipe.transform(
            this.movieDetails.Plot,
            this.truncValue
          );
        }
      });
  }
}
