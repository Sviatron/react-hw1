export function Colors() {
  const paints = ["red", "green", "blue"];
  return paints.map(() => (
    <ul>
      <li>{paints[0]}</li>
      <li>{paints[1]}</li>
      <li>{paints[2]}</li>
    </ul>
  ));
}
