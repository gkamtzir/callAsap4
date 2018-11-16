import { Component, Input, OnChanges } from '@angular/core';
import { ICountry, IEmergencyPhoneNumber } from '../shared/interfaces/country';

@Component({
    moduleId: module.id,
    selector: 'country',
    templateUrl: 'country.component.html'
})

export class CountryComponent {

    /**
     * The country object to be displayed.
     */
    @Input() country: ICountry;
    /**
     * The emergency phone numbers of the country
     * object.
     */
    @Input() emergencies: IEmergencyPhoneNumber;

}
