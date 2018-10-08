import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';
import { ICountry, IEmergencyPhoneNumber } from '../shared/interfaces/country';

@Component({
    moduleId: module.id,
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit{

    /**
     * All the available countries.
     */
    countries: ICountry[];
    /**
     * The emergency phone numbers of the
     * choosen country.
     */
    emergencyPhoneNumbers: IEmergencyPhoneNumber[];
    /**
     * The choosen country.
     */
    country: ICountry;
    nothing: boolean;


    constructor(private _countryService: CountryService) {}

    ngOnInit(): void {

        this._countryService.getCountries()
            .subscribe(
                countries => this.countries = countries
            );

    }

    /**
     * Fetches the emergency phone numbers
     * of the given country
     * @param country The country name
     */
    changeCountry(country: ICountry): void {

        this._countryService.getEmergencyPhoneNumbers(country)
            .subscribe(
                emergencyPhoneNumbers => this.emergencyPhoneNumbers = emergencyPhoneNumbers
            );

    }

}
