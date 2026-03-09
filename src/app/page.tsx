"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function LandingPage() {
  const handleContactSubmit = (data: Record<string, string>) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="blurBottom"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="EuroPitture"
          navItems={[
            { name: "Servizi", id: "services" },
            { name: "Ignifughi", id: "fireproof" },
            { name: "Portfolio", id: "portfolio" },
          ]}
          button={{ text: "Preventivo Gratuito", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Pittura civile e industriale che dura"
          description="Tinteggiature, risanamento murario e trattamenti ignifughi certificati per abitazioni, condomini ed edifici industriali in tutta la provincia di Mantova."
          tag="● DAL 1990 — MAESTRI COI COLORI"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Richiedi Preventivo", href: "#contact" },
            { text: "WhatsApp", href: "https://wa.me/39" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/weathered-stained-concrete-wall-corner_632498-60769.jpg?_wi=2"
          imageAlt="professional house painting interior bright colors"
          mediaAnimation="blur-reveal"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="I Nostri Servizi"
          titleSegments={[
            { type: "text", content: "Tutto quello che serve per il tuo " },
            { type: "text", content: "immobile" },
          ]}
          description="Soluzioni complete per tinteggiature civili, industriali, restauro murario e trattamenti ignifughi certificati."
          tag="SERVIZI"
          accordionItems={[
            {
              id: "1",              title: "Tinteggiature Civili",              content: "Pittura interni ed esterni, abitazioni e condomini con materiali di prima qualità e finitura impeccabile."},
            {
              id: "2",              title: "Tinteggiature Industriali",              content: "Capannoni e magazzini con mezzi aerei propri. Accesso a superfici inaccessibili, tempistiche garantite."},
            {
              id: "3",              title: "Risanamento Murario",              content: "Infiltrazioni, umidità, antimuffa, rasatura e cicli di protezione. Restauro conservativo con competenza."},
            {
              id: "4",              title: "Decorazioni e Finiture",              content: "Stucco veneziano, effetti decorativi, ambienti di rappresentanza. Ricerca estetica e artigianato."},
            {
              id: "5",              title: "Ponteggi e Piattaforme",              content: "Mezzi propri per altezze inaccessibili agli altri. Sicurezza certificata e tempistiche controllate."},
            {
              id: "6",              title: "Trattamenti Ignifughi",              content: "Protezione al fuoco certificata per strutture in acciaio e legno. Documentazione tecnica conforme alle normative."},
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/real-estate-agents-checking-construction-works_23-2147650206.jpg?_wi=2"
          imageAlt="exterior house facade painting maintenance renovation"
          mediaPosition="right"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="fireproof" data-section="fireproof">
        <TextSplitAbout
          title="Trattamenti Ignifughi con Certificazione"
          description={[
            "Proteggiamo strutture in acciaio e legno con vernici e trattamenti ignifughi omologati, rilasciando documentazione tecnica conforme alle normative vigenti.",            "Verniciatura intumescente per travi, pilastri e carpenterie con classi REI 30, 60, 90 su progetto. Trattamenti per coperture, solai e strutture lignee in ambienti civili e industriali.",            "Prodotti con marcatura CE e omologazione ministeriale. Applicatori abilitati e formati dai produttori. Dichiarazione di corretta posa in opera e certificazione conforme normativa italiana ed europea.",            "Garanzia sull'intervento con report fotografico e documentazione per Certificato Prevenzione Incendi."]}
          buttons={[{ text: "Richiedi Sopralluogo Gratuito", href: "#contact" }]}
          useInvertedBackground={true}
          showBorder={false}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardSeven
          title="Oltre 35 anni di eccellenza nel settore"
          description="Scegliamo di operare con massima professionalità, affidabilità e trasparenza verso ogni cliente."
          metrics={[
            {
              id: "1",              value: "+35",              title: "Anni di Esperienza",              items: ["Mezzi propri e certificati", "Team interno specializzato", "Continuità e affidabilità"],
            },
            {
              id: "2",              value: "500+",              title: "Edifici Completati",              items: ["Civili e industriali", "Referenze verificabili", "Qualità costante"],
            },
            {
              id: "3",              value: "100%",              title: "Clienti Soddisfatti",              items: ["Preventivi trasparenti", "Cantieri puliti", "Garanzia sul risultato"],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <BlogCardOne
          title="I Nostri Lavori"
          description="Galleria dei progetti completati con professionalità e dedizione."
          blogs={[
            {
              id: "1",              category: "Residenziale",              title: "Facciata Civile",              excerpt: "Tinteggiatura esterna di edificio residenziale con finitura premium e preparazione muraria accurata.",              imageSrc: "http://img.b2bpic.net/free-photo/white-brown-concrete-building_250224-30.jpg",              imageAlt: "modern residential facade renovation paint finish elegant",              authorName: "Europitture Team",              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-people-with-protection-equipment-gloves_23-2148269364.jpg",              date: "2025"},
            {
              id: "2",              category: "Industriale",              title: "Tinteggiatura Industriale",              excerpt: "Capannone industriale completamente tinteggiato con mezzi aerei e protezione di superfici.",              imageSrc: "http://img.b2bpic.net/free-photo/lot-night-large-dirty-transportation_1127-2356.jpg",              imageAlt: "industrial facility interior tinting large scale",              authorName: "Europitture Team",              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-people-with-protection-equipment-gloves_23-2148269364.jpg",              date: "2025"},
            {
              id: "3",              category: "Interno",              title: "Interno Residenziale",              excerpt: "Tinteggiatura interna con effetti decorativi e scelta cromatica personalizzata.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-light-interior-design-modern-living-room-blue-yellow-colors_181624-61222.jpg",              imageAlt: "residential interior living room modern paint design",              authorName: "Europitture Team",              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-people-with-protection-equipment-gloves_23-2148269364.jpg",              date: "2025"},
            {
              id: "4",              category: "Ignifugo",              title: "Trattamento Ignifugo",              excerpt: "Protezione certificata di strutture in acciaio con vernici intumescenti omologate.",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-white-special-suit-yellow-protective-helmet-holding-sterile-mask-green-space_140725-28792.jpg",              imageAlt: "fireproof coating industrial beam safety protection",              authorName: "Europitture Team",              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-people-with-protection-equipment-gloves_23-2148269364.jpg",              date: "2025"},
            {
              id: "5",              category: "Condominio",              title: "Condominio",              excerpt: "Restauro esterno di edificio residenziale multipiano con coordinamento e precisione.",              imageSrc: "http://img.b2bpic.net/free-photo/down-angle-arched-windows-old-beautiful-building-with-sky-trees-reflection-glass_158595-6376.jpg",              imageAlt: "residential condominium facade renovation maintenance",              authorName: "Europitture Team",              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-people-with-protection-equipment-gloves_23-2148269364.jpg",              date: "2025"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="I Nostri Partner di Qualità"
          description="Lavoriamo con i migliori brand di vernici e materiali del settore."
          names={["SIKKENS", "MAXMEYER", "CAPAROL", "SAN MARCO", "LA CALCE DEL BRENTA", "ALCEA"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Preventivo gratuito, risposta in 24h"
          description="Contattaci per ricevere una valutazione senza impegno. Il nostro team risponderà entro 24 ore."
          inputs={[
            { name: "name", type: "text", placeholder: "Nome e Cognome", required: true },
            { name: "phone", type: "tel", placeholder: "Telefono", required: true },
            { name: "email", type: "email", placeholder: "Email", required: true },
            { name: "workType", type: "text", placeholder: "Tipo di lavoro (es. Tinteggiatura civile)", required: false },
          ]}
          textarea={{
            name: "description",            placeholder: "Descrivi il tuo progetto e i dettagli importanti...",            rows: 5,
            required: false,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/cheerful-happy-hr-manager-talking-female-candidate-cafe_1262-16890.jpg"
          imageAlt="professional meeting consultation friendly atmosphere"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          buttonText="Invia Richiesta"
          onSubmit={handleContactSubmit}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="EuroPitture S.r.l."
          copyrightText="© 2025 EuroPitture | Tinteggiature Civili e Industriali"
          columns={[
            {
              title: "Servizi",              items: [
                { label: "Tinteggiature Civili", href: "#services" },
                { label: "Tinteggiature Industriali", href: "#services" },
                { label: "Trattamenti Ignifughi", href: "#fireproof" },
                { label: "Risanamento Murario", href: "#services" },
              ],
            },
            {
              title: "Azienda",              items: [
                { label: "Chi Siamo", href: "#why-us" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contatti", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ],
            },
            {
              title: "Contatti",              items: [
                { label: "Telefono: +39 0376 [NUMERO]", href: "tel:+39" },
                { label: "Email: info@europitture.net", href: "mailto:info@europitture.net" },
                { label: "Suzzara (MN)", href: "#" },
                { label: "WhatsApp", href: "https://wa.me/39" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
