import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommsdisplayComponent } from './commsdisplay.component';

describe('CommsdisplayComponent', () => {
  let component: CommsdisplayComponent;
  let fixture: ComponentFixture<CommsdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommsdisplayComponent]
    });
    fixture = TestBed.createComponent(CommsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
