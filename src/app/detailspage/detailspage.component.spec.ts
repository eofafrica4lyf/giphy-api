import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailspageComponent } from './detailspage.component';

describe('DetailspageComponent', () => {
  let component: DetailspageComponent;
  let fixture: ComponentFixture<DetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule],
      declarations: [ DetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
