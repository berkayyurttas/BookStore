

import { ListService, PagedResultDto, CoreModule } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../proxy/book.service';
import { BookDto } from '../proxy/books/models';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgbDropdownModule
  ],
  templateUrl: './book.html',
  providers: [ListService],
})
export class BookComponent implements OnInit {
  book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;
  form: FormGroup;
  isModalOpen = false;
  // Düzenleme işlemi için seçili kitabı tutacak değişken
  selectedBook = {} as BookDto; 

  constructor(
    public readonly list: ListService,
    private bookService: BookService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit() {
    const bookStreamCreator = (query) => this.bookService.getList(query);
    this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
      this.book = response;
    });
  }

  // Yeni kitap ekleme modalını açar
  createBook() {
    this.selectedBook = {} as BookDto; // Seçili kitabı sıfırla
    this.buildForm();
    this.isModalOpen = true;
  }

  // Mevcut kitabı düzenlemek için modalı açar
  editBook(id: string) {
    this.bookService.get(id).subscribe((book) => {
      this.selectedBook = book;
      this.buildForm();
      this.form.patchValue(book); // Formu kitabın eski verileriyle doldurur
      this.isModalOpen = true;
    });
  }

  // Silme işlemi
  delete(id: string) {
    this.confirmation.warn('::AreYouSureConfirmation', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.bookService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedBook.name || '', Validators.required],
      type: [this.selectedBook.type || null, Validators.required],
      publishDate: [
        this.selectedBook.publishDate ? this.selectedBook.publishDate.split('T')[0] : null, 
        Validators.required
      ],
      price: [this.selectedBook.price || null, Validators.required],
    });
  }

  // Kaydetme işlemi (Hem Ekleme hem Güncelleme yapar)
  save() {
    if (this.form.invalid) return;

    // Eğer selectedBook.id varsa güncelleme (update), yoksa ekleme (create) yap
    const request = this.selectedBook.id
      ? this.bookService.update(this.selectedBook.id, this.form.value)
      : this.bookService.create(this.form.value);

    request.subscribe({
      next: () => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
      },
      error: (err) => alert("Hata oluştu: " + err.message)
    });
  }
}