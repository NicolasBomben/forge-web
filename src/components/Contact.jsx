import { Phone, Linkedin, Mail  } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f9fc] px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <form className="flex-1 space-y-4">
                <input placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message" />
                <button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </button>
              </form>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline">
                  <Phone className="mr-2 h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}
