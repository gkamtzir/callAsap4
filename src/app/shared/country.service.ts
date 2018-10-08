import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICountry, IEmergencyPhoneNumber, ICountryName } from './interfaces/country';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CountryService {

    constructor(private _http: Http){}

    /**
     * Creates an error message and returns it
     * as an observable.
     * @param error The error response.
     * @returns An observable containing an
     * error message.
     */
    private handleError(error: Response){
        let errorMessage = 'The service is not available right now. Sorry for the inconvenience';
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    /**
     * Converts caller's IP to the country where this IP 
     * is registered.
     * @returns An observable containing the country
     * name.
     */
    getCountryName(): Observable<ICountryName> {
        return this._http
                    .get('http://ip-api.com/json')
                    .map((response: Response) => <ICountryName>response.json())
                    .catch(this.handleError);
    }

    /**
     * Fetches all the available countries.
     * @returns An observable containing all
     * the available countries.
     */
    getCountries(): Observable<ICountry[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country')
                    .map((response: Response) => <ICountry[]>response.json())
                    .catch(this.handleError);
    }

    /**
     * Fetches the information of the given
     * country.
     * @param country The country name.
     * @returns An observable containing the 
     * information of the given country. 
     */
    getCountry(country: string): Observable<ICountry> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/' + country)
                    .map((response: Response) => <ICountry>response.json())
                    .catch(this.handleError);
    }

    /**
     * Fetches the emergency phone numbers
     * of the given country.
     * @param country The country name.
     * @returns An observable containing the
     * emergency phone numbers of the given 
     * country.
     */
    getEmergencyPhoneNumbers(country: ICountry): Observable<IEmergencyPhoneNumber[]> {
        return this._http
                    .get('http://83.212.115.201/api.php/country/emergency/' + country.Name)
                    .map((response: Response) => <IEmergencyPhoneNumber[]>response.json())
                    .catch(this.handleError);
    }

}
