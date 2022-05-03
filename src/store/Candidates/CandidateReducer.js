import {
	FETCH_CANDIATE_REQUEST,
	FETCH_CANDIATE_SUCCESS,
	FETCH_CANDIATE_ERROR,
  CANDIDATE_CHANGE,
} from "./CandidateTypes";

const initialState = {
	loading: false,
	users: [],
	columns: [],
	columnOrder: ["lane-1", "lane-2", "lane-3"],
	error: null,
};

const candidateReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_CANDIATE_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};

		case FETCH_CANDIATE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				columns: {
					"lane-1": {
						id: "lane-1",
						title: "Open",
						members: action.data,
					},
					"lane-2": {
						id: "lane-2",
						title: "Waiting",
						members: [],
					},
					"lane-3": {
						id: "lane-3",
						title: "Scheduled",
						members: [],
					},
				},
			};

		case FETCH_CANDIATE_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};

    case CANDIDATE_CHANGE:
      return {
        ...state,
        columns: action.payload
      }
		default:
			return state;
	}
};

export default candidateReducer;
