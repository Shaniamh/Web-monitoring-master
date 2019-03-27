import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwsKafkaComponent } from './ews-kafka.component';

describe('EwsKafkaComponent', () => {
  let component: EwsKafkaComponent;
  let fixture: ComponentFixture<EwsKafkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwsKafkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwsKafkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
