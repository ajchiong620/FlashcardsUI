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
  constructor(private flashcardService:FlashcardsService, public dialog:MatDialog){}
  dialogConfig : MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '250px',
    height: '',
    position: {
        top: '50vh',
        left: '50vw'
    },
    panelClass:'makeItMiddle'
  }

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

  openAddDialog() {
    let dialogRef = this.dialog.open(FlashcardAddComponent,this.dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  openEditDialog(flashcardData:Flashcard) {
    console.log(flashcardData);
    let dialogRef = this.dialog.open(FlashcardEditComponent, {
      width: '400px',
      height: '600px',
      data: flashcardData
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  openDeleteConfirmationDialog(flashcardData:Flashcard) {
    let dialogRef=this.dialog.open(FlashcardDeleteComponent, {
      width: '400px',
      data: flashcardData
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
