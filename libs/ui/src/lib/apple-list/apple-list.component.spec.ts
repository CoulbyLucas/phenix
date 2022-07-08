import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppleListComponent } from './apple-list.component'

describe('AppleListComponent', () => {
  let component: AppleListComponent
  let fixture: ComponentFixture<AppleListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppleListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
