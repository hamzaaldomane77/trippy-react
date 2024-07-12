import './ContainerStyle.css'

export default function PopularContinar({titel ,dec ,firstimag,secimag ,reverse}) {
  return (
    <div className={`container ${reverse}`}>
        <div className="text">
            <h2>{titel}</h2>
            <p> {dec}</p>

        </div>
        <div className="images">
            <img src={firstimag} alt="" />
        <img src={secimag} alt="" /></div>
    </div>
  )
}
