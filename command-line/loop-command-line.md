# Terminalda Sikllar (For Loops) Bilan Ishlash

Ushbu qo'llanmada terminal (iTerm/Bash/Zsh) orqali avtomatlashtirilgan papka va fayllar yaratish, ularning nomini o'zgartirish hamda buyruqlar ketma-ketligini to'g'ri yozish qoidalari tushuntirilgan.

---

## 1. Papkalarni Ketma-Ket Yaratish va Ichiga Fayl Ochish

0 dan 10 gacha bo'lgan `app_0`, `app_1`, ..., `app_10` papkalarini yaratish va ularning ichida standart `index.html` hamda `index.css` fayllarini hosil qilish buyrug'i:

```bash
for i in {0..10}; do mkdir "app_$i" && cd "app_$i" && touch index.html index.css && cd ../; done
```
