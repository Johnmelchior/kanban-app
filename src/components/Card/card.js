import './card.scss';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ name, email, index }) => {
	return (
		<Draggable draggableId={email} index={index} key={email}>
			{provided => (
				<div className="card"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<div className="title">
						{name}
					</div>
					<div className="email">
						{email}
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default Card;