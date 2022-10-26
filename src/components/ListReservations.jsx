import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './IniciarSesion/firebase-config'

function ListReservations() {
    const [reservas, setReservas] = useState([])

    useEffect(() => {
        getReservas()
    }, [])


    const getReservas = () => {
        const reservaCollRef = collection(db, 'reservas')
        getDocs(reservaCollRef)
            .then(response => {
                const reservations = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
                }))
                setReservas(reservations)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <>
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-4 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-violeta-ciba text-xl">Reservas</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className='table-auto w-full'>
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Nom</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Cognom</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Edat nena/nen</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Data</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Horari</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Informació Complementària</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    {reservas.map(reserva =>
                                        <tbody className="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">{reserva.data.nombre}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{reserva.data.apellido}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-violeta-ciba">{reserva.data.email}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left">{reserva.data.edad}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{reserva.data.fecha}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{reserva.data.horario}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{reserva.data.comentarios}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ListReservations