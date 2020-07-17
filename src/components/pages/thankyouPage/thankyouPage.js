import React from 'react'
import styles from './thankyouPage.module.css'

const ThankyouPage = () => {
    return (
        <div className={styles.thankyouWrapper}>
            <h1 className={styles.thankyouTitle}>Спасибо за заявку!</h1>
            <h2 className={styles.thankyouText}>Наши специалисты свяжутся с Вами в ближайшее время</h2>
            <p className={styles.thankyouSocialText}>Вступайте в наши группы в социальных сетях</p>
        </div>
    );
}

export default ThankyouPage;