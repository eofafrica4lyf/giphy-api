import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreGifsComponent } from './more-gifs.component';

describe('MoreGifsComponent', () => {
  let component: MoreGifsComponent;
  let fixture: ComponentFixture<MoreGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
