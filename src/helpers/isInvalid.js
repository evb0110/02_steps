export default function isInvalid(walk) {
  const regexDate = /^\d\d\.\d\d\.\d\d\d\d$/;

  if (regexDate.test(walk.date) && !isNaN(walk.km)) return false;
  return true;
}
