"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, BarChart3, Brain, CheckCircle2, Code2, Github, Handshake, Lightbulb, Linkedin, Mail, MapPin, Phone, Search, Target, TrendingUp, Workflow, Wrench, Zap, ShieldCheck, Users, Sparkles, TrendingDown, RotateCw, Activity } from "lucide-react";

export default function LandingPage() {
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
            { name: "Start", id: "innowacyjne-rozwiazania" },
            { name: "Realizacje", id: "cases" },
            { name: "Rozpocznij projekt", id: "contact" }
          ]}
          bottomLeftText="Rajcza, Polska"
          bottomRightText="wsa.labs.wolny@gmail.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Budujemy systemy, które zarabiają dla Twojej firmy."
          description="Średnio +250% ROI w 6 miesięcy. Tworzymy aplikacje webowe, platformy AI i automatyzacje, które eliminują chaos, oszczędzają czas i zwiększają zysk. Partnerstwo, które skaluje biznes."
          tag="Innowacyjne Rozwiązania"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "Rozpocznij projekt", href: "contact" },
            { text: "Zobacz realizacje", href: "cases" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/modern-saas-dashboard-interface-with-ai--1772646442924-01f0b869.png?_wi=1",              imageAlt: "Dashboard interfejsu AI"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-mockup-of-a-recruitment-pla-1772646443733-1f2246bd.png?_wi=1",              imageAlt: "Platform rekrutacyjna"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/workshop-management-system-interface-dis-1772646442811-e87de6cc.png?_wi=1",              imageAlt: "System zarządzania"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/marketing-agency-crm-dashboard-with-cont-1772646443395-5375cae3.png?_wi=1",              imageAlt: "CRM dla agencji"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/modern-saas-dashboard-interface-with-ai--1772646442924-01f0b869.png?_wi=2",              imageAlt: "Automatyzacja procesów"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-mockup-of-a-recruitment-pla-1772646443733-1f2246bd.png?_wi=2",              imageAlt: "Integracje API"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/workshop-management-system-interface-dis-1772646442811-e87de6cc.png?_wi=2",              imageAlt: "Platformy webowe"
            }
          ]}
          ariaLabel="Hero sekcja WOLNY STUDIO AI"
        />
      </div>

      <div id="innowacyjne-rozwiazania" data-section="innowacyjne-rozwiazania">
        <TestimonialAboutCard
          tag="Kim Jesteśmy"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          title="Nie jesteśmy software housem. Jesteśmy partnerem w rozwoju Twojego biznesu."
          description="Skupiamy się na realnych problemach"
          subdescription="Dedicated Business Partner, Not Just Vendors – Twoim sukcesem kierują się nasze strategie i technologia."
          icon={Target}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/modern-saas-dashboard-interface-with-ai--1772646442924-01f0b869.png?_wi=3"
          imageAlt="Studio AI workspace"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="O nas sekcja"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureHoverPattern
          title="Co Robimy"
          description="Trzy filarowe usługi, które transformują biznes i skalują zyski poprzez nowoczesną technologię"
          tag="Nasze Usługi"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              icon: Code2,
              title: "Systemy i Aplikacje Webowe",              description: "Dedykowane platformy, CRM, systemy zarządzania, panele klienta. Rozwiązania stworzone pod Twoją firmę.",              button: { text: "Oszczędź 20h/tydzień", href: "contact" }
            },
            {
              icon: Brain,
              title: "Automatyzacje i AI",              description: "Boty AI, automatyczna obsługa klienta, scoring CV, workflow, integracje API. Procesy które pracują 24/7.",              button: { text: "Zwiększ Przychód o 40%", href: "contact" }
            },
            {
              icon: TrendingUp,
              title: "Digitalizacja Biznesu",              description: "Zamieniamy Excel i papier na nowoczesne systemy online. Porządek operacyjny, lepsze decyzje.",              button: { text: "Zmniejsz Koszty o 35%", href: "contact" }
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Sekcja usług"
        />
      </div>

      <div id="cases" data-section="cases">
        <div className="py-20 px-4 sm:px-6 md:px-8">
          <div className="space-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-cta/10">
                <span className="text-sm font-medium text-primary-cta">Case Studies</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Nasze Realizacje</h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">Rzeczywiste projekty z rzeczywistymi rezultatami. Każdy projekt = konkretne problemy rozwiązane, wymierny ROI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Case Study 1: Recruitment Platform */}
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 aspect-video">
                  <img
                    src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-mockup-of-a-recruitment-pla-1772646443733-1f2246bd.png?_wi=1"
                    alt="Platforma Rekrutacyjna AI"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Platforma Rekrutacyjna AI</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Problem</h4>
                      <p className="text-foreground/70">Nasz klient spędzał 40+ godzin tygodniowo na manualnym przeszukiwaniu i ocenianiu CV. Proces był chaotyczny, a najlepsi kandydaci ginęli w przepełnionych skrzynkach e-mail.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Rozwiązanie</h4>
                      <p className="text-foreground/70">Stworzyliśmy inteligentny system AI z real-time dashboardem. Platforma automatycznie scoring'uje kandydatów, wysyła notyfikacje do zespołu i integruje się z systemem HR.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Rezultat</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">70% redukcja czasu selekcji CV</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">200% wzrost jakości najmu</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RotateCw className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">24/7 automatyczne procesowanie</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2: Workshop Management */}
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden bg-gradient-to-br from-orange-900 to-red-900 aspect-video">
                  <img
                    src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/workshop-management-system-interface-dis-1772646442811-e87de6cc.png?_wi=1"
                    alt="System Zarządzania Warsztatem"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">System Zarządzania Warsztatem</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Problem</h4>
                      <p className="text-foreground/70">Warsztat samochodowy zarządzał harmonogramem napraw za pomocą karteczek i SMS-ów. Brak widoczności kosztów, opóźnienia, niezadowoleni klienci.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Rozwiązanie</h4>
                      <p className="text-foreground/70">Wdrożyliśmy system zarządzania z real-time dashboardem, automaty kosztorysu, trackingiem napraw i integracją z SMS/email do klientów.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Rezultat</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">90% mniej czasu na kosztorysy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">35% wzrost przepustowości</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RotateCw className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">+40% zadowolenie klientów</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3: Marketing Agency CRM */}
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 aspect-video">
                  <img
                    src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/marketing-agency-crm-dashboard-with-cont-1772646443395-5375cae3.png?_wi=1"
                    alt="CRM dla Agencji Marketingowej"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">CRM dla Agencji Marketingowej</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Problem</h4>
                      <p className="text-foreground/70">Agencja marketingowa prowadziła kampanie klientów w pięciu różnych narzędziach. Brak centralnego widoku, duplikaty danych, strata informacji.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Rozwiązanie</h4>
                      <p className="text-foreground/70">Zbudowaliśmy dedykowany CRM z centralizacją wszystkich procesów, automatyzacją kampanii, raportowaniem i integracją z narzędziami martech.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-cta mb-2">Rezultat</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">Centralizacja 100% procesów</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">50% wzrost produktywności zespołu</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RotateCw className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-semibold">+25% retencja klientów</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardTen
          title="Dlaczego My"
          description="Technologia to narzędzie. Liczy się efekt. Nasze podejście oparte na rezultatach biznesowych."
          tag="Przewaga Konkurencyjna"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              title: "Odpowiadamy w 24h",              subtitle: "Szybka komunikacja i dzialanie",              category: "Responsywność",              value: "24h"
            },
            {
              id: "2",              title: "Transparentna Wycena",              subtitle: "Zero ukrytych kosztów",              category: "Klarowność",              value: "100%"
            },
            {
              id: "3",              title: "Realne ROI",              subtitle: "Mierzymy wyniki biznesowe",              category: "Efekt",              value: "+300%"
            },
            {
              id: "4",              title: "Stałe Wsparcie",              subtitle: "Po wdrożeniu nie znikamy",              category: "Partnerstwo",              value: "24/7"
            },
            {
              id: "5",              title: "Myślimy Biznesowo",              subtitle: "Nie tylko technicznie",              category: "Strategia",              value: "∞"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Sekcja zalet"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureHoverPattern
          title="Proces Współpracy"
          description="4 przejrzyste kroki od pomysłu do wdrożenia. Bez zaskoczenia, pełna kontrola, dynamiczne tempo."
          tag="Nasz Workflow"
          tagIcon={Workflow}
          tagAnimation="slide-up"
          features={[
            {
              icon: BarChart3,
              title: "01 - Analiza i Strategia",              description: "Pogłębiamy się w Twoim biznesie. Problemy, wyzwania, cele. Budujemy strategię opartą na danych.",              button: { text: "Dowiedz się więcej", href: "#" }
            },
            {
              icon: Search,
              title: "02 - Projekt UX/UI",              description: "Projektujemy doświadczenie użytkownika i interfejs. Funkcjonalne, piękne, intuicyjne rozwiązania.",              button: { text: "Dowiedz się więcej", href: "#" }
            },
            {
              icon: Wrench,
              title: "03 - Development",              description: "Programujemy. Testujemy. Optymalizujemy. Kod najwyższej klasy, architektura przyszłościowa.",              button: { text: "Dowiedz się więcej", href: "#" }
            },
            {
              icon: CheckCircle2,
              title: "04 - Wdrożenie i Optymalizacja",              description: "Launch. Monitoring. Wsparcie. Ciągłe ulepszanie systemu na bazie rzeczywistych danych użytkowników.",              button: { text: "Dowiedz się więcej", href: "#" }
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Sekcja procesu"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <div className="space-y-12 py-20 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-cta/10">
              <span className="text-sm font-medium text-primary-cta">Opinie Google</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Zadowoleni Klienci</h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">Odkryj, co mówią o nas nasi klienci na Google</p>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary-cta text-primary-cta-text rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Przejdź do Opinii na Google
            </a>
          </div>
        </div>
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Zaufanie Biznesowe"
          description="Pracujemy z najlepszymi firmami z Polski i Europy. Partnerami bez kompromisów w jakości. Wszystkie opinie są zweryfikowane i pochodzą od rzeczywistych klientów."
          tag="Nasi Partnerzy"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          names={["TechRecruit", "AutoService", "Marketing Pro", "Staffing Excellence", "Cloud Innovations", "Enterprise Systems", "Digital Solutions", "AI Forward"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
          ariaLabel="Sekcja partnerów"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Masz pomysł? Zbudujmy system, który zacznie na Ciebie pracować."
          animationType="entrance-slide"
          buttons={[
            { text: "Rozpocznij Projekt", href: "/rozpocznij-projekt" },
            { text: "Rozmowa Strategiczna", href: "/rozpocznij-projekt" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          ariaLabel="Sekcja kontaktu"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="WOLNY STUDIO AI"
          copyrightText="© 2025 WOLNY STUDIO AI. Tworzymy systemy, które zarabiają."
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" },
            { icon: Mail, href: "mailto:wsa.labs.wolny@gmail.com", ariaLabel: "Email" }
          ]}
          ariaLabel="Stopka strony"
        />
      </div>
    </ThemeProvider>
  );
}
