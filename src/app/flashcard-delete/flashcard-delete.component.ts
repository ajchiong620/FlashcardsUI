import { Component, Inject } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';
import { Flashcard } from '../flashcard';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private flashcardsService:FlashcardsService,private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
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
    })
  }

  deleteFlashcard() {
    this.flashcardsService.deleteFlashcard(this.flashcardToDelete.qid)
    .subscribe({
      next:() => {
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
