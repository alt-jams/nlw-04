import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/alt-jams.png" alt="Jamilly Cuco"/>
            <div>
                <strong> Jamilly Cuco</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}