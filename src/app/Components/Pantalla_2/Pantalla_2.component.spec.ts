/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pantalla_2Component } from './Pantalla_2.component';

describe('Pantalla_2Component', () => {
  let component: Pantalla_2Component;
  let fixture: ComponentFixture<Pantalla_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pantalla_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pantalla_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
