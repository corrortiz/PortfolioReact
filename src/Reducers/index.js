import { combineReducers } from "redux"
import ServicesReducer from '../Reducers/ServicesReducers';
import ProjectsReducer from '../Reducers/ProjectsReducers';
import MessageReducer from '../Reducers/MessageReducers';
import SwichtReducers from '../Reducers/SwichtReducers';
import DrawerReducers from './DrawerReducers';

export default combineReducers({
    services: ServicesReducer,
    projects: ProjectsReducer,
    message: MessageReducer,
    swicht: SwichtReducers,
    open: DrawerReducers
})
