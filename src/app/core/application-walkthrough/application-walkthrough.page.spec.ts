import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicationWalkthroughPage } from './application-walkthrough.page';

describe('ApplicationWalkthroughPage', () => {
  let component: ApplicationWalkthroughPage;
  let fixture: ComponentFixture<ApplicationWalkthroughPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationWalkthroughPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationWalkthroughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
