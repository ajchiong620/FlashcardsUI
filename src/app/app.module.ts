import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlashcardTableComponent } from './flashcard-table/flashcard-table.component';
import { FlashcardAddComponent } from './flashcard-add/flashcard-add.component';
import { FlashcardEditComponent } from './flashcard-edit/flashcard-edit.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FlashcardsService } from './flashcards.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashcardTableComponent,
    FlashcardAddComponent,
    FlashcardEditComponent,
    FlashcardDeleteComponent,
    FlashcardCardComponent,
    FlashcardDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogContent,
    MatLabel,
    MatDialogActions,
    BrowserAnimationsModule
  ],
  providers: [
    FlashcardsService,
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }import { MatCommonModule } from '@angular/material/core';
import { FlashcardDeleteComponent } from './flashcard-delete/flashcard-delete.component';
import { FlashcardCardComponent } from './flashcard-card/flashcard-card.component';
import { FlashcardDeckComponent } from './flashcard-deck/flashcard-deck.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

