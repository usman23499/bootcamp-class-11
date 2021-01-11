import images from "./images/home.jpg";

function Home() {
    return (
      <div style={{textAlign:'center'}} >
        <h1 >
          Home  
        </h1>
        <div>
          <img src={images} alt="Home page Image" width={"80%"}  />
        </div>
      </div>
    );
  }
  
  export default Home;