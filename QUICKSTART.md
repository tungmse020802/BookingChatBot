# 🚀 Quick Start - Booking Chatbot với Google Gemini AI

## Bước 1: Cài đặt dependencies

```bash
pip install gradio pydantic requests google-generativeai python-dotenv
```

## Bước 2: Lấy Google Gemini API Key (FREE)

1. Truy cập: **https://makersuite.google.com/app/apikey**
2. Đăng nhập Google account
3. Click **"Create API Key"**
4. Copy API key

## Bước 3: Cấu hình API Key

### Option 1: Environment Variable (Khuyến nghị)
```bash
export GEMINI_API_KEY="your-api-key-here"
```

### Option 2: Hardcode trong notebook (chỉ dev)
Mở cell "Google Gemini AI Configuration" và uncomment dòng:
```python
GEMINI_API_KEY = "your-api-key-here"
```

## Bước 4: Chạy notebook

```bash
jupyter notebook booking_chatbot_demo.ipynb
```

Hoặc trong VS Code: Click **"Run All"**

## Bước 5: Test chatbot

Sau khi chạy đến cell cuối, Gradio sẽ mở giao diện chat. Thử:

```
Mình muốn đặt phòng 2 đêm cuối tuần này
```

Bot sẽ tự động:
- ✅ Hiểu "2 đêm" (LLM tính toán)
- ✅ Hỏi thông tin còn thiếu
- ✅ Tìm phòng trống từ API
- ✅ Đặt phòng và trả kết quả

## ⚠️ Không có API Key?

Hệ thống vẫn hoạt động với **rule-based parser** (fallback), nhưng:
- ❌ Không hiểu "2 đêm", "tuần sau"
- ❌ Không xử lý typo, viết tắt
- ❌ Câu hỏi dạng template, ít tự nhiên

## 🎯 So sánh

| Tính năng | LLM (Gemini) | Rule-based |
|-----------|--------------|------------|
| Hiểu ngữ cảnh | ✅ | ❌ |
| Xử lý natural language | ✅ | ❌ |
| Tốc độ | ~1-2s | <0.1s |
| Chi phí | FREE (tier) | FREE |
| Độ chính xác | ~95% | ~70% |

## 🔗 Resources

- **API Documentation:** [LLM_UPGRADE_GUIDE.md](./LLM_UPGRADE_GUIDE.md)
- **Gemini Docs:** https://ai.google.dev/docs
- **Room API:** http://103.38.236.148:8080/api/Room

## 💡 Tips

### Test nhanh API connection:
```python
import google.generativeai as genai
genai.configure(api_key="your-key")
model = genai.GenerativeModel('gemini-1.5-flash')
response = model.generate_content("Xin chào")
print(response.text)
```

### Xem logs:
Khi chat, notebook sẽ in logs:
```
🎯 Intent: book_room [LLM]
📊 Slots: {"city": "Khách sạn", "checkin": "18/10"}
❓ Asking: checkout [LLM]
```

### Debug:
```python
# Check LLM status
print(f"LLM_ENABLED: {LLM_ENABLED}")
print(f"API Key: {GEMINI_API_KEY[:10]}..." if GEMINI_API_KEY else "Not set")
```

---

**Happy Coding! 🎉**
