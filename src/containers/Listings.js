import { connect } from "react-redux";
import Listings from "../components/Listings";
import { addListing } from "../redux/actions";
import { deleteListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (index) => dispatch(addListing(index)),
    deleteListing: (index) => dispatch(deleteListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
