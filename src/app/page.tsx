import { FaCode, FaProjectDiagram, FaGraduationCap, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-purple-600">José Manuel Mafla</h1>
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">Ingeniero de Software</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Bienvenido a mi portafolio profesional. Soy un desarrollador apasionado por crear soluciones digitales que
            mejoren la vida de las personas.
          </p>

          {/* Botones principales */}
          <div className="space-y-4 mb-16">
            <div>
              <a
                href="/proyectos"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Ver proyectos
              </a>
            </div>
            <div>
              <a
                href="/acerca-de-mi"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Acerca de mí
              </a>
            </div>
            <div>
              <a
                href="/testimonios"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Testimonios
              </a>
            </div>
            <div>
              <a
                href="/contacto"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de estadísticas */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">En números</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-300">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300">Tecnologías dominadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de habilidades destacadas */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Mis especialidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <FaCode className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Desarrollo Backend</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Especializado en Python, Django y desarrollo de APIs robustas y escalables.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <FaProjectDiagram className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Desarrollo Frontend</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Creación de interfaces modernas con Next.js, React y Tailwind CSS.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <FaGraduationCap className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Bases de Datos</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Diseño y optimización de bases de datos con SQL y consultas nativas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de proyectos destacados */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Proyectos destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Gestor Financiero</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Aplicación web para gestionar ingresos y egresos con gráficas interactivas desarrollada en Next.js.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Next.js
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Tailwind
                </span>
              </div>
              <a href="/proyectos" className="text-purple-600 hover:text-purple-800 font-semibold">
                Ver más →
              </a>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Tienda de Mascotas</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                E-commerce completo para productos de mascotas con carrito de compras desarrollado en Django.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Python
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Django
                </span>
              </div>
              <a href="/proyectos" className="text-purple-600 hover:text-purple-800 font-semibold">
                Ver más →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">¿Listo para trabajar juntos?</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Estoy disponible para nuevos proyectos y oportunidades de colaboración. ¡Hablemos sobre cómo puedo ayudarte
            a hacer realidad tus ideas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contacto"
              style={{
                display: "inline-block",
                backgroundColor: "#9333ea",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Contactar ahora
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/josemafla15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-manuel-mafla-mu%C3%B1oz-55b874313/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
