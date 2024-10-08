// External Libraries
import React from 'react'

// Hooks
import { useSchedules } from './hooks/useSchedules'

// Types
import { AppointmentCard } from './AppointmentCard'

// Styles
import { Container } from './styles'


export const Schedules: React.FC = () => {
  // Hooks
  const { appointments } = useSchedules()

  // Constants
  const imagePaths = [
    "/imgs/gatinhoMedico.png",
    "/imgs/pandaMedico.png",
    "/imgs/coelhinhoMedico.png",
  ]

  // Functions
  function renderAppointmentsCards() {
    if (!appointments?.length) return

    return appointments.map((appointment, index) => {
 
      const imageChose = imagePaths[index % imagePaths.length]

      return <AppointmentCard key={appointment.id} appointment={appointment} imgSrc={imageChose} />
    })
  }

  return <Container>{renderAppointmentsCards()}</Container>
}
