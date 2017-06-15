import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiLogViewerComponent } from './ri-log-viewer.component';

describe('RiLogViewerComponent', () => {
  let component: RiLogViewerComponent;
  let fixture: ComponentFixture<RiLogViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiLogViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiLogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
