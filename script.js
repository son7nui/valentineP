const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Biến để theo dõi độ phóng to
let scale = 1;

// Hàm để nút No nhảy đi chỗ khác
const moveButton = () => {
    // Tính toán vị trí ngẫu nhiên trong khung nhìn
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20); // Trừ thêm chút lề để không sát mép quá
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// --- THAY ĐỔI CHÍNH Ở ĐÂY ---
// Sự kiện khi ĐƯA CHUỘT VÀO (mouseover) nút No
noBtn.addEventListener('mouseover', () => {
    // 1. Nút No chạy ngay lập tức
    moveButton();

    // 2. Nút Yes to lên ngay lập tức
    scale += 0.2; // Mỗi lần đưa chuột vào tăng thêm 20% kích thước
    yesBtn.style.transform = `scale(${scale})`;
});

// Sự kiện khi bấm vào nút Yes (Hiện thông báo chúc mừng)
yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div style="text-align:center; position: relative; z-index: 10;">
            <h1 style="color:#d32f2f; font-size: 3rem;">Yayy! I knew it! ❤️</h1>
            <img src="cute_cat.gif" alt="Cute Capoo Cat" class="cat-img">
        </div>
    `;
    // Thêm hiệu ứng nền tim bay tung tóe nếu muốn (cần thêm CSS/JS phức tạp hơn)
});

// (Tùy chọn) Chặn sự kiện click vào nút No nếu họ dùng mẹo để bấm
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành động click
    alert("Đã bảo là sẽ rất buồn mà... Chọn Yes đi! 🥺");
});