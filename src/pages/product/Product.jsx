import "./product.css";
import rectangle from '../../images/Rectangle.png'
import group from '../../images/Group39.png'

export default function Product() {
  return (
    <>
    <div className="product">
      <div className="productContainer">
        <h1 className="productTitle">Garam Masala</h1>
       
      </div>
      
      <div className="productDetail">
           <div className="productLeft"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam, maiores ullam fugiat culpa saepe praesentium adipisci minus voluptatum aliquid, aut, eos laudantium quia soluta. Vel quibusdam laboriosam qui quaerat sunt deleniti,
           reiciendis, distinctio aspernatur nemo sapiente ad in debitis facere eveniet eligendi velit. Enim?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quo aliquid numquam sed molestiae, libero doloribus itaque optio in velit quae, amet nulla ipsum. Eaque asperiores est 
           excepturi facere? Alias blanditiis nihil ducimus ullam nulla omnis aperiam voluptatibus voluptate esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi eum maxime facilis eveniet, beatae sequi sunt rem itaque necessitatibus mollitia minus excepturi repellat officia, 
           quidem repellendus, illo vitae vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <br />
              <p>Facere accusantium minima possimus deserunt unde molestiae, ullam dolorem quibusdam fugiat. Excepturi aliquam, ex id vero nulla fugit assumenda ducimus sit magni tempore quasi odit, rerum vel facere dolor 
           consequatur et pariatur quisquam. Aut reiciendis earum nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint molestias repudiandae quasi accusamus labore, odit possimus aut praesentium. Rem, eligendi aspernatur. Atque, cupiditate reprehenderit iure blanditiis amet deleniti, vel, temporibus rem eius velit 
           officiis harum exercitationem praesentium aut et quibusdam rerum aspernatur sapiente quam.</p></div>
              
              <div className="productRight"><img src={rectangle} alt="log" />
              <div className="group">
              <img src={group} alt="group" />500+ People are interest</div>
                
              </div>
             
              </div>

              <div className="slidecontainer">
              <span className="text">Total 1.5Cr <hr className="line"/> Now 80Lac</span>
  <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
</div>
<div className="btn">    
<button className="button">Place Bid</button></div> 
          </div>
          
          </>
      
  );
}
