import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatTemplateComponent } from './threat-template.component';

describe('ThreatTemplateComponent', () => {
  let component: ThreatTemplateComponent;
  let fixture: ComponentFixture<ThreatTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThreatTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
