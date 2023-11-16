import classes from "./AnimalCard.module.css";
import img0 from '../../images/scenicImage0.jpg'

function AnimalCard() {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={img0} alt={'hello'}/>
      </div>
      <div className={classes.content}>
        <h3 className={classes.text}>This is a cow</h3>
      </div>
    </li>
  );
}

export default AnimalCard;
