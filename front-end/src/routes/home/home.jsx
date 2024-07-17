import './home.scss';
import SearchBar from '../../component/searchbar/searchbar';
function HomePage(){
    return(
        <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">
            Discover your dream home! </h1>

             <p> Elegant and spacious real estate with modern amenities awaits you.</p> 
             <SearchBar/>
             <div className="boxes">
            <div className="box">
                <h1>2+</h1>
                <h2>Years of experience</h2>
            </div>
            <div className="box">
                <h1>24+</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>200+</h1>
                <h2>Property ready</h2>
            </div>
            
             </div>
           
            
            </div>
            </div>
    
        <div className="imgContainer"> 
        <img src="/bg.png" alt="" />

        </div>
        </div>
    )

}
export default HomePage