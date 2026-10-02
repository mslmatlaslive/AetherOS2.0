# AetherOS — Android kabuğu (APK indirme ve otomatik kurulum)

Web uygulaması bir tarayıcı sayfası olduğu için `REQUEST_INSTALL_PACKAGES` iznini isteyemez ve
Android Paket Yükleyici'yi kendi başına açamaz. Bu yüzden proje bir Capacitor Android kabuğuyla
birlikte gelir; yerel `ApkInstaller` eklentisi bu işleri yapar.

## Kurulum
1. Siteyi yayına alın ve `capacitor.config.ts` içindeki `server.url` değerini yayın adresiyle değiştirin.
2. `bash scripts/setup-android.sh` çalıştırın (Capacitor'u kurar, `android/` projesini oluşturur,
   Java dosyalarını, FileProvider ayarını ve manifest izinlerini ekler).
3. `npx cap open android` ile Android Studio'da açıp çalıştırın / APK üretin.

Elle yapmak isterseniz `android-native/AndroidManifest.snippet.xml` dosyasındaki satırları ekleyin.

## Akış
- İndir'e dokunulunca giriş yoksa giriş penceresi açılır.
- İzin yoksa uygulamanın "Paket Yükleme İzni" penceresi çıkar → "İzin Ver" → Android'in
  "Bilinmeyen uygulamaları yükle" ayar ekranı açılır. İzin verilince bir daha sorulmaz.
- İndirme Android `DownloadManager` ile yapılır: sistem bildirim çubuğunda ilerleme gösterilir;
  uygulama içinde üst "hap", AetherOS paneli ve uygulama kartında %1 → %100 çubuğu güncellenir.
- %100 olunca `.apk` otomatik olarak Paket Yükleyici'de açılır (Android'in son "Yükle" onayı
  güvenlik gereği kullanıcıya bırakılır; atlanamaz).

## Tarayıcıda çalıştırma
Tarayıcıda indirme `/api/apk` vekili üzerinden akıtılır ve ilerleme gösterilir; ancak kurulum ekranını
tarayıcı açamaz, kullanıcı indirme bildirimine dokunmalıdır.
