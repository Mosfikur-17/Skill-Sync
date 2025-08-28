document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    // Customization elements
    const bgColor = document.getElementById('bg-color');
    const fontFamily = document.getElementById('font-family');
    const botName = document.getElementById('bot-name');
    const animationSpeed = document.getElementById('animation-speed');
    
    // Predefined bot responses
    const botResponses = [
        "I can help you with career guidance. What specific area are you interested in?",
        "There are many resources available for skill development. What skills are you looking to improve?",
        "Job matching algorithms consider your skills, experience, and preferences. Would you like to know more?",
        "Career pathways show you potential progressions in your field. Which industry are you in?",
        "Learning resources include online courses, books, and tutorials. What format do you prefer?"
    ];
    
    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        
        // Simulate bot typing
        simulateTyping();
    }
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender + '-message');
        messageElement.textContent = text;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Simulate typing indicator
    function simulateTyping() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Show typing indicator
        setTimeout(() => {
            typingIndicator.style.display = 'flex';
            
            // After a delay, show bot response
            setTimeout(() => {
                typingIndicator.remove();
                const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
                addMessage(randomResponse, 'bot');
            }, 1500);
        }, 500);
    }
    
    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Customization functionality
    bgColor.addEventListener('change', function() {
        document.querySelector('.chat-header').style.background = this.value;
        document.querySelector('.chat-input button').style.background = this.value;
    });
    
    fontFamily.addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
    });
    
    botName.addEventListener('change', function() {
        document.querySelector('.chat-title h2').textContent = this.value;
    });
    
    animationSpeed.addEventListener('change', function() {
        document.documentElement.style.setProperty('--animation-speed', this.value + 's');
    });
    
    resetBtn.addEventListener('click', function() {
        bgColor.value = '#6c63ff';
        fontFamily.value = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
        botName.value = 'Career Assistant Bot';
        animationSpeed.value = '0.4';
        
        // Apply reset values
        document.querySelector('.chat-header').style.background = bgColor.value;
        document.querySelector('.chat-input button').style.background = bgColor.value;
        document.body.style.fontFamily = fontFamily.value;
        document.querySelector('.chat-title h2').textContent = botName.value;
    });
    
    // Add some sample messages on load
    setTimeout(() => {
        addMessage("Try asking me about career advice or learning resources!", 'bot');
    }, 1000);
});