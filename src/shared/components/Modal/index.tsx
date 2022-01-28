import Modal from 'react-modal';
import styled from 'styled-components';
import { BiologicoInfoModal } from './bilogicoInfoModal';
import { LeiteInfoModal } from './leiteInfoModal';
import { ManteigaInfoModal } from './manteigaInfoModal';
import { QueijoInfoModal } from './queijoInfoModal';
import { SnackModalInfo } from './snackInfoModal';


const customStyles = {
  
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#EEF1E5',
      borderRadius: '29px',
     
    },
    overlay: {
      background: "rgba(49, 60, 53, 0.5)"
    }
  };
  Modal.setAppElement('#root');

export const ModalC:React.FC<any> = ({
    product,
    openModal,
    afterOpenModal,
    children,

    close =() => {},
}) => {

    return(
        <StyledMain>
            {children}
            <Modal
            isOpen={openModal}
            onAfterOpen={afterOpenModal}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Example Modal"
            >
              {product.name === 'snack' && <SnackModalInfo product={product} close={close}/>}
              {product.name === 'queijo' && <QueijoInfoModal product={product} close={close}/>}
              {product.name === 'leite' &&  <LeiteInfoModal product={product} close={close}/>}
              {product.name === 'manteiga' &&  <ManteigaInfoModal product={product} close={close}/>}
              {product.name === 'biologico' &&  <BiologicoInfoModal product={product} close={close}/>}
            </Modal>
      
      </StyledMain>
    )
};


const StyledMain = styled.div`

`;


