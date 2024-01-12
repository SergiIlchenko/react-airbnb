import { Fragment } from "react";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <Box className="reviews__block">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attractions">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} className="attractions__link">
        {name}
      </a>
    </ListItem>
  );
}
