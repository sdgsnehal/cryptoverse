import React from 'react';
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies,News} from '../components';
const {Title} = Typography

const Homepage = () => {
  const { data,isFetching} = useGetCryptosQuery();
  console.log(data)
  const globalStats =data?.data?.stats;
  if(isFetching) return 'Loading...'

  
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchnages" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /></Col>
        
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the work</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>show More</Link></Title>

      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>show More</Link></Title>

      </div>
      <News simplified/>
    </>
  );
}

export default Homepage