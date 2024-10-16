"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
  ModalProvider,
} from "./AnimatedModal";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <ModalProvider>
      <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p>
          <strong>Hi! Welcome to my portfolio.</strong>
        </p>

        <p>
          A fairly recent Front End Developer graduate, I&apos;ve gained a solid
          understanding of web development and I am dedicated to building
          beautiful, functional websites and applications. Now seeking a role
          that allows me to continue my growth as a developer while contributing
          to a team that values collaboration, curiosity, and want to foster new
          talent to meet the company needs.
        </p>
        <br />

        {/* Trigger button to open the modal */}
        <Modal>
          <ModalTrigger className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
            Learn More
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h2 className="text-xl font-bold mb-4">Soft skills</h2>
              <div className="text-left text-sm">
                <p>
                  I love contributing ideas, listening to others, learning from
                  the best, and making sure we all enjoy the process while doing
                  great work. I take on challenges with a positive, sometimes
                  stubborn, but always hands on mindset.
                </p>
                <br />
                <p>
                  It is really important to me to both get and create an
                  environment where everyone feels comfortable sharing their
                  thoughts and also just have a laugh. I am easy going, get
                  along well with most and always up for a fun after work or
                  team activity.
                </p>
                <br />
                <p>
                  Explore my CV and Cover Letter below. Have a look at my
                  projects to better know my skills and I hope to hear from you
                  to get a coffee and chat.
                </p>
                <br />
                <p>All the best</p>
                <p>/Veronica</p>
              </div>
              {/* Footer with close button */}
              <ModalFooter>
                <button>CV</button>
                <button>Cover Letter</button>
                <CloseButton />
              </ModalFooter>
            </ModalContent>
          </ModalBody>
        </Modal>
      </motion.section>
    </ModalProvider>
  );
}

const CloseButton = () => {
  const { setOpen } = useModal(); // Access setOpen via useModal inside modal components
  return (
    <button
      className="px-4 py-2 bg-gray-800 text-white rounded-md"
      onClick={() => setOpen(false)}
    >
      Close
    </button>
  );
};
