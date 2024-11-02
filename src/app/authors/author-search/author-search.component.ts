// src/app/authors/author-search/author-search.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorsService } from '../service/authors.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-author-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private authorsService: AuthorsService = inject(AuthorsService);
  
  searchForm: FormGroup = this.fb.group({
    authorId: ['']
  });
  
  author: Author | null = null;
  errorMessage: string = '';

  onSubmit(): void {
    const authorId = this.searchForm.value.authorId;
    if (authorId) {
      this.authorsService.getAuthor(authorId).subscribe({
        next: (data: Author) => {
          this.author = data;
          this.errorMessage = '';
        },
        error: (_: any) => {
          this.author = null;
          this.errorMessage = 'Author not found';
        }
      });
    }
  }
}