import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Confirmation extends React.Component {
    state = {
        abierto: false,
    }
    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto })
    }

    render() {
        const modalStyles = {
            position: "absolute",
            top: "50%",
            left: "50%",
        }

        return (
            <>
                <Button onClick={this.abrirModal} type="submit" className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-alata py-2 px-4 rounded">Reservar</Button>
                <Modal isOpen={this.state.abierto} style={{ modalStyles }}>
                    <ModalHeader className='flex justify-center'>
                        <FormGroup className="flex justify-center flex-col items-center">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-sm font-bold mb-2 justify-center">Menuda Ciba</Label>
                        </FormGroup>
                    </ModalHeader>
                    <ModalBody className='cardbody -mx-3 mb-6'>
                        <FormGroup className="w-full px-3 mb-6 md:mb-0">
                            <p className="block tracking-wide text-violeta-ciba text-base mb-2">Gràcies per contactar-nos. Rebràs una confirmació al mail que ens has proporcionat!</p>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter className='className="col-sm-6'>
                        <Link to='/'>
                            <Button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-alata py-2 px-4 rounded" type="button">Tornar a la pàgina principal</Button>
                        </Link>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}


export default Confirmation;