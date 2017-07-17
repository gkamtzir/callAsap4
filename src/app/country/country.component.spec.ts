import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CountryComponent } from './country.component';

describe('Component: CountryComponent', () => {

    let country;
    let fixture;
    let element;
    let de;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ CountryComponent ]
        }).compileComponents();
    });

    beforeEach(() => {

        fixture = TestBed.createComponent(CountryComponent);
        country = fixture.componentInstance;
        de = fixture.debugElement;
        element = de.nativeElement;

    });

    it('should be defined', () => {

        expect(country).toBeDefined();

    });

    it('should not display anything when country is not specified', () => {

        country.country = {};

        fixture.detectChanges();

        fixture.whenStable().then(() => {

            expect(element.querySelector('h3 > b').innerText).toEqual('');

        });

    });

    it('should display country\'s information and country\'s emergency phone numbers', async(() => {

        country.country = {
            ID: '12',
            Name: 'Greece',
            Languages: 'Greek, English, French',
            Responsiveness: '9',
            LastUpdate: '2016-07-18',
            SimNeeded112: 'No',
            OnlyNumber: 'No'
        };

        country.emergencies = [
            {
                Type: 'Police',
                Number: '100',
                LastUpdate: '2016-07-18'
            },
            {
                Type: 'Fire Brigade',
                Number: '199',
                LastUpdate: '2016-07-18'
            }
        ];

        fixture.detectChanges();

        fixture.whenStable().then(() => {

            expect(element.querySelector('h3 > b').innerText).toEqual('GREECE');
            expect(element.querySelectorAll('tbody > tr > td')[0].innerText).toEqual('Greek, English, French');
            expect(element.querySelectorAll('tbody > tr > td')[1].innerText).toEqual('9');
            expect(element.querySelectorAll('tbody > tr > td')[2].innerText).toEqual('No');

            expect(element.querySelectorAll('tbody > tr > td')[3].innerText).toEqual('Police');
            expect(element.querySelectorAll('tbody > tr > td')[4].innerText).toEqual('100');

            expect(element.querySelectorAll('tbody > tr > td')[5].innerText).toEqual('Fire Brigade');
            expect(element.querySelectorAll('tbody > tr > td')[6].innerText).toEqual('199');

            expect(element.querySelectorAll('h3 > b')[1].innerText).toEqual('Emergency Phone Numbers');


        });

    }));

    it('should display an info message when onlyNumber equals to \'Yes\'', async(() => {

        country.country = {
            ID: '27',
            Name: 'Sweden',
            Languages: 'Swedish, English, Lulea, Finnish',
            Responsiveness: '15',
            LastUpdate: '2016-07-18',
            SimNeeded112: 'Unknown',
            OnlyNumber: 'Yes'
        };

        fixture.detectChanges();

        fixture.whenStable().then(() => {

            expect(element.querySelectorAll('h3')[1].innerText).toEqual('The only emergency phone number for this country is 112.');

        });


    }));

});
