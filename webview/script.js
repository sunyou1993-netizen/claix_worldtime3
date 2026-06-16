// World Clock Application - Standalone WebView JavaScript Controller (Pure JS)

window.handleCloseBtnClick = function(event) {
  if (event) {
    if (typeof event.preventDefault === "function") event.preventDefault();
    if (typeof event.stopPropagation === "function") event.stopPropagation();
  }

  const redirectUrl = "https://claix-toolkit-xzrp.vercel.app/";

  // 1. Try dynamic anchor navigation (super robust for iframe-sandboxed environments to break top/parent)
  try {
    const a = document.createElement("a");
    a.href = redirectUrl;
    a.target = "_top";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {}

  try {
    const a = document.createElement("a");
    a.href = redirectUrl;
    a.target = "_parent";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {}

  try {
    const a = document.createElement("a");
    a.href = redirectUrl;
    a.target = "_self";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {}

  // 2. Direct location modifications
  try {
    if (window.top && window.top !== window) {
      window.top.location.href = redirectUrl;
    }
  } catch (err) {}

  try {
    if (window.parent && window.parent !== window) {
      window.parent.location.href = redirectUrl;
    }
  } catch (err) {}

  try {
    window.location.replace(redirectUrl);
  } catch (err) {}

  try {
    window.location.href = redirectUrl;
  } catch (err) {}

  // 3. Fallbacks using window.open
  try {
    window.open(redirectUrl, "_top");
  } catch (err) {}

  try {
    window.open(redirectUrl, "_parent");
  } catch (err) {}

  try {
    window.open(redirectUrl, "_self");
  } catch (err) {}
};

window.handleHeaderClick = function(e) {
  if (e) {
    if (typeof e.preventDefault === "function") e.preventDefault();
    if (typeof e.stopPropagation === "function") e.stopPropagation();
  }

  const redirectUrl = "https://claix-worldtime3-j783.vercel.app/";

  // 1. Try dynamic anchor navigation
  try {
    const a = document.createElement("a");
    a.href = redirectUrl;
    a.target = "_top";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {}

  try {
    const a = document.createElement("a");
    a.href = redirectUrl;
    a.target = "_parent";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {}

  try {
    const a = document.createElement("a");
    a.href = redirectUrl;
    a.target = "_self";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {}

  // 2. Direct locations
  try {
    if (window.top && window.top !== window) {
      window.top.location.href = redirectUrl;
    }
  } catch (err) {}

  try {
    if (window.parent && window.parent !== window) {
      window.parent.location.href = redirectUrl;
    }
  } catch (err) {}

  try {
    window.location.replace(redirectUrl);
  } catch (err) {}

  try {
    window.location.href = redirectUrl;
  } catch (err) {}

  // 3. Fallbacks using window.open
  try {
    window.open(redirectUrl, "_top");
  } catch (err) {}

  try {
    window.open(redirectUrl, "_parent");
  } catch (err) {}

  try {
    window.open(redirectUrl, "_self");
  } catch (err) {}
};

// 1. Static City Database
const WORLD_CITIES = [
  // 1. 대한민국 (South Korea)
  { id: "seoul", nameKo: "서울", nameEn: "Seoul", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "busan", nameKo: "부산", nameEn: "Busan", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "jeju", nameKo: "제주", nameEn: "Jeju", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "incheon", nameKo: "인천", nameEn: "Incheon", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "daegu", nameKo: "대구", nameEn: "Daegu", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "daejeon", nameKo: "대전", nameEn: "Daejeon", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "gwangju", nameKo: "광주", nameEn: "Gwangju", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "ulsan", nameKo: "울산", nameEn: "Ulsan", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },
  { id: "suwon", nameKo: "수원", nameEn: "Suwon", timezone: "Asia/Seoul", flag: "🇰🇷", countryKo: "대한민국", countryCode: "kr" },

  // 2. 일본 (Japan)
  { id: "tokyo", nameKo: "도쿄", nameEn: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "osaka", nameKo: "오사카", nameEn: "Osaka", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "kyoto", nameKo: "교토", nameEn: "Kyoto", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "sapporo", nameKo: "삿포로", nameEn: "Sapporo", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "fukuoka", nameKo: "후쿠오카", nameEn: "Fukuoka", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "nagoya", nameKo: "나고야", nameEn: "Nagoya", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "okinawa", nameKo: "오키나와", nameEn: "Okinawa", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },
  { id: "yokohama", nameKo: "요코하마", nameEn: "Yokohama", timezone: "Asia/Tokyo", flag: "🇯🇵", countryKo: "일본", countryCode: "jp" },

  // 3. 중국 (China)
  { id: "beijing", nameKo: "베이징", nameEn: "Beijing", timezone: "Asia/Shanghai", flag: "🇨🇳", countryKo: "중국", countryCode: "cn" },
  { id: "shanghai", nameKo: "상하이", nameEn: "Shanghai", timezone: "Asia/Shanghai", flag: "🇨🇳", countryKo: "중국", countryCode: "cn" },
  { id: "guangzhou", nameKo: "광저우", nameEn: "Guangzhou", timezone: "Asia/Shanghai", flag: "🇨🇳", countryKo: "중국", countryCode: "cn" },
  { id: "shenzhen", nameKo: "선전", nameEn: "Shenzhen", timezone: "Asia/Shanghai", flag: "🇨🇳", countryKo: "중국", countryCode: "cn" },
  { id: "chengdu", nameKo: "청두", nameEn: "Chengdu", timezone: "Asia/Shanghai", flag: "🇨🇳", countryKo: "중국", countryCode: "cn" },
  { id: "hongkong", nameKo: "홍콩", nameEn: "Hong Kong", timezone: "Asia/Hong_Kong", flag: "🇭🇰", countryKo: "홍콩", countryCode: "hk" },
  { id: "macau", nameKo: "마카오", nameEn: "Macau", timezone: "Asia/Macau", flag: "🇲🇴", countryKo: "마카오", countryCode: "mo" },
  { id: "taipei", nameKo: "타이베이", nameEn: "Taipei", timezone: "Asia/Taipei", flag: "🇹🇼", countryKo: "대만", countryCode: "tw" },
  { id: "ulaanbaatar", nameKo: "울란바토르", nameEn: "Ulaanbaatar", timezone: "Asia/Ulaanbaatar", flag: "🇲🇳", countryKo: "몽골", countryCode: "mn" },

  // 4. 동남아시아 (Southeast Asia)
  { id: "singapore", nameKo: "싱가포르", nameEn: "Singapore", timezone: "Asia/Singapore", flag: "🇸🇬", countryKo: "싱가포르", countryCode: "sg" },
  { id: "bangkok", nameKo: "방콕", nameEn: "Bangkok", timezone: "Asia/Bangkok", flag: "🇹🇭", countryKo: "태국", countryCode: "th" },
  { id: "chiangmai", nameKo: "치앙마이", nameEn: "Chiang Mai", timezone: "Asia/Bangkok", flag: "🇹🇭", countryKo: "태국", countryCode: "th" },
  { id: "phuket", nameKo: "푸켓", nameEn: "Phuket", timezone: "Asia/Bangkok", flag: "🇹🇭", countryKo: "태국", countryCode: "th" },
  { id: "hochiminh", nameKo: "호치민", nameEn: "Ho Chi Minh", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", countryKo: "베트남", countryCode: "vn" },
  { id: "hanoi", nameKo: "하노이", nameEn: "Hanoi", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", countryKo: "베트남", countryCode: "vn" },
  { id: "danang", nameKo: "다낭", nameEn: "Da Nang", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", countryKo: "베트남", countryCode: "vn" },
  { id: "nautrang", nameKo: "나트랑", nameEn: "Nha Trang", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", countryKo: "베트남", countryCode: "vn" },
  { id: "manila", nameKo: "마닐라", nameEn: "Manila", timezone: "Asia/Manila", flag: "🇵🇭", countryKo: "필리핀", countryCode: "ph" },
  { id: "cebu", nameKo: "세부", nameEn: "Cebu", timezone: "Asia/Manila", flag: "🇵🇭", countryKo: "필리핀", countryCode: "ph" },
  { id: "jakarta", nameKo: "자카르타", nameEn: "Jakarta", timezone: "Asia/Jakarta", flag: "🇮🇩", countryKo: "인도네시아", countryCode: "id" },
  { id: "bali", nameKo: "발리", nameEn: "Bali", timezone: "Asia/Makassar", flag: "🇮🇩", countryKo: "인도네시아", countryCode: "id" },
  { id: "kualalumpur", nameKo: "쿠알라룸푸르", nameEn: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur", flag: "🇲🇾", countryKo: "말레이시아", countryCode: "my" },
  { id: "kotakinabalu", nameKo: "코타키나발루", nameEn: "Kota Kinabalu", timezone: "Asia/Kuching", flag: "🇲🇾", countryKo: "말레이시아", countryCode: "my" },
  { id: "phnompenh", nameKo: "프놈펜", nameEn: "Phnom Penh", timezone: "Asia/Phnom_Penh", flag: "🇰🇭", countryKo: "캄보디아", countryCode: "kh" },
  { id: "vientiane", nameKo: "비엔티안", nameEn: "Vientiane", timezone: "Asia/Vientiane", flag: "🇱🇦", countryKo: "라오스", countryCode: "la" },
  { id: "yangon", nameKo: "양곤", nameEn: "Yangon", timezone: "Asia/Yangon", flag: "🇲🇲", countryKo: "미얀마", countryCode: "mm" },

  // 5. 남남아시아 & 중동 (South Asia & Middle East)
  { id: "mumbai", nameKo: "뭄바이", nameEn: "Mumbai", timezone: "Asia/Kolkata", flag: "🇮🇳", countryKo: "인도", countryCode: "in" },
  { id: "newdelhi", nameKo: "뉴델리", nameEn: "New Delhi", timezone: "Asia/Kolkata", flag: "🇮🇳", countryKo: "인도", countryCode: "in" },
  { id: "bangalore", nameKo: "벵갈루루", nameEn: "Bengaluru", timezone: "Asia/Kolkata", flag: "🇮🇳", countryKo: "인도", countryCode: "in" },
  { id: "kolkata", nameKo: "콜콜타", nameEn: "Kolkata", timezone: "Asia/Kolkata", flag: "🇮🇳", countryKo: "인도", countryCode: "in" },
  { id: "dhaka", nameKo: "다카", nameEn: "Dhaka", timezone: "Asia/Dhaka", flag: "🇧🇩", countryKo: "방글라데시", countryCode: "bd" },
  { id: "colombo", nameKo: "콜롬보", nameEn: "Colombo", timezone: "Asia/Colombo", flag: "🇱🇰", countryKo: "스리랑카", countryCode: "lk" },
  { id: "kathmandu", nameKo: "카트만두", nameEn: "Kathmandu", timezone: "Asia/Kathmandu", flag: "🇳🇵", countryKo: "네팔", countryCode: "np" },
  { id: "karachi", nameKo: "카라치", nameEn: "Karachi", timezone: "Asia/Karachi", flag: "🇵🇰", countryKo: "파키스탄", countryCode: "pk" },
  { id: "dubai", nameKo: "두바이", nameEn: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪", countryKo: "아랍에미리트", countryCode: "ae" },
  { id: "abudhabi", nameKo: "아부다비", nameEn: "Abu Dhabi", timezone: "Asia/Dubai", flag: "🇦🇪", countryKo: "아랍에미리트", countryCode: "ae" },
  { id: "riyadh", nameKo: "리야드", nameEn: "Riyadh", timezone: "Asia/Riyadh", flag: "🇸🇦", countryKo: "사우디아라비아", countryCode: "sa" },
  { id: "mecca", nameKo: "메카", nameEn: "Mecca", timezone: "Asia/Riyadh", flag: "🇸🇦", countryKo: "사우디아라비아", countryCode: "sa" },
  { id: "jeddah", nameKo: "제다", nameEn: "Jeddah", timezone: "Asia/Riyadh", flag: "🇸🇦", countryKo: "사우디아라비아", countryCode: "sa" },
  { id: "doha", nameKo: "도하", nameEn: "Doha", timezone: "Asia/Qatar", flag: "🇶🇦", countryKo: "카타르", countryCode: "qa" },
  { id: "telaviv", nameKo: "텔아비브", nameEn: "Tel Aviv", timezone: "Asia/Jerusalem", flag: "🇮🇱", countryKo: "이스라엘", countryCode: "il" },
  { id: "kuwait", nameKo: "쿠웨이트 시티", nameEn: "Kuwait City", timezone: "Asia/Kuwait", flag: "🇰🇼", countryKo: "쿠웨이트", countryCode: "kw" },

  // 6. 유럽 (Europe)
  { id: "london", nameKo: "런던", nameEn: "London", timezone: "Europe/London", flag: "🇬🇧", countryKo: "영국", countryCode: "gb" },
  { id: "edinburgh", nameKo: "에든버러", nameEn: "Edinburgh", timezone: "Europe/London", flag: "🇬🇧", countryKo: "영국", countryCode: "gb" },
  { id: "manchester", nameKo: "맨체스터", nameEn: "Manchester", timezone: "Europe/London", flag: "🇬🇧", countryKo: "영국", countryCode: "gb" },
  { id: "paris", nameKo: "파리", nameEn: "Paris", timezone: "Europe/Paris", flag: "🇫🇷", countryKo: "프랑스", countryCode: "fr" },
  { id: "marseille", nameKo: "마르세유", nameEn: "Marseille", timezone: "Europe/Paris", flag: "🇫🇷", countryKo: "프랑스", countryCode: "fr" },
  { id: "nice", nameKo: "니스", nameEn: "Nice", timezone: "Europe/Paris", flag: "🇫🇷", countryKo: "프랑스", countryCode: "fr" },
  { id: "berlin", nameKo: "베를린", nameEn: "Berlin", timezone: "Europe/Berlin", flag: "🇩🇪", countryKo: "독일", countryCode: "de" },
  { id: "munich", nameKo: "뮌헨", nameEn: "Munich", timezone: "Europe/Berlin", flag: "🇩🇪", countryKo: "독일", countryCode: "de" },
  { id: "frankfurt", nameKo: "프랑크푸르트", nameEn: "Frankfurt", timezone: "Europe/Berlin", flag: "🇩🇪", countryKo: "독일", countryCode: "de" },
  { id: "hamburg", nameKo: "함부르크", nameEn: "Hamburg", timezone: "Europe/Berlin", flag: "🇩🇪", countryKo: "독일", countryCode: "de" },
  { id: "rome", nameKo: "로마", nameEn: "Rome", timezone: "Europe/Rome", flag: "🇮🇹", countryKo: "이탈리아", countryCode: "it" },
  { id: "milan", nameKo: "밀라노", nameEn: "Milan", timezone: "Europe/Rome", flag: "🇮🇹", countryKo: "이탈리아", countryCode: "it" },
  { id: "venice", nameKo: "베네치아", nameEn: "Venice", timezone: "Europe/Rome", flag: "🇮🇹", countryKo: "이탈리아", countryCode: "it" },
  { id: "florence", nameKo: "피렌체", nameEn: "Florence", timezone: "Europe/Rome", flag: "🇮🇹", countryKo: "이탈리아", countryCode: "it" },
  { id: "naples", nameKo: "나폴리", nameEn: "Naples", timezone: "Europe/Rome", flag: "🇮🇹", countryKo: "이탈리아", countryCode: "it" },
  { id: "madrid", nameKo: "마드리드", nameEn: "Madrid", timezone: "Europe/Madrid", flag: "🇪🇸", countryKo: "스페인", countryCode: "es" },
  { id: "barcelona", nameKo: "바르셀로나", nameEn: "Barcelona", timezone: "Europe/Madrid", flag: "🇪🇸", countryKo: "스페인", countryCode: "es" },
  { id: "seville", nameKo: "세비야", nameEn: "Seville", timezone: "Europe/Madrid", flag: "🇪🇸", countryKo: "스페인", countryCode: "es" },
  { id: "athens", nameKo: "아테네", nameEn: "Athens", timezone: "Europe/Athens", flag: "🇬🇷", countryKo: "그리스", countryCode: "gr" },
  { id: "amsterdam", nameKo: "암스테르담", nameEn: "Amsterdam", timezone: "Europe/Amsterdam", flag: "🇳🇱", countryKo: "네덜란드", countryCode: "nl" },
  { id: "brussels", nameKo: "브뤼셀", nameEn: "Brussels", timezone: "Europe/Brussels", flag: "🇧🇪", countryKo: "벨기에", countryCode: "be" },
  { id: "vienna", nameKo: "빈", nameEn: "Vienna", timezone: "Europe/Vienna", flag: "🇦🇹", countryKo: "오스트리아", countryCode: "at" },
  { id: "zurich", nameKo: "취리히", nameEn: "Zurich", timezone: "Europe/Zurich", flag: "🇨🇭", countryKo: "스위스", countryCode: "ch" },
  { id: "geneva", nameKo: "제네바", nameEn: "Geneva", timezone: "Europe/Zurich", flag: "🇨🇭", countryKo: "스위스", countryCode: "ch" },
  { id: "lausanne", nameKo: "로잔", nameEn: "Lausanne", timezone: "Europe/Zurich", flag: "🇨🇭", countryKo: "스위스", countryCode: "ch" },
  { id: "stockholm", nameKo: "스톡홀름", nameEn: "Stockholm", timezone: "Europe/Stockholm", flag: "🇸🇪", countryKo: "스웨덴", countryCode: "se" },
  { id: "oslo", nameKo: "오슬로", nameEn: "Oslo", timezone: "Europe/Oslo", flag: "🇳🇴", countryKo: "노르웨이", countryCode: "no" },
  { id: "copenhagen", nameKo: "코펜하겐", nameEn: "Copenhagen", timezone: "Europe/Copenhagen", flag: "🇩🇰", countryKo: "덴마크", countryCode: "dk" },
  { id: "helsinki", nameKo: "헬싱키", nameEn: "Helsinki", timezone: "Europe/Helsinki", flag: "🇫🇮", countryKo: "핀란드", countryCode: "fi" },
  { id: "rekyavik", nameKo: "레이캬비크", nameEn: "Reykjavik", timezone: "Atlantic/Reykjavik", flag: "🇮🇸", countryKo: "아이슬란드", countryCode: "is" },
  { id: "dublin", nameKo: "더블린", nameEn: "Dublin", timezone: "Europe/Dublin", flag: "🇮🇪", countryKo: "아일랜드", countryCode: "ie" },
  { id: "lisbon", nameKo: "리스본", nameEn: "Lisbon", timezone: "Europe/Lisbon", flag: "🇵🇹", countryKo: "포르투갈", countryCode: "pt" },
  { id: "porto", nameKo: "포르투", nameEn: "Porto", timezone: "Europe/Lisbon", flag: "🇵🇹", countryKo: "포르투갈", countryCode: "pt" },
  { id: "warsaw", nameKo: "바르샤바", nameEn: "Warsaw", timezone: "Europe/Warsaw", flag: "🇵🇱", countryKo: "폴란드", countryCode: "pl" },
  { id: "krakow", nameKo: "크라쿠프", nameEn: "Krakow", timezone: "Europe/Warsaw", flag: "🇵🇱", countryKo: "폴란드", countryCode: "pl" },
  { id: "prague", nameKo: "프라하", nameEn: "Prague", timezone: "Europe/Prague", flag: "🇨🇿", countryKo: "체코", countryCode: "cz" },
  { id: "budapest", nameKo: "부다페스트", nameEn: "Budapest", timezone: "Europe/Budapest", flag: "🇭🇺", countryKo: "헝가리", countryCode: "hu" },
  { id: "istanbul", nameKo: "이스탄불", nameEn: "Istanbul", timezone: "Europe/Istanbul", flag: "🇹🇷", countryKo: "터키", countryCode: "tr" },
  { id: "moscow", nameKo: "모스크바", nameEn: "Moscow", timezone: "Europe/Moscow", flag: "🇷🇺", countryKo: "러시아", countryCode: "ru" },
  { id: "stpetersburg", nameKo: "상트페테르부르크", nameEn: "St. Petersburg", timezone: "Europe/Moscow", flag: "🇷🇺", countryKo: "러시아", countryCode: "ru" },
  { id: "vladivostok", nameKo: "블라디보스토크", nameEn: "Vladivostok", timezone: "Asia/Vladivostok", flag: "🇷🇺", countryKo: "러시아", countryCode: "ru" },

  // 7. 북아메리카 (North America)
  { id: "newyork", nameKo: "뉴욕", nameEn: "New York", timezone: "America/New_York", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "losangeles", nameKo: "로스앤젤레스", nameEn: "Los Angeles", timezone: "America/Los_Angeles", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "chicago", nameKo: "시카고", nameEn: "Chicago", timezone: "America/Chicago", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "sanfrancisco", nameKo: "샌프란시스코", nameEn: "San Francisco", timezone: "America/Los_Angeles", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "seattle", nameKo: "시애틀", nameEn: "Seattle", timezone: "America/Los_Angeles", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "washingtondc", nameKo: "워싱턴 D.C.", nameEn: "Washington D.C.", timezone: "America/New_York", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "boston", nameKo: "보스턴", nameEn: "Boston", timezone: "America/New_York", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "miami", nameKo: "마이애미", nameEn: "Miami", timezone: "America/New_York", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "lasvegas", nameKo: "라스베이거스", nameEn: "Las Vegas", timezone: "America/Los_Angeles", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "atlanta", nameKo: "애틀랜타", nameEn: "Atlanta", timezone: "America/New_York", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "dallas", nameKo: "댈러스", nameEn: "Dallas", timezone: "America/Chicago", flag: "🇺🇸", countryKo: "미국", countryCode: "us" },
  { id: "honolulu", nameKo: "호놀룰루", nameEn: "Honolulu", timezone: "Pacific/Honolulu", flag: "🇺🇸", countryKo: "하와이(미국)", countryCode: "us" },
  { id: "anchorage", nameKo: "앵커리지", nameEn: "Anchorage", timezone: "America/Anchorage", flag: "🇺🇸", countryKo: "알래스카(미국)", countryCode: "us" },
  { id: "vancouver", nameKo: "밴쿠버", nameEn: "Vancouver", timezone: "America/Vancouver", flag: "🇨🇦", countryKo: "캐나다", countryCode: "ca" },
  { id: "toronto", nameKo: "토론토", nameEn: "Toronto", timezone: "America/Toronto", flag: "🇨🇦", countryKo: "캐나다", countryCode: "ca" },
  { id: "montreal", nameKo: "몬트리올", nameEn: "Montreal", timezone: "America/Toronto", flag: "🇨🇦", countryKo: "캐나다", countryCode: "ca" },
  { id: "ottawa", nameKo: "오타와", nameEn: "Ottawa", timezone: "America/Toronto", flag: "🇨🇦", countryKo: "캐나다", countryCode: "ca" },
  { id: "calgary", nameKo: "캘거리", nameEn: "Calgary", timezone: "America/Edmonton", flag: "🇨🇦", countryKo: "캐나다", countryCode: "ca" },
  { id: "mexicocity", nameKo: "멕시코시티", nameEn: "Mexico City", timezone: "America/Mexico_City", flag: "🇲🇽", countryKo: "멕시코", countryCode: "mx" },
  { id: "cancun", nameKo: "칸쿤", nameEn: "Cancun", timezone: "America/Cancun", flag: "🇲🇽", countryKo: "멕시코", countryCode: "mx" },

  // 8. 남아메리카 (South America)
  { id: "saopaulo", nameKo: "상파울루", nameEn: "Sao Paulo", timezone: "America/Sao_Paulo", flag: "🇧🇷", countryKo: "브라질", countryCode: "br" },
  { id: "riodejaneiro", nameKo: "리오데자네이루", nameEn: "Rio de Janeiro", timezone: "America/Sao_Paulo", flag: "🇧🇷", countryKo: "브라질", countryCode: "br" },
  { id: "brasilia", nameKo: "브라질리아", nameEn: "Brasilia", timezone: "America/Sao_Paulo", flag: "🇧🇷", countryKo: "브라질", countryCode: "br" },
  { id: "buenosaires", nameKo: "부엔오스아이레스", nameEn: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", flag: "🇦🇷", countryKo: "아르헨티나", countryCode: "ar" },
  { id: "santiago", nameKo: "산티아고", nameEn: "Santiago", timezone: "America/Santiago", flag: "🇨🇱", countryKo: "칠레", countryCode: "cl" },
  { id: "bogota", nameKo: "보고타", nameEn: "Bogota", timezone: "America/Bogota", flag: "🇨🇴", countryKo: "콜롬비아", countryCode: "co" },
  { id: "medellin", nameKo: "메델린", nameEn: "Medellin", timezone: "America/Bogota", flag: "🇨🇴", countryKo: "콜롬비아", countryCode: "co" },
  { id: "lima", nameKo: "리마", nameEn: "Lima", timezone: "America/Lima", flag: "🇵🇪", countryKo: "페루", countryCode: "pe" },

  // 9. 오세아니아 (Oceania)
  { id: "sydney", nameKo: "시드니", nameEn: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺", countryKo: "호주", countryCode: "au" },
  { id: "melbourne", nameKo: "멜버른", nameEn: "Melbourne", timezone: "Australia/Melbourne", flag: "🇦🇺", countryKo: "호주", countryCode: "au" },
  { id: "brisbane", nameKo: "브리즈번", nameEn: "Brisbane", timezone: "Australia/Brisbane", flag: "🇦🇺", countryKo: "호주", countryCode: "au" },
  { id: "perth", nameKo: "퍼스", nameEn: "Perth", timezone: "Australia/Perth", flag: "🇦🇺", countryKo: "호주", countryCode: "au" },
  { id: "canberra", nameKo: "캔버라", nameEn: "Canberra", timezone: "Australia/Sydney", flag: "🇦🇺", countryKo: "호주", countryCode: "au" },
  { id: "adelaide", nameKo: "애들레이드", nameEn: "Adelaide", timezone: "Australia/Adelaide", flag: "🇦🇺", countryKo: "호주", countryCode: "au" },
  { id: "auckland", nameKo: "오클랜드", nameEn: "Auckland", timezone: "Pacific/Auckland", flag: "🇳🇿", countryKo: "뉴질랜드", countryCode: "nz" },
  { id: "wellington", nameKo: "웰링턴", nameEn: "Wellington", timezone: "Pacific/Auckland", flag: "🇳🇿", countryKo: "뉴질랜드", countryCode: "nz" },
  { id: "fiji", nameKo: "피지", nameEn: "Fiji", timezone: "Pacific/Fiji", flag: "🇫🇯", countryKo: "피지", countryCode: "fj" },
  { id: "saipan", nameKo: "사이판", nameEn: "Saipan", timezone: "Pacific/Saipan", flag: "🇲🇵", countryKo: "북마리아나 제도", countryCode: "mp" },
  { id: "guam", nameKo: "괌", nameEn: "Guam", timezone: "Pacific/Guam", flag: "🇬🇺", countryKo: "괌", countryCode: "gu" },

  // 10. 아프리카 (Africa)
  { id: "cairo", nameKo: "카이로", nameEn: "Cairo", timezone: "Africa/Cairo", flag: "🇪🇬", countryKo: "이집트", countryCode: "eg" },
  { id: "johannesburg", nameKo: "요하네스버그", nameEn: "Johannesburg", timezone: "Africa/Johannesburg", flag: "🇿🇦", countryKo: "남아프리카공화국", countryCode: "za" },
  { id: "capetown", nameKo: "케이프타운", nameEn: "Cape Town", timezone: "Africa/Johannesburg", flag: "🇿🇦", countryKo: "남아프리카공화국", countryCode: "za" },
  { id: "nairobi", nameKo: "나이로비", nameEn: "Nairobi", timezone: "Africa/Nairobi", flag: "🇰🇪", countryKo: "케냐", countryCode: "ke" },
  { id: "lagos", nameKo: "라고스", nameEn: "Lagos", timezone: "Africa/Lagos", flag: "🇳🇬", countryKo: "나이지리아", countryCode: "ng" },
  { id: "casablanca", nameKo: "카사블랑카", nameEn: "Casablanca", timezone: "Africa/Casablanca", flag: "🇲🇦", countryKo: "모로코", countryCode: "ma" }
];

const DEFAULT_CITY_IDS = ["seoul", "newyork", "london", "tokyo", "paris", "sydney"];

// 2. Application Core State Variables
let activeCities = [];
let cityNotes = {};
let selectedCity = null;
let isFrameMode = true;

// 3. UI Element References
const toggleFrameBtn = document.getElementById("toggle_frame_btn");
const phoneMockup = document.getElementById("phone_mockup");
const resetBtn = document.getElementById("reset_btn");
const closeBtn = document.getElementById("close_btn");
const searchForm = document.getElementById("search_form");
const searchInput = document.getElementById("search_input");
const suggestionsDropdown = document.getElementById("suggestions_dropdown");
const suggestionsBackdrop = document.getElementById("suggestions_backdrop");
const suggestionsList = document.getElementById("suggestions_list");
const clockGrid = document.getElementById("clock_grid");

// Modal elements
const modalBackdrop = document.getElementById("modal_backdrop");
const detailModal = document.getElementById("detail_modal");
const modalCloseHandle = document.getElementById("modal_close_handle");
const modalCloseBtn = document.getElementById("modal_close_btn");
const modalFlag = document.getElementById("modal_flag");
const modalCountryEn = document.getElementById("modal_country_en");
const modalTitle = document.getElementById("modal_title");
const modalDate = document.getElementById("modal_date");
const modalUtcOffset = document.getElementById("modal_utc_offset");
const modalTime = document.getElementById("modal_time");
const modalStatusBadge = document.getElementById("modal_status_badge");
const modalTimelineBar = document.getElementById("modal_timeline_bar");
const modalMeetingBadge = document.getElementById("modal_meeting_badge");
const modalMeetingDesc = document.getElementById("modal_meeting_desc");
const modalTimeDiffBadge = document.getElementById("modal_time_diff_badge");
const modalSeoulTime = document.getElementById("modal_seoul_time");
const modalTargetLabel = document.getElementById("modal_target_label");
const modalTargetTime = document.getElementById("modal_target_time");
const modalNotepad = document.getElementById("modal_notepad");
const modalNotepadSaveBtn = document.getElementById("modal_notepad_save_btn");

// Add City Modal elements
const addCityModalBackdrop = document.getElementById("add_city_modal_backdrop");
const addCityModal = document.getElementById("add_city_modal");
const addCityModalCloseBtn = document.getElementById("add_city_modal_close_btn");
const addCityModalSearch = document.getElementById("add_city_modal_search");
const addCityModalList = document.getElementById("add_city_modal_list");
const addCityModalSuggestions = document.getElementById("add_city_modal_suggestions");
const addCityModalSuggestionsList = document.getElementById("add_city_modal_suggestions_list");

// Toast elements
const toastReset = document.getElementById("toast_reset");
const shutdownOverlay = document.getElementById("shutdown_overlay");
const restartAppBtn = document.getElementById("restart_app_btn");

// 4. Initialize States from LocalStorage
function initApp() {
  // Load Clocks
  const savedClocks = localStorage.getItem("world_time_active_cities");
  if (savedClocks) {
    try {
      activeCities = JSON.parse(savedClocks);
    } catch (e) {
      activeCities = WORLD_CITIES.filter(c => DEFAULT_CITY_IDS.includes(c.id));
    }
  } else {
    activeCities = WORLD_CITIES.filter(c => DEFAULT_CITY_IDS.includes(c.id));
  }

  // Load Notes
  const savedNotes = localStorage.getItem("world_time_city_notes");
  if (savedNotes) {
    try {
      cityNotes = JSON.parse(savedNotes);
    } catch (e) {
      cityNotes = {};
    }
  }

  // Render & Attach Initial Tick
  renderGrid();
  updateClocks();
  setInterval(updateClocks, 1000);

  // Setup Event Listeners
  setupEventListeners();
}

// 5. Time Formatting Helper Functions
function getRawUtcOffset(timezone, baseTime) {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "longOffset",
    });
    const parts = formatter.formatToParts(baseTime);
    const offsetPart = parts.find(p => p.type === "timeZoneName");
    if (offsetPart) {
      const val = offsetPart.value; // e.g. "GMT+09:00"
      if (val === "GMT") return "UTC+0";
      let offset = val.replace("GMT", "UTC");
      offset = offset.replace(":00", "");
      offset = offset.replace(/([+-])0/, "$1");
      return offset;
    }
  } catch (e) {
    // Fallback
  }
  return "UTC+0";
}

function getCityClockData(city, baseTime) {
  try {
    const formatterTime = new Intl.DateTimeFormat("en-US", {
      timeZone: city.timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const formatterDate = new Intl.DateTimeFormat("ko-KR", {
      timeZone: city.timezone,
      month: "long",
      day: "numeric",
      weekday: "short",
    });

    const timeString = formatterTime.format(baseTime);
    const dateString = formatterDate.format(baseTime);

    const parts = formatterTime.formatToParts(baseTime);
    const hourVal = parseInt(parts.find(p => p.type === "hour")?.value || "12", 10);
    
    const isNight = hourVal >= 18 || hourVal < 6;
    const utcOffset = getRawUtcOffset(city.timezone, baseTime);

    return {
      city,
      timeString,
      dateString,
      isNight,
      utcOffset
    };
  } catch (err) {
    return {
      city,
      timeString: "00:00:00",
      dateString: "1월 1일 (월)",
      isNight: false,
      utcOffset: "UTC+0"
    };
  }
}

function getMeetingStatus(timeString) {
  const hour = parseInt(timeString.split(":")[0], 10);
  if (hour >= 9 && hour < 18) {
    return {
      label: "연락 가능 (Working Hours)",
      colorClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      desc: "업무 및 보이스톡 하기에 가장 알맞은 시간대입니다!"
    };
  } else if (hour >= 18 && hour < 22) {
    return {
      label: "늦은 저녁 (After Hours)",
      colorClass: "text-amber-700 bg-amber-50 border-amber-200",
      desc: "이미 업무 시간은 끝났으나 개인 연락은 대안이 가능합니다."
    };
  } else if (hour >= 22 || hour < 6) {
    return {
      label: "잠자는 시간 (Sleep / Night)",
      colorClass: "text-rose-700 bg-rose-50 border-rose-200",
      desc: "상대방이 수면 중일 확률이 매우 높은 야간 시간입니다. 긴급 상황이 아니면 메신저 조정을 추천드려요."
    };
  } else {
    return {
      label: "이른 아침 (Early Morning)",
      colorClass: "text-sky-700 bg-sky-50 border-sky-200",
      desc: "하루를 시작하는 조기 시간대입니다."
    };
  }
}

// 6. Rendering Actions
function renderGrid() {
  if (!clockGrid) return;
  
  clockGrid.innerHTML = "";
  const baseTime = new Date();

  // Loop of active clocks
  activeCities.forEach((city) => {
    const data = getCityClockData(city, baseTime);
    const card = document.createElement("div");
    card.className = `relative cursor-pointer rounded-[28px] p-6 border border-blue-50/80 bg-white text-[#1F2E45] shadow-[0_4px_24px_rgba(0,108,255,0.03)] transition-all duration-300 flex flex-col justify-between h-full min-h-0 overflow-hidden select-none transform hover:-translate-y-1 hover:scale-101 active:scale-99`;
    card.setAttribute("data-city-id", city.id);

    // Card Content with proper tags, font sizes (Double font sizes)
    card.innerHTML = `
      <!-- Top-left Status Indicator -->
      <div class="flex items-center justify-between w-full flex-none mb-1">
        <div class="text-[22px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 border select-none ${
          data.isNight
            ? "bg-indigo-50/80 text-indigo-600 border-indigo-100/50"
            : "bg-amber-50/80 text-amber-700 border-amber-100/50"
        }">
          ${data.isNight 
            ? `<svg class="w-7 h-7 fill-indigo-400 stroke-none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span>밤</span>`
            : `<svg class="w-7 h-7 text-amber-500 fill-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span>낮</span>`
          }
        </div>
      </div>

      <!-- Flag and City (Double sized) -->
      <div class="flex-1 flex flex-col justify-start mt-2 relative z-10 select-none">
        <div class="flex items-center gap-3 mb-2">
          <h3 class="text-[39px] md:text-[42px] font-black tracking-tight leading-none text-[#1F2E45] flex items-center gap-3">
            <img src="https://flagcdn.com/w80/${city.countryCode}.png" alt="" class="w-[54px] h-[36px] object-cover rounded-md shadow-xs select-none inline-block filter drop-shadow-xs" referrerPolicy="no-referrer" />
            <span>${city.nameKo}</span>
          </h3>
        </div>
        
        <!-- Live Clock -->
        <div class="time-string text-[68px] md:text-[74px] font-semibold font-mono tracking-tight leading-none my-2 transition-all text-[#157FC1]">
          ${data.timeString}
        </div>
      </div>

      <!-- Date and timezone offsets -->
      <div class="flex flex-col gap-1 pt-2 flex-none text-[20px] relative z-10">
        <span class="font-semibold date-string text-slate-500">
          ${data.dateString}
        </span>
        <span class="font-bold tracking-wider text-slate-400">
          ${data.utcOffset}
        </span>
      </div>

      <!-- Delete Button (Top-Right of card, visible cleanly) -->
      <button
        class="delete-btn absolute top-4 right-4 p-2 rounded-full transition duration-150 z-20 pointer-events-auto cursor-pointer bg-slate-100/40 hover:bg-slate-200/65 text-slate-300 hover:text-slate-500"
        title="도시 제거"
        data-city-id="${city.id}"
      >
        <svg class="w-7 h-7 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    // Click handler for card details (excluding deletion click)
    card.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".delete-btn")) return;
      openDetailModal(city);
    });

    // Delete event listener
    const delBtn = card.querySelector(".delete-btn");
    delBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      removeCity(city.id);
    });

    clockGrid.appendChild(card);
  });

  // Render dashed placeholders for remaining vacant slots (up to 6)
  const vacantSlots = Math.max(0, 6 - activeCities.length);
  for (let i = 0; i < vacantSlots; i++) {
    const slot = document.createElement("div");
    slot.className = "border border-dashed border-slate-300/80 rounded-[28px] p-5 flex flex-col items-center justify-center text-center h-full min-h-0 cursor-pointer hover:border-[#006CFF] hover:bg-white/40 transition duration-200 select-none";
    slot.innerHTML = `
      <div class="p-3 bg-white text-slate-400 hover:text-[#006CFF] rounded-full shadow-xs transition duration-200 mb-2">
        <svg class="w-8 h-8 font-bold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <span class="text-[20px] text-slate-400 font-bold">도시 추가</span>
    `;
    slot.addEventListener("click", () => {
      openAddCityModal();
    });
    clockGrid.appendChild(slot);
  }
}

// 7. Tick Update Function (Performant timer updates text without complete redraw)
function updateClocks() {
  const baseTime = new Date();
  
  // 1. Update grid cards
  activeCities.forEach((city) => {
    const card = document.querySelector(`[data-city-id="${city.id}"]`);
    if (card) {
      const data = getCityClockData(city, baseTime);
      const timeStrEl = card.querySelector(".time-string");
      const dateStrEl = card.querySelector(".date-string");
      
      if (timeStrEl) timeStrEl.textContent = data.timeString;
      if (dateStrEl) dateStrEl.textContent = data.dateString;
    }
  });

  // 2. Update detail modal (if active & matches selected)
  if (selectedCity) {
    const data = getCityClockData(selectedCity, baseTime);
    if (modalTime) modalTime.textContent = data.timeString;
    if (modalDate) modalDate.textContent = data.dateString;
    if (modalSeoulTime) modalSeoulTime.textContent = getCityClockData(WORLD_CITIES[0], baseTime).timeString;
    if (modalTargetTime) modalTargetTime.textContent = data.timeString;
  }
}

// 8. Autocomplete Suggestions Engine
function showSuggestions() {
  if (!suggestionsDropdown || !suggestionsBackdrop || !searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  
  // Show suggestions of non-added cities. If query is empty, show default/all matches to let users tap and select without full typing.
  const filtered = WORLD_CITIES.filter((city) => {
    if (query === "") {
      return !activeCities.some(active => active.id === city.id);
    }
    const koMatch = city.nameKo.toLowerCase().includes(query);
    const enMatch = city.nameEn.toLowerCase().includes(query);
    const countryMatch = city.countryKo.toLowerCase().includes(query);
    return koMatch || enMatch || countryMatch;
  }).filter((city) => !activeCities.some(active => active.id === city.id))
    .slice(0, 6); // Display up to 6 results for robust kiosk usability

  if (filtered.length === 0) {
    hideSuggestions();
    return;
  }

  if (suggestionsList) {
    suggestionsList.innerHTML = "";
    filtered.forEach((city) => {
      const li = document.createElement("li");
      li.className = "w-full";
      li.innerHTML = `
        <button
          type="button"
          class="w-full text-left px-5 py-4 hover:bg-blue-50/50 flex items-center justify-between transition-colors duration-150 cursor-pointer group"
        >
          <div class="flex items-center gap-4">
            <img src="https://flagcdn.com/w80/${city.countryCode}.png" alt="" class="w-12 h-8 object-cover rounded-md shadow-xs select-none" referrerPolicy="no-referrer" />
            <div>
              <div class="text-[25px] font-bold text-slate-800 leading-none">
                ${city.nameKo} <span class="text-slate-400 font-normal text-[19px] ml-1">(${city.flag})</span>
              </div>
              <div class="text-[18px] text-slate-400 font-semibold mt-1.5">${city.nameEn} · ${city.countryKo}</div>
            </div>
          </div>
          <div class="text-[18px] text-[#006CFF] bg-[#006CFF]/8 px-4 py-1.5 rounded-xl font-bold flex items-center gap-1 transition group-hover:bg-[#006CFF] group-hover:text-white">
            <span>추가</span> <svg class="w-4 h-4 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </button>
      `;

      // Attach click to suggestions list item to add city
      li.querySelector("button")?.addEventListener("click", () => {
        addCity(city);
        hideSuggestions();
      });

      suggestionsList.appendChild(li);
    });
  }

  suggestionsDropdown.classList.remove("hidden");
  suggestionsBackdrop.classList.remove("hidden");
}

function hideSuggestions() {
  if (suggestionsDropdown) suggestionsDropdown.classList.add("hidden");
  if (suggestionsBackdrop) suggestionsBackdrop.classList.add("hidden");
}

// 9. Core Actions
function addCity(city) {
  if (activeCities.some(c => c.id === city.id)) return;

  if (activeCities.length >= 6) {
    // Replace 6th element
    activeCities[5] = city;
  } else {
    activeCities.push(city);
  }

  localStorage.setItem("world_time_active_cities", JSON.stringify(activeCities));
  if (searchInput) searchInput.value = "";
  renderGrid();
  updateClocks();
}

// Remove City Action
function removeCity(cityId) {
  activeCities = activeCities.filter(c => c.id !== cityId);
  localStorage.setItem("world_time_active_cities", JSON.stringify(activeCities));
  renderGrid();
}

// Reset Default Cities Action
function resetToDefault() {
  activeCities = WORLD_CITIES.filter(c => DEFAULT_CITY_IDS.includes(c.id));
  localStorage.setItem("world_time_active_cities", JSON.stringify(activeCities));
  renderGrid();
  updateClocks();
  showToast(toastReset);
}

// Visual Toast System helper
function showToast(toastEl) {
  if (!toastEl) return;
  
  toastEl.classList.remove("hidden");
  setTimeout(() => {
    toastEl.classList.remove("opacity-0", "translate-y-10");
    toastEl.classList.add("opacity-100", "translate-y-0");
  }, 10);

  // Auto vanish after 2.5 seconds
  setTimeout(() => {
    toastEl.classList.remove("opacity-100", "translate-y-0");
    toastEl.classList.add("opacity-0", "translate-y-10");
    setTimeout(() => {
      toastEl.classList.add("hidden");
    }, 300);
  }, 2500);
}

function getCityXY(city) {
  const code = city.countryCode ? city.countryCode.toLowerCase() : "";
  const id = city.id ? city.id.toLowerCase() : "";
  
  if (code === "kr") return { x: 81.5, y: 35.5 }; // South Korea
  if (code === "jp") return { x: 84.5, y: 36.5 }; // Japan
  if (code === "cn" || code === "hk" || code === "mo" || code === "tw") {
    if (id === "taipei") return { x: 81.0, y: 40.5 };
    if (id === "hongkong" || id === "macau") return { x: 78.5, y: 41.5 };
    if (id === "beijing") return { x: 78.0, y: 34.5 };
    return { x: 77.0, y: 38.0 }; // China
  }
  if (code === "mn") return { x: 75.0, y: 30.0 }; // Oceania/Mongolia
  
  // Southeast Asia
  if (code === "sg") return { x: 76.0, y: 56.0 };
  if (code === "th") {
    if (id === "chiangmai") return { x: 74.5, y: 49.0 };
    return { x: 75.0, y: 51.5 };
  }
  if (code === "vn") return { x: 76.5, y: 50.0 };
  if (code === "ph") return { x: 80.5, y: 51.0 };
  if (code === "id") {
    if (id === "bali") return { x: 79.5, y: 60.5 };
    return { x: 76.0, y: 59.5 };
  }
  if (code === "my") return { x: 77.0, y: 55.0 };
  if (code === "kh") return { x: 75.5, y: 51.5 };
  if (code === "la") return { x: 75.5, y: 49.0 };
  if (code === "mm") return { x: 73.0, y: 49.0 };

  // South Asia & Middle East
  if (code === "in") return { x: 68.0, y: 46.5 };
  if (code === "bd") return { x: 71.0, y: 45.5 };
  if (code === "lk") return { x: 68.0, y: 52.0 };
  if (code === "np") return { x: 69.5, y: 44.5 };
  if (code === "pk") return { x: 65.5, y: 43.5 };
  if (code === "ae") return { x: 60.0, y: 44.5 };
  if (code === "sa") return { x: 57.0, y: 46.0 };
  if (code === "qa") return { x: 59.5, y: 45.0 };
  if (code === "il") return { x: 55.5, y: 42.0 };
  if (code === "kw") return { x: 58.0, y: 43.0 };

  // Europe
  if (code === "gb") return { x: 47.0, y: 25.0 };
  if (code === "fr") return { x: 48.5, y: 28.5 };
  if (code === "de") return { x: 50.5, y: 27.0 };
  if (code === "it") return { x: 51.0, y: 31.0 };
  if (code === "es") return { x: 46.0, y: 31.5 };
  if (code === "gr") return { x: 53.5, y: 32.5 };
  if (code === "nl") return { x: 49.5, y: 27.0 };
  if (code === "be") return { x: 49.0, y: 27.5 };
  if (code === "at") return { x: 51.5, y: 28.5 };
  if (code === "ch") return { x: 49.5, y: 28.5 };
  if (code === "se") return { x: 52.5, y: 21.0 };
  if (code === "no") return { x: 50.5, y: 21.0 };
  if (code === "dk") return { x: 51.0, y: 24.5 };
  if (code === "fi") return { x: 54.5, y: 20.5 };
  if (code === "is") return { x: 42.5, y: 19.5 };
  if (code === "ie") return { x: 45.0, y: 25.5 };
  if (code === "pt") return { x: 44.5, y: 31.5 };
  if (code === "pl") return { x: 52.5, y: 26.5 };
  if (code === "cz") return { x: 51.5, y: 27.5 };
  if (code === "hu") return { x: 52.5, y: 28.5 };
  if (code === "tr") return { x: 56.5, y: 32.5 };
  if (code === "ru") {
    if (id === "vladivostok") return { x: 81.5, y: 32.0 };
    return { x: 56.5, y: 24.0 };
  }

  // North America
  if (code === "us") {
    if (id === "honolulu") return { x: 10.0, y: 46.5 };
    if (id === "anchorage") return { x: 13.0, y: 20.0 };
    if (id === "losangeles" || id === "sanfrancisco" || id === "seattle" || id === "lasvegas") return { x: 20.0, y: 34.0 };
    if (id === "chicago" || id === "dallas") return { x: 25.0, y: 35.0 };
    return { x: 29.0, y: 34.0 };
  }
  if (code === "ca") {
    if (id === "vancouver") return { x: 20.0, y: 30.5 };
    if (id === "calgary") return { x: 22.5, y: 29.5 };
    return { x: 28.5, y: 31.0 };
  }
  if (code === "mx") return { x: 23.0, y: 42.0 };

  // South America
  if (code === "br") return { x: 37.0, y: 64.0 };
  if (code === "ar") return { x: 33.5, y: 73.0 };
  if (code === "cl") return { x: 31.5, y: 73.0 };
  if (code === "co") return { x: 31.0, y: 51.0 };
  if (code === "pe") return { x: 30.5, y: 56.0 };

  // Oceania
  if (code === "au") {
    if (id === "perth") return { x: 81.0, y: 73.0 };
    if (id === "adelaide") return { x: 85.0, y: 76.0 };
    return { x: 87.5, y: 75.0 };
  }
  if (code === "nz") return { x: 92.5, y: 81.0 };
  if (code === "fj") return { x: 94.0, y: 66.0 };
  if (code === "gu" || code === "mp") return { x: 85.5, y: 52.0 };

  // Africa
  if (code === "eg") return { x: 55.0, y: 45.0 };
  if (code === "za") return { x: 53.0, y: 70.0 };
  if (code === "ke") return { x: 56.0, y: 53.0 };
  if (code === "ng") return { x: 49.0, y: 53.0 };
  if (code === "ma") return { x: 46.0, y: 43.0 };

  return { x: 50, y: 50 };
}

// --- Leaflet Free High-Quality Map Integration ---
const CITY_COORDINATES = {
  seoul: [37.5665, 126.9780],
  busan: [35.1796, 129.0756],
  jeju: [33.4996, 126.5312],
  incheon: [37.4563, 126.7052],
  daegu: [35.8714, 128.6014],
  daejeon: [36.3504, 127.3845],
  gwangju: [35.1595, 126.8526],
  ulsan: [35.5389, 129.3114],
  suwon: [37.2636, 127.0286],
  tokyo: [35.6762, 139.6503],
  osaka: [34.6937, 135.5023],
  kyoto: [35.0116, 135.7681],
  sapporo: [43.0618, 141.3545],
  fukuoka: [33.5902, 130.4017],
  nagoya: [35.1815, 136.9066],
  okinawa: [26.2124, 127.6809],
  yokohama: [35.4437, 139.6380],
  beijing: [39.9042, 116.4074],
  shanghai: [31.2304, 121.4737],
  guangzhou: [23.1291, 113.2644],
  shenzhen: [22.5431, 114.0579],
  chengdu: [30.5728, 104.0668],
  hongkong: [22.3193, 114.1694],
  macau: [22.1987, 113.5439],
  taipei: [25.0330, 121.5654],
  ulaanbaatar: [47.8864, 106.9057],
  singapore: [1.3521, 103.8198],
  bangkok: [13.7563, 100.5018],
  chiangmai: [18.7883, 98.9853],
  phuket: [7.8804, 98.3923],
  hochiminh: [10.8231, 106.6297],
  hanoi: [21.0285, 105.8542],
  danang: [16.0544, 108.2022],
  nautrang: [12.2388, 109.1967],
  manila: [14.5995, 120.9842],
  cebu: [10.3157, 123.8854],
  jakarta: [-6.2088, 106.8456],
  bali: [-8.4095, 115.1889],
  kualalumpur: [3.1390, 101.6869],
  kotakinabalu: [5.9804, 116.0735],
  phnompenh: [11.5564, 104.9282],
  vientiane: [17.9757, 102.6331],
  yangon: [16.8661, 96.1951],
  mumbai: [19.0760, 72.8777],
  newdelhi: [28.6139, 77.2090],
  bangalore: [12.9716, 77.5946],
  kolkata: [22.5726, 88.3639],
  dhaka: [23.8103, 90.4125],
  colombo: [6.9271, 79.8612],
  kathmandu: [27.7172, 85.324],
  karachi: [24.8607, 67.0011],
  dubai: [25.2048, 55.2708],
  abudhabi: [24.4539, 54.3773],
  riyadh: [24.7136, 46.6753],
  mecca: [21.3891, 39.8579],
  jeddah: [21.5433, 39.1728],
  doha: [25.2854, 51.5310],
  telaviv: [32.0853, 34.7818],
  kuwait: [29.3759, 47.9774],
  london: [51.5074, -0.1278],
  edinburgh: [55.9533, -3.1883],
  manchester: [53.4808, -2.2426],
  paris: [48.8566, 2.3522],
  marseille: [43.2965, 5.3698],
  nice: [43.7102, 7.2620],
  berlin: [52.5200, 13.4050],
  munich: [48.1351, 11.5820],
  frankfurt: [50.1109, 8.6821],
  hamburg: [53.5511, 9.9937],
  rome: [41.9028, 12.4964],
  milan: [45.4642, 9.1900],
  venice: [45.4408, 12.3155],
  florence: [43.7696, 11.2558],
  naples: [40.8518, 14.2681],
  madrid: [40.4168, -3.7038],
  barcelona: [41.3851, 2.1734],
  seville: [37.3891, -5.9845],
  athens: [37.9838, 23.7275],
  amsterdam: [52.3676, 4.9041],
  brussels: [50.8503, 4.3517],
  vienna: [48.2082, 16.3738],
  zurich: [47.3769, 8.5417],
  geneva: [46.2044, 6.1432],
  lausanne: [46.5197, 6.6336],
  stockholm: [59.3293, 18.0686],
  oslo: [59.9139, 10.7522],
  copenhagen: [55.6761, 12.5683],
  helsinki: [60.1699, 24.9384],
  rekyavik: [64.1466, -21.9426],
  dublin: [53.3498, -6.2603],
  lisbon: [38.7223, -9.1393],
  porto: [41.1579, -8.6291],
  warsaw: [52.2297, 21.0122],
  krakow: [50.0647, 19.9450],
  prague: [50.0755, 14.4378],
  budapest: [47.4979, 19.0402],
  istanbul: [41.0082, 28.9784],
  moscow: [55.7558, 37.6173],
  stpetersburg: [59.9343, 30.3351],
  vladivostok: [43.1198, 131.8869],
  newyork: [40.7128, -74.0060],
  losangeles: [34.0522, -118.2437],
  chicago: [41.8781, -87.6298],
  sanfrancisco: [37.7749, -122.4194],
  seattle: [47.6062, -122.3321],
  washingtondc: [38.9072, -77.0369],
  boston: [42.3601, -71.0589],
  miami: [25.7617, -80.1918],
  lasvegas: [36.1716, -115.1391],
  atlanta: [33.7490, -84.3880],
  dallas: [32.7767, -96.7970],
  honolulu: [21.3069, -157.8583],
  anchorage: [61.2181, -149.9003],
  vancouver: [49.2827, -123.1207],
  toronto: [43.6532, -79.3832],
  montreal: [45.5017, -73.5673],
  ottawa: [45.4215, -75.6972],
  calgary: [51.0447, -114.0719],
  mexicocity: [19.4326, -99.1332],
  cancun: [21.1619, -86.8515],
  saopaulo: [-23.5505, -46.6333],
  riodejaneiro: [-22.9068, -43.1729],
  brasilia: [-15.7975, -47.8919],
  buenosaires: [-34.6037, -58.3816],
  santiago: [-33.4489, -70.6693],
  bogota: [4.7110, -74.0721],
  medellin: [6.2442, -75.5812],
  lima: [-12.0464, -77.0428],
  sydney: [-33.8688, 151.2093],
  melbourne: [-37.8136, 144.9631],
  brisbane: [-27.4705, 153.0260],
  perth: [-31.9505, 115.8605],
  canberra: [-35.2809, 149.1300],
  adelaide: [-34.9285, 138.6007],
  auckland: [-36.8485, 174.7633],
  wellington: [-41.2865, 174.7762],
  fiji: [-18.1248, 178.4501],
  saipan: [15.1779, 145.7512],
  guam: [13.4443, 144.7937],
  cairo: [30.0444, 31.2357],
  johannesburg: [-26.2041, 28.0473],
  capetown: [-33.9249, 18.4241],
  nairobi: [-1.2921, 36.8219],
  lagos: [6.5244, 3.3792],
  casablanca: [33.5731, -7.5898]
};

let mapInstance = null;
let markerInstance = null;

function getCityLatLng(city) {
  const id = city.id.toLowerCase();
  if (CITY_COORDINATES[id]) {
    return CITY_COORDINATES[id];
  }
  return [0, 0];
}

async function updateFreeMap(city) {
  const mapDiv = document.getElementById("modal_free_map");
  if (!mapDiv) return;

  const coords = getCityLatLng(city);
  if (coords[0] === 0 && coords[1] === 0) return;

  if (typeof window.L === "undefined") {
    console.error("Leaflet is not loaded yet");
    return;
  }

  const L = window.L;

  try {
    if (!mapInstance) {
      // Create a high-quality free world map, Pacific Centered
      mapInstance = L.map('modal_free_map', {
        zoomControl: true,
        attributionControl: false,
        center: [15, -165], // Center of the Pacific
        zoom: 3,
        minZoom: 1,
        maxZoom: 14,
        worldCopyJump: true
      });

      // High-quality CARTO Voyager Tiles (free, elegant & responsive)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 14,
        noWrap: false
      }).addTo(mapInstance);
    }

    // Set map focus to coordinates
    mapInstance.setView(coords, city.id === "honolulu" || city.id === "fiji" || city.id === "saipan" || city.id === "guam" ? 4 : 5);

    if (markerInstance) {
      markerInstance.remove();
    }

    // Beautiful animated pulsing dot marker
    const pulsingIcon = L.divIcon({
      className: 'custom-pulsing-marker',
      html: `<div class="relative h-8 w-8 -ml-4 -mt-4 flex items-center justify-center">
               <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006CFF] opacity-75"></span>
               <span class="relative inline-flex rounded-full h-4.5 w-4.5 bg-[#006CFF] border-[2.5px] border-white shadow-md"></span>
             </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    markerInstance = L.marker(coords, { icon: pulsingIcon }).addTo(mapInstance);

    // Dynamic size invalidation for smooth drawer animations
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize({ animate: true });
      }
    }, 300);

  } catch (err) {
    console.error("Leaflet initialization error:", err);
  }
}

// 10. Drawer Modal Manipulation
function openDetailModal(city) {
  selectedCity = city;
  const baseTime = new Date();
  const data = getCityClockData(city, baseTime);

  // 1. Title details
  if (modalFlag) {
    modalFlag.innerHTML = `<img src="https://flagcdn.com/w160/${city.countryCode}.png" alt="" class="w-16 h-11 object-cover rounded-md shadow-xs select-none filter drop-shadow-xs" referrerPolicy="no-referrer" />`;
  }
  if (modalCountryEn) modalCountryEn.textContent = `${city.nameEn} · ${city.countryKo}`;
  if (modalTitle) modalTitle.textContent = city.nameKo;

  // 2. Formatting details & timeline
  if (modalDate) modalDate.textContent = data.dateString;
  if (modalUtcOffset) modalUtcOffset.textContent = data.utcOffset;
  if (modalTime) modalTime.textContent = data.timeString;

  // Render dark/light visual panel matching state
  const modalTimeCard = document.getElementById("modal_time_card");
  if (modalTimeCard) {
    if (data.isNight) {
      modalTimeCard.className = "p-6 md:p-8 rounded-[28px] mb-6 bg-white border border-blue-50/80 shadow-[0_4px_24px_rgba(0,108,255,0.03)] flex flex-col gap-6 relative text-slate-800";
      if (modalStatusBadge) {
        modalStatusBadge.innerHTML = `<svg class="w-7 h-7 fill-indigo-400 stroke-none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span>밤</span>`;
        modalStatusBadge.className = "text-[22px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 border select-none bg-indigo-50/80 text-indigo-600 border-indigo-100/50";
      }
      if (modalTimelineBar) {
        modalTimelineBar.className = "h-full rounded-full bg-indigo-400 transition-all duration-1000";
        modalTimelineBar.style.width = "35%";
      }
    } else {
      modalTimeCard.className = "p-6 md:p-8 rounded-[28px] mb-6 bg-white border border-blue-50/80 shadow-[0_4px_24px_rgba(0,108,255,0.03)] flex flex-col gap-6 relative text-slate-800";
      if (modalStatusBadge) {
        modalStatusBadge.innerHTML = `<svg class="w-7 h-7 text-amber-500 fill-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span>낮</span>`;
        modalStatusBadge.className = "text-[22px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 border select-none bg-amber-50/80 text-amber-700 border-amber-100/50";
      }
      if (modalTimelineBar) {
        modalTimelineBar.className = "h-full rounded-full bg-amber-400 transition-all duration-1000";
        modalTimelineBar.style.width = "80%";
      }
    }
  }

  // 3. Map Location Logic
  const modalMapLocationText = document.getElementById("modal_map_location_text");
  if (modalMapLocationText) {
    modalMapLocationText.textContent = `${city.countryKo} · ${city.nameKo}`;
  }
  updateFreeMap(city);

  // 4. Comparison calculations
  const seoulClock = getCityClockData(WORLD_CITIES[0], baseTime);
  const seoulHour = parseInt(seoulClock.timeString.split(":")[0], 10);
  const targetHour = parseInt(data.timeString.split(":")[0], 10);
  const diffHours = targetHour - seoulHour;
  
  if (modalTimeDiffBadge) {
    if (diffHours === 0) {
      modalTimeDiffBadge.textContent = "시차 없음";
    } else {
      modalTimeDiffBadge.textContent = `${diffHours > 0 ? "한국보다 +" : "한국보다 "}${diffHours}시간`;
    }
  }
  if (seoulClock && modalSeoulTime) modalSeoulTime.textContent = seoulClock.timeString;
  if (modalTargetLabel) {
    modalTargetLabel.innerHTML = `<img src="https://flagcdn.com/w80/${city.countryCode}.png" alt="" class="w-8 h-5.5 object-cover rounded-md shadow-xs select-none inline-block align-middle mr-2" referrerPolicy="no-referrer" /><span>${city.nameKo}</span>`;
  }
  if (modalTargetTime) modalTargetTime.textContent = data.timeString;

  // Display sliding animations
  if (modalBackdrop) {
    modalBackdrop.classList.remove("hidden");
    setTimeout(() => {
      modalBackdrop.classList.remove("opacity-0");
      modalBackdrop.classList.add("opacity-100");
    }, 10);
  }
  if (detailModal) {
    detailModal.classList.remove("hidden");
    setTimeout(() => {
      detailModal.classList.remove("translate-y-full");
      detailModal.classList.add("translate-y-0");
    }, 10);
  }
}

function closeDetailModal() {
  if (modalBackdrop) {
    modalBackdrop.classList.remove("opacity-100");
    modalBackdrop.classList.add("opacity-0");
    setTimeout(() => {
      modalBackdrop.classList.add("hidden");
    }, 300);
  }
  if (detailModal) {
    detailModal.classList.remove("translate-y-0");
    detailModal.classList.add("translate-y-full");
    setTimeout(() => {
      detailModal.classList.add("hidden");
    }, 300);
  }
  selectedCity = null;
}

function renderAddCityModalList() {
  if (!addCityModalList) return;
  addCityModalList.innerHTML = "";

  // If no filter query, render grouped Country > City layout
  const groups = {};

  WORLD_CITIES.forEach((city) => {
    if (!groups[city.countryKo]) {
      groups[city.countryKo] = {
        countryCode: city.countryCode,
        cities: []
      };
    }
    groups[city.countryKo].cities.push(city);
  });

  const entries = Object.entries(groups);
  if (entries.length === 0) {
    addCityModalList.innerHTML = `
      <div class="text-center py-8 text-slate-400 font-medium text-[22px]">
        검색 결과가 없습니다.
      </div>
    `;
    return;
  }

  entries.forEach(([countryKo, groupInfo]) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "bg-white rounded-3xl p-5 border border-blue-50/50 shadow-xs mb-4";

    const countryHeader = `
      <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4 select-none">
        <img src="https://flagcdn.com/w80/${groupInfo.countryCode}.png" alt="" class="w-10 h-7 object-cover rounded shadow shadow-sm" referrerPolicy="no-referrer" />
        <span class="text-[24px] font-black text-slate-800">${countryKo}</span>
      </div>
    `;

    let citiesHtml = `<div class="grid grid-cols-2 gap-3">`;
    groupInfo.cities.forEach((city) => {
       const isAlreadyAdded = activeCities.some(ac => ac.id === city.id);

       citiesHtml += `
        <button
          type="button"
          data-modal-city-id="${city.id}"
          class="flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-blue-50/30 hover:border-[#006CFF]/30 active:scale-98 transition duration-150 text-left w-full cursor-pointer group"
          ${isAlreadyAdded ? "disabled" : ""}
        >
          <div class="truncate">
            <div class="text-[22px] font-black ${isAlreadyAdded ? "text-slate-300 line-through" : "text-slate-700 group-hover:text-[#006CFF]"} leading-tight truncate">${city.nameKo}</div>
            <div class="text-[16px] text-slate-400 font-bold leading-none mt-1.5 truncate">${city.nameEn}</div>
          </div>
          <div class="flex-none ml-2">
            ${isAlreadyAdded 
              ? `<span class="text-[16px] font-bold text-slate-300 bg-slate-100 px-3 py-1.5 rounded-xl select-none">추가됨</span>` 
              : `<span class="text-[16px] font-bold text-[#006CFF] bg-[#006CFF]/8 group-hover:bg-[#006CFF] group-hover:text-white px-3 py-1.5 rounded-xl transition duration-150">선택</span>`
            }
          </div>
        </button>
      `;
    });
    citiesHtml += `</div>`;

    groupDiv.innerHTML = countryHeader + citiesHtml;

    groupDiv.querySelectorAll("[data-modal-city-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cityId = btn.getAttribute("data-modal-city-id");
        const found = WORLD_CITIES.find(c => c.id === cityId);
        if (found) {
          addCity(found);
          closeAddCityModal();
        }
      });
    });

    addCityModalList.appendChild(groupDiv);
  });
}

function showAddCityModalSuggestions() {
  if (!addCityModalSuggestions || !addCityModalSuggestionsList || !addCityModalSearch) return;

  const query = addCityModalSearch.value.trim().toLowerCase();

  if (query === "") {
    addCityModalSuggestions.classList.add("hidden");
    if (addCityModalList) {
      addCityModalList.classList.remove("hidden");
    }
    return;
  }

  // Find matching cities from the static database
  const filtered = WORLD_CITIES.filter((city) => {
    const koMatch = city.nameKo.toLowerCase().includes(query);
    const enMatch = city.nameEn.toLowerCase().includes(query);
    const countryMatch = city.countryKo.toLowerCase().includes(query);
    return koMatch || enMatch || countryMatch;
  });

  if (filtered.length === 0) {
    addCityModalSuggestionsList.innerHTML = `
      <div class="text-center py-8 text-slate-400 font-medium text-[20px] select-none bg-white p-4">
        검색 결과가 없습니다.
      </div>
    `;
    addCityModalSuggestions.classList.remove("hidden");
    if (addCityModalList) {
      addCityModalList.classList.add("hidden");
    }
    return;
  }

  addCityModalSuggestionsList.innerHTML = "";
  filtered.forEach((city) => {
    const isAlreadyAdded = activeCities.some(ac => ac.id === city.id);

    const li = document.createElement("li");
    li.className = "w-full border-b border-slate-50 last:border-0";
    li.innerHTML = `
      <button
        type="button"
        class="w-full text-left px-5 py-4 hover:bg-blue-50/50 flex items-center justify-between transition-colors duration-150 cursor-pointer group"
        ${isAlreadyAdded ? "disabled" : ""}
      >
        <div class="flex items-center gap-4">
          <img src="https://flagcdn.com/w80/${city.countryCode}.png" alt="" class="w-12 h-8 object-cover rounded-md shadow-xs select-none" referrerPolicy="no-referrer" />
          <div>
            <div class="text-[22px] font-bold ${isAlreadyAdded ? "text-slate-300 line-through" : "text-slate-800"}" leading-none">
              ${city.nameKo} <span class="text-slate-400 font-normal italic text-[18px]">(${city.flag})</span>
            </div>
            <div class="text-[16px] text-slate-400 font-semibold mt-1">${city.nameEn} · ${city.countryKo}</div>
          </div>
        </div>
        <div class="text-[16px] font-bold flex items-center justify-center">
          ${isAlreadyAdded 
            ? `<span class="text-slate-300 bg-slate-100 px-3.5 py-2 rounded-xl select-none">추가됨</span>` 
            : `<span class="text-[#006CFF] bg-[#006CFF]/8 group-hover:bg-[#006CFF] group-hover:text-white px-3.5 py-2 rounded-xl transition duration-150">선택</span>`
          }
        </div>
      </button>
    `;

    li.querySelector("button")?.addEventListener("click", () => {
      addCity(city);
      closeAddCityModal();
    });

    addCityModalSuggestionsList.appendChild(li);
  });

  addCityModalSuggestions.classList.remove("hidden");
  if (addCityModalList) {
    addCityModalList.classList.add("hidden");
  }
}

function hideAddCityModalSuggestions() {
  if (addCityModalSuggestions) {
    addCityModalSuggestions.classList.add("hidden");
  }
  if (addCityModalList) {
    addCityModalList.classList.remove("hidden");
  }
}

function openAddCityModal() {
  if (addCityModalSearch) {
    addCityModalSearch.value = "";
  }
  hideAddCityModalSuggestions();
  renderAddCityModalList();

  if (addCityModalBackdrop) {
    addCityModalBackdrop.classList.remove("hidden");
    setTimeout(() => {
      addCityModalBackdrop.classList.remove("opacity-0");
      addCityModalBackdrop.classList.add("opacity-100");
    }, 10);
  }

  if (addCityModal) {
    addCityModal.classList.remove("hidden");
    setTimeout(() => {
      addCityModal.classList.remove("scale-95", "opacity-0");
      addCityModal.classList.add("scale-100", "opacity-100");
    }, 10);
  }
}

function closeAddCityModal() {
  hideAddCityModalSuggestions();

  if (addCityModalBackdrop) {
    addCityModalBackdrop.classList.remove("opacity-100");
    addCityModalBackdrop.classList.add("opacity-0");
    setTimeout(() => {
      addCityModalBackdrop.classList.add("hidden");
    }, 300);
  }

  if (addCityModal) {
    addCityModal.classList.remove("scale-100", "opacity-100");
    addCityModal.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      addCityModal.classList.add("hidden");
    }, 300);
  }
}

function saveNote() {
  if (!selectedCity) return;
  const val = modalNotepad ? modalNotepad.value : "";
  cityNotes[selectedCity.id] = val;
  localStorage.setItem("world_time_city_notes", JSON.stringify(cityNotes));
}

// 11. Event Registration Flow
function setupEventListeners() {
  // Mockup resolution framework toggles
  if (toggleFrameBtn) {
    toggleFrameBtn.addEventListener("click", () => {
      isFrameMode = !isFrameMode;
      if (isFrameMode) {
        phoneMockup?.classList.add("h-screen", "w-full", "md:w-auto", "md:aspect-[9/16]", "max-h-screen", "max-w-full", "rounded-none", "shadow-none", "border-none");
        phoneMockup?.classList.remove("w-full", "h-screen");
        toggleFrameBtn.textContent = "전체 화면으로 보기";
      } else {
        phoneMockup?.classList.remove("md:w-auto", "md:aspect-[9/16]", "rounded-none", "shadow-none", "border-none");
        phoneMockup?.classList.add("w-full", "h-screen");
        toggleFrameBtn.textContent = "키오스크 프레임 씌우기";
      }
    });
  }

  // Clean Resets
  if (resetBtn) {
    resetBtn.addEventListener("click", resetToDefault);
  }

  // Toasts / Close App Actions
  if (closeBtn) {
    closeBtn.onclick = window.handleCloseBtnClick;
  }

  // Restart/Re-trigger Kiosk App after visual closure
  if (restartAppBtn) {
    restartAppBtn.addEventListener("click", () => {
      if (shutdownOverlay) {
        shutdownOverlay.classList.remove("opacity-100", "pointer-events-auto");
        shutdownOverlay.classList.add("opacity-0", "pointer-events-none");
      }
      location.reload();
    });
  }

  // Form search engines
  if (searchInput) {
    searchInput.addEventListener("input", showSuggestions);
    searchInput.addEventListener("focus", showSuggestions);
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (
      suggestionsDropdown && 
      !suggestionsDropdown.contains(target) && 
      searchInput && 
      !searchInput.contains(target)
    ) {
      hideSuggestions();
    }
    if (
      addCityModalSuggestions &&
      !addCityModalSuggestions.contains(target) &&
      addCityModalSearch &&
      !addCityModalSearch.contains(target)
    ) {
      hideAddCityModalSuggestions();
    }
  });

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!searchInput) return;
      const query = searchInput.value.trim().toLowerCase();
      if (query === "") return;

      const matchedCity = WORLD_CITIES.find(city => 
        city.nameKo.toLowerCase() === query || 
        city.nameEn.toLowerCase() === query
      ) || WORLD_CITIES.find(city => 
        city.nameKo.toLowerCase().includes(query) || 
        city.nameEn.toLowerCase().includes(query)
      );

      if (matchedCity) {
        addCity(matchedCity);
        hideSuggestions();
      }
    });
  }

  // Modal Closures
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeDetailModal);
  if (modalCloseHandle) modalCloseHandle.addEventListener("click", closeDetailModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeDetailModal);

  // Autosave notes on key input inside textbox
  if (modalNotepad) {
    modalNotepad.addEventListener("input", saveNote);
  }

  // Explicit confirmation notes save button
  if (modalNotepadSaveBtn) {
    modalNotepadSaveBtn.addEventListener("click", () => {
      saveNote();
      closeDetailModal();
    });
  }

  // Add City Picker Modal Listeners
  if (addCityModalCloseBtn) {
    addCityModalCloseBtn.addEventListener("click", closeAddCityModal);
  }
  if (addCityModalBackdrop) {
    addCityModalBackdrop.addEventListener("click", closeAddCityModal);
  }
  if (addCityModalSearch) {
    addCityModalSearch.addEventListener("input", () => {
      showAddCityModalSuggestions();
    });
  }
}

// 12. Load Trigger
document.addEventListener("DOMContentLoaded", initApp);
// Also self trigger as a module fallback in Vite
if (document.readyState === "complete" || document.readyState === "interactive") {
  initApp();
}
