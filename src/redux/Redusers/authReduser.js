import {authAPI} from "../../Api/Api";


const SET_DATA_ITEMS = 'http://localhost:3000/db.json';


let initialState = {
    id: null,
    img: null,
    name: null,
    prise: null,
    description: null

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA_ITEMS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

export const setDataItems = (id, img, name, prise, description) => ({
    type: SET_DATA_ITEMS,
    payload: {id, img, name, prise, description}
});


export const getDataItems = () => async (dispatch) => {
    let response = await authAPI.data();

    if (response.data.resultCode === 0) {
        let {id, img, name, prise, description} = response.data.data;
        dispatch(setDataItems(id, img, name, prise, description));
    }
};
/*//Thunk для логинизации
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        //success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

//Thunk для вылогинизации
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};*/
export default authReducer
