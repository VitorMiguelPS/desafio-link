import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListNotFoundComponent } from './movies-list-not-found.component';

describe('MoviesListNotFoundComponent', () => {
  let component: MoviesListNotFoundComponent;
  let fixture: ComponentFixture<MoviesListNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
