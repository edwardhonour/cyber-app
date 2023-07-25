import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatConsTemplateComponent } from './threat-cons-template.component';

describe('ThreatConsTemplateComponent', () => {
  let component: ThreatConsTemplateComponent;
  let fixture: ComponentFixture<ThreatConsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThreatConsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatConsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
