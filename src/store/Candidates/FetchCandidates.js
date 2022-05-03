import axios from "axios";
import { fetchCadidateRequest, fetchCandidateSuccess, fetchCandidateError } from './CandidateAction';


const fetchCandidates = () => {
	return (dispatch) => {
		dispatch(fetchCadidateRequest());

		axios.get('https://randomuser.me/api/?results=100')
			.then(res => {
				dispatch(fetchCandidateSuccess(res.data.results));
			})
			.catch(err => {
				dispatch(fetchCandidateError(err))
			});
	}
}

export default fetchCandidates;