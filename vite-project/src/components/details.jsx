import {div,h1} from './details.module.css'
export default function Details ({name,email}){
    return(
        <div className={div}>
            <h1 className={h1}>{`name:${name}` }</h1>
            <p>{`email:${email}`}</p>

        </div>
    )
}