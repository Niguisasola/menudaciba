import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import emailjs from '@emailjs/browser';
import iconWhatsapp from '../../assets/img/icons/whatsapp.svg'


class Contactpopup extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }
    state = {
        abierto: false,
    }
    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto })
    }

    handleSubmit = (e) => {
        this.abrirModal()
        this.sendEmail(e)
      }

      
        sendEmail = (e) => {
          e.preventDefault();
          emailjs
            .sendForm(
              'service_f6uat68',
              'template_hz31ro6',
              this.myRef.current,
              'X5yYqiq0T_Uzamy6S')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
          e.target.reset();
        };

    render() {
        const modalStyles = {
            position: "absolute",
            top: "50%",
            left: "50%",
        }

      

        return (
            <>
                <p onClick={this.abrirModal}  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-grey-600 font-alata py-2 px-4">Contacta'ns</p>
                <Modal isOpen={this.state.abierto} style={{ modalStyles }}>
                <form ref={this.myRef} onSubmit={this.handleSubmit}>
                    <ModalHeader className='flex justify-center'>
                        <FormGroup className="flex justify-center flex-col items-center">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-sm font-bold mb-2 justify-center">Envia'ns la teva consulta  o contacta'ns via Whatsapp</Label>
                            <a target="_blank" rel="noreferrer" href='http://wa.link/85lcet'>
                                <img className='w-12 justify-center mt-2' src={iconWhatsapp} alt="Whatsapp" />
                            </a>
                        </FormGroup>
                    </ModalHeader>
                    <ModalBody className='cardbody -mx-3 mb-6'>
                        <FormGroup className="w-full px-3 mb-6 md:mb-0">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2">Nom</Label>
                            <Input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="grid-name" type="text" placeholder="Ingresa tu nombre" name='nombre'></Input>
                        </FormGroup>
                        <FormGroup className="w-full px-3">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2">Telèfon de contacte</Label>
                            <Input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="grid-phone" type="text" placeholder="Ingresa tu teléfono" name='telefono' ></Input>
                        </FormGroup>

                        <FormGroup className="w-full px-3">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-email">Email</Label>

                            <Input className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="email" type="email" placeholder="Ingresa tu email" name='email'></Input>
                        </FormGroup>
                        <FormGroup className="w-full px-3">
                            <Label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlhtmlFor="grid-password">Missatge</Label>
                            <Input className="no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 font-alata" id="message" placeholder="Ingresa tu comentario o información complementaria" name='mensaje'></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter className='className="col-sm-6'>
                        <Button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded font-alata" type="submit" >Enviar</Button>
                        <Button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded font-alata" type="button" onClick={this.abrirModal}>Tornar</Button>
                    </ModalFooter>
                    </form>
                </Modal>
                
            </>
        )
    }
}


export default Contactpopup;