import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplify3Component } from './simplify3.component';

describe('Simplify3Component', () => {
  let component: Simplify3Component;
  let fixture: ComponentFixture<Simplify3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Simplify3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simplify3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
