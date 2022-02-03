import "./ServiceContainer.css";
import { Service } from "../scripts/models";

interface Props {
  service: Service;
}

export const ServiceContainer = (props: Props) => {
  return (
    <div className="ContentContainer rounded">
      <div className="InnerContainer rounded">
        <h3 className="Title fw-bold">{props.service.title}:</h3>
        <b>Rate:</b> {props.service.ratePrHourDKK},- DKK/h <br />
        {props.service.description}
      </div>
    </div>
  );
};
