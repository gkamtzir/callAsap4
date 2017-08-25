import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

// Routes
import { AppRoutes } from './app.routes';

// Components
import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryComponent } from './country/country.component';

// Services
import { CountryService } from './shared/country.service';

@NgModule({
  imports:      [ BrowserModule,
                    HttpModule,
                    FormsModule,
                    RouterModule.forRoot(AppRoutes),
                    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
                ],
  declarations: [ AppComponent, HomeComponent, SearchComponent, AboutComponent, NavbarComponent, CountryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CountryService ]
})

export class AppModule { }
