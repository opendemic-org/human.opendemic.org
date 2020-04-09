export const ids = {
  AGREE: "agree",
  DONE: "done",
  CASES_NEAR_ME_BUTTON: "cases.near.me.button",
  NAVIGATION_HOME: "navigation.home",
  LANGUAGES: "languages",
  LOG_SYMPTOMS_BUTTON: "log.symptoms.button",
  OK: "ok",
  OR: "or",
  SYMPTOMS_COUGH: "symptoms.cough",
  SYMPTOMS_FEVER: "symptoms.fever",
  SYMPTOMS_SHORT_BREATH: "symptoms.shortBreath",
  SYMPTOMS_FORM_CONFIRMED_COVID: "symptoms.form.confirmedCovid",
  SYMPTOMS_FORM_COVID_DISCLAIMER_HEADER: "symptoms.form.covidDisclaimer.header",
  SYMPTOMS_FORM_COVID_DISCLAIMER: "symptoms.form.covidDisclaimer",
  SYMPTOMS_FORM_THANK_YOU: "symptoms.form.thankYou",
  SYMPTOMS_FORM_THANK_YOU_HEADER: "symptoms.form.thankYou.header",
  SYMPTOMS_FORM_QUESTION_WHICH: "symptoms.form.question.which",
  TERMS_OF_USE_LINK: "termsOfUse.link",
};

export default {
  // General
  [ids.AGREE]: {
    en: "Agree",
    fr: "Consentir",
  },

  [ids.DONE]: {
    en: "Done",
    fr: "Fini",
  },

  [ids.OK]: {
    en: "OK",
    fr: "D'accord",
  },

  [ids.OR]: {
    en: "Or",
    fr: "Ou",
  },

  // Components
  [ids.NAVIGATION_HOME]: {
    en: "Home",
    fr: "Accueil",
  },

  [ids.CASES_NEAR_ME_BUTTON]: {
    en: "Cases Near Me",
    fr: "Cas près de moi",
  },

  [ids.LANGUAGES]: {
    en: "English",
    fr: "Français",
  },

  [ids.LOG_SYMPTOMS_BUTTON]: {
    en: "Log Symptoms",
    fr: "Consigner les symptômes",
  },

  [ids.SYMPTOMS_COUGH]: {
    en: "Cough",
    fr: "La toux",
  },

  [ids.SYMPTOMS_FEVER]: {
    en: "Fever",
    fr: "La fièvre",
  },

  [ids.SYMPTOMS_SHORT_BREATH]: {
    en: "Shortness of breath",
    fr: "L'essoufflement",
  },

  [ids.SYMPTOMS_FORM_QUESTION_WHICH]: {
    en: "Which symptoms are you currently experiencing?",
    fr: "Quels symptômes avez-vous maintenant?",
  },

  [ids.SYMPTOMS_FORM_CONFIRMED_COVID]: {
    en: "I have been diagnosed with COVID-19",
    fr: "J'ai reçu un diagnostic de COVID-19",
  },

  [ids.SYMPTOMS_FORM_COVID_DISCLAIMER_HEADER]: {
    en: "Confirm Positive for COVID-19",
    fr: "Confirmer positif pour COVID-19",
  },

  [ids.SYMPTOMS_FORM_COVID_DISCLAIMER]: {
    en:
      'I understand that by clicking "Agree" I am accepting the Opendemic {terms}. I understand that my location with be anonymously marked on the Opendemic map.',
    fr:
      'Je bien comprende que en cliquant "Consentir" signife que ma position sera partagée anonymement sur la carte d\'Opendemic.',
  },

  [ids.TERMS_OF_USE_LINK]: {
    en: "Terms of Use",
  },

  [ids.SYMPTOMS_FORM_THANK_YOU_HEADER]: {
    en: "Thank you!",
    fr: "Merci!",
  },

  [ids.SYMPTOMS_FORM_THANK_YOU]: {
    en:
      "Thank you for contributing your data. Please remember to stay home during this time.",
    fr:
      "Merci d'avoir fourni vos données. N'oubliez pas de rester à la maison pendant cette période.",
  },
};
