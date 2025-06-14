export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center" 
             style={{
               background: `linear-gradient(135deg, #0EA5E9 0%, #1F2937 100%)`
             }}>
      <div className="container-custom text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Test Plomberie Pro
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}>
          Votre plombier de confiance
        </h2>
        <p className="text-lg mb-8 opacity-80 animate-fade-in-up" 
           style={{ animationDelay: '0.4s' }}>
          📍 Paris
        </p>
        <a href="tel:01 23 45 67 89" 
           className="btn-primary text-lg animate-fade-in-up inline-block"
           style={{ animationDelay: '0.6s' }}>
          📞 01 23 45 67 89
        </a>
      </div>
    </section>
  )
}