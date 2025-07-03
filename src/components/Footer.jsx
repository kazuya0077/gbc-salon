import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src="/gbc-logo.jpg" alt="GBC Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="ml-3 text-xl font-semibold">
                Grow By Connecting
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              つながりを力に、治療家の能力を最大化する。<br />
              若手理学療法士が安心・自由に相談・学習・協働できるコミュニティです。
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guidelines" className="text-gray-400 hover:text-white transition-colors duration-200">
                  ガイドライン
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>何かご質問がございましたら、<br />お気軽にお問い合わせください。</p>
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mt-4"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Grow By Connecting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              利用規約
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              プライバシーポリシー
            </Link>
            <Link to="/commercial" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              特商法
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

