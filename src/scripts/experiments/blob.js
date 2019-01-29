import { random } from "lodash";
const blob = document.querySelectorAll(".blob");
setInterval(() => {
  const values = borderValues();
  blob[0].style.borderRadius = values;
}, 1000);

const borderValues = () => {
  return `${random(30, 90)}% ${random(30, 90)}% ${random(30, 90)}% ${random(
    30,
    90
  )}%/${random(30, 90)}% ${random(30, 90)}% ${random(30, 90)}% ${random(
    30,
    90
  )}%`;
};
