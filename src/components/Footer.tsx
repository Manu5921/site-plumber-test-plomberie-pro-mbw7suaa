export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Test Plomberie Pro</h3>
          <p className="text-gray-300 mb-4">Votre plombier de confiance</p>
          <div className="flex justify-center items-center space-x-6 mb-6">
            <a href="tel:01 23 45 67 89" 
               className="text-gray-300 hover:text-white transition-colors">
              📞 01 23 45 67 89
            </a>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">📍 Paris</span>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400">
              © 2025 Test Plomberie Pro. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Site créé avec notre générateur automatique
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}