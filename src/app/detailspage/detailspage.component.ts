import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';

@Component({
	selector: 'app-detailspage',
	templateUrl: './detailspage.component.html',
	styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
	@select() gifs;

	public id: string;
	public GifDetails;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.GifDetails = this.gifs;
		console.log('this.GifDetails');
		console.log(this.gifs);
		
		this.id = this.route.snapshot.paramMap.get('id');

	}

	find(gifs, id) {
		console.log(gifs);
		console.log(id);

		// gifs.find(gif => {
		// 	return gif.id === id;
		// })
		return "Whatever";
	}

}
