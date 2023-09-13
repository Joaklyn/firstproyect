import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerPaquetesPage } from './ver-paquetes.page';

describe('VerPaquetesPage', () => {
  let component: VerPaquetesPage;
  let fixture: ComponentFixture<VerPaquetesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerPaquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
