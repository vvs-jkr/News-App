import styles from './styles.module.css'
import NewsItem from '../../components/NewsItem/NewsItem'

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default NewsList
