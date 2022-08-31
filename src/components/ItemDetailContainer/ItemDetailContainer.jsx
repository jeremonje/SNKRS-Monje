import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const snkr = 
    { id: 1, image: "https://o.remove.bg/downloads/22896af5-a313-48b5-b425-b1ecb3bc816a/NI_DC4013-001-1-removebg-preview.png", title: "Nike Air Max 97", descripcion:"Las Zapatillas Nike Air Max 97 lucen un diseño innovador pero sin perder el estilo que mantiene hace años, Su parte superior de material sintético y la suela de espuma con amortiguación Max Air permiten pisadas con confianza y comodidad.", value:"$58.499"};



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(snkr);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;