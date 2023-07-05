function CardQuantity({quantity,title,icon}) {
  return (
    <div className=" shadow-xl rounded-lg h-2/3 w-26 sm:w-38 md:w-50 lg:w-64 p-8 flex flex-col items-center bg-white  text-teal-600   ">
        <div className="font-bold capitalize text-xl flex items-center">
          <p className="mr-2">{title}</p>{icon}
        </div>
        <div className="text-center font-extrabold text-3xl w-[150px]">{quantity}</div>
    </div>
  )
}

export default CardQuantity