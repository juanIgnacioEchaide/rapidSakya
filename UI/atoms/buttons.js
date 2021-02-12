import styles from '../../styles/Buttons.module.css';

export const Buttons = () => {
    
    const PrimaryButton = ({text, clickFunc}) =>{
        return <button className={styles.primary_button} onClick={clickFunc}>
                    {text}
                </button>
    };

    const SecondaryButton = ({text, clickFunc}) =>{
        return <button className={styles.secondary_button} onClick={clickFunc}>
                    {text}
                </button>
    };

    const ReadMoreButton = ({text, clickFunc}) =>{
        return <button className={styles.read_more_button} onClick={clickFunc}>
                    {text}
                </button>
    };

    return { PrimaryButton, SecondaryButton, ReadMoreButton }
}