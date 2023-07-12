import { useContext } from 'react'
import ModalContext  from '../context/ModalProvider'

const useModal = ()=>{
  
    const context = useContext(ModalContext);
    return context;
}

export default useModal;