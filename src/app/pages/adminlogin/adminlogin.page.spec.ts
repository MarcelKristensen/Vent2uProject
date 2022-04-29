import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminloginPage } from './adminlogin.page';

describe('AdminloginPage', () => {
  let component: AdminloginPage;
  let fixture: ComponentFixture<AdminloginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloginPage ],
      imports: [IonicModule.forRoot(),ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })); 
  it('should create form on init',()=>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
