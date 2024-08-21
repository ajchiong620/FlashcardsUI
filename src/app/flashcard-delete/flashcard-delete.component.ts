import { Component, Inject } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';
import { Flashcard } from '../flashcard';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-flashcard-delete',
  templateUrl: './flashcard-delete.component.html',
  styleUrl: './flashcard-delete.component.css'
})
export class FlashcardDeleteComponent {
  flashcardToDelete:Flashcard={
    qid:'',
    question:'',
    answer:'',
    status:''
  };

  constructor(private flashcardsService:FlashcardsService,@Inject(MAT_DIALOG_DATA) private data:any,private dialogRef:MatDialogRef<FlashcardDeleteComponent>){}

  ngOnInit(): void {
    const id = this.data.qid;
    if (id) {
      this.flashcardsService.getFlashcardById(id).subscribe({
        next: (flashcard) => {
          this.flashcardToDelete = flashcard;
        },
        error: (err) => {
          console.error('Error fetching flashcard:', err);
        }
      });
    }
  }

  deleteFlashcard() {
    this.flashcardsService.deleteFlashcard(this.flashcardToDelete.qid)
    .subscribe({
      next:() => {
        this.closeDialog();
      },
      error:(response) => {
        console.error('Error editing flashcard:', response);
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
