import react from 'react'
import './Card.css'
function Card ({title, imageUrl,body}) {
    return (
       <div ClassName="card-container">
         <div ClassName="image-container">
            <img src={imageUrl} alt='' />
            </div>
            <div ClassName="card-content">
            <div ClassName="=title-container">
                <h1>{title}</h1>
            </div>
            <div ClassName="card-body">
                 <p>{body}</p>
            </div>
            </div>
         
             <div ClassName="btn">
                 <button>
                     <a>
                         View More
                     </a>
                 </button>
             </div>
)
}

export default card 
