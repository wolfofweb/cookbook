import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

function Social() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Don't be shy.</h3>
      <Para>
        We'd love to hear from you. Send us an email to get answers to any
        questions you have or connect via Social media. This is an Educational
        project made using React. To have a look into my other projects visit my
        GitHub profile.
        <li>
          <a
            href="https://www.github.com/wolfofweb"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/wow_its_surya/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/suryadharmakrishnan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/kingmaker.surya.50/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
      </Para>
    </motion.div>
  );
}
let Para = styled.p`
  font-weight: 500;
  text-align: justify;
  font-size: 1.1rem;
  line-height: 2rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 3rem 0rem;
  }
  svg {
    font-size: 2.5rem;
    transition: 0.2s;
    :hover {
      color: #147508;
      transition: 0.2s;
    }
  }
`;

export default Social;
