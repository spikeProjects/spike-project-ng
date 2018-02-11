import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibsSpikeComponent } from './libs-spike.component';

describe('LibsSpikeComponent', () => {
  let component: LibsSpikeComponent;
  let fixture: ComponentFixture<LibsSpikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibsSpikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibsSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
