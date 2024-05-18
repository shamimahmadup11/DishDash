

const Shimer = () => {
  return (
    <div className="restrountList">
          {Array(20)
          .fill("")
          .map((e)=>(

            <div className="main-shimmer" key={e}>
              <div  className="Shimer-card" ></div>
              <div className="second-simmercard"></div>
              <div className="third-shimmercard"></div>
            </div>

          ))}
    </div>
  )
}

export default Shimer
