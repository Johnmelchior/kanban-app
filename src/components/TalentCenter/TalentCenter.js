
import fetchCandidates from './../../store/Candidates/FetchCandidates';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Lanes from './../Lanes/Lanes';
import { DragDropContext } from 'react-beautiful-dnd';
import "./talentCenter.scss";
import { candidateChange } from '../../store/Candidates/CandidateAction';
import Search from '../Search/search';

const TalentCenter = () => {
	const talentState = useSelector(state => state);
	const dispatch = useDispatch();
	const [columns, setColumns] = useState();
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		dispatch(fetchCandidates());
	}, [dispatch]);

	useEffect(() => {
		setColumns(talentState.columns);
	},[talentState.columns])

	/**
	 * Handle draggable events
	 * @param result 
	 */
	const handleDragEnd = result => {
		const { destination, source } = result;
		const sCol = columns[source.droppableId];
		const dCol = columns[destination.droppableId];
		let newCol;

		if(sCol.id === dCol.id){
			const newSMembers = Array.from(sCol.members);
			newSMembers.splice(source.index, 1);
			newSMembers.splice(destination.index, 0, sCol.members[source.index]);

			const newSCol = {...sCol, members:[]};
			newSCol.members = newSMembers;

			newCol = {
				...columns,
				[source.droppableId]: newSCol,
			};
		} else {
			const newSMembers = Array.from(sCol.members);
			newSMembers.splice(source.index, 1);
			const newSCol = {
				...sCol,
				members: newSMembers
			}

			const newDMembers = Array.from(dCol.members);
			newDMembers.splice(destination.index, 0, sCol.members[source.index]);
			const newDCol = {
				...dCol,
				members: newDMembers
			}

			newCol = {
				...columns,
				[source.droppableId]: newSCol,
				[destination.droppableId]: newDCol,
			};
		}

		dispatch(candidateChange(newCol));
		setColumns(newCol);
	};

	const getSearchTerm = (val => {
		setSearchTerm(val);
	});

	return (
		<DragDropContext
			onDragEnd={handleDragEnd}
		>
			<div className="talent_center">
				<Search getSearchTerm={getSearchTerm}/>
				<div className="columns">
					{talentState.columnOrder.map(laneId => {
						if (talentState.columns && Object.keys(talentState.columns).length) {
							let lane = talentState?.columns[laneId];
							return (
								<Lanes key={talentState.columns[laneId].id} column={lane} members={talentState.columns[laneId].members} searchKey={searchTerm} />
							)
						} else {
							return null;
						}
					})}
				</div>
			</div>
		</DragDropContext>
	)
}

export default TalentCenter;