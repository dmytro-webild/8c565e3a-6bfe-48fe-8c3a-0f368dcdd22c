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
import { Award, BarChart3, Brain, CheckCircle2, Code2, Github, Handshake, Lightbulb, Linkedin, Mail, MapPin, Phone, Search, Star, Target, TrendingUp, Workflow, Wrench, Zap, ShieldCheck, Users, Sparkles } from "lucide-react";

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
            { name: "Usługi", id: "services" },
            { name: "Realizacje", id: "cases" },
            { name: "Proces", id: "process" },
            { name: "O nas", id: "about" },
            { name: "Kontakt", id: "contact" }
          ]}
          bottomLeftText="Warszawa, Polska"
          bottomRightText="hello@walnystudio.ai"
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

      <div id="about" data-section="about">
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
        <ProductCardThree
          title="Nasze Realizacje"
          description="Rzeczywiste projekty z rzeczywistymi rezultatami. Każdy projekt = konkretne problemy rozwiązane, wymierny ROI."
          tag="Case Studies"
          tagIcon={Award}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Platforma Rekrutacyjna AI",              price: "Redukcja czasu selekcji CV o 70%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-mockup-of-a-recruitment-pla-1772646443733-1f2246bd.png?_wi=3",              imageAlt: "Platform rekrutacyjny z AI"
            },
            {
              id: "2",              name: "System Zarządzania Warsztatem",              price: "90% mniej czasu na kosztorysy",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/workshop-management-system-interface-dis-1772646442811-e87de6cc.png?_wi=3",              imageAlt: "System zarządzania warsztatem"
            },
            {
              id: "3",              name: "CRM dla Agencji Marketingowej",              price: "Centralizacja 100% procesów",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/marketing-agency-crm-dashboard-with-cont-1772646443395-5375cae3.png?_wi=2",              imageAlt: "CRM dla agencji"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Sekcja realizacji"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardTen
          title="Dlaczego My"
          description="Technologia to narzędzie. Liczy się efekt. Nasze podejście oparte na rezultatach biznesowych."
          tag="Przewaga Konkurencyjna"
          tagIcon={Star}
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
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-cta/10">
              <Star className="w-4 h-4 text-primary-cta" fill="currentColor" />
              <span className="text-sm font-medium text-primary-cta">Opinie z Google</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Zobacz, co mówią o nas klienci w Google</h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">Transparentne opinie zweryfikowane – 5.0 gwiazdek od zaufanych klientów</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-3xl font-bold">5.0</p>
              <p className="text-foreground/60">Średnia ocena</p>
            </div>
            <div className="h-16 w-px bg-foreground/20 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold">250+</p>
              <p className="text-foreground/60">Opinie zweryfikowane</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {
              [
                {
                  name: "Marcin Kowalski",                  role: "Właściciel",                  text: "Platforma rekrutacyjna zmienia zupełnie nasz HR. Polecam!",                  image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-headshot-of-a-confident-bus-1772646442150-2e1e63e4.png"
                },
                {
                  name: "Anna Nowak",                  role: "Dyrektor",                  text: "System zarządzania warsztatem zaoszczędził nam setki godzin rocznie.",                  image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-portrait-of-a-company-direc-1772646442028-775cdaab.png"
                },
                {
                  name: "Piotr Lewandowski",                  role: "CEO",                  text: "CRM dla agencji zintegrował wszystkie nasze procesy. Świetna praca!",                  image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-headshot-of-an-agency-owner-1772646443428-1c53d6f7.png"
                },
                {
                  name: "Katarzyna Zając",                  role: "HR Manager",                  text: "Najlepszy wybór, jaki mogliśmy zrobić. Profesjonalny zespół!",                  image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-portrait-of-a-recruiter-or--1772646443961-89d3d657.png"
                },
                {
                  name: "Tomasz Kruk",                  role: "Founder",                  text: "Wsparcie 24/7 i transparentna komunikacja – dokładnie to czego potrzebowaliśmy.",                  image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-headshot-of-a-tech-savvy-bu-1772646441921-ee1f86c4.png"
                },
                {
                  name: "Magdalena Szymczak",                  role: "Director",                  text: "Jesteśmy zachwyceni rezultatami. 5.0 gwiazdek, gorąco polecam!",                  image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-business-portrait-of-a-conf-1772646442053-3a2aecf3.png"
                }
              ].map((review, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-foreground/10 bg-card hover:border-primary-cta/50 transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-foreground/60 text-xs">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-primary-cta mt-4 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Opinia z Google
                  </p>
                </div>
              ))
            }
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-foreground/10">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 text-primary-cta mb-3" />
              <h3 className="font-semibold text-lg mb-2">Zweryfikowane Opinie</h3>
              <p className="text-foreground/60 text-sm">Wszystkie opinie pochodzą od rzeczywistych klientów zweryfikowanych przez Google</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-primary-cta mb-3" />
              <h3 className="font-semibold text-lg mb-2">Rzeczywisti Klienci</h3>
              <p className="text-foreground/60 text-sm">Pracowaliśmy z każdą osobą, która nas oceniła. Ich sukces to nasz sukces.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-8 h-8 text-primary-cta mb-3" />
              <h3 className="font-semibold text-lg mb-2">Brak Sponsorowanych Recenzji</h3>
              <p className="text-foreground/60 text-sm">Nie kupujemy opinii. Każda recenzja to naturalna, szczera opinia klienta.</p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary-cta text-primary-cta-text rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Przeczytaj opinię na Google
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
            { text: "Rozpocznij Projekt", href: "#" },
            { text: "Rozmowa Strategiczna", href: "#" }
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
            { icon: Mail, href: "mailto:hello@walnystudio.ai", ariaLabel: "Email" }
          ]}
          ariaLabel="Stopka strony"
        />
      </div>
    </ThemeProvider>
  );
}