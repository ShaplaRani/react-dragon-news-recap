
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NewsCard = ({news}) => {
  // const [isTrue,setIsTrue] = useState(false);
    const {_id,title,details,image_url,thumbnail_url,rating,author} = news;

      const {badge, number} = rating

    //  const handleMoreText = () => {
    //      setIsTrue(true)
    //      console.log('true',isTrue);
    //  }
    return (
       <div className="relative mb-6 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
         <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         {title}
    </h4>
   <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
     <img src={image_url} alt="" />
  </div>
  <div className="">
    
    {/* {
      !isTrue && details.length > 200 ?<p>{details.slice(0,200)} 
       <Link onClick={handleMoreText} className='text-yellow-500 font-bold'>Read More...</Link></p>:
        <p>{details}</p>
    } */}
    {
      details.length > 200 ?<p>{details.slice(0,200)} 
       <Link to={`/news/${_id}`} className='text-yellow-500 font-bold'>Read More...</Link></p>:
        <p>{details}</p>
    }
  </div>
        <div className="flex items-center justify-between p-6">
     <div className="flex items-center -space-x-3">
      {/* <img
        alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-1"
      />
      <div
        data-tooltip="author-1"
        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
        Natali Craig
      </div>
      <img
        alt="tania andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-2"
      /> */}
      {/* <div>
         
      </div> */}
     </div>
      {/* <p>
      January 10
    </p> */}
  </div> 
  </div>


    );
};

NewsCard.propTypes = {
  news:PropTypes.object
}
export default NewsCard;