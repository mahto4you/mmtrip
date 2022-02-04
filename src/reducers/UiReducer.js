const { createSlice } = require('@reduxjs/toolkit');
// export const storeData = async (key, value) => {
// 	try {
// 		const jsonValue = JSON.stringify(value);
// 		localStorage.setItem(`${key}`, jsonValue);
// 	} catch (e) {
// 		// saving error
// 	}
// };
// export const getData = async (key) => {
// 	try {
// 		const jsonValue = localStorage.getItem(`${key}`);
// 		return jsonValue != null ? JSON.parse(jsonValue) : null;
// 	} catch (e) {
// 		// error reading value
// 	}
// };

const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		drawer: false,
	},

	reducers: {
		toggleDrawerModal(state, action) {
			state.drawer = action.payload;
		},
	},
});

const { actions } = UiReducer;

export const { toggleDrawerModal } = actions;

export default UiReducer;
