import { Component, Input, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IGifs } from '../interfaces';

@Component({
	selector: 'app-results-list',
	templateUrl: './results-list.component.html',
	styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
	@select('gifs') gifs : Observable<IGifs>
	// public storageData;
	public pulledFromApi:boolean = true;

	ngOnInit() {		
		// if(localStorage.getItem('currentSet')){
		// 	this.storageData = JSON.parse(localStorage.getItem('currentSet'));
		// }
		// console.log(this.storageData);
		
	}

}
