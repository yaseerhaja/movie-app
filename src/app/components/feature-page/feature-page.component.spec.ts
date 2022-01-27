import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  RouterModule,
} from '@angular/router';
import { of } from 'rxjs';
import { TruncatePipe } from 'src/app/pipe/truncate';

import { FeaturePageComponent } from './feature-page.component';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturePageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule, HttpClientModule],
      providers: [
        TruncatePipe,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of(
              convertToParamMap({
                search: '',
              })
            ),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
