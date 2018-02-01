import React, { Component } from "react";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses } from "../actions/MyAnalyses";

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalyses: id => {
      dispatch(getAnalyses(id));
    }
  };
};

const MyAnalysesContainer = connect(null, mapDispatchtoProps)(MyAnalyses);

export default MyAnalysesContainer;
