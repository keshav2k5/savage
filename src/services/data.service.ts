import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    getDataFromJson() {
        return this.http.get('./../providers/data.provider.json').map(res => res.json());
    }
    get() {
        //TODO: Need to implement HTTP Get
    }

    post() {
        //TODO: Need to implement HTTP Post
    }

}