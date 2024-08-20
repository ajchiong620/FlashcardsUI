import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardTableComponent } from './flashcard-table/flashcard-table.component';
import { FlashcardAddComponent } from './flashcard-add/flashcard-add.component';

const routes: Routes = [
  {path: 'flashcards-table',component:FlashcardTableComponent},
  {path:'add-vehicle',component:FlashcardAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
