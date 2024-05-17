import React from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

export default function About() {
  return (
    <>
      <Navbar />
      <div
        id="about"
        className="flex flex-col items-center justify-center font-poppins text-white container mx-auto my-auto pt-20 pb-20"
      >
        <div className="flex flex-col items-center justify-center bold text-center backdrop-filter backdrop-blur-md text-white">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium ">
            Welcome!
          </h1>
          <h4 className="title-font sm:text-2xl text-2xl mb-2 font-medium ">
            Enjoy taking a musical journey to the Vaishnava Divya Desams
            alongside Dr. D. Veeraragavathatham.
          </h4>
          <div className="pt-2 px-10 py-10 text-justify tracking-wide text-xl">
            <div className="mb-5">
              Dr. D. VEERARAGAVATHATHAM, S/O. Srirangam Kodikannikathanam
              Desikathathachary, an agricultural graduate, finished Doctor of
              Philosophy in Agriculture with a specialization in Horticulture.
              He served as the Dean of Horticultural College in TamilNadu
              Agricultural University, Coimbatore and retired.
            </div>
            <div className="mb-5">
              From his childhood days, he had a passion to music not only light
              music but Carnatic Music too. His mother, late Smt. Lakshmi Ammal,
              a disciple of music legend Sattur A.G. Subramania Iyer, learned
              Carnatic Music systematically. She regularly performed in
              functions though not on the stages. The author had an opportunity
              to listen to her singing regularly and he used to mimic hers.
              Besides the author also regularly listened to katcheris of great
              legends like M.S. Subbulakshmi, Madurai Mani Iyer, D.K. Pattammal
              through All India Radio. He also listened to Katcheris of great
              singers like Dr. Sirkazhi Govindarajan, T.M.Soundararajan, Dr.
              K.J. Yesudas, Dr. Jeyaraman, Unnikrishnan as well as instrumental
              katcheris of Kadri Gopalnath, Karaikurichi Arunachalam and others.
              He also regularly participated in bhajans and Naamavali
              renditions. He joined other Carnatic music singers along with
              supporting instrumental artists of Harmonimum, Mridhangam, Thabela
              at Varadarja Perumal Koil, P. N. Pudur, Coimbatore. Right from
              early days, he had a passion to identify ragas of different
              Carnatic songs including film songs based on Carnatic music though
              he has not learned music systematically from a Guru.
            </div>
            <div className="mb-5">
              During the pre-covid period, when he traveled to certain temples
              of South India he had an urge to write songs and sing those songs
              in specific ragas which he knew. He experienced this feeling
              especially in Soundararaja Perual kovil of Thadikombu (Dindigul
              district, Tamil Nadu) and Yoga Narasimhar temple (Thondanur
              Mandiya district , Karnataka). During the covid pandemic, he
              started writing on Sriranga Perumal Thayaar Mahalakshmi,
              Narasimhar, Sudarshanar, Krishna seeking their grace to bring an
              end to the dreaded disease of Covid-19. He also wrote Krithis on
              Achariars and Azhwars.
            </div>
            <div className="mb-5">
              When his wife Smt. Amudha suggested he write Krithis on Perumals
              of 108 Divya Desams, this project started. His daughter Smt. Hema
              suggested incorporating the name of the ragam towards the end of
              the song and his name as a musical signature. When he started
              singing along with his wife Smt. Amudha and posting them including
              the sthala puranam in whatsapp for the divya desams, to his
              surprise, there was a huge welcome from the listeners. His wife,
              his daughter, his brothers and sisters, family members and friends
              started appreciating his efforts. With the great effort and
              support of Smt. Hema, it has been brought as e-book and this
              website for the listener who want to enjoy the divine musical
              journey of the 108 Divya Desams.
            </div>
            <div>
              By the grace of Shreeman Narayanan, Aazhwars and Aachariars, the
              musical journey to all 108 Divya Desams has been completed through
              the 108 Krithis sung in 108 different ragas.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
