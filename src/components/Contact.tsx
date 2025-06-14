export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">📞 Téléphone</h3>
              <a href="tel:01 23 45 67 89" 
                 className="text-primary text-lg font-semibold hover:underline">
                01 23 45 67 89
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">📍 Localisation</h3>
              <p className="text-gray-600">Paris</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Demande de devis</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Votre nom" 
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                <input type="tel" placeholder="Votre téléphone" 
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <textarea placeholder="Décrivez votre projet..." rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}