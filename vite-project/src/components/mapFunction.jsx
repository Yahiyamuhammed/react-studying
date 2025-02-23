import Details from "./details"

export default function (){
    const data=[
        {id:1,name:'yahya',email:'yahiyamuhammed@gmail.com'},
        {id:2,name:'mufeed',email:'mufeed@gmail.com'}
    ]
    return(
        <div>
            {data.map(num=>{
               return <Details key={num.id} name={num.name} email={num.email} />
            })}
        </div>
    )
}