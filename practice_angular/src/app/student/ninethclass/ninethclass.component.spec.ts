import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinethclassComponent } from './ninethclass.component';

describe('NinethclassComponent', () => {
  let component: NinethclassComponent;
  let fixture: ComponentFixture<NinethclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NinethclassComponent]
    });
    fixture = TestBed.createComponent(NinethclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
