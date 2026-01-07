# Derleme Aşaması
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "src/Acme.BookStore.HttpApi.Host/Acme.BookStore.HttpApi.Host.csproj"
RUN dotnet publish "src/Acme.BookStore.HttpApi.Host/Acme.BookStore.HttpApi.Host.csproj" -c Release -o /app/publish

# Çalıştırma Aşaması
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT ["dotnet", "Acme.BookStore.HttpApi.Host.dll"]