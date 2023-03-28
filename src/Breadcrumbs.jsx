import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = ''
   const crumbs = location.pathname.split('/')
        console.log(crumbs);
        crumbs.slice(0,1);
       
        // .filter(crumbs => crumbs!== '')
        // .map(crumbs=>{
        //     currentLink+= `/${crumbs}`

        //     return (
        //         <div className="breadcrumbs" key={crumbs}>
        //             <Link to={currentLink}>{crumbs}</Link>
        //         </div>
        //     )
        // })

        return(
            <>
            {crumbs.map((item,index)=>
                {
                    if(isNaN(item))
                    {
                        if(index>crumbs.length-2)
                        {
                            return(<span>{` ${item} `}</span>)
                        }
                        else{
                            return(<><Link to={`${item}`}> {item}</Link><span>{" >"}</span></>)
                        }
                    }
        
                })}
                </>
        )
}

export default Breadcrumbs
