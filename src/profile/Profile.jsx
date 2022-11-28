import PropTypes from 'prop-types'

const Profile = (props) => {
    return (
        <div>
            <h1>First Name: {props.fname}</h1> <br></br>
            <h1>Last Name: {props.lname}</h1><br></br>
            <h1>Bio: {props.myBio}</h1><br></br>
            <h1>Profession: {props.pro}</h1>
            {props.children}
        </div>
    );
}
Profile.propTypes={
    fname:PropTypes.string,
    lname:PropTypes.string,
    pro:PropTypes.string,
    myBio:PropTypes.any,
  }
export default Profile;