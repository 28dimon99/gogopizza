import React from "react"
import img1 from "../../../../assets/topMenuImg/1.jpg"
import img2 from "../../../../assets/topMenuImg/2.jpg"
import img3 from "../../../../assets/topMenuImg/3.jpg"
import img4 from "../../../../assets/topMenuImg/4.jpg"
import img5 from "../../../../assets/topMenuImg/5.jpg"
import img6 from "../../../../assets/topMenuImg/6.jpg"
import s from "./Stocks.module.css"

const Stock = (props) =>{
    return(
        <div>
            <div className={s.stocksText}>
                <h1>АКЦИИ</h1>
            </div>
          <div className={s.stocks}>
              <img src={img1}/>
          </div>
              <div className={s.stocksItems}>
                  <img src={img2}/>
                  <img src={img3}/>
                  <img src={img4}/>
                  <img src={img5}/>
                  <img src={img6}/>

              </div>



        </div>
    )
}
export default Stock