import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Buttonpopup extends React.Component {
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
                <Button onClick={this.abrirModal} className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded">Contáctanos</Button>
                <Modal isOpen={this.state.abierto} style={{ modalStyles }}>
                    <ModalHeader className='d-flex'>
                        <FormGroup className="justify-self-center">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2 justify-center">Envíanos tu consulta</Label>
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2 justify-center">O contácatnos via Whatsapp</Label>
                        </FormGroup>
                    </ModalHeader>
                    <ModalBody className='cardbody -mx-3 mb-6'>
                        <FormGroup className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2">Nombre</Label>
                            <Input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Pepita" name='user_name'></Input>
                        </FormGroup>
                        <FormGroup className="w-full md:w-1/2 px-3">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2">Teléfono de contacto</Label>
                            <Input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="text" placeholder="03-03-456" name='phone' ></Input>
                        </FormGroup>
                        <FormGroup className="w-full md:w-1/2 px-3">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlhtmlFor="grid-email">Email</Label>
                            <Input className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="pepita.lapistolera@gmail.com" name='email'></Input>
                        </FormGroup>
                        <FormGroup className="w-full px-3">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlhtmlFor="grid-password">Mensaje</Label>
                            <Input className="no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" id="message" name='info complementaria'></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter className='className="col-sm-6'>
                        <Button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded" type="button" onClick={this.abrirModal}>Enviar</Button>
                        <Button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded" type="button" onClick={this.abrirModal}>Volver</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}


export default Buttonpopup;