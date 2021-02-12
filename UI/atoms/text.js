
import Link from 'next/link';
import styles from '../../styles/Texts.module.css';

const Texts = () => {

    const PrimaryTitle = ({text}) => {
        return <h2 className={styles.primary_title}>{text}</h2>
    };

    const SecondaryTitle = ({text}) => {
        return <h4 className={styles.secondary_title}>{text}</h4>
    };

    const WarningTitle = ({text}) => {
        return <h4 className={styles.warning_title}>{text}</h4>
    };

    const SuccessTitle = ({text}) => {
        return <h4 className={styles.success_title}>{text}</h4>
    };

    const InfoParagraph = ({text}) => {
        return <p className={styles.info_paragraph}>{text}</p>
    };

    const SmallParagraph = ({text}) => {
        return <p className={styles.small_paragraph}>{text}</p>
    }

    const PrimaryLink = ({text, ref}) => {
        return <Link className={styles.primary_link} href={ref}>{text}</Link>
    }

    const ParagraphLink = ({text, ref}) => {
        return <Link className={styles.paragraph_link} href={ref}>{text}</Link>
    }

    const SmallLink = ({text, ref}) => {
        return <Link className={styles.small_link} href={ref}>{text}</Link>
    }


    return { PrimaryTitle, SecondaryTitle, WarningTitle, SuccessTitle, InfoParagraph, PrimaryLink, ParagraphLink, SmallLink}
}