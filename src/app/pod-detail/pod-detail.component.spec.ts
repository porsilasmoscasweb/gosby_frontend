import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodDetailComponent } from './pod-detail.component';

describe('PodDetailComponent', () => {
  let component: PodDetailComponent;
  let fixture: ComponentFixture<PodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodDetailComponent]
    });
    fixture = TestBed.createComponent(PodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
