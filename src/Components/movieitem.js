//Function with props argument for mymovie
const Movieitem = (props)=>{
    return(
      //defined the movie year ,title and poster with props 
        <div>
        <h2>{props.myMovie.Title}</h2>
        <p>{props.myMovie.Year}</p>
        <img src={props.myMovie.Poster}></img>
      </div>  
    );
}

export default Movieitem;