import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyHomeAddPage } from './my-home-add.page';

describe('MyHomeAddPage', () => {
  let component: MyHomeAddPage;
  let fixture: ComponentFixture<MyHomeAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyHomeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
