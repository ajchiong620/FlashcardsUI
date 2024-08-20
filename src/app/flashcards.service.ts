import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Flashcard } from './flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  baseUrl:string='https://localhost:7015';
  controllerName:string='/api/Flashcards';

  constructor(private http:HttpClient) { }

  getAllFlashcards():Observable<Flashcard[]>
  {
    return this.http.get<Flashcard[]>(`${this.baseUrl}${this.controllerName}`);
  }

  getFlashcardById(id:string):Observable<Flashcard>
  {
    const params=new HttpParams().set('id',id);
    return this.http.get<Flashcard>(`${this.baseUrl}${this.controllerName}/${id}`, { params }).pipe(
      catchError((error) => {
        console.error('Error: ', error);
        return throwError(() => new Error('Error fetching the Flashcard'));
      })
    );
  }
  
  addFlashcard(newFlashcard:Flashcard):Observable<Flashcard[]>
  {
    newFlashcard.qid='00000000-0000-0000-0000-000000000000';
    return this.http.post<Flashcard[]>(`${this.baseUrl}${this.controllerName}`, newFlashcard);
  }

  editFlashcard(id:string,editedFlashcard:Flashcard):Observable<Flashcard[]>
  {
    return this.http.put<Flashcard[]>(`${this.baseUrl}${this.controllerName}/${id}`, editedFlashcard);
  }

  deleteFlashcard(id:string):Observable<Flashcard[]>
  {
    return this.http.delete<Flashcard[]>(`${this.baseUrl}${this.controllerName}/${id}`);
  }
}
