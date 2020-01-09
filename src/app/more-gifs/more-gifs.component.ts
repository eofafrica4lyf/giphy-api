import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { ADD_MORE_GIFS } from '../actions';
import { GiphyApiService } from '../services/giphy-api.service';
import { Res, IGifs } from '../interfaces';

@Component({
	selector: 'app-more-gifs',
	templateUrl: './more-gifs.component.html',
	styleUrls: ['./more-gifs.component.css']
})
export class MoreGifsComponent implements OnInit {

	constructor(private apiService: GiphyApiService, private ngRedux: NgRedux<IGifs>) {
	}

	ngOnInit() {
	}

	onSubmit() {
		console.log("More!!!");

		let offset = (parseInt(localStorage.offset) || 0) + 24;
		let searchText = localStorage.searchText
		console.log("offset", offset);

		this.apiService.getImages(searchText, offset).subscribe((res: Res) => {
			// console.log(res);
			localStorage.clear();
			this.ngRedux.dispatch({
				type: ADD_MORE_GIFS,
				gifs: {
					gifs: res.data
				}
			})
			setTimeout(() => { }, 3000);

			localStorage.setItem('offset', JSON.stringify(offset))
			localStorage.setItem('searchText', searchText)
			localStorage.setItem('currentSet', JSON.stringify(res.data))
		})
	}

}
