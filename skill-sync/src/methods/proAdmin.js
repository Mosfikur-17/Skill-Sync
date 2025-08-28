// Dropdown logic for profile/admin icon
const icon = document.getElementById('profileAdminIcon');
const menu = document.getElementById('profileAdminMenu');
icon.onclick = function(e) {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
        menu.style.display = 'none';
    }
});

// Chatbot popup toggle
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotPopup = document.getElementById('chatbotPopup');
const chatbotClose = document.getElementById('chatbotClose');
if (chatbotBtn && chatbotPopup && chatbotClose) {
    chatbotBtn.onclick = function() {
        chatbotPopup.classList.add('active');
    };
    chatbotClose.onclick = function() {
        chatbotPopup.classList.remove('active');
    };
}