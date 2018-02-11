import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpikeComponent } from './form-spike.component';

describe('FormSpikeComponent', () => {
  let component: FormSpikeComponent;
  let fixture: ComponentFixture<FormSpikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSpikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
