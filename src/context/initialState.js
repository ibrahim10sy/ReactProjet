import {fetch , fetchUser} from "../utils/fetchLocaleStorageData";

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    
}