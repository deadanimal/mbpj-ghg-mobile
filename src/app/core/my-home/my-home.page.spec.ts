import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyHomePage } from './my-home.page';

describe('MyHomePage', () => {
  let component: MyHomePage;
  let fixture: ComponentFixture<MyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
