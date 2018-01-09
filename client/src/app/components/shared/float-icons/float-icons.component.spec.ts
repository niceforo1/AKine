import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatIconsComponent } from './float-icons.component';

describe('FloatIconsComponent', () => {
  let component: FloatIconsComponent;
  let fixture: ComponentFixture<FloatIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
