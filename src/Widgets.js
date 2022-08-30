import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
          <div className='widget_articleLeft'>
              <FiberManualRecordIcon/>
          </div>

          <div className='widget_articleRight'>
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </div>
        </div>
    )


  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
        {newsArticle('James Bonds is back', 'Top news - 9009 readers')}
        {newsArticle('Coronavirus: UK update', 'Top news - 789 readers')}
        {newsArticle('Bitcoin Breaks 22k', 'Crypto - 12893 readers')}
        {newsArticle('Tesla hits all time high', 'Cars & Auto - 6488 readers')}
        {newsArticle('Redux is amazing', 'Code - 967 readers')}
        {newsArticle('College football is back in effect', 'Sports - 21009 readers')}
    </div>
  )
}

export default Widgets