document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('intermediate-tafsir-en-ar')) {
      const chatIcon = document.createElement('minnit-chat-icon');
      chatIcon.setAttribute('data-icon-pixel-size', '80');
      chatIcon.setAttribute('data-chat-small-medium-or-large', 'small');
      chatIcon.setAttribute('data-circle-or-square', 'circle');
      chatIcon.setAttribute('data-left-or-right', 'right');
      chatIcon.setAttribute('data-chaturl', 'https://organizations.minnit.chat/654987566400689/Main?embed');
      chatIcon.setAttribute('data-hex-color-code', 'ff0000');
      chatIcon.style.display = 'block';

      document.body.appendChild(chatIcon);

      const script = document.createElement('script');
      script.src = 'https://minnit.chat/js/chaticon.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  });
