import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardTableComponent } from './flashcard-table/flashcard-table.component';
import { FlashcardAddComponent } from './flashcard-add/flashcard-add.component';
import { FlashcardDeckComponent } from './flashcard-deck/flashcard-deck.component';
import { HomeComponent } from './home/home.component';
import { FlashcardEditComponent } from './flashcard-edit/flashcard-edit.component';

const routes: Routes = [
  {path: 'flashcards-table',component:FlashcardTableComponent},
  {path:'add-vehicle',component:FlashcardAddComponent},
  {path:'flashcards-deck',component:FlashcardDeckComponent},
  {path:'home',component:HomeComponent},
  {path:'add-flashcard',component:FlashcardAddComponent},
  {path:'edit-flashcard',component:FlashcardEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
