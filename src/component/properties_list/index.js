import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function PropertiesList({
  houseRules,
  cancellationPolicy,
  localTransportation,
  hostLanguages,
  specialOffers,
  instructions,
}) {
  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості</Heading>
      <ul className="properties__list">
        <ListItem title="Правила дому">
          <span>{houseRules}</span>
        </ListItem>

        <ListItem title="Політика скасування">
          <span>{cancellationPolicy}</span>
        </ListItem>

        <ListItem title="Місцевий транспорт">
          <span>{localTransportation}</span>
        </ListItem>

        <ListItem title="Мови хоста">
          <span>{hostLanguages}</span>
        </ListItem>

        <ListItem title="Спеціальні пропозиції:">
          <span>{specialOffers}</span>
        </ListItem>

        <ListItem title="Інструкції щодо реєстрації">
          <span>{instructions}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
