import { Component, Inject, Input, OnInit } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';
import { Flashcard } from '../flashcard';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(private flashcardsService:FlashcardsService,private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
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
      })
    }

  editFlashcard() {
    this.editedFlashcard.status = 'unanswered';
    this.flashcardsService.editFlashcard(this.editedFlashcard.qid,this.editedFlashcard)
    .subscribe({
      next:() =>
      {
        this.router.navigate(['flashcards-table']);
      },
      error:(response) => {
        console.error('Error editing flashcard:', response);
      }
    });
  }

  onCancel() {
    this.router.navigate(['flashcards-table']);
  }
}
