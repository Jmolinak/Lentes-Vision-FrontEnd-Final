import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesvisionLayoutComponent } from './lentesvision-layout.component';

describe('LentesvisionLayoutComponent', () => {
  let component: LentesvisionLayoutComponent;
  let fixture: ComponentFixture<LentesvisionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LentesvisionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LentesvisionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
