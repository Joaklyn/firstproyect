import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaquetesRepartidorPage } from './paquetes-repartidor.page';

describe('PaquetesRepartidorPage', () => {
  let component: PaquetesRepartidorPage;
  let fixture: ComponentFixture<PaquetesRepartidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaquetesRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
