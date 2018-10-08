import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';
import { ICountry, ICountryName, IEmergencyPhoneNumber } from '../shared/interfaces/country';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    /**
     * User's country name.
     */
    countryName: ICountryName;
    /**
     * User's country object.
     */
    country: ICountry | boolean;
    /**
     * User's country emergency phone
     * numbers.
     */
    emergencyPhoneNumbers: IEmergencyPhoneNumber[]

    constructor(private _countryService: CountryService){}

    ngOnInit(): void {

        this._countryService.getCountryName()
            .switchMap(
                countryName => {

                    this.countryName = countryName;
                    return this._countryService.getCountry(this.countryName.country)

                }
            ).switchMap(
                country => {

                    this.country = country;
                    return this._countryService.getEmergencyPhoneNumbers(this.country)

                }
            ).subscribe(

                emergencyPhoneNumbers => this.emergencyPhoneNumbers = emergencyPhoneNumbers

            );

    }

}
