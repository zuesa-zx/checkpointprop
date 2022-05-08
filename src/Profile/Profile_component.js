import React from 'react'
import PropTypes from 'prop-types';

const Profile_component = ({ fullName, bio, profession, handleName, children }) => {
    const styleProfile = {
        color: '#43658b', display: 'flex', margin: "40px 60px",
        justifyItems: 'center', textAlign: 'start'
    }

    // Handle Alert by event Click on button Alert
    const handleAlert = e => {
        handleName(fullName);
    }
    return (
        <div style={styleProfile}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                <div> {children}</div>
                <div>
                    <button onClick={handleAlert} style={{ width: '50%', height: '30px', border: 'solid 2px', borderRadius: '3px', fontSize: '12' }} >
                        Alert
                    </button>
                </div>
            </div>
            <div style={{ margin: '20px 50px' }} >
                <h1>{fullName}</h1>

                <h4>{profession}</h4>

                <span>{bio}</span>
            </div>
        </div>
    )
}

Profile_component.defaultProps = {
    fullName: 'Maram Ben ghdhehom',
    bio: ' \' student for a fullStack JS at GoMyCode',
    profession: 'Developer'
};

Profile_component.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

export default Profile_component