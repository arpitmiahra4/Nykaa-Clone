import React from 'react'
import styles from '../ProductPage/products.module.css';
const DataNotFound = () => {
  return (
    <div className={styles.notFound}>
      
      <h1 className={styles.prodHeading}>Oops ! No more data found 🤒</h1>
      <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1671208444~exp=1671209044~hmac=0241818a7e7eb66b73ad15603108896b48de74194a8b8f29b83e1038c57ec522" alt="not found pics" />
      <button onClick={()=>window.location.reload()}>Go back</button>

    </div>
  )
}

export default DataNotFound