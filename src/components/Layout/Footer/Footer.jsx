import { ItemNavBarFooter } from '../../UI/ItemNavBar/ItemNavBarFooter/ItemNavBarFooter'
import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            
            <div className="footer-section">
                <h3>Contacto</h3>
                <ul>
                    <li>📍 Armenia, Colombia</li>
                    <li>📧 andres2345v@gmail.com</li>
                    <li>📞 +57 320 862 9078</li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>Síguenos</h3>
                <div className="social-icons">
                    <ItemNavBarFooter />
                </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>© 2025 Tu Empresa. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
