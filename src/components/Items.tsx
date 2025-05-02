const Item = ({name , image , price} : {name: string , image: string , price: number}) => {
  return (
    <div className="item">
        <div className="image">
            <img src={image} alt="menu-image" />
        </div>

        <div className="name">
            <div>
                {name}
            </div>
            <div>
                ${price}
            </div>
        </div>

        <div className="quantity">

        </div>
    </div>
  )
}

export default Item;