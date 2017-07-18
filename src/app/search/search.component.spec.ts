import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search.component';
import { CountryService } from '../shared/country.service';

describe('Component: SearchComponent', () => {

    let search;
    let fixture;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            declarations: [ SearchComponent ],
            providers: [ CountryService ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();

    });

    beforeEach(() => {

        search = TestBed.createComponent(SearchComponent);
        fixture = search.componentInstance;

    });

    it('should be defined', () => {

        expect(search).toBeDefined();

    });

});
