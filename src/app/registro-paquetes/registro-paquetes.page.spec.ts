import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPaquetesPage } from './registro-paquetes.page';

describe('RegistroPaquetesPage', () => {
  let component: RegistroPaquetesPage;
  let fixture: ComponentFixture<RegistroPaquetesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroPaquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
