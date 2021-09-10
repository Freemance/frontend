// Intenacionalizacion

import i18next from 'i18next';

import landpageEn from '../translation/en/landpage.json';

export const i18ne = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: { en: { landpage: landpageEn } },
  });
};
