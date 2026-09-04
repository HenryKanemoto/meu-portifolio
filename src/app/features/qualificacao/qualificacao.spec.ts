import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Qualificacao } from './qualificacao';

describe('Qualificacao', () => {
  let component: Qualificacao;
  let fixture: ComponentFixture<Qualificacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qualificacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Qualificacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
