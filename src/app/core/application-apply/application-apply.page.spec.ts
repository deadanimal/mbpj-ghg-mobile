import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicationApplyPage } from './application-apply.page';

describe('ApplicationApplyPage', () => {
  let component: ApplicationApplyPage;
  let fixture: ComponentFixture<ApplicationApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationApplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
