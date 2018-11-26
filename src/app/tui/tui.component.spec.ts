import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiComponent } from './tui.component';

describe('TuiComponent', () => {
  let component: TuiComponent;
  let fixture: ComponentFixture<TuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
