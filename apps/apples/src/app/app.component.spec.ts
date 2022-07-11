import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { AppleActionsComponent, AppleListComponent } from '@phenix/ui'
import { AppComponent } from './app.component'
import { AppleService } from './services/apple.service'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, AppleActionsComponent, AppleListComponent],
      imports: [HttpClientTestingModule],
      providers: [AppleService],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
