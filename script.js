const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hàm để tính toán vị trí ngẫu nhiên
const moveButton = () => {
    // Trừ đi kích thước nút để nó không nhảy ra ngoài màn hình
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// Hiệu ứng nút No "chạy trốn"
noBtn.addEventListener('mouseover', moveButton);

// Hiệu ứng nút Yes to dần khi bấm No
let scale = 1;
noBtn.addEventListener('click', () => {
    scale += 0.5;
    yesBtn.style.transform = `scale(${scale})`;
    alert("Nỗ lực tuyệt vời, nhưng hãy chọn Yes đi nào! 😉");
});

// Chúc mừng khi bấm Yes
yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div style="text-align:center;">
            <h1 style="color:#d32f2f; font-size: 3rem;">I knew you would say Yes! ❤️</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1eXp1&ep=v1_gifs_search&rid=giphy.gif&ct=s" style="width:300px;">
        </div>
    `;
});