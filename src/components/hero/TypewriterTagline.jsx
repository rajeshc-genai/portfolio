import React, { useState, useEffect } from 'react';

export function TypewriterTagline({
  words = ["Gen AI Developer", "Python & ML Enthusiast", "RAG & LLM Builder"],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2200,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullWord = words[currentWordIndex];

    let timer;

    if (!isDeleting && currentText === currentFullWord) {
      // Finished typing word, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Finished deleting word, move to next
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // In progress of typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        const nextLength = isDeleting ? currentText.length - 1 : currentText.length + 1;
        setCurrentText(currentFullWord.substring(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="inline-flex items-center gap-1 font-heading font-bold" aria-live="polite">
      <span className="text-gradient drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-7 sm:h-9 md:h-11 bg-cyan-400 rounded-sm animate-pulse shadow-[0_0_10px_#22d3ee] ml-1" />
    </div>
  );
}
