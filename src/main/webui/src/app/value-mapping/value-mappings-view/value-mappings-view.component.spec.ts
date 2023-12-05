import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMappingsViewComponent } from './value-mappings-view.component';

describe('ValueMappingsViewComponent', () => {
  let component: ValueMappingsViewComponent;
  let fixture: ComponentFixture<ValueMappingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValueMappingsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueMappingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
