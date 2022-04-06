import { TestBed } from '@angular/core/testing';

import { ProfilePictureImageService } from './profile-picture-image.service';

describe('ProfilePictureImageService', () => {
  let service: ProfilePictureImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilePictureImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
