import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwsHbaseComponent } from './ews-hbase.component';

describe('EwsHbaseComponent', () => {
  let component: EwsHbaseComponent;
  let fixture: ComponentFixture<EwsHbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwsHbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwsHbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
