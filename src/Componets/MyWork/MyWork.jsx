import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt='theme'/>
      </div>
      <div className="mywork-container">
        {/* {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt='work'/>
        })} */}
        {mywork_data.map((work, index) => (
          <a key={index} href={work.w_url} target="_blank" rel="noopener">
            <img src={work.w_img} alt="work" />
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt='arrow'/>
      </div>
    </div>
  )
}

export default MyWork
