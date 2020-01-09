import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IGifs } from '../interfaces';

@Component({
	selector: 'app-detailspage',
	templateUrl: './detailspage.component.html',
	styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
	@select('gifs') gifs: Observable<IGifs>

	public id: string;
	public GifDetails;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		let wholeData = JSON.parse(localStorage.getItem('currentSet'));		

		this.id = this.route.snapshot.paramMap.get('id');

		this.GifDetails = wholeData.find(gif => {
			return gif.id === this.id;
		})
	}

}
