import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { map, Observable, pipe, startWith, Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';
import { MovieList } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class.app-root') ComponentClass = true;
  public myControl = new FormControl();
  public plotData = 'short';
  public filteredOptions: MovieList[] | undefined;

  private unsubscribe$ = new Subject();

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.myControl.valueChanges.subscribe((value) => {
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
