type Props = {
    name?: string
    weight?: string
    price?: string
    fDate?: string
    lDate?: string
}

export const Products = ( {name, weight, price, fDate, lDate} : Props ) => {
  return (
   <div className="h-screen w-screen flex justify-center items-center">
     <div
        className="text-black bg-[#e74428] font-bold"
        style={{
          width: "127mm",   // largura real da etiqueta
          height: "50.8mm",  // altura real da etiqueta
        }}
      >
        <div className="w-[100%] h-[100%] flex flex-col">
          <div className="flex-3 flex justify-center items-center">
            <div className="w-[95%] h-[75%] bg-white flex flex-col justify-between p-[0.5mm]">
              <span className="ml-[0.5mm] mt-[0.5mm] text-[20pt]">PRODUTO: {name}</span>
              <div className="flex justify-between text-[20pt]">
                <span className="ml-[0.5mm]">{`${weight}g`}</span>
                <span className="mb-[0.5mm] mr-[0.5mm]">{`R$${price},00`}</span>
              </div>
            </div>
          </div>
          <div className="flex-2 flex">
            <div className="flex-9 flex flex-col justify-center items-center text-[16pt]">
              <span className="text-white">DATA DE FABRIC:</span>
              <div className="w-[90%] h-[45%] flex justify-center items-center bg-white">
                <span>{fDate}</span>
              </div>
            </div>
            <div className="flex-2"></div>
            <div className="flex-9 flex flex-col justify-center items-center text-[16pt]">
              <span className="text-white">DATA DE VALIDADE:</span>
              <div className="w-[90%] h-[45%] flex justify-center items-center bg-white">
                <span>{lDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
