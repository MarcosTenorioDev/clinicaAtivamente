import '../Icons/Icons.css'

const Icons = ({imgIcon, title, desc, descImg, descImg2}) =>{
    return(
       <div id='contactIcons'>
            <i><img src={imgIcon} alt="" className='imgIcon'/></i>
            <div className='contentIcon'>
                <h4 className='iconText'>{title}</h4>
                <p className='iconText'>{desc}</p>
                <div className='descImgContainer'>
                    <i><img src={descImg} alt="" className='descImg' /></i>
                    <i><img src={descImg2} alt="" className='descImg' /></i>
                </div>
                
            </div>
       </div> 
    )
}
export default Icons;