const Header = ({Invoice , Table} : {Invoice: number , Table: number}) => {
  return (
    <header>
      <div>
        <p>الفاتورة</p>
        {Invoice}
      </div>

      <div>
        <p>الطاولة</p>
        {Table}
      </div>
    </header>
  )
}

export default Header;