import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

import { MatInputModule } from '@angular/material/input';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturePageComponent } from './components/feature-page/feature-page.component';
import { TruncatePipe } from './pipe/truncate';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    PageNotFoundComponent,
    HomeComponent,
    FeaturePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [AppService, TruncatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
