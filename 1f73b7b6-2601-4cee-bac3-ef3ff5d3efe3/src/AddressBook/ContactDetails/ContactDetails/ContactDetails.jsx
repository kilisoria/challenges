import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FetchFailure from "../FetchFailure/FetchFailure";
import Placeholder from "../Placeholder/Placeholder";

import "./ContactDetails.css";

const ContactDetails = ({ data, hasFailedToFetch }) => {
  const { name, phone, addressLines } = (data || {});

  const wrapped = (node) => (
    <section className="ContactDetails">
      {node}
    </section>
  );

  if (hasFailedToFetch) {
    return wrapped(
      <FetchFailure className="ContactDetails_failure" />,
    );
  }

  if (!data) {
    return wrapped(
      <Placeholder className="ContactDetails_placeholder" />,
    );
  }

  return wrapped(
    <div className="ContactDetails_data">
      <div className="ContactDetails_data_item ContactDetails_name">
        <span>Name</span>
        <span>{name}</span>
      </div>

      <div className="ContactDetails_data_item ContactDetails_phone">
        <span>Phone</span>
        <span>{phone}</span>
      </div>

      {/* TODO something is wrong here (FIXED) */}
      <div className="ContactDetails_data_item ContactDetails_address">
        <span>Address</span>
        {addressLines && addressLines.map(addressLine => (
          <span key={addressLine}>{addressLine}</span>
        ))}
      </div>

    </div>,
  );
};

ContactDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    addressLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  hasFailedToFetch: PropTypes.bool.isRequired,
};

const mapReduxStateToProps = state => ({
  data: state.addressBook.contacts.fetchedContact,
  hasFailedToFetch: state.addressBook.contacts.fetchFailure,
});

export default connect(
  mapReduxStateToProps,
)(ContactDetails);
