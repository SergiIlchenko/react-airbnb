import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function Amenities({
  pool,
  gym,
  breackfast,
  wifi,
  parking,
  pets,
  airport,
  concierge,
  roomService,
  child,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>
      <ul className="amenities__list">
        {pool && (
          <ListItem imageSrc="./svg/pool.svg">
            <span>Басейн</span>
          </ListItem>
        )}

        {gym && (
          <ListItem imageSrc="./svg/gym.svg">
            <span>Спортивний зал</span>
          </ListItem>
        )}

        {breackfast && (
          <ListItem imageSrc="./svg/breackfast.svg">
            <span>Безкоштовний сніданок</span>
          </ListItem>
        )}

        {wifi && (
          <ListItem imageSrc="./svg/wifi.svg">
            <span>Безкоштовний Wi-Fi</span>
          </ListItem>
        )}

        {parking && (
          <ListItem imageSrc="./svg/parking.svg">
            <span>{parking} Безкоштовний вуличний паркінг</span>
          </ListItem>
        )}

        {pets && (
          <ListItem imageSrc="./svg/animals.svg">
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        )}

        {airport && (
          <ListItem imageSrc="./svg/airport.svg">
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        )}

        {concierge && (
          <ListItem imageSrc="./svg/security.svg">
            <span>Консьєрж-сервіс</span>
          </ListItem>
        )}

        {roomService && (
          <ListItem imageSrc="./svg/cleaning.svg">
            <span>Обслуговування номерів</span>
          </ListItem>
        )}

        {child && (
          <ListItem imageSrc="./svg/child.svg">
            <span>Підходить для дітей</span>
          </ListItem>
        )}
      </ul>
    </Box>
  );
}
