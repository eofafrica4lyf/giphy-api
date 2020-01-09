import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';

import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { rootReducer, INITIAL_STATE } from './store'
import { IGifs } from './interfaces';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { MoreGifsComponent } from './more-gifs/more-gifs.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchFieldComponent,
		ResultsListComponent,
		HomepageComponent,
		DetailspageComponent,
		MoreGifsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgReduxModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(ngRedux: NgRedux<IGifs>) {
		ngRedux.configureStore(rootReducer, INITIAL_STATE);
	}
}
