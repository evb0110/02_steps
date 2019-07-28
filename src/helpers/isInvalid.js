export default function isInvalid(walk) {
  const regexDate = /^\d\d\.\d\d\.\d\d\d\d$/;
  const regexKm = /^\d+(\.\d+)?$/;

  if (regexDate.test(walk.date) && regexKm.test(walk.km)) return false;
  return true;
}
