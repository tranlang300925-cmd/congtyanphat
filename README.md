# Website Công ty An Phát

| Thư mục | Nội dung | Chạy ở đâu |
|---|---|---|
| `frontend/` | Giao diện (HTML/CSS/JS, ảnh) | GitHub Pages – https://congtyanphat.top |
| `backend/` | API báo giá (Node.js + Express) | Render – https://anphat-backend.onrender.com |

## Chạy thử trên máy

```bash
# Backend
cd backend
npm install
node server.js          # chạy ở http://127.0.0.1:3001

# Frontend: mở frontend/index.html bằng Live Server (VS Code)
```

## Thêm ảnh công trình

1. Bỏ ảnh vào `frontend/images/congtrinh/` (đặt tên không dấu, ví dụ `cua-nhom-biet-thu.jpg`).
2. Mở `frontend/index.html`, tìm phần `<!-- CÔNG TRÌNH -->`, chép một khối `<figure>…</figure>`,
   đổi đường dẫn ảnh (2 chỗ), `alt` và chú thích.
3. Commit + push → web tự cập nhật sau khoảng 1 phút.

Ảnh nên nhỏ hơn 300KB (có thể nén tại squoosh.app, chọn WebP).

## Deploy

- **Frontend:** push lên `main` → GitHub Actions (`.github/workflows/deploy-pages.yml`) tự deploy thư mục `frontend/`.
- **Backend:** Render tự build lại khi có thay đổi trong `backend/` (Root Directory = `backend`).

## Biến môi trường trên Render

`ADMIN_KEY`, `EMAIL_USER`, `EMAIL_PASS`, `ADMIN_EMAIL`, `DATA_DIR` (nếu có gắn Disk).

> `quotes.json` chứa thông tin khách hàng nên đã nằm trong `.gitignore`, không đưa lên GitHub.
