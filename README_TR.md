# Korsan Dünyası 2D — ilk prototip

Bu proje tarayıcıda çalışan, Socket.IO ile gerçek zamanlı oyuncu durumlarını paylaşan başlangıç prototipidir.

## iPhone ile çalıştırma
1. iPhone Safari'de Replit gibi Node.js uygulaması çalıştırabilen bir bulut geliştirme ortamı aç.
2. Yeni bir Node.js projesi oluştur.
3. ZIP içindeki dosyaları yükle; `public` klasörünü ve içindeki `index.html` dosyasını aynı yapıda tut.
4. Ortamın terminalinde `npm install` çalıştır.
5. `npm start` çalıştır ve ortamın verdiği web önizleme/public URL'sini aç.
6. Aynı URL'yi başka bir telefonda açarak iki istemciyle test et.

## Kontroller
- Sol joystick: hareket
- Sağdaki TOP AT: yakındaki oyuncuya hasar verme denemesi

## Prototip sınırları
Bu, oynanışın temelini gösteren bir prototiptir; üretime hazır oyun değildir. Henüz hesap sistemi, veritabanı, güvenli sunucu tarafı fizik, oda/harita yönetimi, gerçek top mermisi animasyonu, bağlantı kopması telafisi veya hile önleme yoktur. Şu an sunucu, basit yakınlık tabanlı hasar uygular. Kalıcı dünya için veritabanı ve kimlik doğrulama eklenmelidir.
