import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.5 }}
        variants={pageTransition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>85 résidénce Elysée 2</p>
              <p>78170 La Celle-Saint-Cloud</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0660299114" className="hover">
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => alert('téléphone copié !')}
                >
                  06.60.29.91.14
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="daniel.gonzalez.02@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => alert('email copié !')}
                >
                  daniel.gonzalez.02@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Daniel Gonzalez - 2023</p>
          </div>
        </div>
        <Buttons left={'/projet-4'} />
      </motion.div>
    </main>
  );
};

export default Contact;
