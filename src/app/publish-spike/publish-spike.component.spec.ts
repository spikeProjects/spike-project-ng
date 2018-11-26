import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishSpikeComponent } from './publish-spike.component';

describe('PublishSpikeComponent', () => {
  let component: PublishSpikeComponent;
  let fixture: ComponentFixture<PublishSpikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishSpikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
