📚 BookStore Management System (ABP Framework & Docker)
Bu proje, ABP Framework kullanılarak geliştirilmiş, kitap yönetimi sağlayan kurumsal seviyede bir web uygulamasıdır. Proje; Angular (Frontend), .NET Core API (Backend) ve PostgreSQL (Database) servislerinin bir paket halinde Docker üzerinde çalıştırılması esasına dayanır.

🚀 Teknolojiler
Framework: ABP Framework (Domain Driven Design - DDD)

Frontend: Angular & LeptonX Lite Theme

Backend: .NET Core Web API

Veritabanı: PostgreSQL

Deployment: Docker & Docker Compose

🛠️ Kurulum ve Çalıştırma
Proje tamamen Dockerize edilmiştir. Herhangi bir SDK veya veritabanı kurulumuna gerek kalmadan aşağıdaki adımlarla çalıştırılabilir:

1. Gereksinimler
Bilgisayarınızda Docker Desktop yüklü ve çalışır durumda olmalıdır.

2. Projeyi Ayağa Kaldırma
Terminalde projenin ana dizinine gidin ve şu komutu çalıştırın:

Bash

docker-compose up -d
Bu komut; API (44388), Angular (4200) ve PostgreSQL (5432) servislerini otomatik olarak başlatacaktır.

3. Erişim Adresleri
Frontend (Angular UI): http://localhost:4200

Backend (Swagger API): http://localhost:44388/swagger

🏗️ Proje Mimarisi ve Yapılan Düzenlemeler
Bugün gerçekleştirilen kritik güncellemeler:

Docker Entegrasyonu: Tüm uygulama servisleri Docker konteynırlarına taşındı.

Port Yönetimi: API servisi Docker üzerinde 44388 portuna sabitlendi ve Angular ile tam uyumlu hale getirildi.

CORS Politikası: Backend üzerindeki CORS ayarları, localhost:4200 adresinden gelen isteklere izin verecek şekilde appsettings.json üzerinden güncellendi.

Veritabanı Migration: DbMigrator aracı kullanılarak PostgreSQL şeması ve başlangıç verileri (Seed Data) otomatik olarak oluşturuldu.
