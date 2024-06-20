/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pantalla_1Component } from './Pantalla_1.component';

describe('Pantalla_1Component', () => {
  let component: Pantalla_1Component;
  let fixture: ComponentFixture<Pantalla_1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pantalla_1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pantalla_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
