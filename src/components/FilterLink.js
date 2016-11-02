import React from "react";
import Link from "./Link";
import { setVisibilityFilter } from "../actions";
import { connect } from "react-redux";

const mapStateToFilterLinkProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToFilterLinkProps = (dispatch, ownProps) => ({
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(
  mapStateToFilterLinkProps,
  mapDispatchToFilterLinkProps
)(Link);

export default FilterLink;
