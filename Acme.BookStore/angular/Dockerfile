FROM nginx:alpine
# Bilgisayarında yeni oluşan dosyaları Nginx içine kopyalıyoruz
COPY dist/BookStore/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]