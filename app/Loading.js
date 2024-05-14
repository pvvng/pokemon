export default function Loading(){
    return (
        <div style={{position: "fixed", top:0}}>
            <div className="sky-bg">
                <div style={{textAlign:'center'}}>
                    <h2 className="typewriter" style={{fontSize:'2rem', fontWeight:'bold', color:'white'}}>LOADING...</h2>
                </div>  
                <img src='/pikachu-running.gif' width={'100%'}/>
                <img src='/grass.png' width={'100%'}/>
            </div>
        </div>
    )
}