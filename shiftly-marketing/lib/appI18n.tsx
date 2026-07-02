'use client'

// App i18n — a small, flat dictionary for the in-app UI (separate from the
// marketing-site i18n). `useT()` returns a translator bound to the current
// language from app settings; missing keys fall back to English, then the key.
import { useAppSettings, type Lang } from './appSettings'

type Dict = Record<string, string>

const EN: Dict = {
  // nav
  calendar: 'Calendar', dashboard: 'Dashboard', shifts: 'Shifts', statistics: 'Statistics',
  integrations: 'Integrations', settings: 'Settings', export: 'Export', profile: 'Profile',
  // kpi
  days: 'Days', hours: 'Hours', overtime: 'Overtime', earned: 'Earned',
  // actions
  newShift: 'New shift', addShift: 'Add shift', save: 'Save changes', cancel: 'Cancel',
  edit: 'Edit', duplicate: 'Duplicate', delete: 'Delete', fillDay: '+ Fill day',
  syncNow: 'Sync now', connect: 'Connect', disconnect: 'Disconnect', download: 'Download',
  signIn: 'Sign in with Google', signOut: 'Sign out',
  // sections
  today: 'Today', thisWeek: 'This week', thisMonth: 'This month', upcoming: 'Upcoming',
  preferences: 'Preferences', pay: 'Pay', about: 'About', account: 'Account', lifetime: 'Lifetime',
  // settings
  darkTheme: 'Dark theme', shiftReminders: 'Shift reminders', autoSync: 'Auto-sync calendar',
  hourlyRate: 'Hourly rate', currency: 'Currency', language: 'Language', weekStartsOn: 'Week starts on',
  version: 'Version', performanceMode: 'Performance mode', cloudSync: 'Cloud sync',
  signedInAs: 'Signed in', notSignedIn: 'Not signed in', syncedDevices: 'Synced across your devices',
  monday: 'Monday', auto: 'Auto',
  // shift form ("Shiftly" and "Google" are proper nouns — never translated)
  date: 'Date', category: 'Category', from: 'From', to: 'To', duration: 'Duration',
  breakLabel: 'Break', min: 'min', hrs: 'hours', workplace: 'Workplace', notesField: 'Notes',
  optionalNote: 'Optional note…', egWarehouse: 'e.g. Warehouse A',
  plannedShift: 'Planned shift', syncGoogleCal: 'Sync to Google Calendar', default: 'default',
  // shift detail
  time: 'Time', rate: 'Rate', breaks: 'Breaks', shiftTitle: 'Shift',
  planned: 'Planned', synced: 'Synced', notSynced: 'Not synced',
  // categories
  catRegular: 'Regular', catOvertime: 'Overtime', catNight: 'Night', catTraining: 'Training', catLeave: 'Time off',
  // toasts
  shiftAdded: 'Shift added', shiftAddedSynced: 'Shift added & synced', shiftUpdated: 'Shift updated',
  shiftDuplicated: 'Shift duplicated', shiftDeleted: 'Shift deleted',
  // command palette / toolbar
  goTo: 'Go to', goToday: 'Go to today', prevMonth: 'Previous month', nextMonth: 'Next month',
  editSelected: 'Edit selected shift', typeCommand: 'Type a command…', noCommands: 'No commands',
  month: 'Month', week: 'Week', agenda: 'Agenda',
}
const RU: Dict = {
  calendar: 'Календарь', dashboard: 'Обзор', shifts: 'Смены', statistics: 'Статистика',
  integrations: 'Интеграции', settings: 'Настройки', export: 'Экспорт', profile: 'Профиль',
  days: 'Дней', hours: 'Часов', overtime: 'Сверхурочные', earned: 'Заработок',
  newShift: 'Новая смена', addShift: 'Добавить смену', save: 'Сохранить', cancel: 'Отмена',
  edit: 'Изменить', duplicate: 'Дублировать', delete: 'Удалить', fillDay: '+ Заполнить день',
  syncNow: 'Синхронизировать', connect: 'Подключить', disconnect: 'Отключить', download: 'Скачать',
  signIn: 'Войти через Google', signOut: 'Выйти',
  today: 'Сегодня', thisWeek: 'Эта неделя', thisMonth: 'Этот месяц', upcoming: 'Предстоящие',
  preferences: 'Настройки', pay: 'Оплата', about: 'О приложении', account: 'Аккаунт', lifetime: 'За всё время',
  darkTheme: 'Тёмная тема', shiftReminders: 'Напоминания о сменах', autoSync: 'Авто-синхронизация',
  hourlyRate: 'Ставка в час', currency: 'Валюта', language: 'Язык', weekStartsOn: 'Начало недели',
  version: 'Версия', performanceMode: 'Режим производительности', cloudSync: 'Облачная синхронизация',
  signedInAs: 'Вы вошли', notSignedIn: 'Вы не вошли', syncedDevices: 'Синхронизация между устройствами',
  monday: 'Понедельник', auto: 'Авто',
  date: 'Дата', category: 'Категория', from: 'Начало', to: 'Конец', duration: 'Длительность',
  breakLabel: 'Перерыв', min: 'мин', hrs: 'часы', workplace: 'Место работы', notesField: 'Заметки',
  optionalNote: 'Необязательная заметка…', egWarehouse: 'напр. Склад A',
  plannedShift: 'Запланированная смена', syncGoogleCal: 'Синхронизация с Google Calendar', default: 'по умолч.',
  time: 'Время', rate: 'Ставка', breaks: 'Перерывы', shiftTitle: 'Смена',
  planned: 'Запланирована', synced: 'Синхронизировано', notSynced: 'Не синхронизировано',
  catRegular: 'Обычная', catOvertime: 'Сверхурочная', catNight: 'Ночная', catTraining: 'Обучение', catLeave: 'Отгул',
  shiftAdded: 'Смена добавлена', shiftAddedSynced: 'Смена добавлена и синхронизирована', shiftUpdated: 'Смена обновлена',
  shiftDuplicated: 'Смена продублирована', shiftDeleted: 'Смена удалена',
  goTo: 'Перейти к', goToday: 'Перейти к сегодня', prevMonth: 'Предыдущий месяц', nextMonth: 'Следующий месяц',
  editSelected: 'Изменить выбранную смену', typeCommand: 'Введите команду…', noCommands: 'Нет команд',
  month: 'Месяц', week: 'Неделя', agenda: 'Список',
}
const PL: Dict = {
  calendar: 'Kalendarz', dashboard: 'Pulpit', shifts: 'Zmiany', statistics: 'Statystyki',
  integrations: 'Integracje', settings: 'Ustawienia', export: 'Eksport', profile: 'Profil',
  days: 'Dni', hours: 'Godziny', overtime: 'Nadgodziny', earned: 'Zarobek',
  newShift: 'Nowa zmiana', addShift: 'Dodaj zmianę', save: 'Zapisz', cancel: 'Anuluj',
  edit: 'Edytuj', duplicate: 'Duplikuj', delete: 'Usuń', fillDay: '+ Wypełnij dzień',
  syncNow: 'Synchronizuj', connect: 'Połącz', disconnect: 'Rozłącz', download: 'Pobierz',
  signIn: 'Zaloguj przez Google', signOut: 'Wyloguj',
  today: 'Dziś', thisWeek: 'Ten tydzień', thisMonth: 'Ten miesiąc', upcoming: 'Nadchodzące',
  preferences: 'Preferencje', pay: 'Płatność', about: 'O aplikacji', account: 'Konto', lifetime: 'Łącznie',
  darkTheme: 'Ciemny motyw', shiftReminders: 'Przypomnienia', autoSync: 'Auto-synchronizacja',
  hourlyRate: 'Stawka godzinowa', currency: 'Waluta', language: 'Język', weekStartsOn: 'Tydzień zaczyna się od',
  version: 'Wersja', performanceMode: 'Tryb wydajności', cloudSync: 'Synchronizacja w chmurze',
  signedInAs: 'Zalogowano', notSignedIn: 'Niezalogowany', syncedDevices: 'Synchronizacja między urządzeniami',
  monday: 'Poniedziałek', auto: 'Auto',
  date: 'Data', category: 'Kategoria', from: 'Od', to: 'Do', duration: 'Czas trwania',
  breakLabel: 'Przerwa', min: 'min', hrs: 'godz.', workplace: 'Miejsce pracy', notesField: 'Notatki',
  optionalNote: 'Opcjonalna notatka…', egWarehouse: 'np. Magazyn A',
  plannedShift: 'Zaplanowana zmiana', syncGoogleCal: 'Synchronizuj z Google Calendar', default: 'domyślnie',
  time: 'Czas', rate: 'Stawka', breaks: 'Przerwy', shiftTitle: 'Zmiana',
  planned: 'Zaplanowana', synced: 'Zsynchronizowano', notSynced: 'Niezsynchronizowano',
  catRegular: 'Zwykła', catOvertime: 'Nadgodziny', catNight: 'Nocna', catTraining: 'Szkolenie', catLeave: 'Wolne',
  shiftAdded: 'Zmiana dodana', shiftAddedSynced: 'Zmiana dodana i zsynchronizowana', shiftUpdated: 'Zmiana zaktualizowana',
  shiftDuplicated: 'Zmiana zduplikowana', shiftDeleted: 'Zmiana usunięta',
  goTo: 'Przejdź do', goToday: 'Przejdź do dziś', prevMonth: 'Poprzedni miesiąc', nextMonth: 'Następny miesiąc',
  editSelected: 'Edytuj wybraną zmianę', typeCommand: 'Wpisz polecenie…', noCommands: 'Brak poleceń',
  month: 'Miesiąc', week: 'Tydzień', agenda: 'Agenda',
}
const UK: Dict = {
  calendar: 'Календар', dashboard: 'Огляд', shifts: 'Зміни', statistics: 'Статистика',
  integrations: 'Інтеграції', settings: 'Налаштування', export: 'Експорт', profile: 'Профіль',
  days: 'Днів', hours: 'Годин', overtime: 'Понаднормові', earned: 'Заробіток',
  newShift: 'Нова зміна', addShift: 'Додати зміну', save: 'Зберегти', cancel: 'Скасувати',
  edit: 'Редагувати', duplicate: 'Дублювати', delete: 'Видалити', fillDay: '+ Заповнити день',
  syncNow: 'Синхронізувати', connect: "Під'єднати", disconnect: 'Відключити', download: 'Завантажити',
  signIn: 'Увійти через Google', signOut: 'Вийти',
  today: 'Сьогодні', thisWeek: 'Цей тиждень', thisMonth: 'Цей місяць', upcoming: 'Майбутні',
  preferences: 'Налаштування', pay: 'Оплата', about: 'Про застосунок', account: 'Обліковий запис', lifetime: 'За весь час',
  darkTheme: 'Темна тема', shiftReminders: 'Нагадування', autoSync: 'Авто-синхронізація',
  hourlyRate: 'Ставка за годину', currency: 'Валюта', language: 'Мова', weekStartsOn: 'Тиждень починається з',
  version: 'Версія', performanceMode: 'Режим продуктивності', cloudSync: 'Хмарна синхронізація',
  signedInAs: 'Ви увійшли', notSignedIn: 'Не авторизовано', syncedDevices: 'Синхронізація між пристроями',
  monday: 'Понеділок', auto: 'Авто',
  date: 'Дата', category: 'Категорія', from: 'Початок', to: 'Кінець', duration: 'Тривалість',
  breakLabel: 'Перерва', min: 'хв', hrs: 'год.', workplace: 'Місце роботи', notesField: 'Нотатки',
  optionalNote: 'Необовʼязкова нотатка…', egWarehouse: 'напр. Склад A',
  plannedShift: 'Запланована зміна', syncGoogleCal: 'Синхронізація з Google Calendar', default: 'за замовч.',
  time: 'Час', rate: 'Ставка', breaks: 'Перерви', shiftTitle: 'Зміна',
  planned: 'Запланована', synced: 'Синхронізовано', notSynced: 'Не синхронізовано',
  catRegular: 'Звичайна', catOvertime: 'Понаднормова', catNight: 'Нічна', catTraining: 'Навчання', catLeave: 'Відгул',
  shiftAdded: 'Зміну додано', shiftAddedSynced: 'Зміну додано та синхронізовано', shiftUpdated: 'Зміну оновлено',
  shiftDuplicated: 'Зміну продубльовано', shiftDeleted: 'Зміну видалено',
  goTo: 'Перейти до', goToday: 'Перейти до сьогодні', prevMonth: 'Попередній місяць', nextMonth: 'Наступний місяць',
  editSelected: 'Редагувати вибрану зміну', typeCommand: 'Введіть команду…', noCommands: 'Немає команд',
  month: 'Місяць', week: 'Тиждень', agenda: 'Список',
}

const DICTS: Record<Lang, Dict> = { en: EN, ru: RU, pl: PL, uk: UK }
export type TKey = keyof typeof EN

export function translate(lang: Lang, key: string): string {
  return DICTS[lang]?.[key] ?? EN[key] ?? key
}

/** Hook → a translator bound to the current language. */
export function useT() {
  const { lang } = useAppSettings()
  return (key: TKey) => translate(lang, key as string)
}
