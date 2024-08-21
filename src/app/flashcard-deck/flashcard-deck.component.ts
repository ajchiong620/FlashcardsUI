import { Component } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from '../flashcards.service';
import { MatDialog } from '@angular/material/dialog';
import { FlashcardAddComponent } from '../flashcard-add/flashcard-add.component';

@Component({
  selector: 'app-flashcard-deck',
  templateUrl: './flashcard-deck.component.html',
  styleUrl: './flashcard-deck.component.css'
})
export class FlashcardDeckComponent {
  flashcards:Flashcard[]=[];
  constructor(private flashcardService:FlashcardsService, public dialog:MatDialog){}

  ngOnInit() : void {
    this.flashcardService.getAllFlashcards()
    .subscribe({
      next:(flashcard:any) => {
        this.flashcards=flashcard;
      },
      error:(response:any) => {
        console.error('Error fetching flashcards: ', response);
      }
    })
  }

  openAddDialog() {
    let dialogRef = this.dialog.open(FlashcardAddComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
