import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { CountryService } from '../shared/country.service';

describe('Component: HomeComponent', () => {

    let home;
    let fixture;
    let element;
    let de;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            declarations: [ HomeComponent ],
            providers: [ CountryService ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();

    });

    beforeEach(() => {

        fixture = TestBed.createComponent(HomeComponent);
        home = fixture.componentInstance;
        de = fixture.debugElement;
        element = de.nativeElement;

    });

    it('should be defined', () => {

        expect(home).toBeDefined();

    });

    it('should display an info message when the country is not specified', async(() => {

        home.country = false;

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(element.querySelector('.container > div').innerText).toEqual('Sorry, there are no results for this country.');
        });

    }));

});
