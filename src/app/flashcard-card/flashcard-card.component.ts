import { Component, Input } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from '../flashcards.service';

@Component({
  selector: 'app-flashcard-card',
  templateUrl: './flashcard-card.component.html',
  styleUrl: './flashcard-card.component.css'
})
export class FlashcardCardComponent {
  @Input() flashcardData : Flashcard = {
    qid: '',
    question: '',
    answer: '',
    status: ''
  };
  showAnswer : boolean = false;

  constructor(private flashcardService:FlashcardsService){}

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
    if (this.flashcardData.status !== 'answered') {
      this.flashcardData.status = 'answered';
      this.flashcardService.editFlashcard(this.flashcardData.qid, this.flashcardData)
      .subscribe({
        next:() => {
        },
        error:(response) => {
          console.error('Error updating flashcard:', response);
        }
      });
    }
  }
}
