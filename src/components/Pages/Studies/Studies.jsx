import React from 'react'
import './Studies.css'

export const Studies = () => {
  return (
    <div>
      <h1>Mi Formación Académica</h1>
      <div class="container">
        
        
        <div class="timeline">
            <div class="study-item">
                <div class="study-content">
                    <h3 class="study-title">Bachiller</h3>
                    <p class="study-detail">Educación media completa</p>
                    <div class="progress-container">
                        <div class="progress-bar complete">Completado</div>
                    </div>
                </div>
            </div>
            
            <div class="study-item">
                <div class="study-content">
                    <h3 class="study-title">Técnico en Desarrollo de Software</h3>
                    <p class="study-detail">Formación técnica especializada en programación</p>
                    <div class="progress-container">
                        <div class="progress-bar complete">Completado</div>
                    </div>
                </div>
            </div>
            
            <div class="study-item">
                <div class="study-content">
                    <h3 class="study-title">Análisis y Desarrollo de Software</h3>
                    <p class="study-detail">Quinto trimestre de seis trimestres</p>
                    <div class="progress-container">
                        <div class="progress-bar in-progress-1">5 de 6</div>
                        <div class="progress-label">5/6 trimestres</div>
                    </div>
                </div>
            </div>
            
            <div class="study-item">
                <div class="study-content">
                    <h3 class="study-title">Ingeniería en Sistemas y Computación</h3>
                    <p class="study-detail">Tercer semestre de once semestres</p>
                    <div class="progress-container">
                        <div class="progress-bar in-progress-2">3 de 11</div>
                        <div class="progress-label">3/11 semestres</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
