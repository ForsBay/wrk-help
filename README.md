# wrk-help

## Что уже сделано

- Статическое PWA-приложение на одном `index.html`
- `manifest.json` и `sw.js` для установки как веб-приложения
- Firebase Auth + Google sign-in
- Google Calendar sync с отдельным запросом доступа только когда включено
- Пользовательское соглашение и политика конфиденциальности (`terms.html`, `privacy.html`)

## Как запустить

1. Разместите файлы на HTTPS-сервере.
2. Откройте `index.html` в браузере.
3. Приложение автоматически зарегистрирует `sw.js` и предложит установку как PWA.

## Подготовка к Google OAuth

1. В Firebase Console включите Google Authentication.
2. В Google Cloud Console создайте OAuth consent screen:
   - укажите название приложения
   - загрузите логотип и контактный email
   - добавьте URL политики конфиденциальности: `https://<your-domain>/privacy.html`
   - добавьте URL условий использования: `https://<your-domain>/terms.html`
3. Для Calendar sync используйте только минимальный scope `https://www.googleapis.com/auth/calendar.events.owned`.
4. В коде запрос календаря происходит только при включенной синхронизации.

## Как убрать требование тестировщика Google

Ошибка `403 access_denied` с текстом “приложение не прошло проверку Google” появляется не из-за HTML-кода, а из-за статуса OAuth consent screen в Google Cloud.

Чтобы приложением могли пользоваться не только тестировщики:

1. Опубликуйте приложение на постоянном HTTPS-домене.
2. В Firebase Console → Authentication → Settings → Authorized domains добавьте этот домен.
3. В Google Cloud Console → Google Auth Platform:
   - в Branding заполните название приложения, support email, developer contact email;
   - добавьте Application home page, Privacy Policy URL и Terms of Service URL;
   - в Audience выберите External;
   - в Data Access добавьте scope `https://www.googleapis.com/auth/calendar.events.owned`;
   - отправьте приложение на Google verification, если Google запросит проверку для Calendar scope.
4. Пока приложение в Testing, добавляйте пользователей в Audience → Test users. После публикации/верификации этот список не должен быть ограничением для обычных пользователей.
5. Включите Google Calendar API в том же Google Cloud project, который связан с Firebase.

Для проверки Google подготовьте короткое описание: приложение создает и обновляет только рабочие события пользователя в его собственном Google Calendar, когда пользователь вручную включает Calendar sync.

## Защита приложения

- Хостите сайт только по HTTPS.
- В Firebase Security Rules ограничьте доступ к данным только авторизованным пользователям.
- Ограничьте API key в Google Cloud по домену вашего сайта.
- Не запрашивайте лишние OAuth-скоупы без необходимости.

## Выпуск на платформы

### Веб

- Опубликуйте статические файлы на любом HTTPS-хостинге.
- Chrome/Edge/Firefox поддерживают установку PWA из `manifest.json`.

### Android

- Используйте TWA (Trusted Web Activity) или PWABuilder для конвертации в APK.
- Убедитесь, что сайт доступен по HTTPS и поддерживает `manifest.json`.

### iOS

- Пользователи могут устанавливать через Safari: «Добавить на экран «Домой»».
- Для нативной упаковки используйте Capacitor или Cordova.

### Десктоп

- Публикуйте как PWA или упакуйте через Electron/Capacitor, если нужна нативная оболочка.

## Что сделать дальше

- Проверить Firebase security rules.
- Протестировать авторизацию Google на домене из OAuth consent screen.
- Опубликовать `terms.html` и `privacy.html` на том же домене.
- При необходимости упаковать PWA через PWABuilder или Capacitor.
