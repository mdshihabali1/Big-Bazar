import img1 from '../../../public/img/elon musk.jpg';
import img2 from '../../../public/img/sundar.jpg';
import img3 from '../../../public/img/zuckerberg.jpg';
import './About.css';


const About = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-orange-600 mt-3">About</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mx-2'>
                <img className='rounded-xl' src={img1} alt="" />
                <p className='text-justify p-3 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos laboriosam exercitationem numquam repellendus dolore explicabo. Veritatis amet quaerat voluptate nesciunt ducimus voluptas eligendi provident quasi porro dolorum culpa iste ea incidunt quas optio, animi earum! Incidunt ipsum aliquid minima dolorem, omnis mollitia consequuntur? Doloremque saepe impedit voluptas omnis, ratione totam enim labore atque? Nulla voluptatem, dolorem porro quibusdam officiis error autem eius itaque, necessitatibus quod veritatis exercitationem consequatur nemo a, id neque! Id et aspernatur veniam perspiciatis vitae quae dolorem! Illo fugit culpa consequuntur quis sequi non accusamus ut esse repellat, neque, ex reiciendis facere amet placeat vel eaque!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
           
            <p className='text-justify p-3 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos laboriosam exercitationem numquam repellendus dolore explicabo. Veritatis amet quaerat voluptate nesciunt ducimus voluptas eligendi provident quasi porro dolorum culpa iste ea incidunt quas optio, animi earum! Incidunt ipsum aliquid minima dolorem, omnis mollitia consequuntur? Doloremque saepe impedit voluptas omnis, ratione totam enim labore atque? Nulla voluptatem, dolorem porro quibusdam officiis error autem eius itaque, necessitatibus quod veritatis exercitationem consequatur nemo a, id neque! Id et aspernatur veniam perspiciatis vitae quae dolorem! Illo fugit culpa consequuntur quis sequi non accusamus ut esse repellat, neque, ex reiciendis facere amet placeat vel eaque!</p>
            <img className='rounded-xl' src={img2} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
            <img className='rounded-xl' src={img3} alt="" />
            <p className='text-justify p-3 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos laboriosam exercitationem numquam repellendus dolore explicabo. Veritatis amet quaerat voluptate nesciunt ducimus voluptas eligendi provident quasi porro dolorum culpa iste ea incidunt quas optio, animi earum! Incidunt ipsum aliquid minima dolorem, omnis mollitia consequuntur? Doloremque saepe impedit voluptas omnis, ratione totam enim labore atque? Nulla voluptatem, dolorem porro quibusdam officiis error autem eius itaque, necessitatibus quod veritatis exercitationem consequatur nemo a, id neque! Id et aspernatur veniam perspiciatis vitae quae dolorem! Illo fugit culpa consequuntur quis sequi non accusamus ut esse repellat, neque, ex reiciendis facere amet placeat vel eaque!</p>
          
            </div>
        </div>
    );
};

export default About;