import type { CapacitorConfig } from "@capacitor/cli";

/**
 * AetherOS Android kabuğu.
 * Uygulama TanStack Start (SSR) olduğu için WebView, yayına alınmış sitenize bağlanır.
 * `server.url` değerini kendi yayın adresinizle değiştirin.
 */
const config: CapacitorConfig = {
  appId: "com.aetheros.store",
  appName: "AetherOS",
  webDir: "dist/client",
  server: {
    url: "https://SIZIN-ALAN-ADINIZ.example.com",
    androidScheme: "https",
  },
};

export default config;
