import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerRepartidoresPage } from './ver-repartidores.page';

describe('VerRepartidoresPage', () => {
  let component: VerRepartidoresPage;
  let fixture: ComponentFixture<VerRepartidoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerRepartidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
