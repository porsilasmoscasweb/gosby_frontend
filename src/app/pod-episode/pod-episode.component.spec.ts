import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodEpisodeComponent } from './pod-episode.component';

describe('PodEpisodeComponent', () => {
  let component: PodEpisodeComponent;
  let fixture: ComponentFixture<PodEpisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodEpisodeComponent]
    });
    fixture = TestBed.createComponent(PodEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
