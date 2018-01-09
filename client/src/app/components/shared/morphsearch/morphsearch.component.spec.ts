import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphsearchComponent } from './morphsearch.component';

describe('MorphsearchComponent', () => {
  let component: MorphsearchComponent;
  let fixture: ComponentFixture<MorphsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
