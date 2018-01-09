import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHolderComponent } from './dynamic-holder.component';

describe('DynamicHolderComponent', () => {
  let component: DynamicHolderComponent;
  let fixture: ComponentFixture<DynamicHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
