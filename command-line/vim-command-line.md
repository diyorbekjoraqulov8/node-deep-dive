# 📝 Vim (Vi Improved) Tahrirlovchisi: To'liq Qo'llanma va Cheat Sheet

Vim — bu klaviaturadan qo'lni uzmasdan, juda tez kod yozish va matnlarni tahrirlash uchun mo'ljallangan terminal muharriridir. Ushbu faylda Vim'ning barcha asosiy va ilg'or (advanced) buyruqlari jamlangan.

---

## ⚠️ 1. Vim Asosi: Ishlash Rejimlari (Modes)

Vim'da klaviaturadagi tugmalar har doim ham matn yozmaydi. Ular qaysi rejimda turganingizga qarab har xil vazifani bajaradi.

1. **Normal Mode (Buyruqlar rejimi):** Vim ochilgandagi standart holat. Bu yerda matn bo'ylab harakatlaniladi, nusxalanadi, o'chiriladi. (Har qanday rejimdan **`Esc`** orqali qaytiladi).
2. **Insert Mode (Yozish rejimi):** Oddiy bloknot kabi matn yozish holati.
3. **Visual Mode (Belgilash rejimi):** Sichqoncha bilan matnni surgandek, matn qismlarini belgilash holati.
4. **Command-line Mode (Tizim rejimi):** Saqlash, chiqish yoki sozlash buyruqlari yoziladigan joy.

---

## 2. 🚪 Kirish va Chiqish Buyruqlari

Terminalda faylni ochish: `vim fayl_nomi.txt`

*Normal Mode* da (avval `Esc` bosib) quyidagi buyruqlar yoziladi va **`Enter`** bosiladi:
* `:w` — Faylni saqlash (Write).
* `:q` — Fayldan chiqish (Quit).
* `:wq` yoki `ZZ` — Saqlash va chiqish (Eng ko'p ishlatiladi).
* `:q!` — O'zgarishlarni saqlamasdan majburlab chiqib ketish.
* `:w yangi_nom.txt` — Faylni boshqa nom bilan saqlash (Save as).

---

## 3. ✍️ Yozish Rejimiga o'tish (Insert Mode)

Normal modedan matn yozishga o'tishning bir necha usullari bor:
* `i` — Kursor turgan joydan boshlab yozish.
* `I` — Qatorning eng boshiga o'tib yozishni boshlash.
* `a` — Kursordan bitta harf o'ngga o'tib yozish (Append).
* `A` — Qatorning eng oxiriga o'tib yozishni boshlash.
* `o` — Kursor turgan qatorning tagidan yangi toza qator ochish.
* `O` — Kursor turgan qatorning tepasidan yangi toza qator ochish.

---

## 4. 🎯 Navigatsiya va Harakatlanish (Kursor boshqaruvi)

Klaviaturadagi strelkalardan foydalanmasdan, qo'lni asosiy harflarda ushlab turgan holda harakatlanish:

```text
       k (tepaga)
h (chapga)    l (o'ngga)
       j (pastga)
