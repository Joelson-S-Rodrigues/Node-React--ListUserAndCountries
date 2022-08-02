import React,{useEffect, useState} from 'react';
import StyleDiv from '../components/styleDiv';
import '../Style/Home.css'
import axios from 'axios'
import PageNavigation from '../components/pageNavigation';
// import { Container } from './styles';

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)
const handleRequest = async () => {
  const getUser = await axios.get('http://localhost:3001/getUser',{params:{page}})
  setData(getUser.data.data)
  setTotalPage(getUser.data.total_pages)

}

  useEffect(() => {
   

      handleRequest()
    
  },[page])
  return (
    <div className='homeContainer' >
{data.map((e,i) => <StyleDiv key={i}  name={e.first_name} surName={e.last_name} email={e.email} avatar={e.avatar}/>)} 
 <PageNavigation count={totalPage} cb={setPage}/>

    </div>
  )
}

export default Home;