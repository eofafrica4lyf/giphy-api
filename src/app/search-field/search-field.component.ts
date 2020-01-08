import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IGifs } from '../interfaces';
import { ADD_GIFS } from '../actions';
import { GiphyApiService } from '../services/giphy-api.service';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
		name = 'Search Field';
		
    constructor(private apiService: GiphyApiService ) {
    }

    ngOnInit() {
		}
		
		onSubmit() {
			this.apiService.getImages().subscribe((res) => {
				console.log(res);
			})
		}
}
