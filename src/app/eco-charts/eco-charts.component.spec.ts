import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoChartsComponent } from './eco-charts.component';

describe('EcoChartsComponent', () => {
  let component: EcoChartsComponent;
  let fixture: ComponentFixture<EcoChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
