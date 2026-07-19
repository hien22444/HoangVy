# Deploy Guide cho Ngô Thị Hoàng Vy Graduation Website

## 📌 Tóm Tắt Project
- **Loại**: Website mời tham dự lễ tốt nghiệp
- **Công nghệ**: HTML, CSS, JavaScript (không cần backend)
- **Responsive**: Có, phù hợp mọi thiết bị
- **Thời gian tạo**: ~5 phút

## 🚀 Hướng Dẫn Deploy Nhanh Nhất (GitHub Pages)

### Bước 1: Chuẩn Bị
```
✓ Có GitHub account (tạo miễn phí tại github.com)
✓ Cài Git (tuỳ chọn, có thể dùng GitHub Desktop)
✓ Có folder project với tất cả files
```

### Bước 2: Tạo Repository trên GitHub
1. Truy cập: https://github.com/new
2. **Repository name**: `username.github.io` 
   - Thay `username` = username GitHub của bạn
   - VD: ngo-thi-hoang-vy.github.io
3. Chọn "Public"
4. Bỏ chọn "Add a README file"
5. Click "Create repository"

### Bước 3: Upload Files (Cách Đơn Giản - Không Cần Git)
1. Vào repository vừa tạo
2. Click "Add file" → "Upload files"
3. Drag tất cả files từ folder vào
4. Hình ảnh minh họa:
```
📁 username.github.io/
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
└── 📁 assets/
    └── logo.png
```
5. Click "Commit changes"

### Bước 4: Kích Hoạt GitHub Pages
1. Vào "Settings" 
2. Chọn "Pages" ở sidebar
3. **Branch**: Chọn "main"
4. **Folder**: Chọn "/ (root)"
5. Click "Save"

### Bước 5: Đợi & Truy Cập ✅
- Đợi 1-2 phút
- Truy cập: `https://username.github.io`
- Chia sẻ link này cho bạn bè!

---

## 📸 Hướng Dẫn Thêm Logo

### Cách 1: Dùng URL từ Internet
Thay dòng này trong `index.html`:
```html
<img src="assets/logo.png" alt="Logo trường" class="school-logo">
```
Thành:
```html
<img src="https://link-to-logo-image.jpg" alt="Logo trường" class="school-logo">
```

### Cách 2: Upload File Logo Cục Bộ
1. Chuẩn bị file: `logo.png` hoặc `logo.jpg`
2. Bỏ vào folder `assets/`
3. Code sẽ tự động tìm: `assets/logo.png`

---

## 🎯 Các Tùy Chỉnh Nhanh

| Cần Thay Đổi | Tìm Ở File | Ghi Chú |
|-------------|-----------|--------|
| Tên bạn | index.html | Dòng: `graduate-name` |
| Trường học | index.html | Dòng: `school-name` |
| Ngày | index.html | Tìm "25" (ngày) |
| Giờ | index.html | Tìm "09:30" |
| Địa điểm | index.html | Tìm "131 Lương Nhữ Hộc" |
| Màu sắc | style.css | Tìm "#667eea" |

---

## 💾 Cách 2: Deploy Bằng Git (Nâng Cao)

```bash
# 1. Mở Command Prompt/Terminal ở folder project
# 2. Chạy lệnh này:

git init
git add .
git commit -m "Initial commit - Graduation website"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

---

## 📱 Kiểm Tra Website

### Trên Máy Tính
- Bấm đúp `index.html`
- Hoặc: Chuột phải → "Open with" → Trình duyệt

### Trên Điện Thoại
- Truy cập qua link khi đã deploy
- Kiểm tra hiển thị tốt không

### Functionality Test
- ✓ Nhấp vào hình bìa → mở thiệp
- ✓ Nhấp nút "CHỈ ĐƯỜNG" → mở Google Maps
- ✓ Nhấp "QUAY LẠI" → về hình bìa
- ✓ Zoom in/out trơn tru
- ✓ Hoạt hình mượt mà

---

## 🆘 Gặp Sự Cố?

| Sự Cố | Giải Pháp |
|------|----------|
| Repository lỗi tên | Tên phải đúng: `username.github.io` |
| Website không hiển thị | Đợi 2-3 phút, rồi reload trình duyệt |
| Files không upload | Kiểm tra công khai (Public) repository |
| Logo không thấy | Kiểm tra tên file & đường dẫn đúng |
| Lỗi 404 | Chắc chắn index.html ở root folder |

---

## 🎨 Tuỳ Chỉnh Nâng Cao

### Thay Đổi Màu Sắc
Mở `style.css` tìm:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Thay màu hex theo ý thích.

### Thêm Font Chữ Đẹp
Thêm vào `<head>` của `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

### Thêm Background Music
Thêm này vào `<body>` cuối `index.html`:
```html
<audio autoplay loop muted>
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

---

## ✨ Các Lựa Chọn Hosting Miễn Phí

### 1. **GitHub Pages** ⭐ (KHUYÊN DÙNG)
- ✅ Hoàn toàn miễn phí
- ✅ Không quảng cáo
- ✅ Link đẹp: `username.github.io`
- ⏱️ Thời gian deploy: 1-2 phút

### 2. **Vercel**
- ✅ Rất nhanh
- ✅ Deploy tự động từ GitHub
- 🔗 Link: `project-name.vercel.app`

### 3. **Netlify**
- ✅ Drag & drop hoặc Git
- ✅ Tích hợp tốt
- 🔗 Link: `project-name.netlify.app`

### 4. **Firebase Hosting**
- ✅ Google's service
- ✅ Nhanh và tin cậy
- 🔗 Link tuỳ chỉnh

---

## 📞 Hỗ Trợ

Nếu cần giúp đỡ:
1. Kiểm tra README.md trong project
2. Xem hướng dẫn GitHub Pages: https://pages.github.com/
3. Liên hệ support GitHub

---

**Chúc mừng! Website của bạn sắp trực tuyến!** 🎉
