import { TestBed } from '@angular/core/testing';

import { UsersResolver } from './users-resolver';

describe('UserResolverService', () => {
  let service: UsersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
