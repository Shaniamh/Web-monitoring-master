import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwsIssueComponent } from './ews-issue.component';

describe('EwsIssueComponent', () => {
  let component: EwsIssueComponent;
  let fixture: ComponentFixture<EwsIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwsIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwsIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
