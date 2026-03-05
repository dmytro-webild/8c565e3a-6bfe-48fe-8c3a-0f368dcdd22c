"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { Mail, CheckCircle2, Clock, User2, Zap } from "lucide-react";
import { useState } from "react";

export default function RozpocznijProjektPage() {
  const [formData, setFormData] = useState({
    name: "",    email: "",    projectType: "",    budget: "",    timeline: "",    description: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const mailtoLink = `mailto:wsa.labs.wolny@gmail.com?subject=Nowe%20zapytanie%20projektowe&body=${encodeURIComponent(
        `Imię: ${formData.name}\nEmail: ${formData.email}\nTyp projektu: ${formData.projectType}\nBudżet: ${formData.budget}\nOś czasu: ${formData.timeline}\nOpis projektu:\n${formData.description}`
      )}`;
      
      window.location.href = mailtoLink;
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: "",          email: "",          projectType: "",          budget: "",          timeline: "",          description: ""
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="large"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="WOLNY STUDIO AI"
          navItems={[
            { name: "Usługi", id: "/" },
            { name: "Realizacje", id: "/" },
            { name: "Proces", id: "/" },
            { name: "O nas", id: "/" },
            { name: "Kontakt", id: "/" }
          ]}
          bottomLeftText="Warszawa, Polska"
          bottomRightText="hello@walnystudio.ai"
        />
      </div>

      <div className="min-h-screen bg-background py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Opowiedz nam o swoim projekcie
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Wypełnij formularz poniżej, aby otrzymać wycenę i szczegółową konsultację dotyczącą Twojego projektu.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-card rounded-lg p-8 md:p-12 mb-16 border border-accent/20">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary-cta mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Dziękujemy za wiadomość!
                </h2>
                <p className="text-lg text-foreground/70 text-center max-w-md">
                  Odpowiemy w ciągu 24 godzin na adres email: <span className="font-semibold text-primary-cta">{formData.email}</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Jan Kowalski"
                      className="w-full px-4 py-3 bg-background border border-accent rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="jan@example.com"
                      className="w-full px-4 py-3 bg-background border border-accent rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-foreground font-semibold mb-2">
                    Typ projektu *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent rounded-lg text-foreground focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta"
                  >
                    <option value="">Wybierz typ projektu</option>
                    <option value="Strona internetowa">Strona internetowa</option>
                    <option value="System webowy">System webowy</option>
                    <option value="Automatyzacja">Automatyzacja</option>
                    <option value="AI dla biznesu">AI dla biznesu</option>
                    <option value="Nie wiem jeszcze">Nie wiem jeszcze</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-foreground font-semibold mb-2">
                    Przybliżony budżet *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent rounded-lg text-foreground focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta"
                  >
                    <option value="">Wybierz zakres budżetu</option>
                    <option value="Poniżej 5000 PLN">Poniżej 5000 PLN</option>
                    <option value="5000 - 10000 PLN">5000 - 10000 PLN</option>
                    <option value="10000 - 25000 PLN">10000 - 25000 PLN</option>
                    <option value="25000 - 50000 PLN">25000 - 50000 PLN</option>
                    <option value="Powyżej 50000 PLN">Powyżej 50000 PLN</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-foreground font-semibold mb-2">
                    Ośrodek czasu *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-accent rounded-lg text-foreground focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta"
                  >
                    <option value="">Wybierz ośrodek czasu</option>
                    <option value="Tak szybko jak to możliwe">Tak szybko jak to możliwe</option>
                    <option value="W ciągu miesiąca">W ciągu miesiąca</option>
                    <option value="W ciągu 2-3 miesięcy">W ciągu 2-3 miesięcy</option>
                    <option value="Elastycznie">Elastycznie</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-foreground font-semibold mb-2">
                    Opis projektu *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Opisz szczegółowo, co chcesz osiągnąć. Jakie są główne problemy? Jakie funkcjonalności są potrzebne?"
                    rows={8}
                    className="w-full px-4 py-3 bg-background border border-accent rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-cta text-primary-cta-text rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Wyślij zapytanie
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 24h Response */}
            <div className="bg-card rounded-lg p-8 border border-accent/20 text-center">
              <Clock className="w-12 h-12 text-primary-cta mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Odpowiedź w 24h</h3>
              <p className="text-foreground/70">
                Gwarantujemy odpowiedź na Twoje zapytanie w ciągu 24 godzin roboczych
              </p>
            </div>

            {/* Free Consultation */}
            <div className="bg-card rounded-lg p-8 border border-accent/20 text-center">
              <User2 className="w-12 h-12 text-primary-cta mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Bezpłatna Konsultacja</h3>
              <p className="text-foreground/70">
                Pierwsza konsultacja strategiczna jest całkowicie bezpłatna i bez zobowiązań
              </p>
            </div>

            {/* Individual Approach */}
            <div className="bg-card rounded-lg p-8 border border-accent/20 text-center">
              <Zap className="w-12 h-12 text-primary-cta mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Indywidualne Podejście</h3>
              <p className="text-foreground/70">
                Każdy projekt jest unikalny. Dostosowujemy się do Twoich konkretnych potrzeb
              </p>
            </div>
          </div>

          {/* Contact Email */}
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-2">Lub skontaktuj się bezpośrednio:</p>
            <a
              href="mailto:wsa.labs.wolny@gmail.com"
              className="inline-flex items-center gap-2 text-primary-cta font-semibold text-lg hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              wsa.labs.wolny@gmail.com
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
