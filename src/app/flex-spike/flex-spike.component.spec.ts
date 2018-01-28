import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSpikeComponent } from './flex-spike.component';

describe('FlexSpikeComponent', () => {
  let component: FlexSpikeComponent;
  let fixture: ComponentFixture<FlexSpikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexSpikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
