export class TypingEffect {
  constructor(selector, typingSpeed = 45, erasingSpeed = 15, delay = 2000) {
    this.typingElement = document.querySelector(selector);
    if (this.typingElement) {
      this.phrases = this.typingElement.getAttribute('data-typing').split('; ');
      this.currentPhraseIndex = 0;
      this.currentLetterIndex = 0;
      this.typingSpeed = typingSpeed;
      this.erasingSpeed = erasingSpeed;
      this.delay = delay;
      this.type();
    }
  }

  type() {
    if (this.currentLetterIndex < this.phrases[this.currentPhraseIndex].length) {
      this.typingElement.textContent += this.phrases[this.currentPhraseIndex].charAt(this.currentLetterIndex);
      this.currentLetterIndex++;
      setTimeout(() => this.type(), this.typingSpeed);
    } else {
      setTimeout(() => this.erase(), this.delay);
    }
  }

  erase() {
    if (this.currentLetterIndex > 0) {
      this.typingElement.textContent = this.typingElement.textContent.substring(0, this.currentLetterIndex - 1);
      this.currentLetterIndex--;
      setTimeout(() => this.erase(), this.erasingSpeed);
    } else {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}