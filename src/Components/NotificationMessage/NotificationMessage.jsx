import PropTypes from "prop-types";

const NotificationMessage = ({ message }) => <p>{message}</p>;
export default NotificationMessage;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
