export const convertDate = (dateArg) => {
  var date = new Date(dateArg * 1000);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
};

export const trancateString = (s, i) => {
  return s.slice(0, i) + "...";
};

export const intToString = (value) => {
  var suffixes = ["", "K", "M", "B", "T"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
