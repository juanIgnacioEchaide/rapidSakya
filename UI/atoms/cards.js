import styles from '../../styles/Cards.module.css';

export default  function Cards(){
     
    const FocusCard = ({children}) => {
        return <div className={styles.focus_card} >
                    {children}
                </div>
    };

    const LightCard = ({title, text}) => {
        return <div className={styles.light_card}>
                    {children}
                </div>
    };

    const WarningCard = ({title, text}) => {
        return <div className={styles.warning_card}>
                    {children}
                </div>
    };

    const SuccessCard = ({title, text}) => {
        return <div className={styles.success_card}>
                    {children}
                </div>
    };

    return { FocusCard, LightCard, WarningCard, SuccessCard}
}