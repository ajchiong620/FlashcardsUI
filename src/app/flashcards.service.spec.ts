import { TestBed } from '@angular/core/testing';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from './flashcard';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('FlashcardsService', () => {
  let service: FlashcardsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlashcardsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(FlashcardsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all flashcards', () => {
    const sampleFlashcards: Flashcard[] = [
      { qid: '35db87b6-c6aa-4526-9a6a-c68d80ed1628', question: 'This is the question?', answer: 'This is the answer!', status: 'unanswered'},
      { qid: '8890a3a0-5cd0-45a7-b293-06b6e5736114', question: 'This is another question?', answer: 'This is another answer!', status: 'unanswered'}
    ];

    service.getAllFlashcards().subscribe((flashcards:Flashcard[]) => {
      expect(flashcards.length).toBe(2);
      expect(flashcards).toEqual(sampleFlashcards);
    });

    const req = httpMock.expectOne(`${service.baseUrl}${service.controllerName}`);
    expect(req.request.method).toBe('GET');
    req.flush(sampleFlashcards);
  });

  it('should get a flashcard by Id', () => {
    const sampleFlashcard: Flashcard = {
      qid: '35db87b6-c6aa-4526-9a6a-c68d80ed1628', question: 'This is the question?', answer: 'This is the answer!', status: 'unanswered'
    };
    service.getFlashcardById('35db87b6-c6aa-4526-9a6a-c68d80ed1628').subscribe((flashcard)=> {
      expect(flashcard).toEqual(sampleFlashcard);
    });
    const req = httpMock.expectOne(`${service.baseUrl}${service.controllerName}/35db87b6-c6aa-4526-9a6a-c68d80ed1628?id=35db87b6-c6aa-4526-9a6a-c68d80ed1628`);
    expect(req.request.method).toBe('GET');
    req.flush(sampleFlashcard);
  });

  it('should update a flashcard', () => {
    const flashcardToEdit:Flashcard={
      qid: '35db87b6-c6aa-4526-9a6a-c68d80ed1628', question: 'This is the question?', answer: 'This is the answer!', status: 'unanswered'
    };
    service.editFlashcard('35db87b6-c6aa-4526-9a6a-c68d80ed1628',flashcardToEdit).subscribe((flashcards) => {
      expect(flashcards).toContain(flashcardToEdit);
    });
    const req = httpMock.expectOne(`${service.baseUrl}${service.controllerName}/35db87b6-c6aa-4526-9a6a-c68d80ed1628`);
    expect(req.request.method).toBe('PUT');
    req.flush([flashcardToEdit]);
  });

  it('should add a new flashcard', () => {
    const newFlashcard:Flashcard={
      qid: '35db87b6-c6aa-4526-9a6a-c68d80ed1628', question: 'This is the question?', answer: 'This is the answer!', status: 'unanswered'
    };
    service.addFlashcard(newFlashcard).subscribe((flashcards) => {
      expect(flashcards).toContain(newFlashcard);
    });
    const req = httpMock.expectOne(`${service.baseUrl}${service.controllerName}`);
    expect(req.request.method).toBe('POST');
    req.flush([newFlashcard]);
  });

  it('should delete a flashcard', () => {
    const flashcardToDelete:Flashcard={
      qid: '35db87b6-c6aa-4526-9a6a-c68d80ed1628', question: 'This is the question?', answer: 'This is the answer!', status: 'unanswered'
    };
    service.deleteFlashcard('35db87b6-c6aa-4526-9a6a-c68d80ed1628').subscribe((flashcards) => {
      expect(flashcards).toContain(flashcardToDelete);
    });
    const req = httpMock.expectOne(`${service.baseUrl}${service.controllerName}/35db87b6-c6aa-4526-9a6a-c68d80ed1628`);
    expect(req.request.method).toBe('DELETE');
    req.flush([flashcardToDelete]);
  });
});