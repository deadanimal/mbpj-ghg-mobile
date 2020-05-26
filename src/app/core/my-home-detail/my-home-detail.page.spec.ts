import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyHomeDetailPage } from './my-home-detail.page';

describe('MyHomeDetailPage', () => {
  let component: MyHomeDetailPage;
  let fixture: ComponentFixture<MyHomeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyHomeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
