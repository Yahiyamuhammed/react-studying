import Details from "./details"

export default function ({data}){
    console.log(data);
    
    return(
        <div>
            {
                data.map((details)=>
                {
                    return < Details name={details.name} email={details.email}/>
                })
            }
        </div>
    )
}