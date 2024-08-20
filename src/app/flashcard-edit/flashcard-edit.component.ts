import { Component, Inject, Input, OnInit } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';
import { Flashcard } from '../flashcard';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-flashcard-edit',
  templateUrl: './flashcard-edit.component.html',
  styleUrl: './flashcard-edit.component.css'
})
export class FlashcardEditComponent implements OnInit{
  editedFlashcard:Flashcard={
    qid:'',
    question: '',
    answer:'',
    status:''
  };

  constructor(private flashcardsService:FlashcardsService,@Inject(MAT_DIALOG_DATA) private data:any,private dialogRef:MatDialogRef<FlashcardEditComponent>){}

  ngOnInit(): void {
      const id = this.data.qid;
      if (id) {
        this.flashcardsService.getFlashcardById(id).subscribe({
          next: (flashcard) => {
            this.editedFlashcard = flashcard;
          },
          error: (err) => {
            console.error('Error fetching flashcard:', err);
          }
        });
      }
    }

  editFlashcard() {
    this.flashcardsService.editFlashcard(this.editedFlashcard.qid,this.editedFlashcard)
    .subscribe({
      next:() =>
      {
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
