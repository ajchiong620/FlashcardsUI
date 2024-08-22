import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from '../flashcards.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FlashcardAddComponent } from '../flashcard-add/flashcard-add.component';
import { FlashcardEditComponent } from '../flashcard-edit/flashcard-edit.component';
import { FlashcardDeleteComponent } from '../flashcard-delete/flashcard-delete.component';

@Component({
  selector: 'app-flashcard-table',
  templateUrl: './flashcard-table.component.html',
  styleUrl: './flashcard-table.component.css'
})
export class FlashcardTableComponent implements OnInit {

  flashcards:Flashcard[]=[];
  constructor(private flashcardService:FlashcardsService){}

  ngOnInit(): void {
    this.flashcardService.getAllFlashcards()
    .subscribe({
      next:(flashcard:any) =>
      {
        this.flashcards=flashcard;
      },
      error:(response:any) =>
      {
        console.error('Error fetching flashcards:', response);
      }
    })
  }
}
