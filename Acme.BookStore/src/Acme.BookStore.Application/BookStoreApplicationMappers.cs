using AutoMapper;
using Acme.BookStore.Books;

namespace Acme.BookStore;

public class BookStoreApplicationMappers : Profile
{
    public BookStoreApplicationMappers()
    {
        /* CreateMap kuralı, DTO ile Entity arasındaki köprüyü kurar */
        CreateMap<Book, BookDto>();
        CreateMap<CreateUpdateBookDto, Book>();
    }
}