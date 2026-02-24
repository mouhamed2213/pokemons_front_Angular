import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemon } from './detail.pokemon';

describe('DetailPokemon', () => {
  let component: DetailPokemon;
  let fixture: ComponentFixture<DetailPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
