export default function Hero({title,subtitle},imgeOn=false){
    return(
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {imgeOn && <figure>[画像]</figure>}
        </div>    
    )
}    