

const Shimer = () => {
  return (
    <div className="restrountList">
          {Array(20)
          .fill("")
          .map((e)=>(
            <div className="Shimer-card" key={e}></div>
          ))}
    </div>
  )
}

export default Shimer
