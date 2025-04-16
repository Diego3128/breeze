export type Country = {
  code: string;
  name: {
    en: string;
    es: string;
  };
};

export type Search = {
  city: string;
  country: string;
};
