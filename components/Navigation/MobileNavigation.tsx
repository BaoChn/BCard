import * as React from "react";
import { motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">JOYå¨æ²é</h4>
          <div className="navigation-top__left--links">
            <a target="_blank" href="https://a-b.cc/QQ" rel="noopener">
              ð§ QQ
            </a>
            <a target="_blank" href="https://t.me/BaoChn" rel="noopener">
              ð©ï¸ TG
            </a>
            <a target="_blank" href="https://a-b.cc/WC" rel="noopener">
              ðï¸âð¨ï¸ WC
            </a>
            <a target="_blank" href="https://github.com/BaoChn" rel="noopener">
              {" "}
              ð¾ GH
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">SAYæå¦æ³</h4>
          <a
            href="mailto:0246@88.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
          ð®0246@88.com
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">ç¬ SPECIAL ç¹</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            href="https://a-b.cc/ð¨/"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/alexxandria-nav.webp" alt="alexxandria" />
            <h2>
              Creative
              <br />
              ç­è¡·åä½
            </h2>
          </a>
          <a
            target="_blank"
            href="https://fxhub.cn"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/pixelchef-nav.webp" alt="pixelChef" />
            <h2>
              Whimsical
              <br />
              å¼æ³å¤©å¼
            </h2>
          </a>
          <a
            target="_blank"
            href="https://kg.qq.com/node/personal?uid=6198988d222b3e8e3d"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/adeola-1.webp" alt="adeola" />
            <h2>
              Diversity
              <br />
              å¤åæ¢ç´¢
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
