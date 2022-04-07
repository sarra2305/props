import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="profile">
      {props.handelName()}
      <div className="full-name">{props.fullName}</div>
      <div className="bio">{props.bio}</div>
      <div className="profession">{props.profession}</div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  img: PropTypes.string,
  handelName: PropTypes.func,
};

export default Profile;