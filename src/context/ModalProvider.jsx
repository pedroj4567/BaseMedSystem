import { createContext,useState} from 'react'

const ModalContext = createContext();
const ModalProvider = (props) =>{
    const [isOpenModal,setIsOpenModal] = useState(false);
  
    const openModal = ()=>{
        setIsOpenModal(true);
    }
    const closeModal = ()=>{
        setIsOpenModal(false);
    }
    return(
        <ModalContext.Provider
            value = {{
                openModal,
                closeModal,
                isOpenModal,
                setIsOpenModal,
            }}
        >

            {props.children}


        </ModalContext.Provider>
    )
}


export {
    ModalProvider
}

export default ModalContext