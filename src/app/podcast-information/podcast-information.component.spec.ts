import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastInformationComponent } from './podcast-information.component';

describe('PodcastInformationComponent', () => {
  let component: PodcastInformationComponent;
  let fixture: ComponentFixture<PodcastInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastInformationComponent]
    });
    fixture = TestBed.createComponent(PodcastInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
