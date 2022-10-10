import cangurajeLaCiba from "../../Assets/Img/cangurajeLaCiba.jpg"
function MainUS(){
    return(
        <div className="w-auto flex">
            <img className='w-auto h-96 rounded-lg mx-20 ' src={cangurajeLaCiba}      alt="img-ciba"/>
                <div className="w-auto justify-center  flex flex-wrap space-y ">
                        <h1 className="flex justify-center text-5xl">La Ciba</h1>
                            <div className="flex h-2/3 text-xl content-center">
                                 <p className="mx-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                             </div>
                </div>
        </div>
    )
}
export default MainUS;