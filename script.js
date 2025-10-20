// Danh sách các lời chúc ngọt ngào
const wishes = [
    "Chúc chị em phụ nữ luôn tươi trẻ, rạng rỡ như ánh bình minh, hạnh phúc như những cánh hoa đang nở! 🌸",
    "Ngày 20/10, gửi đến bạn những điều tuyệt vời nhất: sức khỏe dồi dào, nụ cười tươi tắn và tình yêu trọn vẹn! 💐",
    "Chúc các nàng mãi là nữ hoàng trong cuộc đời mình, luôn tỏa sáng và được yêu thương! 👑✨",
    "Hãy luôn tự hào về chính mình - bạn thật tuyệt vời! Chúc 20/10 thật nhiều niềm vui và hạnh phúc! 🎀💕",
    "Phụ nữ là những bông hoa đẹp nhất, là nguồn cảm hứng vô tận. Chúc bạn luôn xinh đẹp và hạnh phúc! 🌹💖"
];

// Tạo trái tim bay
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    
    // Vị trí ngẫu nhiên từ trái sang phải
    heart.style.left = Math.random() * 100 + '%';
    
    // Thời gian delay ngẫu nhiên
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    // Thời gian animation ngẫu nhiên
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    // Kích thước ngẫu nhiên
    const size = Math.random() * 15 + 15;
    heart.style.fontSize = size + 'px';
    
    // Màu sắc ngẫu nhiên (các tone hồng)
    const colors = ['#ffb3d9', '#ff99cc', '#ffccee', '#ffb3ba', '#ffc9e6'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    heartsContainer.appendChild(heart);
    
    // Xóa trái tim sau khi animation kết thúc
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Tạo trái tim liên tục
setInterval(createHeart, 300);

// Tạo một số trái tim ban đầu
for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}

// Xử lý popup
const wishButton = document.getElementById('wishButton');
const popupOverlay = document.getElementById('popupOverlay');
const closeButton = document.getElementById('closeButton');
const nextWishButton = document.getElementById('nextWishButton');
const popupMessage = document.getElementById('popupMessage');

let currentWishIndex = -1;

// Hàm lấy lời chúc ngẫu nhiên
function getRandomWish() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * wishes.length);
    } while (newIndex === currentWishIndex && wishes.length > 1);
    
    currentWishIndex = newIndex;
    return wishes[currentWishIndex];
}

// Mở popup
function openPopup() {
    popupMessage.textContent = getRandomWish();
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Đóng popup
function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
wishButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
nextWishButton.addEventListener('click', () => {
    popupMessage.textContent = getRandomWish();
});

// Đóng popup khi click ra ngoài
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        closePopup();
    }
});

// Đóng popup khi nhấn ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
        closePopup();
    }
});

// Thêm hiệu ứng sparkle khi di chuột
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '12px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Animation cho sparkle
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Log chào mừng trong console
console.log('%c🌸 Chúc mừng ngày Phụ Nữ Việt Nam 20/10! 💖', 
    'font-size: 20px; color: #ff69b4; font-weight: bold; text-shadow: 2px 2px 4px rgba(255,182,193,0.5);');
