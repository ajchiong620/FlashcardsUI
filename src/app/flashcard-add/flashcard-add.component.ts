import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FlashcardsService } from '../flashcards.service';
import { Router } from '@angular/router';
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

  constructor(private flashcardsService:FlashcardsService,private router:Router){}

  ngOnInit() : void {

  }

  addFlashcard()
  {
    this.flashcardsService.addFlashcard(this.newFlashcard)
    .subscribe({
      next: ()=>
      {
        this.router.navigate(['home']);
      },
      error: (response) =>
      {
        console.error('Error adding flashcard:', response);
      }
    })
  }

  onCancel() {
    this.router.navigate(['home']);
  }
}
