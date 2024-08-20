import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from '../flashcards.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-flashcard-add',
  templateUrl: './flashcard-add.component.html',
  styleUrl: './flashcard-add.component.css'
})
export class FlashcardAddComponent implements OnInit {
  
  newFlashcard:Flashcard={
    qid:'',
    question:'',
    answer:'',
    status:'unanswered'
  }

  constructor(private flashcardsService:FlashcardsService,private dialogRef:MatDialogRef<FlashcardAddComponent>){}

  ngOnInit() : void {

  }

  addFlashcard()
  {
    this.flashcardsService.addFlashcard(this.newFlashcard)
    .subscribe({
      next: ()=>
      {
        this.closeDialog();
      },
      error: (response) =>
      {
        console.error('Error adding flashcard:', response);
      }
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
