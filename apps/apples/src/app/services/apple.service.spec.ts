import { TestBed } from '@angular/core/testing'

import { AppleService } from './apple.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppleService', () => {
  let service: AppleService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppleService],
    })
    service = TestBed.inject(AppleService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
