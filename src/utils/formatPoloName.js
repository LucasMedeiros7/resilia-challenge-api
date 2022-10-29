export default function formatPoloName(poloName) {
  return (
    poloName[0].toUpperCase() + poloName.slice(1, poloName.length).toLowerCase()
  );
}
