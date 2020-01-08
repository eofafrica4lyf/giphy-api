import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {
	API_KEY = 'it1PwMOxEAo9sH6qlZRKCmpt6KJNmkj0';
	
	constructor(private httpClient: HttpClient) { }
	
	public getImages(searchTerm){
		let randomNumber = Math.floor(10 * Math.random())
		return this.httpClient.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${searchTerm}&limit=25&offset=${randomNumber}&rating=G&lang=en`)
	}
}
