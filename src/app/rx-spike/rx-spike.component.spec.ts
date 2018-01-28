import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSpikeComponent } from './rx-spike.component';

describe('RxSpikeComponent', () => {
  let component: RxSpikeComponent;
  let fixture: ComponentFixture<RxSpikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSpikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
