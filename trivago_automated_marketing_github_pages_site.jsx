export default function TrivagoMarketingSystem() {
  const sections = [
    {
      title: "1. TA 分析系統",
      items: [
        "小資自由行旅客（18-30歲）｜重視價格比較與住宿優惠",
        "情侶與蜜月族群｜偏好浪漫住宿與景點推薦",
        "商務旅客｜重視交通便利、快速訂房與會員回饋",
        "家庭旅遊族群｜需要親子飯店、早餐與大型房型",
        "高端旅遊客群｜偏好五星飯店、奢華體驗與VIP服務"
      ]
    },
    {
      title: "2. 免費贈品 Lead Magnet",
      items: [
        "免費 Ebook：《2026 全球最便宜訂房攻略》",
        "免費影片課程：《如何用 trivago 找到最低價飯店》",
        "免費旅行清單 PDF：《7天旅行打包模板》",
        "限時優惠通知社群加入資格",
        "AI 旅遊預算計算工具"
      ]
    },
    {
      title: "3. 名單蒐集頁設計",
      items: [
        "主標題：3分鐘找到全球最低價飯店",
        "副標題：立即領取免費旅遊優惠攻略與獨家折扣",
        "CTA：免費領取 Ebook",
        "表單欄位：Email、旅遊偏好、預計旅遊地區",
        "社會證明：超過 50 萬名旅客下載"
      ]
    },
    {
      title: "4. 自動回覆 Email Funnel",
      items: [
        "Day1：寄送免費 Ebook + 品牌故事",
        "Day2：分享熱門旅遊住宿案例",
        "Day3：推薦限時飯店優惠",
        "Day5：分享旅遊省錢技巧與會員福利",
        "Day7：限時 CTA 引導完成訂房"
      ]
    },
    {
      title: "5. 三種類型銷售頁",
      items: [
        "A. 好朋友風格：像朋友分享旅遊秘訣，降低距離感",
        "B. Gary Halbert 風格：強調限時優惠與立即行動",
        "C. 劉克亞風格：塑造高價值旅遊體驗與身份感"
      ]
    },
    {
      title: "6. 廣告引流文案",
      items: [
        "Facebook 廣告：『別再當盤子！用 trivago 一秒比價全球飯店』",
        "Instagram Reels：『3個訂房秘密，讓你出國住宿直接省一半』",
        "Google 搜尋廣告：『東京住宿最低價｜立即比較 100+ 訂房網站』",
        "TikTok 短影音：旅遊前後價格差異震撼展示",
        "EDM 標題：『今晚訂房最高省 62%』"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900">
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 px-6 shadow-xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Trivago 自動化電子商務行銷系統
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              完整打造旅遊訂房平台的 Lead Funnel、Email Automation、廣告引流與高轉換銷售頁。
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
                免費下載 Ebook
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition">
                查看 Funnel 流程
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white text-gray-900 rounded-2xl p-5">
                <p className="text-3xl font-black">500K+</p>
                <p className="text-sm mt-2">下載旅遊攻略用戶</p>
              </div>
              <div className="bg-white text-gray-900 rounded-2xl p-5">
                <p className="text-3xl font-black">62%</p>
                <p className="text-sm mt-2">平均住宿省下費用</p>
              </div>
              <div className="bg-white text-gray-900 rounded-2xl p-5">
                <p className="text-3xl font-black">24hr</p>
                <p className="text-sm mt-2">自動化 Email 行銷</p>
              </div>
              <div className="bg-white text-gray-900 rounded-2xl p-5">
                <p className="text-3xl font-black">3X</p>
                <p className="text-sm mt-2">提升訂房轉換率</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-4">完整 Funnel 系統架構</h2>
          <p className="text-lg text-gray-600 mb-10">
            從流量導入、名單蒐集、自動化 Email 到高轉換銷售頁，一次打造完整旅遊電子商務成長系統。
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-black mb-6">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-5 leading-snug">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600 font-black">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-200 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-bold mb-3">Lead Magnet</p>
              <h2 className="text-4xl font-black leading-tight mb-6">
                免費下載《2026 全球最低價訂房攻略》
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                學會使用 trivago 找到全球最便宜住宿價格，並獲得限時會員折扣與旅遊優惠通知。
              </p>

              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="輸入你的 Email"
                  className="border border-gray-300 rounded-2xl px-5 py-4 text-lg"
                />
                <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-2xl px-6 py-4 font-bold text-lg shadow-lg transition">
                  免費立即下載
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-6">你將獲得：</h3>
              <div className="space-y-5 text-lg">
                <div className="bg-white/10 rounded-2xl p-4">✓ 全球熱門住宿最低價搜尋技巧</div>
                <div className="bg-white/10 rounded-2xl p-4">✓ 避開高價訂房時段的秘訣</div>
                <div className="bg-white/10 rounded-2xl p-4">✓ 各國住宿優惠與折扣碼整理</div>
                <div className="bg-white/10 rounded-2xl p-4">✓ 旅行預算規劃模板</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-10">三種高轉換銷售頁風格</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="text-sm font-bold text-blue-600 mb-4">STYLE 01</div>
              <h3 className="text-2xl font-black mb-5">好朋友風格</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                用輕鬆聊天的語氣分享旅遊訂房技巧，降低銷售感，提升信任與互動。
              </p>
              <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold w-full">
                查看範例
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-600 scale-105">
              <div className="text-sm font-bold text-blue-600 mb-4">STYLE 02</div>
              <h3 className="text-2xl font-black mb-5">Gary Halbert 風格</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                強調限時優惠與強烈 CTA，利用 FOMO 心理提高點擊率與訂房轉換。
              </p>
              <button className="bg-blue-700 text-white px-5 py-3 rounded-xl font-bold w-full shadow-lg">
                查看範例
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="text-sm font-bold text-blue-600 mb-4">STYLE 03</div>
              <h3 className="text-2xl font-black mb-5">劉克亞風格</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                塑造高價值旅遊身份感，讓消費者感覺自己正在升級生活方式。
              </p>
              <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold w-full">
                查看範例
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-[2rem] p-12 text-white shadow-2xl">
          <div className="max-w-4xl">
            <p className="font-bold mb-3 uppercase tracking-widest">Traffic Ads</p>
            <h2 className="text-5xl font-black leading-tight mb-8">
              用自動化 Funnel 把旅遊流量變成訂房收益
            </h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              結合 Facebook、Instagram、Google 與 TikTok 廣告，建立完整的旅遊電子商務成長系統。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg">
                <p className="font-black text-2xl mb-3">Facebook Ads</p>
                <p>「別再訂貴飯店了！全球最低價住宿立即比較」</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg">
                <p className="font-black text-2xl mb-3">Instagram Reels</p>
                <p>「3個訂房秘密，讓你旅費直接省一半」</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg">
                <p className="font-black text-2xl mb-3">Google Search</p>
                <p>「東京住宿最低價｜立即比較 100+ 訂房網站」</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg">
                <p className="font-black text-2xl mb-3">TikTok Shorts</p>
                <p>「同一家飯店價差居然超過 NT$5,000？」</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm">
        GitHub Pages Ready • Trivago Travel Marketing Funnel • React + Tailwind
      </footer>
    </div>
  );
}
