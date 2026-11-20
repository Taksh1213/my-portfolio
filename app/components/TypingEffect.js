'use client';

import React, { useState, useEffect } from 'react';

export default function TypingEffect({ phrases, speed = 100, eraseSpeed = 60, delay = 2000 }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(speed);

        if (text === fullText) {
          timer = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(eraseSpeed);

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases, speed, eraseSpeed, delay]);

  return (
    <span className="inline-block min-h-[1.5em] text-sky-500 dark:text-sky-400 font-semibold">
      {text}
      <span className="animate-pulse ml-0.5 font-light">|</span>
    </span>
  );
}
