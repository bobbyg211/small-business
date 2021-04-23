import { connect } from "react-redux";
import { addListing } from "../redux/actions";
import AddListing from "../components/AddListing";

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  };
};

export default connect(null, mapDispatchToProps)(AddListing);
