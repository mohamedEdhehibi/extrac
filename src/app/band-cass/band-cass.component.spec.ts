import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandCassComponent } from './band-cass.component';

describe('BandCassComponent', () => {
  let component: BandCassComponent;
  let fixture: ComponentFixture<BandCassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandCassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandCassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
