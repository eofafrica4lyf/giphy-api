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
	searchText: string = "Ryan Gosling";
	previousSearchItem = "";


	constructor(private apiService: GiphyApiService, private ngRedux: NgRedux<IGifs>) {
	}

	ngOnInit() {
	}

	onSubmit() {
		// console.log(this.searchText);
		if (this.searchText === "") {
			// console.log("Nope");
			document.querySelector<HTMLElement>("#giphy-search").style.borderColor = "red";
			setTimeout(() => {
				document.querySelector<HTMLElement>("#giphy-search").style.borderColor = "#66afe9";
			}, 3000);
			return;
		}
		// console.log('Call API');
		
		this.apiService.getImages(this.searchText).subscribe((res: Res) => {
			// console.log(res);
			localStorage.clear();
			this.ngRedux.dispatch({
				type: ADD_GIFS,
				gifs: {
					gifs: res.data
				}
			})
			setTimeout(() => {}, 3000);
			localStorage.setItem('currentSet', JSON.stringify(res.data))
		})
	}
}

interface Res{
	data: object;
}
