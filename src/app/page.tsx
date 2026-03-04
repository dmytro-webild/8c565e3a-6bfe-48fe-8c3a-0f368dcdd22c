"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, BarChart3, Brain, CheckCircle2, Code2, Github, Handshake, Lightbulb, Linkedin, Mail, Palette, Rocket, Shield, Star, Target, TrendingUp, Workflow, Wrench, Zap } from "lucide-react";

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
          tagIcon={Rocket}
          tagAnimation="slide-up"
          features={[
            {
              icon: Code2,
              title: "Systemy i Aplikacje Webowe",              description: "Dedykowane platformy, CRM, systemy zarządzania, panele klienta. Rozwiązania stworzone pod Twoją firmę.",              button: { text: "Automatyzacja 24/7", href: "contact" }
            },
            {
              icon: Brain,
              title: "Automatyzacje i AI",              description: "Boty AI, automatyczna obsługa klienta, scoring CV, workflow, integracje API. Procesy które pracują 24/7.",              button: { text: "Zwiększ Efekt", href: "contact" }
            },
            {
              icon: TrendingUp,
              title: "Digitalizacja Biznesu",              description: "Zamieniamy Excel i papier na nowoczesne systemy online. Porządek operacyjny, lepsze decyzje.",              button: { text: "Redukcja Kosztów", href: "contact" }
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
          tagIcon={Shield}
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
              icon: Palette,
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
        <TestimonialCardOne
          title="Co Mówią Nasi Klienci"
          description="96% satysfakcji, 100% zaangażowania. Ich sukces to nasz sukces. Sprawdź, jak zmieniliśmy ich biznes."
          tag="Opinie Klientów"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Marcin Kowalski",              role: "Właściciel",              company: "TechRecruit Polska",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-headshot-of-a-confident-bus-1772646442150-2e1e63e4.png",              imageAlt: "Marcin Kowalski"
            },
            {
              id: "2",              name: "Anna Nowak",              role: "Dyrektor",              company: "Auto Service Solutions",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-portrait-of-a-company-direc-1772646442028-775cdaab.png",              imageAlt: "Anna Nowak"
            },
            {
              id: "3",              name: "Piotr Lewandowski",              role: "CEO",              company: "Digital Marketing Pro",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-headshot-of-an-agency-owner-1772646443428-1c53d6f7.png",              imageAlt: "Piotr Lewandowski"
            },
            {
              id: "4",              name: "Katarzyna Zając",              role: "HR Manager",              company: "Staffing Excellence",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-portrait-of-a-recruiter-or--1772646443961-89d3d657.png",              imageAlt: "Katarzyna Zając"
            },
            {
              id: "5",              name: "Tomasz Kruk",              role: "Founder",              company: "Cloud Innovations",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-headshot-of-a-tech-savvy-bu-1772646441921-ee1f86c4.png",              imageAlt: "Tomasz Kruk"
            },
            {
              id: "6",              name: "Magdalena Szymczak",              role: "Director",              company: "Enterprise Systems",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTdamE0711SH4qf6OPq0pSgOh/professional-business-portrait-of-a-conf-1772646442053-3a2aecf3.png",              imageAlt: "Magdalena Szymczak"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Sekcja opinii klientów"
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Zaufanie Biznesowe"
          description="Pracujemy z najlepszymi firmami z Polski i Europy. Partnerami bez kompromisów w jakości."
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
