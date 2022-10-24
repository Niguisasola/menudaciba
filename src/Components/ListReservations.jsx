import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './IniciarSesion/firebase-config'

function ListReservations() {
    const [reservas, setReservas] = useState([])

    useEffect(() => {
        getReservas()
    }, [])

    useEffect(() => {
        console.log(reservas)
    }, [reservas])


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
            <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-4 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-violeta-ciba text-xl">Reservas</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table className='table-auto w-full'>
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Nombre</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Apellido</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Email</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Edad niña/niño</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Fecha</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Horario</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Comentarios</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    {reservas.map(reserva =>
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div key={reserva.id} class="font-medium text-gray-800">{reserva.data.nombre}</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{reserva.data.apellido}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-violeta-ciba">{reserva.data.email}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">{reserva.data.edad}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{reserva.data.fecha}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{reserva.data.horario}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{reserva.data.comentarios}</div>
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