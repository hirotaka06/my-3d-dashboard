import Spline from "@splinetool/react-spline/next";
import { Inter } from "next/font/google";

// 細めでモダンなフォント
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex items-center">
              <h2
                className={`${inter.className} text-2xl font-light text-gray-900`}
              >
                Spline Practice
              </h2>
            </div>

            {/* ナビゲーションメニュー */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTAボタン */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="relative max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Splineの3Dシーン - 背景として全体表示 */}
        <div className="absolute lg:inset-x-72 z-10 w-full h-full">
          <Spline scene="https://prod.spline.design/TaJuL3FTtIMA56Bo/scene.splinecode" />
        </div>

        {/* 左側：見出しテキスト */}
        <div className="relative z-20 w-full lg:w-1/2 px-4 lg:px-8">
          <div className="text-left">
            <h1
              className={`${inter.className} text-4xl md:text-6xl lg:text-8xl font-light leading-none tracking-tight`}
            >
              New Experience, <br />
              for You.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mt-6">
              Design by @rororo_rururuX
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
