'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'en' | 'ru' | 'pl'
export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'pl', label: 'PL' },
]

/* ──────────────────────────────────────────────────────────────────
   Translation dictionary. Structured by section for clarity.
   ────────────────────────────────────────────────────────────────── */
const DICT = {
  en: {
    nav:    { features: 'Features', compare: 'Compare', download: 'Download', getApp: 'Get the app', downloadFree: 'Download Free' },
    hero: {
      badge: 'Now with overtime & Google Calendar sync',
      titleA: 'Track hours.',
      titleB: "Earn what you're owed.",
      sub: 'Shiftly logs every shift, calculates your pay in real time, and keeps overtime honest — across every device.',
      cta: 'Get the app',
      secondary: 'See how it works',
      scroll: 'Scroll to fly in',
      showcaseTitle: 'Your whole month, at a glance.',
      showcaseTitle2: 'Every hour, turned into earnings.',
      app: { title: 'Working days', tracking: 'Time tracking', thisMonth: 'This month', month: 'June 2026', earned: 'Earned', hours: 'Hours', overtime: 'Overtime', rate: 'Rate', days: 'Days' },
    },
    features: {
      kicker: 'What you get',
      titleA: 'Everything a shift worker needs.',
      titleB: "Nothing they don't.",
      items: [
        { label: 'Smart Logging',      headline: 'Log shifts in seconds',     body: 'Tap a day, enter hours manually or pick a time range — the app calculates everything instantly. No forms, no friction.' },
        { label: 'Earnings Engine',    headline: 'Know your exact payout',     body: 'Set your hourly rate, choose from 6 currencies. The app shows daily, weekly, and monthly earnings — live, as you log.' },
        { label: 'Overtime Detection', headline: 'Extra hours, extra pay',     body: 'Flag overtime with a custom multiplier — 1.25×, 1.5×, or 2×. Summary and calendar events reflect the real cost.' },
        { label: 'Calendar Sync',      headline: 'Push shifts to Google',      body: 'Every logged shift creates a Google Calendar event with title, duration, and earnings — automatically.' },
        { label: 'Cloud Sync',         headline: 'Works on every device',      body: 'Sign in with Google and your data syncs instantly via Firebase. Access from phone, tablet, or browser.' },
        { label: 'Shift Planning',     headline: 'Plan ahead confidently',     body: 'Schedule future shifts in planning mode — forecast earnings for the week before the hours happen.' },
      ],
    },
    stats: {
      kicker: 'By the numbers',
      title: 'Trusted by real shift workers',
      items: [
        { label: 'Active users',     description: 'shift workers tracking time every week' },
        { label: 'App Store rating', description: 'out of 5 stars from real users' },
        { label: 'Earnings tracked', description: 'tracked across all users' },
        { label: 'Currencies',       description: 'PLN, RUB, USD, EUR, GBP and more' },
      ],
    },
    comparison: {
      kicker: 'Why Shiftly',
      titleA: 'Ditch the spreadsheet.',
      titleB: 'Finally.',
      colFeature: 'Feature',
      colBefore: 'Spreadsheet / Manual',
      colAfter: 'Shiftly',
      rows: [
        { label: 'Log a shift',            before: 'Open spreadsheet, find row, type manually',   after: 'Tap a day, enter hours or pick range' },
        { label: 'Calculate earnings',     before: 'Formula in Excel, manual currency conversion', after: 'Instant — rate × hours, live as you type' },
        { label: 'Overtime tracking',      before: 'Manual calculation, often forgotten',          after: 'Built-in multiplier: 1.25× / 1.5× / 2×' },
        { label: 'Google Calendar',        before: 'Copy entries one-by-one by hand',              after: 'Auto-sync — one toggle, every shift' },
        { label: 'Multi-device access',    before: 'Attached to one laptop or file',               after: 'Firebase sync — phone, tablet, browser' },
        { label: 'Monthly earnings report', before: 'Build pivot table, export PDF manually',       after: 'Built-in stats view with bar chart' },
      ],
    },
    cta: {
      kicker: 'Download',
      dlTitle: 'Shiftly, on every device.',
      dlSub: 'Free on all platforms. Your data syncs instantly across them.',
      available: 'Available',
      beta: 'Beta',
      instant: 'No install',
      get: 'Download',
      openApp: 'Open',
      otherNote: 'Want updates on new platforms and features?',
      titleA: 'Start tracking today.',
      titleB: 'It takes 30 seconds.',
      sub1: 'No subscription, no credit card, no lock-in.',
      sub2: 'Your data, your hours, your money.',
      ios: 'Download for iOS',
      web: 'Open Web App',
      notifyLabel: 'Get notified about new features and releases',
      placeholder: 'your@email.com',
      notify: 'Notify me',
      success: "You're on the list — we'll be in touch.",
    },
    footer: {
      tagline: 'The smartest way to track work hours, calculate salary, manage overtime, and sync with Google Calendar.',
      groups: { Product: 'Product', Company: 'Company', Legal: 'Legal' },
      links: { features: 'Features', compare: 'Compare', download: 'Download', webApp: 'Web App', about: 'About', blog: 'Blog', contact: 'Contact', privacy: 'Privacy', terms: 'Terms' },
      rights: 'All rights reserved.',
    },
  },

  ru: {
    nav:    { features: 'Возможности', compare: 'Сравнение', download: 'Скачать', getApp: 'Установить', downloadFree: 'Скачать бесплатно' },
    hero: {
      badge: 'Теперь со сверхурочными и синхронизацией с Google Календарём',
      titleA: 'Считай часы.',
      titleB: 'Получай своё.',
      sub: 'Shiftly фиксирует каждую смену, считает зарплату в реальном времени и честно учитывает сверхурочные — на всех устройствах.',
      cta: 'Установить',
      secondary: 'Как это работает',
      scroll: 'Листай, чтобы влететь',
      showcaseTitle: 'Весь месяц — на одном экране.',
      showcaseTitle2: 'Каждый час — превращается в доход.',
      app: { title: 'Рабочие дни', tracking: 'Учёт времени', thisMonth: 'Этот месяц', month: 'Июнь 2026', earned: 'Заработано', hours: 'Часы', overtime: 'Сверхуроч.', rate: 'Ставка', days: 'Дни' },
    },
    features: {
      kicker: 'Что вы получаете',
      titleA: 'Всё, что нужно сменному работнику.',
      titleB: 'И ничего лишнего.',
      items: [
        { label: 'Умный учёт',           headline: 'Смена за пару секунд',        body: 'Нажмите на день, введите часы вручную или выберите интервал — приложение всё посчитает мгновенно. Без форм и лишних действий.' },
        { label: 'Расчёт дохода',        headline: 'Точная сумма выплаты',         body: 'Задайте почасовую ставку и выберите из 6 валют. Приложение показывает доход за день, неделю и месяц — вживую.' },
        { label: 'Сверхурочные',         headline: 'Доп. часы — доп. оплата',      body: 'Отмечайте сверхурочные с множителем — 1.25×, 1.5× или 2×. Сводка и события календаря отражают реальную стоимость.' },
        { label: 'Синхр. с календарём',  headline: 'Смены в Google Календарь',     body: 'Каждая смена создаёт событие в Google Календаре с названием, длительностью и доходом — автоматически.' },
        { label: 'Облако',               headline: 'Работает на всех устройствах', body: 'Войдите через Google — данные мгновенно синхронизируются через Firebase. Телефон, планшет или браузер.' },
        { label: 'Планирование',         headline: 'Планируйте уверенно',          body: 'Планируйте будущие смены в режиме планирования — прогноз дохода на неделю вперёд.' },
      ],
    },
    stats: {
      kicker: 'В цифрах',
      title: 'Нам доверяют реальные сменные работники',
      items: [
        { label: 'Активных пользователей', description: 'отмечают время каждую неделю' },
        { label: 'Оценка в App Store',     description: 'из 5 звёзд от реальных людей' },
        { label: 'Учтено дохода',          description: 'по всем пользователям' },
        { label: 'Валют',                  description: 'PLN, RUB, USD, EUR, GBP и другие' },
      ],
    },
    comparison: {
      kicker: 'Почему Shiftly',
      titleA: 'Забудьте про таблицы.',
      titleB: 'Наконец-то.',
      colFeature: 'Задача',
      colBefore: 'Таблица / вручную',
      colAfter: 'Shiftly',
      rows: [
        { label: 'Отметить смену',        before: 'Открыть таблицу, найти строку, вписать вручную', after: 'Нажать на день, ввести часы или интервал' },
        { label: 'Посчитать доход',       before: 'Формула в Excel, конвертация валют вручную',     after: 'Мгновенно — ставка × часы, вживую' },
        { label: 'Учёт сверхурочных',     before: 'Считать вручную, часто забывается',              after: 'Встроенный множитель: 1.25× / 1.5× / 2×' },
        { label: 'Google Календарь',      before: 'Копировать записи по одной вручную',             after: 'Автосинхрон — один переключатель' },
        { label: 'Доступ с устройств',    before: 'Привязано к одному ноутбуку или файлу',          after: 'Синхрон через Firebase — везде' },
        { label: 'Отчёт за месяц',        before: 'Строить сводную таблицу, экспорт в PDF',         after: 'Встроенная статистика с графиком' },
      ],
    },
    cta: {
      kicker: 'Скачать',
      dlTitle: 'Shiftly — на каждом устройстве.',
      dlSub: 'Бесплатно на всех платформах. Данные синхронизируются мгновенно.',
      available: 'Доступно',
      beta: 'Бета',
      instant: 'Без установки',
      get: 'Скачать',
      openApp: 'Открыть',
      otherNote: 'Хотите узнавать о новых платформах и функциях?',
      titleA: 'Начните учёт сегодня.',
      titleB: 'Это займёт 30 секунд.',
      sub1: 'Без подписки, без карты, без привязки.',
      sub2: 'Ваши данные, ваши часы, ваши деньги.',
      ios: 'Скачать для iOS',
      web: 'Открыть веб-версию',
      notifyLabel: 'Узнавайте о новых функциях и обновлениях',
      placeholder: 'ваш@email.com',
      notify: 'Уведомить',
      success: 'Вы в списке — мы свяжемся с вами.',
    },
    footer: {
      tagline: 'Самый умный способ считать рабочие часы, зарплату, сверхурочные и синхронизировать с Google Календарём.',
      groups: { Product: 'Продукт', Company: 'Компания', Legal: 'Правовое' },
      links: { features: 'Возможности', compare: 'Сравнение', download: 'Скачать', webApp: 'Веб-версия', about: 'О нас', blog: 'Блог', contact: 'Контакты', privacy: 'Конфиденциальность', terms: 'Условия' },
      rights: 'Все права защищены.',
    },
  },

  pl: {
    nav:    { features: 'Funkcje', compare: 'Porównanie', download: 'Pobierz', getApp: 'Pobierz aplikację', downloadFree: 'Pobierz za darmo' },
    hero: {
      badge: 'Teraz z nadgodzinami i synchronizacją z Kalendarzem Google',
      titleA: 'Licz godziny.',
      titleB: 'Zarabiaj uczciwie.',
      sub: 'Shiftly zapisuje każdą zmianę, oblicza wypłatę w czasie rzeczywistym i uczciwie liczy nadgodziny — na każdym urządzeniu.',
      cta: 'Pobierz aplikację',
      secondary: 'Jak to działa',
      scroll: 'Przewiń, aby wlecieć',
      showcaseTitle: 'Cały miesiąc na jednym ekranie.',
      showcaseTitle2: 'Każda godzina zamienia się w zarobek.',
      app: { title: 'Dni pracy', tracking: 'Śledzenie czasu', thisMonth: 'Ten miesiąc', month: 'Czerwiec 2026', earned: 'Zarobione', hours: 'Godziny', overtime: 'Nadgodziny', rate: 'Stawka', days: 'Dni' },
    },
    features: {
      kicker: 'Co otrzymujesz',
      titleA: 'Wszystko, czego potrzebuje pracownik zmianowy.',
      titleB: 'Nic ponad to.',
      items: [
        { label: 'Inteligentny zapis',  headline: 'Zmiana w kilka sekund',         body: 'Dotknij dnia, wpisz godziny ręcznie lub wybierz zakres — aplikacja policzy wszystko od razu. Bez formularzy.' },
        { label: 'Silnik zarobków',     headline: 'Znaj dokładną wypłatę',         body: 'Ustaw stawkę godzinową, wybierz spośród 6 walut. Aplikacja pokazuje zarobki dzienne, tygodniowe i miesięczne — na żywo.' },
        { label: 'Nadgodziny',          headline: 'Więcej godzin, więcej wypłaty', body: 'Oznacz nadgodziny z mnożnikiem — 1.25×, 1.5× lub 2×. Podsumowanie i kalendarz pokazują realny koszt.' },
        { label: 'Synch. kalendarza',   headline: 'Zmiany do Kalendarza Google',   body: 'Każda zmiana tworzy wydarzenie w Kalendarzu Google z tytułem, czasem i zarobkiem — automatycznie.' },
        { label: 'Chmura',              headline: 'Działa na każdym urządzeniu',   body: 'Zaloguj się przez Google — dane synchronizują się od razu przez Firebase. Telefon, tablet lub przeglądarka.' },
        { label: 'Planowanie zmian',    headline: 'Planuj z pewnością',            body: 'Planuj przyszłe zmiany w trybie planowania — prognozuj zarobki na tydzień przed czasem.' },
      ],
    },
    stats: {
      kicker: 'W liczbach',
      title: 'Zaufali nam prawdziwi pracownicy zmianowi',
      items: [
        { label: 'Aktywnych użytkowników', description: 'liczy czas co tydzień' },
        { label: 'Ocena w App Store',      description: 'na 5 gwiazdek od prawdziwych ludzi' },
        { label: 'Śledzonych zarobków',    description: 'u wszystkich użytkowników' },
        { label: 'Walut',                  description: 'PLN, RUB, USD, EUR, GBP i więcej' },
      ],
    },
    comparison: {
      kicker: 'Dlaczego Shiftly',
      titleA: 'Porzuć arkusz kalkulacyjny.',
      titleB: 'Wreszcie.',
      colFeature: 'Zadanie',
      colBefore: 'Arkusz / ręcznie',
      colAfter: 'Shiftly',
      rows: [
        { label: 'Zapis zmiany',          before: 'Otwórz arkusz, znajdź wiersz, wpisz ręcznie',    after: 'Dotknij dnia, wpisz godziny lub zakres' },
        { label: 'Oblicz zarobki',        before: 'Formuła w Excelu, ręczna zmiana waluty',         after: 'Natychmiast — stawka × godziny, na żywo' },
        { label: 'Nadgodziny',            before: 'Liczone ręcznie, często pomijane',               after: 'Wbudowany mnożnik: 1.25× / 1.5× / 2×' },
        { label: 'Kalendarz Google',      before: 'Kopiowanie wpisów pojedynczo ręcznie',           after: 'Auto-synch — jeden przełącznik' },
        { label: 'Dostęp z urządzeń',     before: 'Przypisane do jednego laptopa lub pliku',        after: 'Synch. Firebase — wszędzie' },
        { label: 'Raport miesięczny',     before: 'Budowa tabeli przestawnej, eksport PDF ręcznie', after: 'Wbudowane statystyki z wykresem' },
      ],
    },
    cta: {
      kicker: 'Pobierz',
      dlTitle: 'Shiftly — na każdym urządzeniu.',
      dlSub: 'Za darmo na wszystkich platformach. Dane synchronizują się natychmiast.',
      available: 'Dostępne',
      beta: 'Beta',
      instant: 'Bez instalacji',
      get: 'Pobierz',
      openApp: 'Otwórz',
      otherNote: 'Chcesz wiedzieć o nowych platformach i funkcjach?',
      titleA: 'Zacznij liczyć już dziś.',
      titleB: 'To zajmuje 30 sekund.',
      sub1: 'Bez subskrypcji, bez karty, bez zobowiązań.',
      sub2: 'Twoje dane, twoje godziny, twoje pieniądze.',
      ios: 'Pobierz na iOS',
      web: 'Otwórz wersję web',
      notifyLabel: 'Otrzymuj info o nowych funkcjach i wydaniach',
      placeholder: 'twoj@email.com',
      notify: 'Powiadom mnie',
      success: 'Jesteś na liście — odezwiemy się.',
    },
    footer: {
      tagline: 'Najmądrzejszy sposób na liczenie godzin pracy, pensji, nadgodzin i synchronizację z Kalendarzem Google.',
      groups: { Product: 'Produkt', Company: 'Firma', Legal: 'Prawne' },
      links: { features: 'Funkcje', compare: 'Porównanie', download: 'Pobierz', webApp: 'Wersja web', about: 'O nas', blog: 'Blog', contact: 'Kontakt', privacy: 'Prywatność', terms: 'Regulamin' },
      rights: 'Wszelkie prawa zastrzeżone.',
    },
  },
} as const

export type Dict = (typeof DICT)['en']

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: Dict }
const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: DICT.en })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('shiftly-lang')) as Lang | null
    if (saved && DICT[saved]) { setLangState(saved); return }
    const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en'
    if (nav === 'ru' || nav === 'pl') setLangState(nav)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') localStorage.setItem('shiftly-lang', l)
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }

  return <Ctx.Provider value={{ lang, setLang, t: DICT[lang] as Dict }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
