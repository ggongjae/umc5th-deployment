import Header from '../Header';
import  {tv_dummy}  from '../tvDummy';

function Tv() {

    
  return (
    <div>
        <Header/>
        <div>
            {
                tv_dummy.results.map((item, index) => {
                    return(
                        <div key={index}>
                            <h3>{item.name}</h3>
                            <img src="your-image-source" alt="some meaningful description or empty string" />
                            <p>{item.vote_average}</p>
                            <p>{item.overview}</p>
                        </div>
                    )
                })
            }
        </div> 
    </div>
  );
}

export default Tv;
