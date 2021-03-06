import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFilterComponent } from './video-filter.component';

describe('VideoFilterComponent', () => {
  let component: VideoFilterComponent;
  let fixture: ComponentFixture<VideoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
