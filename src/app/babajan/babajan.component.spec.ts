import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabajanComponent } from './babajan.component';

describe('BabajanComponent', () => {
  let component: BabajanComponent;
  let fixture: ComponentFixture<BabajanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabajanComponent]
    });
    fixture = TestBed.createComponent(BabajanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
