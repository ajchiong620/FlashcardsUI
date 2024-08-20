import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardTableComponent } from './flashcard-table.component';

describe('FlashcardTableComponent', () => {
  let component: FlashcardTableComponent;
  let fixture: ComponentFixture<FlashcardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashcardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
