/**
 * Gaurav & Dnyaneshwari - Marathi Wedding Invitation Data Configuration
 * संपूर्ण मराठी लग्नपत्रिका डेटा कॉन्फिगरेशन
 */

const weddingData = {
  // वर व वधू तपशील
  couple: {
    groom: {
      name: 'चि. गौरव',
      fullName: 'चि. गौरव कैलास जगताप',
      parents: 'सौ. सुवर्णा व श्री. कैलास जगताप यांचे सुपुत्र',
      relation: 'सुपुत्र'
    },
    bride: {
      name: 'चि. सौ. का. ज्ञानेश्वरी',
      fullName: 'चि. सौ. का. ज्ञानेश्वरी तुकाराम धकटोडे',
      parents: 'सौ. संगीता व श्री. तुकाराम धकटोडे यांची सुकन्या',
      relation: 'सुकन्या'
    },
    monogram: 'गौ & ज्ञा',
    hashtag: '#गौरव_संग_ज्ञानेश्वरी'
  },

  // मुख्य विवाह तारीख व वेळ (Countdown साठी)
  weddingDate: '2027-02-20T19:30:00+05:30',

  // पार्श्वसंगीत (Universal MP3 with M4A Fallback)
  audio: {
    src: 'assets1/music.mp3',
    fallbackSrc: 'assets1/vaaroon.m4a',
    title: 'मंगल संगीत'
  },

  // स्क्रॅच कार्ड तपशील
  scratchCard: {
    eyebrow: 'एक सुखद सरप्राईज',
    title: 'शुभ दिवस',
    dayName: 'शनिवार',
    dayNumber: '२०',
    monthYear: 'फेब्रुवारी · २०२७',
    location: 'श्री लॉन्स, अमरापूर, शेवगाव',
    promptText: '✦ तारीख पाहण्यासाठी स्क्रॅच करा ✦',
    fallbackBtnText: 'तारीख पाहण्यासाठी येथे टॅप करा'
  },

  // उलटी गिनती (Countdown Labels)
  countdownLabels: {
    title: 'शुभमुहूर्ताची प्रतीक्षा',
    days: 'दिवस',
    hours: 'तास',
    minutes: 'मिनिटे',
    seconds: 'सेकंद',
    message: 'चि. गौरव व चि. सौ. का. ज्ञानेश्वरी यांच्या मंगल प्रवासाची सुरुवात!'
  },

  // चार मुख्य समारंभ (Haldi, Mehndi, Engagement, Marriage)
  events: [
    {
      id: 'haldi',
      name: 'हळद समारंभ',
      date: 'शुक्रवार, १९ फेब्रुवारी २०२७',
      time: 'सकाळी ११:०० वाजता पासून',
      isoDate: '2027-02-19T11:00:00+05:30',
      isoEndDate: '2027-02-19T14:00:00+05:30',
      venue: 'श्री लॉन्स',
      address: 'अमरापूर, शेवगाव, महाराष्ट्र ४१४५०५',
      dressCode: 'पारंपरिक पिवळा पोषाख',
      mapUrl: 'https://maps.app.goo.gl/gVDaQR7MdFeU3Zi97',
      icon: '🌿'
    },
    {
      id: 'mehndi',
      name: 'मेंदी सोहळा',
      date: 'शुक्रवार, १९ फेब्रुवारी २०२७',
      time: 'सायंकाळी ०६:०० वाजता पासून',
      isoDate: '2027-02-19T18:00:00+05:30',
      isoEndDate: '2027-02-19T22:00:00+05:30',
      venue: 'श्री लॉन्स',
      address: 'अमरापूर, शेवगाव, महाराष्ट्र ४१४५०५',
      dressCode: 'पारंपरिक हिरवा किंवा रंगीबेरंगी पोशाख',
      mapUrl: 'https://maps.app.goo.gl/gVDaQR7MdFeU3Zi97',
      icon: '✨'
    },
    {
      id: 'engagement',
      name: 'साखरपुडा समारंभ',
      date: 'शनिवार, २० फेब्रुवारी २०२७',
      time: 'सायंकाळी ०५:०० वाजता पासून',
      isoDate: '2027-02-20T17:00:00+05:30',
      isoEndDate: '2027-02-20T19:00:00+05:30',
      venue: 'श्री लॉन्स',
      address: 'अमरापूर, शेवगाव, महाराष्ट्र ४१४५०५',
      dressCode: 'शाही पारंपरिक वेषभूषा',
      mapUrl: 'https://maps.app.goo.gl/gVDaQR7MdFeU3Zi97',
      icon: '💍'
    },
    {
      id: 'marriage',
      name: 'शुभविवाह सोहळा',
      date: 'शनिवार, २० फेब्रुवारी २०२७',
      time: 'सायंकाळी ०७:३० वा. शुभमुहूर्तावर',
      isoDate: '2027-02-20T19:30:00+05:30',
      isoEndDate: '2027-02-20T23:30:00+05:30',
      venue: 'श्री लॉन्स',
      address: 'अमरापूर, शेवगाव, महाराष्ट्र ४१४५०५',
      dressCode: 'शाही महाराष्ट्रीयन पारंपरिक पोशाख',
      mapUrl: 'https://maps.app.goo.gl/gVDaQR7MdFeU3Zi97',
      icon: '🪔',
      isHighlight: true
    }
  ],

  // फोटो गॅलरी (गोड आठवणी)
  photoGallery: {
    title: 'गोड आठवणी',
    photos: [
      {
        id: 'photo-1',
        src: 'assets1/couple-1.jpg',
        caption: 'आनंदाचे क्षण',
        alt: 'गौरव आणि ज्ञानेश्वरी आनंदाचे क्षण'
      },
      {
        id: 'photo-2',
        src: 'assets1/couple-2.jpg',
        caption: 'मेंदीचे रंग',
        alt: 'मेंदी सोहळा व पवित्र बंधन'
      },
      {
        id: 'photo-3',
        src: 'assets1/couple-3.jpg',
        caption: 'साथ जन्मांची',
        alt: 'शुभविवाह शाही क्षण'
      }
    ]
  },

  // सस्नेह निमंत्रण व शुभाशीर्वाद विभाग
  blessingsSection: {
    eyebrow: '॥ सस्नेह निमंत्रण ॥',
    title: 'स्नेहनिमंत्रण व शुभाशीर्वाद',
    subtitle: 'आपली उपस्थिती व शुभाशीर्वाद हेच आमचे वैभव!'
  },

  // कुटुंब संपर्क (दिशा व मदतीसाठी)
  contact: [
    {
      name: 'श्री. कैलास जगताप',
      phone: '+91 99999 99999',
      role: 'वरपक्ष'
    },
    {
      name: 'श्री. तुकाराम धकटोडे',
      phone: '+91 88888 88888',
      role: 'वधूपक्ष'
    }
  ],

  // अंतिम आदरयुक्त संदेश
  closingMessage: 'आपल्या स्नेहमय उपस्थितीने आणि आशीर्वादाने आमचा हा विवाहसोहळा अधिक मंगलमय होईल.',
  familyFooter: 'जगताप व धकटोडे परिवारातर्फे सस्नेह निमंत्रण'
};

// Global expose
if (typeof window !== 'undefined') {
  window.weddingData = weddingData;
}
