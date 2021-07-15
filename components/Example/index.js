import styles from '../../styles/Example.module.css'

export default function Example({title,description}) {
    return ( 
    <>
        <div className={styles.o_card} >
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
        </div>
    </>
    )
}