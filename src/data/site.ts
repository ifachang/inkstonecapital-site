export const affiliatedCompanies = [
  {
    href: "https://www.yushan.ai/",
    category: "AI Infrastructure",
    name: "Yushan.AI",
    description:
      "聚焦地端大型語言模型與企業級 AI 應用，強調隱私保護、離線運作與產業落地能力。",
    domain: "www.yushan.ai",
    imageSrc: "/company-yushan-ai.png",
    imageAlt: "Yushan.AI official logo",
    imageClassName: "object-contain p-8 sm:p-10",
  },
  {
    href: "https://www.docter.one/",
    category: "Health Technology",
    name: "Docter Inc.",
    description:
      "以 AI 智慧照護、健康管理與非接觸式感測技術為核心，提供醫療與居家照護解決方案。",
    domain: "www.docter.one",
    imageSrc: "/company-docter.jpg",
    imageAlt: "Docter official company image",
    imageClassName: "object-cover",
  },
  {
    href: "https://datouamerica.com/",
    category: "U.S. Market Platform",
    name: "大投美國股份有限公司 Datou America Inc.",
    description:
      "協助亞洲食品與零食品牌進入美國市場，支援零售通路、Amazon、FDA 文件準備與美國倉儲協調。",
    domain: "datouamerica.com",
    imageSrc: "/company-datou-america.jpg",
    imageAlt: "Datou America Inc. official logo",
    imageClassName: "object-contain p-8 sm:p-10",
  },
] as const;

export const advisoryTracks = [
  {
    label: "01",
    title: "交易與重組",
    body: "協助企業釐清併購、整合、股權調整與跨境交易的可行架構。",
    href: "/services/",
  },
  {
    label: "02",
    title: "融資與資本規劃",
    body: "依企業階段配置私募、過橋融資、策略投資人與長期資本市場路徑。",
    href: "/services/",
  },
  {
    label: "03",
    title: "產業與生態連結",
    body: "聚焦 AI、健康科技與消費品牌等主題，串接企業成長所需資源。",
    href: "/companies/",
  },
] as const;

export const serviceProcessSteps = [
  ["01", "Initial Review", "釐清公司階段、股權結構、資金需求與策略目標。"],
  ["02", "Structure Design", "設計交易架構、投資條件、時程與關鍵文件需求。"],
  ["03", "Market Alignment", "協調投資人、策略夥伴、顧問與跨境資源。"],
  ["04", "Execution Support", "支援談判、溝通、節奏管理與後續資本市場準備。"],
] as const;

export const teamMembers: readonly TeamMember[] = [
  {
    name: "張義發 I-fa Chang",
    role: "創辦人兼負責人",
    email: "ivan@inkstonecapital.com",
    emailContext: "team_ivan",
    paragraphs: [
      "墨石資本創辦人，長期專注於中小企業跨境資本運作與國際市場佈局，具備豐富實務案例與產業人脈。近年亦參與多項新經濟與科技相關投資與企業發展規劃。",
    ],
  },
  {
    name: "田江森 Jiangsen Tian",
    role: "首席科技投資長",
    email: "tian@partner.inkstonecapital.com",
    emailContext: "team_jiangsen_tian",
    paragraphs: [
      "美國紐約市立大學電腦科學博士，曾任貝爾實驗室研究員與創業公司技術主管，後加入微軟亞洲研究院，歷任技術轉化工程總監與副院長等職務，累積超過二十年人工智慧與雲端服務研發經驗。目前亦擔任 Yushan.AI 首席人工智慧科學家，專注於AI技術在實體經濟與產業升級中的應用。",
    ],
  },
  {
    name: "Kevin Vassily",
    role: "Senior Advisor",
    paragraphs: [
      "Kevin Vassily 具跨資本市場、金融科技與上市公司治理經驗，曾於 2021 年出任 iPower Inc.（Nasdaq: IPW）的 Chief Financial Officer，並於同年加入董事會，後於 2025 年離任。加入 iPower 前，他曾擔任 Facteus 的市場發展副總裁，亦曾於 Go Capture、Woodseer 與 Prometheus Fund 等機構參與策略、產品與業務發展工作，長期涉獵資本市場、數據服務與跨境投資相關領域。",
    ],
  },
  {
    name: "孔靖媛 Nico Kung",
    role: "醫美與抗衰老產業顧問",
    email: "nico.kung@partner.inkstonecapital.com",
    emailContext: "team_nico_kung",
    paragraphs: [
      "孔靖媛女士為資深醫學美容與抗衰老領域專業人士，於醫美健康產業深耕逾二十年，長期專注於醫學美容技術應用、抗衰老管理及美容健康產業發展，累積豐富的專業實務經驗與產業洞察能力。其職業生涯曾於中國及韓國醫學美容相關機構從事專業工作與產業交流，熟悉亞洲醫學美容產業技術發展與市場趨勢，具備跨國產業經驗與國際視野。",
    ],
  },
  {
    name: "陳柏銘 Chen Po-Ming",
    role: "資源整合與跨界策展顧問",
    email: "popoming.chen@partner.inkstonecapital.com",
    emailContext: "team_chen_po_ming",
    cvHref: "/cv-chen-po-ming.pdf",
    paragraphs: [
      "畢業於世新大學公共傳播學系，專長資源整合、PR 規劃與跨界策展，產業經歷橫跨電影、公關、視覺科技、文旅與園區開發。曾任 BD ART 弼達多媒體藝術行銷有限公司總經理、The Pan Bay 大鵬灣國際開發有限公司總管理處總監、杭州晴光科技有限公司創辦人暨執行長等職務，並參與新北市電影藝術節、宜蘭國際綠色影展、文旅景區規劃與 BOT 開發案等專案。",
      "目前掛職安泰商業銀行股份有限公司副董事長特別助理，並擔任象藝創意有限公司業務總監。",
    ],
  },
  {
    name: "吳松宇 Jason Wu",
    role: "財務顧問部",
    email: "jason.wu@partner.inkstonecapital.com",
    emailContext: "team_jason_wu",
    paragraphs: [
      "畢業於嶺東科技大學國際貿易系，具銀行金融與企業財務管理實務背景。曾任職台新銀行、日盛銀行與荷蘭銀行，累積金融服務、企業往來與財務規劃相關經驗。",
      "後續曾擔任韻達（東莞、塘廈）電子財務主管及青提影業 CFO，熟悉企業財務管理、營運資金規劃與跨產業財務協調。",
    ],
  },
  {
    name: "邱宥凱 Kevin Chiu",
    role: "特別助理",
    email: "kevin.chiu@partner.inkstonecapital.com",
    emailContext: "team_kevin_chiu",
    paragraphs: [
      "中山大學材料所碩士，曾任台積電資深工程師 15 年，具材料工程、半導體製程與大型科技製造體系實務經驗。",
    ],
  },
] as const;

export const teamCapabilities = [
  ["Capital Markets", "資本市場與上市規劃判斷"],
  ["Technology", "AI 與新經濟產業理解"],
  ["Health & Consumer", "健康科技、醫美與消費品牌洞察"],
  ["Cross-Functional", "資源整合、品牌、內容與合作推進"],
] as const;

export const ecosystemThemes = [
  ["AI Infrastructure", "Yushan.AI", "地端模型、企業 AI、資料安全與產業應用。"],
  ["Health Technology", "Docter Inc.", "非接觸式感測、智慧照護與健康管理場景。"],
  ["U.S. Market Entry", "大投美國股份有限公司", "亞洲食品品牌進入美國零售、電商、合規與倉儲市場。"],
] as const;

export const socialLinks = [
  ["Facebook", "https://www.facebook.com/Ifachang/", "facebook"],
  ["X", "https://x.com/ifachang_us", "x"],
  ["Threads", "https://www.threads.com/@ifachang", "threads"],
  ["LinkedIn", "https://www.linkedin.com/in/ifachang/", "linkedin"],
] as const;

export const contactFollowUpSteps = [
  "初步了解服務方向與合作需求。",
  "釐清可公開資訊與後續討論範圍。",
  "由團隊評估適合的聯繫窗口與回覆節奏。",
] as const;
type TeamMember = {
  name: string;
  role: string;
  email?: string;
  emailContext?: string;
  cvHref?: string;
  paragraphs: readonly string[];
};
