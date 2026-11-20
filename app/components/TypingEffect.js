'use client';

import { useEffect, useState } from 'react';

export default function TypingEffect({
  phrases,
  speed = 100,
  eraseSpeed = 60,
  delay = 2000,
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(() => phrases[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  const phrase = phrases[phraseIndex % phrases.length] ?? '';

  useEffect(() => {
    if (phrases.length < 2 || !phrase) return;

    const complete = length >= phrase.length;
    const wait = deleting ? eraseSpeed : complete ? delay : speed;

    const timer = window.setTimeout(() => {
      if (deleting && length > 1) {
        setLength(length - 1);
      } else if (deleting) {
        setPhraseIndex((index) => (index + 1) % phrases.length);
        setLength(1);
        setDeleting(false);
      } else if (complete) {
        setDeleting(true);
        setLength(Math.max(1, phrase.length - 1));
      } else {
        setLength(length + 1);
      }
    }, wait);

    return () => window.clearTimeout(timer);
  }, [phrase, phrases.length, length, deleting, speed, eraseSpeed, delay]);

  return (
    <span className="inline-grid max-w-full align-top">
      <span className="sr-only">{phrases[0]}</span>

      {/* Reserve enough space for every role at the current screen width. */}
      {phrases.map((item, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="invisible col-start-1 row-start-1"
        >
          {item}
          <span className="ml-0.5 inline-block font-light">|</span>
        </span>
      ))}

      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 motion-reduce:hidden"
      >
        {phrase.slice(0, length)}
        <span className="ml-0.5 inline-block animate-pulse font-light">|</span>
      </span>

      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 hidden motion-reduce:inline"
      >
        {phrases[0]}
      </span>
    </span>
  );
}