export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "PHP" }).format(
    value
  );

export const formatDate = (date) => {
  const newDate = new Date(date);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const dateFormatted = newDate.toLocaleDateString("en-PH", options);

  return dateFormatted;
};

export const getFirstTwoCapitalLetterFromWords = (str) => {
  const arrWords = str.split(" ");

  if (arrWords.length === 1) return arrWords[0][0].toUpperCase();

  if (arrWords.length > 1)
    return arrWords[0][0].toUpperCase() + arrWords[1][0].toUpperCase();
};

export const randomNumber = () => {
  return Math.floor(Math.random() * 17);
};
