import type { CapacitorConfig } from '@capacitor/cli';

// L'application n'embarque pas de copie du site : elle affiche directement
// le site en ligne (mydesires.net) dans une "WebView"
// plein écran, sans barre d'adresse ni menus du navigateur. Comme ça,
// n'importe quelle mise à jour faite sur le site apparaît
// immédiatement dans l'application, sans avoir à reconstruire l'app.
const config: CapacitorConfig = {
  appId: 'com.clesh.desire',
  appName: 'DesireKitoko',
  webDir: 'www',
  server: {
    url: 'https://mydesires.net',
    cleartext: false,
  },
};

export default config;
