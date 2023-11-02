export const CapitalizeFirstLetter = (s: String) => {
  const wordArray = s.split(" ");
  const res = wordArray.map((w) => {
    return w.charAt(0).toUpperCase() + w.slice(1);
  });

  return res.join(" ");
};
