<script setup lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>
<template>
          <div class="font-poppins">
           <Header />
            <section class="lg:bg-[url(@/assets/images/hero-img.png)] 3xl:pt-[240px] lg:pt-[200px] md:pt-[134px] bg-center pt-20 lg:pb-[209px] pb-9 bg-no-repeat bg-cover">
                <div class="max-w-[1728px] mx-auto 3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4">
                    <div class="lg:max-w-[688px] max-w-[607px]">
                        <h1 class="text-[64px] max-w-[380px] text-black font-bold leading-[65px]">Batchly ist jetzt Envoix</h1>
                        <p class="text-lg font-medium md:mt-8 mt-5 lg:mb-12 md:mb-[18px] mb-7 text-black">Willkommen bei Envoix (ehemals batchly), der intelligenten Lösung für die nahtlose Integration Ihrer Stripe-Transaktionen in Buchhaltungssysteme wie Lexoffice und SevDesk. Unser Tool automatisiert die Erfassung und Verbuchung aller Ihrer Belege, reduziert manuelle Fehler und spart wertvolle Zeit. Richten Sie es einmal ein und überlassen Sie den Rest uns – so können Sie sich auf das Wachstum Ihres Geschäfts konzentrieren. Starten Sie jetzt und erleben Sie, wie einfach Buchhaltung sein kann!</p>
                        <ul class="flex items-center md:flex-nowrap flex-wrap md:gap-[60px] gap-6">
                            <li>
                                <a href="#" class="text-lg text-white font-bold bg-black transition-all ease-out duration-500 hover:bg-transparent hover:text-black border border-black rounded-[5px] py-1.5 px-[15px] block">Jetzt starten</a>
                            </li>
                            <li>
                                <a href="#" class="text-lg text-black font-bold bg-transparent border transition-all ease-out duration-500 hover:text-white hover:bg-black border-black rounded-[5px] py-1.5 px-[15px] block">Kostenlos testen</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="lg:-mt-[120px]">
                <div class="max-w-[1728px] mx-auto 3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4">
                    <img src="@/assets/images/sale-banner.png" class="drop-shadow-3xl md:block hidden" alt="">
                    <img src="@/assets/images/mobile-banner.png" class="block md:hidden" alt="">
                </div>
            </section>
            <section id="feature" class="lg:pt-[169px] lg:pb-0 pb-10 md:pt-[142px] pt-7">
                <div class="max-w-[1728px] mx-auto 3xl:pl-[124px] 2xl:px-20 xl:px-10 md:px-8 px-4 3xl:px-[160px]">
                    <div class="text-center lg:max-w-full max-w-[550px] mx-auto lg:mb-16 mb-10">
                        <h2 class="xs:text-[64px] text-[48px] font-bold text-black leading-[102%]">
                            <span class="bg-text-gradient bg-clip-text text-transparent">Envoix</span>
                            Vorteile und Funktionen
                        </h2>
                    </div>
                    <div class="flex lg:flex-nowrap lg:max-w-full max-w-[580px] mx-auto flex-wrap items-center lg:gap-4 gap-2.5">
                        <div class="lg:w-1/2 w-full">
                            <div class="lg:max-w-full max-w-[330px] mx-auto">
                                <img src="@/assets/images/image-1.png" alt="">
                            </div>
                        </div>
                        <div class="lg:w-1/2  w-full">
                            <div class="max-w-[580px] ml-auto md:mt-0 -mt-10 ">
                                <h4 class="xs:text-[32px] text-[28px] font-extrabold mb-4 leading-12 text-blue-1000">Intuitives Kontakte Management</h4>
                                <p class="text-lg text-black font-medium">
                                    Vereinfache deine Kundenkommunikation mit unserem intuitiven Kontakte-Management-System. Exportiere Kontaktdaten nahtlos als CSV oder synchronisiere sie direkt mit deinem Buchhaltungssystem, um stets den Überblick zu bewahren und effizient zu arbeiten.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-btn-bg lg:py-0 md:py-[93px] py-9">
                <div class="max-w-[1728px] mx-auto  3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4  3xl:pr-[86px]">
                    <div class="flex lg:flex-nowrap lg:max-w-full max-w-[580px] mx-auto flex-wrap items-center lg:gap-4 gap-2.5">
                        <div class="lg:w-1/2 w-full lg:order-1 order-2">
                            <div class="max-w-[580px]">
                                <h4 class="xs:text-[32px] text-[28px] font-extrabold mb-4 leading-12 text-white">⁠Benachrichtigungen</h4>
                                <p class="text-lg text-white font-medium">
                                    Bleib immer auf dem Laufenden mit unseren anpassbaren Benachrichtigungen. Ob per E-Mail, Webhook oder direkt in Slack – wir sorgen dafür, dass du über alle relevanten Aktivitäten und Updates informiert bist, ohne wichtige Informationen zu verpassen.
                                </p>
                            </div>
                        </div>
                        <div class="lg:w-1/2 w-full lg:order-2 order-1">
                            <div class="lg:max-w-full max-w-[330px] mx-auto">
                                <img src="@/assets/images/image-2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="lg:py-0 md:py-[69px] py-6">
                <div class="max-w-[1728px] mx-auto 3xl:pl-[92px] 3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4">
                    <div class="flex lg:flex-nowrap lg:max-w-full max-w-[580px] mx-auto flex-wrap items-center lg:gap-4 gap-2.5">
                        <div class="lg:w-1/2 w-full">
                            <div class="lg:max-w-full max-w-[330px] mx-auto">
                                <img src="@/assets/images/image-3.png" alt="">
                            </div>
                        </div>
                        <div class="lg:w-1/2 w-full">
                            <div class="max-w-[580px] ml-auto md:mt-0 -mt-10 ">
                                <h4 class="xs:text-[32px] text-[28px] font-extrabold mb-4 leading-12 text-blue-1000">Zeitgesteuerte Automatisierung</h4>
                                <p class="text-lg text-black font-medium">
                                    Automatisiere deine Buchhaltung und bleibe stets aktuell. Unsere Automatik-Funktion holt zeitgesteuert Belege von Stripe ab und verarbeitet sie, damit du dich auf das Wesentliche konzentrieren kannst – dein Geschäft.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-btn-bg lg:py-12 md:py-[102px] py-12">
                <div class="max-w-[1728px] mx-auto  3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4  3xl:pr-[86px]">
                    <div class="flex lg:flex-nowrap lg:max-w-full max-w-[580px] mx-auto flex-wrap items-center lg:gap-4 gap-2.5">
                        <div class="lg:w-1/2 w-full lg:order-1 order-2">
                            <div class="max-w-[580px]">
                                <h4 class="xs:text-[32px] text-[28px] font-extrabold mb-4 leading-12 text-white">Beleg-Upload</h4>
                                <p class="text-lg text-white font-medium">
                                    Optimiere deine Buchhaltungsprozesse durch automatisierten Upload von Belegen direkt zu Lexoffice oder SevDesk. Unsere intelligente Kategorisierung hilft dir, Steuerabrechnungen zu vereinfachen und sorgt für eine genaue Zuordnung aller Belegdaten, inklusive einer Übersicht zu Stripe-Gebühren und -Beiträgen.
                                </p>
                            </div>
                        </div>
                        <div class="lg:w-1/2 w-full lg:order-2 order-1">
                            <div class="lg:max-w-full max-w-[330px] mx-auto">
                                <img src="@/assets/images/image-4.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing" class="lg:pt-[229px] md:pt-[104px] pt-[60px] 3xl:pb-[250px] lg:pb-32 pb-16">
                <div class="max-w-[1728px] mx-auto  3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4 ">
                    <div class="text-center lg:max-w-full max-w-[550px] mx-auto lg:mb-16">
                        <h2 class="xs:text-[64px] text-[48px] font-bold text-black leading-[102%]">
                            <span class="bg-text-gradient bg-clip-text text-transparent">Envoix</span>
                            Preise und Versionen
                        </h2>
                        <ul class="flex xl:flex-nowrap flex-wrap lg:gap-0 gap-7 items-center max-w-[1144px] lg:mt-10 md:mt-16 mt-7 mb-[26px] mx-auto justify-between">
                            <li class="flex items-center gap-3 text-lg text-black font-medium ">
                                <span>
                                    <img src="@/assets/images/check-icon.svg" alt="">
                                </span>
                                Monatlich Kündbar
                            </li>
                            <li class="flex items-center gap-3 text-lg text-black font-medium ">
                                <span>
                                    <img src="@/assets/images/check-icon.svg" alt="">
                                </span>
                                <p class="flex-1 text-start break-words">   Inkl. Hosting, Datensicherung, Updates und Support</p>
                            </li>
                            <li class="flex items-center gap-3 text-lg text-black font-medium ">
                                <span>
                                    <img src="@/assets/images/check-icon.svg" alt="">
                                </span>
                                Keine Extrakosten
                            </li>
                        </ul>
                        <div class="text-cneter">
                            <h6 class="text-lg font-bold leading-normal text-blue-1100">(Alle Preise pro Monat, zzgl. MwSt.)</h6>
                        </div>
                        <div class="grid xl:grid-cols-3 lg:max-w-full max-w-[447px] mx-auto lg:grid-cols-2 md:my-20 my-[29px] mb-[53px] gap-8">
                            <div class="bg-white h-fit rounded-[28px] shadow-5xl 3xl:px-[34px] px-7  py-11">
                                <div class="text-center">
                                    <h4 class="xs:text-[32px] text-[28px] font-extrabold text-blue-1000 mb-5">Basic</h4>
                                    <h2 class="text-[48px] font-bold text-blue-1000 mb-5">
                                        10€
                                        <span class="text-[32px]"> mtl.</span>
                                    </h2>
                                </div>
                                <p class="text-lg text-black text-start mb-5 font-medium max-w-[289px] mx-auto">Schluss mit der Zettelwirtschaft: Alle Belege an einem Ort</p>
                                <button type="button" class="text-white text-lg leading-[27px] rounded-[5px] font-bold bg-btn-bg py-1.5 px-[30px] transtion ease-in-out duration-500 hover:opacity-70">Anmelden</button>
                                <ul class="mt-5 md:ml-0 -ml-[22px]">
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            ⁠Anzahl an versch. Endpunkten: 1
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Anzahl an Stripe Accounts: 1
                                        </p>
                                    </li>
                                    <li class="flex items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Export: Kontakte (CSV)
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-white h-fit rounded-[28px] shadow-5xl 3xl:px-[34px] px-7  py-11">
                                <div class="text-center">
                                    <h4 class="xs:text-[32px] text-[28px] font-extrabold text-blue-1000 mb-5">Pro</h4>
                                    <h2 class="text-[48px] font-bold text-blue-1000 mb-5">
                                        25€
                                        <span class="text-[32px]"> mtl.</span>
                                    </h2>
                                </div>
                                <p class="text-lg text-black text-start mb-5 font-medium max-w-[289px] mx-auto">Schluss mit der Zettelwirtschaft: Alle Belege an einem Ort</p>
                                <button type="button" class="text-white text-lg leading-[27px] rounded-[5px] font-bold bg-btn-bg py-1.5 px-[30px] transtion ease-in-out duration-500 hover:opacity-70">Anmelden</button>
                                <ul class="mt-5  md:ml-0 -ml-[22px]">
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Anzahl an versch. Endpunkten: 2
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Anzahl an Stripe Accounts: 2
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Automatische Verarbeitung
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Feature: Rechnungserstellung
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Export: Kontakte (Stripe/Lexoffice/CSV)
                                        </p>
                                    </li>
                                    <li class="flex text-start items-center 3xl:gap-5 gap-4  3xl:text-lg text-base text-black font-medium ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            ⁠Erstellung Gebührenübersicht/Climatecontribution
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-white h-fit rounded-[28px] xl:mt-0 lg:-mt-[172px] shadow-5xl 3xl:px-[34px] px-7  py-11">
                                <div class="text-center">
                                    <h4 class="xs:text-[32px] text-[28px] font-extrabold text-blue-1000 mb-5">Enterprise</h4>
                                    <h2 class="text-[48px] font-bold text-blue-1000 mb-5">
                                        50€
                                        <span class="text-[32px]"> mtl.</span>
                                    </h2>
                                </div>
                                <p class="text-lg text-black text-start mb-5 font-medium max-w-[289px] mx-auto">Schluss mit der Zettelwirtschaft: Alle Belege an einem Ort</p>
                                <button type="button" class="text-white text-lg leading-[27px] rounded-[5px] font-bold bg-btn-bg py-1.5 px-[30px] transtion ease-in-out duration-500 hover:opacity-70">Anmelden</button>
                                <ul class="mt-5  md:ml-0 -ml-[22px]">
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Anzahl an versch. Endpunkten: 3 (z.B., Lexoffice, SevDesk, Dropbox)
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Anzahl an Stripe Accounts: Unbegrenzt
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Automatische Verarbeitung
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Feature: Rechnungserstellung
                                        </p>
                                    </li>
                                    <li class="flex mb-5 items-center 3xl:gap-5 gap-4  3xl:text-lg text-base  text-black font-medium text-start ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Export: Kontakte (Stripe/Lexoffice/CSV)
                                        </p>
                                    </li>
                                    <li class="flex text-start items-center 3xl:gap-5 gap-4  3xl:text-lg text-base text-black font-medium ">
                                        <span class="3xl:w-11 w-9 ">
                                            <img src="@/assets/images/check-icon.svg" alt="">
                                        </span>
                                        <p class="flex-1 break-all	">
                                            Erstellung Gebührenübersicht/Climatecontribution
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 class="text-[48px] font-bold text-blue-1000 leading-[102%]">
                            Die ersten 14 Tage Kostenlos testen
                        </h2>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
</template>