import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRepartidorPage } from './detalle-repartidor.page';

describe('DetalleRepartidorPage', () => {
  let component: DetalleRepartidorPage;
  let fixture: ComponentFixture<DetalleRepartidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
