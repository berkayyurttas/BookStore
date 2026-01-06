using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Acme.BookStore.Books;

namespace Acme.BookStore.Books;

public interface IBookAppService :
    ICrudAppService< // Kitaplar için Ekle-Sil-Güncelle-Listele özelliklerini otomatik getirir
        BookDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateBookDto>
{
}