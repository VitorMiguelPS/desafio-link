import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListFoundComponent } from './movies-list-found.component';

describe('MoviesListFoundComponent', () => {
  let component: MoviesListFoundComponent;
  let fixture: ComponentFixture<MoviesListFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
