import Title from "../components/Title"


const RandomColor = () => {

    const handleClick = (e) => {
    //    let body = document.querySelector("body"); 
    //    body.style.background = selectRandomColor();
       let body = document.querySelector(".fi"); 
       body.style.color = selectRandomColor();
       e.target.style.backgroundColor = selectRandomColor();
    }

    function selectRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";

        for(let i=0; i < 6; i++) {
            color+=letters[Math.floor(Math.random()*16)]
        }

        return color;
    }

  return (
    <div className="container m-auto">
        <Title classes={"title txt-white"} title={"Random Color"}/>
      
      <div className="d-flex">
          <div className="btn btn-danger" onClick={(e)=> handleClick(e)}>Click me</div>
          <div className="btn btn-warning" onClick={(e)=> handleClick(e)}>Click Me</div>
          <div className="btn btn-info" onClick={(e)=> handleClick(e)}>Click Me</div>
          <div className="btn btn-light" onClick={(e)=> handleClick(e)}>Click Me</div>
      </div>
      <div className="color-img">
        <i class="fi fi-bs-truck-container"></i>
      </div>
    </div>
  )
}

export default RandomColor
