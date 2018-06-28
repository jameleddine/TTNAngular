import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiCatComponent } from './detai-cat.component';

describe('DetaiCatComponent', () => {
  let component: DetaiCatComponent;
  let fixture: ComponentFixture<DetaiCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaiCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
