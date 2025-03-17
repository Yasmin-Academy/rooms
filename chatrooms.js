document.addEventListener('DOMContentLoaded', function() {
  function embedChatroom(urlCondition, chatUrl) {
    if (window.location.href.includes(urlCondition)) {
      const chatIcon = document.createElement('minnit-chat-icon');
      chatIcon.setAttribute('data-icon-pixel-size', '70');
      chatIcon.setAttribute('data-chat-small-medium-or-large', 'small');
      chatIcon.setAttribute('data-circle-or-square', 'circle');
      chatIcon.setAttribute('data-left-or-right', 'left');
      chatIcon.setAttribute('data-chaturl', chatUrl);
      chatIcon.setAttribute('data-hex-color-code', '253551');
      chatIcon.style.display = 'block';

      document.body.appendChild(chatIcon);

      const script = document.createElement('script');
      script.src = 'https://minnit.chat/js/chaticon.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  // Call the embedChatroom function for each condition
  embedChatroom('intermediate-tafsir-en-ar', 'https://organizations.minnit.chat/654987566400689/Main?embed');

  // Example for another link and chat URL (add more as needed)
  // embedChatroom('another-specific-page', 'https://your-other-minnit-chat-url?embed');
});
