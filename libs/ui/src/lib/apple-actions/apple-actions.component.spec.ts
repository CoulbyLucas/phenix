import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppleActionsComponent } from './apple-actions.component'

describe('AppleActionsComponent', () => {
  let component: AppleActionsComponent
  let fixture: ComponentFixture<AppleActionsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleActionsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppleActionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
