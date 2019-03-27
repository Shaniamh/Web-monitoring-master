import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCsvComponent } from './write-csv.component';

describe('WriteCsvComponent', () => {
  let component: WriteCsvComponent;
  let fixture: ComponentFixture<WriteCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
