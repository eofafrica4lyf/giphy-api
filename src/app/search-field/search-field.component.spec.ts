import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from './search-field.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('SearchFieldComponent', () => {
	let component: SearchFieldComponent;
	let element: HTMLElement;
	let fixture: ComponentFixture<SearchFieldComponent>;
	
	let inputElement: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchFieldComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchFieldComponent);
		component = fixture.componentInstance;
		element = fixture.nativeElement;
		fixture.detectChanges();

		inputElement = fixture.debugElement.query(By.css('.btn'))
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain "Ryan Gosling" as default text', () => {
		// const el = fixture.nativeElement.querySelector("#giphy-search")
		expect(inputElement.nativeElement.enabled).toBeTruthy();
	});


});
