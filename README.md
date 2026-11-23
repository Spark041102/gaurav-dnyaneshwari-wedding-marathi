# चि. गौरव आणि चि. सौ. का. ज्ञानेश्वरी - शुभविवाह निमंत्रण पत्रिका (मराठी)
### Gaurav & Dnyaneshwari - Authentic Royal Marathi Wedding Invitation Website

A mobile-first, zero-build, static interactive Indian wedding invitation website in authentic Marathi (Devanagari script), inspired by royal palace aesthetics.

---

## 📁 फोल्डर रचना (Folder Structure)
```text
gaurav-dnyaneshwari-wedding-marathi/
├── .nojekyll                 # GitHub Pages साठी आवश्यक
├── favicon.ico               # ब्राऊझर टॅब आयकॉन (GD / श्री मोनोग्राम)
├── index.html                # मुख्य लग्नपत्रिका (HTML5)
├── README.md                 # माहिती व मार्गदर्शक
├── css/
│   ├── styles.css            # राजेशाही फॉन्ट, रंगसंगती व लेआउट (CSS3)
│   └── animations.css        # ३D लिफाफा व पाकळ्यांचे ॲनिमेशन
├── js/
│   ├── wedding-data.js       # सर्व मराठी मजकूर, तारीख, स्थळ व संपर्क (Config)
│   └── main.js               # स्क्रॅच कार्ड, काउंटडाउन, फोटो स्लाइडर व संगीत
└── assets1/                  # चित्रे, पार्श्वसंगीत (म4a) व फॉन्ट साधने
```

---

## ⚙️ मजकूर किंवा तारीख कशी बदलावी? (How to Edit)
सर्व माहिती **[`js/wedding-data.js`](js/wedding-data.js)** मध्ये एकत्रित केलेली आहे:
- **तारीख किंवा वेळ बदलणे:** `events` आणि `weddingDate` मध्ये बदल करा.
- **मोबाईल नंबर बदलणे:** `contact` विभागात नंबर अद्ययावत करा.
- **फोटो बदलणे:** तुमचे नवीन फोटो `assets1/couple-1.jpg`, `couple-2.jpg`, `couple-3.jpg` या नावाने ठेवा.

---

## 🚀 GitHub वर होस्ट कसे करावे? (How to Host on GitHub Pages)
1. GitHub वर नवीन **Public Repository** तयार करा (उदा. `marathi-wedding-invite`).
2. या फोल्डरमधील सर्व फाइल्स व फोल्डर्स (`index.html`, `css`, `js`, `assets1` इत्यादी) ड्रॅग करून अपलोड करा.
3. **Settings** → **Pages** वर जा.
4. **Branch** मध्ये `main` व `/ (root)` निवडून **Save** वर क्लिक करा.
5. १-२ मिनिटांत तुमची मराठी ई-लग्नपत्रिका इंटरनेटवर लाईव्ह होईल!
