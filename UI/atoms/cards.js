import styles from '../../styles/Cards.module.css';

export default  function Cards(){
     
    const FocusCard = ({children}) => {
        return <div className={styles.focus_card} >
                    {children}
                </div>
    };

    const LightCard = ({children}) => {
        return <div className={styles.light_card}>
                    {children}
                </div>
    };

    const WarningCard = ({children}) => {
        return <div className={styles.warning_card}>
                    {children}
                </div>
    };

    const SuccessCard = ({children}) => {
        return <div className={styles.success_card}>
                    {children}
                </div>
    };

    return { FocusCard, LightCard, WarningCard, SuccessCard}
}