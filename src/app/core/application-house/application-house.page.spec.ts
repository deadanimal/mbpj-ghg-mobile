import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicationHousePage } from './application-house.page';

describe('ApplicationHousePage', () => {
  let component: ApplicationHousePage;
  let fixture: ComponentFixture<ApplicationHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationHousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
