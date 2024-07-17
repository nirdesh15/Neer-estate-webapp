import Slider from '../../component/slider/slider';
import './singlePage.scss';
import { singlePostData, userData } from "../../lib/dummy";
import Map from '../../component/map/map';

function SinglePage() {
  return (  
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <span>Created on:8th May,2024</span>
              
              
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
              </div>
              <div className="bottom">
                {singlePostData.description}
             
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Reactiom</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./upvote.png" alt="" />
              <div className="featureText">
                <span>Upvote</span>
                <p>12</p>

              </div>
            </div>
            <div className="feature">
              <img src="./downvote.png" alt="" />
            <div className="featureText">
                <span>Downvote</span>
                <p>12</p>
                
              </div>
            </div>
            <div className="feature">
              <img src="./comment.png" alt="" />
            <div className="featureText">
                <span>Comments</span>
                <p>14</p>
                
              </div>
            </div>
          </div>
          <p className="title">Your Review Matters</p>
          <div className="size">
          <div className="sizes">
          
            <img src="./upvote.png" alt="" />
            <span>upvote</span>
          </div>
          <div className="sizes">
            <img src="./downvote.png" alt="" />
            <span>Downvote</span>
          </div>
          <div className="sizes">
            <img src="./comment.png" alt="" />
            <span>Comment </span>
          </div>
          </div>
          <p className="title"> Higlighted Comments</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src="./noavatar.jpg" alt="" />
              <div className="featureText">
                <span> Huma</span>
                <p>New york at that was the best</p>

              </div>
            </div>
            <div className="feature">
              <img src="./noavatar.jpg" alt="" />
            <div className="featureText">
                <span>good M</span>
                <p>Thats damn good writing</p>
                
              </div>
            </div>
            <div className="feature">
              <img src="./noavatar.jpg" alt="" />
            <div className="featureText">
                <span>Angela</span>
                <p>You should write more</p>
                
              </div>
            </div>
          </div>
         
          

          
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
