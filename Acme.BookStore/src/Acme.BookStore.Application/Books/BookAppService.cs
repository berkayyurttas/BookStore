using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Acme.BookStore.Books;

namespace Acme.BookStore;

public class BookAppService :
    CrudAppService<
        Book, // Veritabanı tablon
        BookDto, // Dışarıya verdiğin veri
        Guid, // Kitabın kimlik tipi
        PagedAndSortedResultRequestDto, // Sayfalama ayarları
        CreateUpdateBookDto>, // Kayıt ve güncelleme için gereken veri
    IBookAppService // Contracts katmanındaki arayüzün
{
    public BookAppService(IRepository<Book, Guid> repository)
        : base(repository)
    {
    }
}