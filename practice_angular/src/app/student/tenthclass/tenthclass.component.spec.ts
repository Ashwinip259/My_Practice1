import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthclassComponent } from './tenthclass.component';

describe('TenthclassComponent', () => {
  let component: TenthclassComponent;
  let fixture: ComponentFixture<TenthclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenthclassComponent]
    });
    fixture = TestBed.createComponent(TenthclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
