import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { CountryService } from './country.service';
import { XHRBackend, HttpModule, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ICountryName, ICountry } from './interfaces/country';

describe('CountryService', () => {

    let countryService: CountryService;
    let mockBackend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                CountryService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    beforeEach(inject([CountryService, XHRBackend], (_countryService, _mockbackend) => {
        countryService = _countryService;
        mockBackend = _mockbackend;
    }));

    describe('getCountryName()', () => {

        it('should return an Observable<ICountryName>', () => {

            let response: ICountryName = {
                ip: '111.222.333.333',
                country_code: 'XN',
                country_name: 'Xen',
                region_code: 'XN, 152',
                region_name: 'Xenius',
                city: 'City 17',
                zip_code: '1717',
                time_zone: 'XTC',
                latitude: 55.55,
                longitude: 55.55,
                metro_code: 5
            };

            mockBackend.connections.subscribe(connection => {
                connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(response)})));
            });

            countryService.getCountryName()
                .subscribe(country => {

                    expect(country.ip).toEqual('111.222.333.333');
                    expect(country.country_code).toEqual('XN');
                    expect(country.country_name).toEqual('Xen');
                    expect(country.region_code).toEqual('XN, 152');
                    expect(country.region_name).toEqual('Xenius');
                    expect(country.city).toEqual('City 17');
                    expect(country.zip_code).toEqual('1717');
                    expect(country.time_zone).toEqual('XTC');
                    expect(country.latitude).toEqual(55.55);
                    expect(country.longitude).toEqual(55.55);
                    expect(country.metro_code).toEqual(5);

                });

        });

    });

    describe('getCountries()', () => {

        it('should return an Observable<ICountry[]>', () => {

            let response: ICountry[] = [
                {
                     ID: '12',
                     Name: 'Greece',
                     Languages: 'Greek, English, French',
                     Responsiveness: '9',
                     LastUpdate: '2016-07-18',
                     SimNeeded112: 'No',
                     OnlyNumber: 'No'
                },
                {
                    ID: '14',
                    Name: 'Ireland',
                    Languages: 'English',
                    Responsiveness: '1',
                    LastUpdate: '2016-07-18' ,
                    SimNeeded112: 'Unknown',
                    OnlyNumber: 'No'
                }
            ];

            mockBackend.connections.subscribe(connection => {
                connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(response)})));
            });

            countryService.getCountries()
                .subscribe(countries => {

                    expect(countries[0].ID).toEqual('12');
                    expect(countries[0].Name).toEqual('Greece');
                    expect(countries[0].Languages).toEqual('Greek, English, French');
                    expect(countries[0].Responsiveness).toEqual('9');
                    expect(countries[0].LastUpdate).toEqual('2016-07-18');
                    expect(countries[0].SimNeeded112).toEqual('No');
                    expect(countries[0].OnlyNumber).toEqual('No');

                    expect(countries[1].ID).toEqual('14');
                    expect(countries[1].Name).toEqual('Ireland');
                    expect(countries[1].Languages).toEqual('English');
                    expect(countries[1].Responsiveness).toEqual('1');
                    expect(countries[1].LastUpdate).toEqual('2016-07-18');
                    expect(countries[1].SimNeeded112).toEqual('Unknown');
                    expect(countries[1].OnlyNumber).toEqual('No');


                });

        });

    });

});
