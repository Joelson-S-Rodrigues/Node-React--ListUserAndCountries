import React, { useEffect, useState } from 'react';
import axios from 'axios'
import StyleDivCountries from '../components/styleDivCountries';
import PageNavigation from '../components/pageNavigation';
// import { Container } from './styles';

function CountriesPage() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const handleRequest= async ()=>{
const getCountries = await axios.get('http://localhost:3001/getCountries',{params:{page}})
setData(getCountries.data.data)
setTotalPage(getCountries.data.total_pages)
  }
  useEffect(()=> {
handleRequest()
  },[page])
  return (
    <div>
      {data.map(e=><StyleDivCountries coutryName={e.coutryName} borderCount={e.borderCount}/>)}
      <PageNavigation count={totalPage} cb={setPage}/>
    </div>
  )
}

export default CountriesPage;