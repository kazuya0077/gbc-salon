import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Brain, Heart, Rocket, Sparkles, ArrowRight } from 'lucide-react'

const Home = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "つながりを育む",
      description: "互いの経験・悩み・挑戦を分かち合い、深いつながりを育む"
    },
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: "学びを深める",
      description: "専門性を高める学びと実践知のシェアを重視する"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "思いやりをもつ",
      description: "患者様・同僚・自分自身に対する思いやりを持ち続ける"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "昨日より挑戦する",
      description: "職域を越えて、今より一歩先の自分を目指す"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-yellow-600" />,
      title: "存在意義を高める",
      description: "自分とコミュニティの存在意義を常に高める"
    }
  ]

  const visionPoints = [
    "患者様の人生の質向上につながる、新たな視点や行動が\"つながり\"から生まれる。",
    "現場で孤立せず、全国に相談できる仲間がいる安心感を提供する。",
    "理学療法士としての\"使命感\"と\"誇り\"を再確認できる場を創造する。",
    "継続的にコミュニティと共に成長し続ける。"
  ]

  const actionGuidelines = [
    "問いかけから始める - 否定ではなく、相手の意見を引き出す問いかけを心がける。",
    "オープンマインドで学ぶ - 常に学びの姿勢を持ち、自分の視野を広げる。",
    "敬意をもって関わる - 他者の努力や挑戦に対して敬意を払う。",
    "積極的に共有する - 自分の経験や知見を率先してシェアし、コミュニティに貢献する。",
    "挑戦を楽しむ - 新しい取り組みにチャレンジし、失敗からも学びを得る。"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('/hero-bg.png')"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              つながりを力に、<br />
              治療家の能力を最大化する
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              GBCは、若手治療家が"つながり"を通じて成長し合い、現場により良い変化をもたらすことで、患者様への還元を目指す参加型コミュニティです。
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                <Link to="/guidelines">ガイドラインを見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🧭 GBC理念
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Philosophy of GBC
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌱 大切にしている価値観
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h3 className="text-xl font-semibold ml-3 text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🩺 私たちが目指す未来
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GBC Meaning Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📎 GBCという名前に込めた意味
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-blue-600 mb-4">
                GBC = Grow By Connecting
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                つながりの先に、成長と影響力の循環を。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📌 行動指針
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {actionGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に成長していきませんか？
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            GBCコミュニティで、新しいつながりと学びを見つけましょう。
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <Link to="/guidelines">詳細を見る</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

