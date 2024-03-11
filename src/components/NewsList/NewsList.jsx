import styles from './styles.module.css'
import NewsItem from '../../components/NewsItem/NewsItem'
import withSkeleton from '../../helpers/hocs/withSkeleton'

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />
      })}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton
