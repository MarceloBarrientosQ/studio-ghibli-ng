import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItem } from './film-item';

describe('FilmItem', () => {
  let component: FilmItem;
  let fixture: ComponentFixture<FilmItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
