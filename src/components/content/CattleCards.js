import AnimalCard from "./AnimalCard";
import classes from "./CattleCards.module.css";

function CattleCards(props) {
  return (
    <ul className={classes.list}>
      <AnimalCard />
      <AnimalCard />
    </ul>
  );
}

export default CattleCards;
