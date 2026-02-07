"use client"

import AgnosticButton from '@/app/Components/Button/AgnosticButton'
import InputPill from '@/app/Components/InputPill/InputPill'
import React from 'react'

const page = () => {
  return (
    <div className='mt-50'>
      <AgnosticButton>
        Hola
      </AgnosticButton>

      <div>
        <InputPill
          placeholder="Ingresa tu email..."
          buttonText="Suscribirse"
          buttonIcon={<span>→</span>}
          onButtonClick={() => console.log('Clicked!')}
        />
      </div>
    </div>
  )
}

export default page