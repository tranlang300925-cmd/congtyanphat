console.log("APP.JS LOADED");

const form = document.getElementById("quoteForm");
const statusEl = document.getElementById("quoteStatus"); // nếu không có cũng không sao

function setStatus(msg, isError = false) {
  if (!statusEl) return;
  statusEl.textContent = msg;
  statusEl.style.color = isError ? "#ff6b6b" : "#7CFC98";
}

if (!form) {
  console.warn(
    "Không tìm thấy form #quoteForm. Kiểm tra lại id form trong index.html"
  );
} else {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ✅ chặn reload trang

    // Lấy input theo id: ưu tiên fullname/phone, fallback name nếu bạn đang dùng id="name"
    const fullname = (
      document.getElementById("fullname")?.value ||
      document.getElementById("name")?.value ||
      ""
    ).trim();
    const phone = (document.getElementById("phone")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    if (!fullname || !phone || !email || !message) {
      setStatus("❌ Vui lòng nhập đầy đủ thông tin.", true);
      return;
    }

    setStatus("⏳ Đang gửi yêu cầu...");

    // Local gọi backend local 3001
    const API_BASE = "http://127.0.0.1:3001";

    try {
      const res = await fetch(`${API_BASE}/api/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, phone, email, message }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setStatus(`❌ Gửi thất bại: ${data?.error || res.statusText}`, true);
        return;
      }

      setStatus("✅ Gửi thành công! Bên mình sẽ liên hệ sớm.");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus(
        "❌ Không kết nối được backend. Kiểm tra node server.js đang chạy?",
        true
      );
    }
  });
}
