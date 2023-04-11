import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";
function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
      <img src={props.image} />
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
export default MeetupDetails;
