

import { useContext} from 'react';
import '../assets/styles/components/Profile.scss';
import {AppContext} from '../containers/Context'


const Profile = () => {
    const {profile} = useContext(AppContext);

        return (
            <section className="profile">
                <h2 className="title">Profile</h2>
                <p className="description">{profile}</p>
            </section>
            )

    
}

export default Profile;