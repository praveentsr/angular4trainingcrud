import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicedemoComponent } from './slicedemo.component';

describe('SlicedemoComponent', () => {
  let component: SlicedemoComponent;
  let fixture: ComponentFixture<SlicedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
