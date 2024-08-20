import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from '../flashcards.service';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private flashcardService:FlashcardsService, public dialog:MatDialog){}

  ngOnInit(): void {
    this.flashcardService.getAllFlashcards()
    .subscribe({
      next:(flashcard:any) =>
      {
        this.flashcards=flashcard;
        console.log(this.flashcards);
      },
      error:(response:any) =>
      {
        console.error('Error fetching flashcards:', response);
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

  openEditDialog(flashcardData:Flashcard) {
    console.log(flashcardData);
    let dialogRef = this.dialog.open(FlashcardEditComponent, {
      width: 'auto',
      data: flashcardData
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  openDeleteConfirmationDialog(flashcardData:Flashcard) {
    let dialogRef=this.dialog.open(FlashcardDeleteComponent, {
      width: 'auto',
      data: flashcardData
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
