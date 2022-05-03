import { CANDIDATE_CHANGE, FETCH_CANDIATE_ERROR, FETCH_CANDIATE_REQUEST, FETCH_CANDIATE_SUCCESS } from './CandidateTypes';

export const fetchCadidateRequest = () => {
	return {
		type: FETCH_CANDIATE_REQUEST
	}
}

export const fetchCandidateSuccess = (data) => {
	return {
		type: FETCH_CANDIATE_SUCCESS,
		data
	}
}

export const fetchCandidateError = (error) => {
	return {
		type: FETCH_CANDIATE_ERROR,
		payload: { error }
	}
}

export const candidateChange = (data) => {
	return {
		type: CANDIDATE_CHANGE,
		payload: data
	}
}
