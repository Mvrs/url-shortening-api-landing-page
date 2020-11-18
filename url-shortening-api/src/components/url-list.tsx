import { useSelector, useDispatch } from 'react-redux'
import { UrlState } from '../../redux/reducers/urlReducer'

function UrlList() {
  const urls = useSelector<UrlState, UrlState['urls']>(state => state.urls)
  return (
    <div className="url-list">
      <ul>
        {urls.map(url => {
          return <li key={url.id}>{url}</li>
        })}
      </ul>
    </div>
  )
}

export default UrlList
