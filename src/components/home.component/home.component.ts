import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    p = 1;
    collection: Array<{ id: number, name: string, description: string, field3: string, field4: string, field5: string, }> = new Array();
    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._dataService.getDataFromJson().subscribe((data) => {
            this.collection = data;
        });
    }
}