import PropTypes from "prop-types";
import './Friend.css';

function Friend({ avatar, name, isOnline }) {
    return (
    <>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </>
    )
}
Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default Friend;