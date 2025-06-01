import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/common/Footer";
import { Link } from "react-router";

const data = [
  {
    question: "What age groups does Tulip Tots International Preschool serve?",
    answer:
      "We welcome children from Playgroup (around 2 years old) through UKG (up to 6 years). Our Activity Center offers programs and activities for children up to 14 years of age.",
  },
  {
    question: "What safety measures are in place?",
    answer:
      "Your child’s safety is our priority. Our premises have CCTV surveillance, child-friendly facilities, regular fire drills, a doctor-on-call, and staff trained in first aid and emergency protocols.",
  },
  {
    question: "What are the daily routines like?",
    answer:
      "Our days balance purposeful play, sensory exploration, creative expression, outdoor learning, and quiet reflection. We follow a rhythm of “Morning Moments,” “Learning & Exploration,” and “Gentle Closings” to support children’s emotional and physical well-being.",
  },
  {
    question: "How can I enroll my child?",
    answer:
      "Enrollment begins with an initial assessment and submission of required documents (birth certificate, photos, address proof, etc.). Please contact our admissions team for details on availability, fees, and next steps.",
  },
  {
    question: "What kind of meals and snacks do you provide?",
    answer:
      "We emphasize wholesome, balanced nutrition and work with families and nutritionists to encourage healthy eating habits. Processed snacks and sugary drinks are discouraged. Snack and meal times are social, positive experiences",
  },
  {
    question: "What is the teaching philosophy at Tulip Tots?",
    answer:
      "Our approach blends globally respected methods—Montessori, Emmi Pikler, Glenn Doman, Reggio Emilia, and Forest Schools—to create a nurturing, play-based environment that honors each child’s unique pace and interests.",
  },
  {
    question: "How is the curriculum structured?",
    answer:
      "We follow a skill-based curriculum aligned with the ECCE framework, NCERT guidelines, and NEP 2020. The curriculum focuses on holistic development across language, cognitive skills, social-emotional learning, physical growth, and environmental awareness.",
  },
  {
    question: "How do you assess my child’s progress?",
    answer:
      "Assessment is ongoing, gentle, and observational. We conduct initial, monthly, and annual evaluations that focus on your child’s individual growth—not grades or tests. Parents receive warm, detailed reports highlighting progress and areas for support.",
  },
  {
    question:
      "How does Tulip Tots support emotional development in young children?",
    answer:
      "We prioritize emotional safety through consistent routines, calm-down corners, mindfulness practices, and social-emotional learning (SEL). Children are guided to identify and express their feelings, practice empathy, and build resilience through role play, storytelling, and group activities.",
  },
  {
    question:
      "How do you handle behavioral challenges like tantrums or aggression?",
    answer:
      "We follow a no-punishment, gentle guidance approach. Our teachers are trained to respond with empathy, offer choices, and help children co-regulate. We also involve parents in understanding any persistent behavioral patterns through reflection and partnership.",
  },
  {
    question: "What skills do children learn through open-ended toys?",
    answer:
      "Open-ended toys like magnetic tiles, stackers, and blocks encourage creativity, flexible thinking, perseverance, and spatial reasoning. Since they have no fixed outc",
  },
  {
    question: "Why is sensory play so emphasized in your program?",
    answer:
      "Sensory play isn’t just fun—it’s foundational. It helps develop fine motor skills, cognitive growth, language, and self-regulation. Activities like pouring, scooping, kneading, and splashing are deeply connected to brain development, especially in the early years",
  },
  {
    question:
      "What are the benefits of vertical learning spaces and minimal furniture?",
    answer:
      "Research shows that vertical writing and building activities improve wrist stability, core strength, and visual-motor coordination—essential for early writing. Our furniture-free environment also fosters flexibility, social learning, and a clutter-free space for focused play.",
  },
  {
    question: "How do you encourage independence in toddlers and preschoolers?",
    answer:
      "We offer child-sized washrooms, low shelves with accessible materials, and encourage real-life tasks like pouring water, dressing, or tidying up. These routines build self-help skills, boost confidence, and foster a sense of responsibility",
  },
  {
    question:
      "How does the school support children who are shy, slow-to-warm, or highly sensitive?",
    answer:
      "Our settling-in process is slow, respectful, and child-led. We use mother tongue communication initially, offer comfort toys, and maintain predictable routines. Our teachers observe quietly and offer emotional scaffolding until each child feels safe and seen.",
  },
  {
    question:
      "How do you develop executive functioning skills (focus, memory, planning)?",
    answer:
      "Through obstacle play, story sequencing, nature journaling, and games that involve taking turns, remembering rules, or solving problems, children practice core executive skills. These activities lay the groundwork for lifelong learning and adaptability",
  },
  {
    question: "What does ‘learning through play’ really mean?",
    answer:
      "Play is the child’s natural language and the most effective way to learn. In our setting, play is purposeful—it involves challenges, cooperation, imagination, and real-world relevance. Whether it’s building a tower, mixing colors, or role-playing a doctor’s visit, children are making sense of the world while developing vital skills.",
  },
  {
    question: "Is there homework or worksheet practice at home?",
    answer:
      "No, we do not assign formal worksheets or homework. At Tulip Tots, we believe that early childhood is a time for exploration, imagination, and joyful learning—not academic pressure. Instead of homework, we encourage families to engage in screen-free bonding activities, outdoor play, shared reading, storytelling, and meaningful conversations. Everyday routines like cooking, nature walks, or grocery shopping offer rich opportunities for learning. We believe that when children are free to wonder, move, and connect in their own time, learning happens naturally—and joyfully.",
  },
  {
    question: "What is your policy on screen time?",
    answer:
      "Tulip Tots follows a screen-free philosophy during school hours to encourage active, sensory-rich learning. Any necessary digital interactions (like virtual meetings) are carefully limited and age-appropriate",
  },
  {
    question: "Do you organize field trips or outdoor learning experiences?",
    answer:
      "Absolutely! Field trips are integral to our experiential learning. We also partner with parents to encourage everyday explorations like visits to markets and local places, enriching classroom discussions and hands-on learning.",
  },
  {
    question: "Can parents visit or participate in school activities?",
    answer:
      "Yes! We encourage parent involvement through orientations, workshops, family events, and volunteering opportunities. Communication is open via regular meetings, WhatsApp updates, and personal appointments",
  },
  {
    question: "How do you handle illness or health concerns?",
    answer:
      "If your child is unwell, we ask parents to keep them at home and consult a pediatrician. We follow strict hygiene routines and have policies to protect the health of all children and staff.",
  },
];

const Faq = () => {
  return (
    <div className=" bg-blue-100">
      <h1 className=" pt-52 font-semibold text-3xl text-center">
        Frequently Asked Questions (FAQs)
      </h1>

      <Accordion
        type="single"
        collapsible
        className=" w-[70%] mx-auto mt-8"
        defaultValue="item-1"
      >
        {data.map((faq, i) => (
          <div key={i.toString()} className="flex ">
            <div className=" mt-6 w-6 h-6 flex justify-center items-center rounded-full bg-blue-900  mr-3">
              <p className=" text-white text-sm font-semibold">{i}</p>
            </div>
            <AccordionItem className=" w-full mt-3 " value={i.toString()}>
              <AccordionTrigger className=" bg-blue-400 w-full px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col bg-blue-200 gap-4 p-4 rounded-b-xl">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>

      <div className=" my-12 w-[70%] mx-auto">
        <p className=" font-semibold text-xl text-center">Still got query ? </p>
        <div className=" flex justify-center items-center gap-5 mt-6">
          <Link
          to={'contactUs'}
            className=" group border-2 border-blue-400  rounded-xl w-32 py-2
            hover:bg-blue-400  transition-all duration-500 cursor-pointer
          "
          >
            <p className=" text-blue-400 text-center group-hover:text-white font-semibold transition-all duration-500">
              Contact us
            </p>
          </Link>

          <Link
          to={'/enquiry'}
            className=" group border-2 border-orange-400 rounded-xl w-32 py-2
            hover:bg-orange-400  transition-all duration-500 cursor-pointer
          "
          >
            <p className=" text-center text-orange-400 group-hover:text-white font-semibold transition-all duration-500">
              Enquiry
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
