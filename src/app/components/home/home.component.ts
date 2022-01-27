import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { MovieList } from 'src/app/app.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding('class.app-home') ComponentClass = true;
  public myControl = new FormControl();
  public plotData = 'short';
  public filteredOptions: MovieList[] | undefined;

  private unsubscribe$ = new Subject();

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.myControl.valueChanges.subscribe((value: string) => {
      this.getMovieListByKey(value);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  onChange($event: MatRadioChange): void {
    this.plotData = $event.value;
  }

  private getMovieListByKey(key: string): void {
    this.appService
      .getMoviesByKey(key.toLowerCase(), this.plotData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response: any) => {
        this.filteredOptions = response.Search ?? [];
      });
  }
}
