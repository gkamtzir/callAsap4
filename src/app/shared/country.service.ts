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

    private handleError(error: Response){
        let errorMessage = 'The service is not available right now. Sorry for the inconvenience';
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    getCountryName(): Observable<ICountryName> {
        return this._http
                    .get('http://ip-api.com/json')
                    .map((response: Response) => <ICountryName>response.json())
                    .catch(this.handleError);
    }

    getCountries(): Observable<ICountry[]> {
        return this._http
                    .get('http://gkamtzir.webpages.auth.gr/api.php/country')
                    .map((response: Response) => <ICountry[]>response.json())
                    .catch(this.handleError);
    }

    getCountry(country: string): Observable<ICountry> {
        return this._http
                    .get('http://gkamtzir.webpages.auth.gr/api.php/country/' + country)
                    .map((response: Response) => <ICountry>response.json())
                    .catch(this.handleError);
    }

    getEmergencyPhoneNumbers(country: ICountry): Observable<IEmergencyPhoneNumber[]> {
        return this._http
                    .get('http://gkamtzir.webpages.auth.gr/api.php/country/emergency/' + country.Name)
                    .map((response: Response) => <IEmergencyPhoneNumber[]>response.json())
                    .catch(this.handleError);
    }

}
