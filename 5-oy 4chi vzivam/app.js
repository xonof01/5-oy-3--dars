// 5-oy 3- vazifa
// 1-masala

function harflarniHisobla(matn) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let i = 0; i < matn.length; i++) {
    const harf = matn[i];
    if (harf >= "A" && harf <= "Z") {
      upperCaseCount++;
    } else if (harf >= "a" && harf <= "z") {
      lowerCaseCount++;
    }
  }

  return { upperCase: upperCaseCount, lowerCase: lowerCaseCount };
}
const matn = "Men bugun Darsga borolmadim";
const natija = harflarniHisobla(matn);
