import {useParams} from 'react-router-dom';

function Results() {
    const {name} = useParams()
  return (
    <div>No results for {name}</div>
  )
}

export default Results