# 🎵 Hướng Dẫn Thêm Nhạc Nền

## ✅ Đã Cấu Hình Sẵn

Nhạc nền đã được tích hợp vào website! Khi người dùng mở thiệp, nhạc sẽ tự phát và có thể điều khiển bằng nút 🔊/🔇.

## 📁 Cách Thêm File Nhạc

### Bước 1: Chuẩn Bị File Nhạc

1. Tìm file nhạc `.mp3` hoặc `.wav` theo các cách:
   - **Nhạc miễn phí**: [YouTube Audio Library](https://www.youtube.com/audiolibrary), [Pixabay Music](https://pixabay.com/music/), [Freepik](https://www.freepik.com/search?query=background+music&type=audio)
   - **Thời lượng**: 2-3 phút là tốt (loop lại)
   - **Định dạng**: MP3, WAV, hoặc OGG
   - **Tên file**: Đặt tên `background-music.mp3`

### Bước 2: Thêm File Vào Project

1. Bỏ file `background-music.mp3` vào folder **`assets/`**

```
📁 project/
├── assets/
│   ├── logo1.png
│   └── 🎵 background-music.mp3  ← Thêm vào đây
├── index.html
├── style.css
└── script.js
```

### Bước 3: Commit & Push

```bash
cd d:\tnvy
git add .
git commit -m "Add background music"
git push origin main
```

## 🎼 Gợi Ý Nhạc Nền

| Loại Nhạc | Nguồn | Link |
|-----------|------|------|
| **Lễ tốt nghiệp** | Pixabay | https://pixabay.com/music/ |
| **Nhẹ nhàng, trang trọng** | YouTube Audio | https://www.youtube.com/audiolibrary |
| **Piano cổ điển** | Freepik | https://www.freepik.com |
| **Nền trau bì** | Envato | https://elements.envato.com |

**Gợi ý từ khóa tìm kiếm:**
- "Elegant background music"
- "Graduation ceremony music"
- "Piano classical"
- "Soft jazz"

## 🔧 Cải Tiến

### Thay Đổi Âm Lượng

Mở `script.js` tìm dòng:
```javascript
bgMusic.volume = 0.5; // 50%
```

Thay đổi số từ 0 → 1:
- `0.3` = Nhỏ (30%)
- `0.5` = Vừa (50%) ← Mặc định
- `0.7` = To (70%)
- `1.0` = Rất to (100%)

### Thay Đổi Format Âm Thanh

Nếu muốn dùng `.m4a` hoặc `.ogg` thay vì `.mp3`:

1. Mở `index.html`
2. Tìm dòng:
```html
<source src="assets/background-music.mp3" type="audio/mpeg">
```

3. Thay thành:
```html
<source src="assets/background-music.m4a" type="audio/mp4">
<!-- hoặc -->
<source src="assets/background-music.ogg" type="audio/ogg">
```

## 🎵 Hành Động Nhạc

| Hành Động | Kết Quả |
|-----------|---------|
| Nhấn vào bìa | Mở thiệp + **Phát nhạc** 🎵 |
| Nhấn nút 🔊 | Tắt/bật âm thanh |
| Nhấn "×" Đóng | Dừng nhạc 🔇 |
| Reload trang | Nhạc reset |

## 🐛 Gỡ Lỗi

### Nhạc không phát

1. **Kiểm tra file**:
   - File đúng tên: `background-music.mp3`?
   - File ở folder: `assets/`?
   - File có hợp lệ không (thử mở riêng)?

2. **Kiểm tra browser**:
   - Autoplay có bị chặn không?
   - Thử browser khác?
   - Kiểm tra console (F12) có lỗi không?

3. **Kiểm tra GitHub Pages**:
   - Đợi 5 phút để GitHub cập nhật
   - Force refresh: `Ctrl + Shift + R`
   - Xem tab Network (F12) file nhạc có tải không?

### Còn lỗi?

Thêm dòng này vào `script.js` sau hàm `openCard()`:
```javascript
console.log("Nhạc URL:", bgMusic.src);
console.log("Nhạc trạng thái:", bgMusic.paused ? "Stopped" : "Playing");
```

Mở console (F12) để xem thông tin debug.

## 💡 Thêm Nhiều Bài Nhạc

Để phát bài nhạc ngẫu nhiên:

1. Thêm vào `script.js`:
```javascript
const musicList = [
  "assets/music1.mp3",
  "assets/music2.mp3",
  "assets/music3.mp3"
];

function getRandomMusic() {
  return musicList[Math.floor(Math.random() * musicList.length)];
}

function openCard() {
  // ...code cũ...
  if (bgMusic && !isSoundMuted) {
    bgMusic.src = getRandomMusic();
    bgMusic.volume = 0.5;
    bgMusic.play();
  }
}
```

2. Thêm các file nhạc vào `assets/`

## ✨ Xong!

Website bạn giờ có nhạc nền hoàn chỉnh! 🎉

---

**Cần giúp gì thêm?**
- Tìm nhạc phù hợp?
- Chỉnh âm lượng?
- Thêm hiệu ứng âm thanh?

