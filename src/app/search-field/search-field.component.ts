import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IGifs, Res } from '../interfaces';
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
		if (this.searchText === "") {
			document.querySelector<HTMLElement>("#giphy-search").style.borderColor = "red";
			setTimeout(() => {
				document.querySelector<HTMLElement>("#giphy-search").style.borderColor = "#66afe9";
			}, 3000);
			return;
		}
		
		this.apiService.getImages(this.searchText, 0).subscribe((res: Res) => {
			localStorage.clear();
			this.ngRedux.dispatch({
				type: ADD_GIFS,
				gifs: {
					gifs: res.data
				}
			})
			setTimeout(() => {}, 3000);
			localStorage.setItem('offset', JSON.stringify(0))
			localStorage.setItem('searchText', this.searchText)
			localStorage.setItem('currentSet', JSON.stringify(res.data))
		})
	}
}


