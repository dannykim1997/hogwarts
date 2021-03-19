import React from "react"

let MoreDetails = (props) => {
    console.log(props.hog)
    return (
        <div>
           specialty: {props.hog.specialty}
           <div>
           weight: {props.hog.weight}
           </div>
            <div>
           {props.hog.greased ? "READY FOR FUN" : "no grease"}
           </div>
        </div>
    )
}

export default MoreDetails