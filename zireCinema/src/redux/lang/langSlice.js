import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const langAdapter = createEntityAdapter({
  selectIds: (session) => session.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const langSlice = createSlice({
  name: "lang",
  initialState: langAdapter.getInitialState({
    status: "idle",
    error: null,
    navbarLang: {
      az: "AZ",
      ru: "RU",
    },
    activeLangTitles: {
      navbarFilm: "FİLMLƏR",
      navbarTable: "CƏDVƏL",
      navbarCinema: "KİNOTEATR",
      navbarPhoneNumber: "070 400 88 69",
      cardTodayFilms: "Bugün",
      cardComingSoonFilms: "Tezliklə",
      cardFilmAge: "YAŞ",
      cardFilmLang: "DİL",
      cardFilmJanr: "JANR",
      cardFilmYear: "İL",
      cardFilmCountry: "ÖLKƏ",
      cardFilmTable: "CƏDVƏL",
      tableFims: "FİLM",
      tableSessions: "SEANS",
      tableFormat: "FORMAT",
      tableTicketPrice: "BİLET",
      homeaboutHeader: "ZIRE CINEMA",
      homeAboutInfo:
        "Burada, 300 nəfərlik konsert, tədbir və film nümayişi üçün 3D kinozal fəaliyyət göstərir. Kinozal, müasir tələblərə cavab verən ən sox texnologiyalar ilə təchiz olunub. Zalda, ən son filmlərin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait yaradılıb.",
      homeAboutButton: "DAHA ÇOX",
      aboutPageHeader: "ZIRE CINEMA",
      aboutPageTopInfo:
        "Film nümayişləri, korporativ və digər tədbirlər üçün fəaliyyət göstərən Zire Cinema zalı, müasir tələblərə cavab verən ən sox texnologiyalar ilə təchiz olunub. Zalda, dünya premyerası filmlərinin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait yaradılıb.",
      aboutPageMainInfo:
        "275 nəfərlik zalda ən son filmlərin nümayişi ilə yanaşı korporativ və digər tədbirlərin, sərgilərin və təqdimatların keçirilməsi də mümkündür.",
      footerAdressHeader: "ÜNVAN",
      footerAdress: "Xəzər r-nu, Zirə q. <br /> Seyid əzim şirvani 40",
      footerSocial: "SOSİAL ŞƏBƏKƏLƏR",
      footerPhone: "TELEFON",
      footerPhoneNum1: "+994 12 404 88 69",
      footerPhoneNum2: "+994 70 404 88 69",
      footerEnd: "Bütün hüquqlar qorunur. © ZireCinema 2019",
    },

    langs: {
      az: {
        navbarFilm: "FİLMLƏR",
        navbarTable: "CƏDVƏL",
        navbarCinema: "KİNOTEATR",
        navbarPhoneNumber: "070 400 88 69",
        cardTodayFilms: " BU GÜN",
        cardComingSoonFilms: "TEZLİKLƏ",
        cardFilmAge: "YAŞ",
        cardFilmLang: "DİL",
        cardFilmJanr: "JANR",
        cardFilmYear: "İL",
        cardFilmCountry: "ÖLKƏ",
        cardFilmTable: "CƏDVƏL",
        tableFims: "FİLM",
        tableSessions: "SEANS",
        tableFormat: "FORMAT",
        tableTicketPrice: "BİLET",
        homeaboutHeader: "ZIRE CINEMA",
        homeAboutInfo:
          "Burada, 300 nəfərlik konsert, tədbir və film nümayişi üçün 3D kinozal fəaliyyət göstərir. Kinozal, müasir tələblərə cavab verən ən sox texnologiyalar ilə təchiz olunub. Zalda, ən son filmlərin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait yaradılıb.",
        homeAboutButton: "DAHA ÇOX",
        aboutPageHeader: "ZIRE CINEMA",
        aboutPageTopInfo:
          "Film nümayişləri, korporativ və digər tədbirlər üçün fəaliyyət göstərən Zire Cinema zalı, müasir tələblərə cavab verən ən sox texnologiyalar ilə təchiz olunub. Zalda, dünya premyerası filmlərinin nümayişi və izləyicilərin rahatlığı üçün yüksək şərait yaradılıb.",
        aboutPageMainInfo:
          "275 nəfərlik zalda ən son filmlərin nümayişi ilə yanaşı korporativ və digər tədbirlərin, sərgilərin və təqdimatların keçirilməsi də mümkündür.",
        footerAdressHeader: "ÜNVAN",
        footerAdress: "Xəzər r-nu, Zirə q. <br /> Seyid əzim şirvani 40",
        footerSocial: "SOSİAL ŞƏBƏKƏLƏR",
        footerPhone: "TELEFON",
        footerPhoneNum1: "+994 12 404 88 69",
        footerPhoneNum2: "+994 70 404 88 69",
        footerEnd: "Bütün hüquqlar qorunur. © ZireCinema 2019",
      },
      ru: {
        navbarFilm: "ФИЛЬМЫ",
        navbarTable: "РАСПИСАНИЕ",
        navbarCinema: "КИНОТЕАТР",
        navbarPhoneNumber: "070 400 88 69",
        cardTodayFilms: "СЕГОДНЯ",
        cardComingSoonFilms: " СКОРО",
        cardFilmAge: "ВОЗРАСТ",
        cardFilmLang: "ЯЗЫК",
        cardFilmJanr: "ЖАНР",
        cardFilmYear: "ГОД",
        cardFilmCountry: "СТРАНА",
        cardFilmTable: "РАСПИСАНИЕ",
        tableFims: "ФИЛЬМ",
        tableSessions: "СЕАНС",
        tableFormat: "ФОРМАТ",
        tableTicketPrice: "БИЛЕТ",
        homeaboutHeader: "ZIRE CINEMA",
        homeAboutInfo:
          "Здесь осуществляется показ фильмов. Зал оснащен новейшими технологиями, отвечающими современным требованиям. В зале созданы все условия для показа мировых кинопремьер и для комфорта зрителей.",
        homeAboutButton: "БОЛЬШЕ",
        aboutPageHeader: "ZIRE CINEMA",
        aboutPageTopInfo:
          "Кинозал Zire Cinema Здесь осуществляется показ фильмов. Зал оснащен новейшими технологиями, отвечающими современным требованиям. В зале созданы все условия для показа мировых кинопремьер и для комфорта зрителей.",
        aboutPageMainInfo:
          "В зале на 275 мест, помимо показа премьерных фильмов есть все условия проведения корпоративных и других мероприятий, выставок и презентации.",
        footerAdressHeader: "АДРЕС",
        footerAdress: "Хазарский р. Зиря <br /> Сеид Азим Ширвани 40",
        footerSocial: "СОЦИАЛЬНЫЕ СЕТИ",
        footerPhone: "ТЕЛЕФОН",
        footerPhoneNum1: "+994 12 404 88 69",
        footerPhoneNum2: "+994 70 404 88 69",
        footerEnd: "Все права защищены. © ZireCinema 2019",
      },
    },
  }),
  reducers: {
    addActiveLang: (state, action) => {
      state.activeLang = action.payload;
    },
    addActiveLangTitle: (state, action) => {
      if (action.payload === "RU") {
        state.activeLangTitles = state.langs.ru;
      } else if (action.payload === "AZ") {
        state.activeLangTitles = state.langs.az;
      }
    },
  },
  extraReducers: {},
});

export const { addActiveLang, addActiveLangTitle } = langSlice.actions;

export default langSlice.reducer;
