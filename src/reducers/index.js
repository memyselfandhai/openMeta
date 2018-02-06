import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
import Token from "./Token";
import Profile from "./Profile";
import sitesearch from "./sitesearch";
import Analysis from "./Analysis";
import search from "./search";
import modules from "./modules";

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
  Token,
  routing: routerReducer,
  search,
  Profile,
  sitesearch,
  Analysis,
  modules
});

export default Reducers;
