const Movieitem = (props)=>{
    return(
      <div>
        
        <h2>{props.myMovie.Title}</h2>
        <p>{props.myMovie.Year}</p>
        <img src={props.myMovie.Poster}></img>
      </div>  
    );
}

export default Movieitem;