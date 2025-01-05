import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHighlighterComponent } from './css-highlighter.component';

describe('CssHighlighterComponent', () => {
  let component: CssHighlighterComponent;
  let fixture: ComponentFixture<CssHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssHighlighterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
