import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-apk-github-actions',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
