import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamppageComponent } from './camppage.component';

describe('CamppageComponent', () => {
  let component: CamppageComponent;
  let fixture: ComponentFixture<CamppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamppageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
