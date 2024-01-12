import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function RoomDetails({ guests, bedrooms, beds, baths }) {
	return (
	  <Box shadow className="room">
		<Heading border>Деталі властивості:</Heading>
		<ul className="room-details__list">
		  <ListItem imageSrc="./svg/people.svg">
			<span>{guests}</span>
			<span> гості</span>
		  </ListItem>
  
		  <ListItem imageSrc="./svg/room.svg">
			<span>{bedrooms}</span>
			<span> спальня</span>
		  </ListItem>
  
		  <ListItem imageSrc="./svg/bed.svg">
			<span>{beds}</span>
			<span> ліжко</span>
		  </ListItem>
  
		  <ListItem imageSrc="./svg/bathroom.svg">
			<span>{baths}</span>
			<span> ванна кімната</span>
		  </ListItem>
		</ul>
	  </Box>
	);
  }