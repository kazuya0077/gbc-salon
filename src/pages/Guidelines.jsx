import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Shield, Users, AlertTriangle, MessageSquare } from 'lucide-react'

const Guidelines = () => {
  const complianceItems = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "個人情報と患者情報",
      items: [
        "氏名・職場・症例等、個人が特定できる投稿は禁止",
        "症例投稿は「年齢・性別・部位のみ」に限定し、個別病院名・エピソード性ある内容は禁止",
        "スクリーンショットやファイルの無断共有・外部転送は固く禁止"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "著作権・教材の扱い",
      items: [
        "論文・スライド等の共有は「タイトル」「著者名」「出典URL」を必ず明記",
        "教材の全文貼付・有料教材の抜粋共有は禁止（著作権法第32条に非該当）"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      title: "誹謗中傷・ハラスメント",
      items: [
        "否定的・高圧的・あてこすり投稿は即警告対象",
        "公共空間としての言動責任を自覚し、敬意・建設性・非攻撃性を守ること"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      title: "営利目的・勧誘行為の禁止",
      items: [
        "商材・セミナー・コミュニティ等の「販売・集客・勧誘」行為は注意",
        "必要な共有は事前に運営の許可を得た上で限定"
      ]
    }
  ]

  const actionGuidelines = [
    {
      principle: "相互尊重",
      example: "初投稿には一言反応を／年齢や職歴でマウントを取らない"
    },
    {
      principle: "建設的対話",
      example: "「それは違う」より「こういう考え方もあるかも」"
    },
    {
      principle: "安心安全な雰囲気",
      example: "専門外の質問にも寛容に／笑われない安心感を重視"
    },
    {
      principle: "自律的な学び",
      example: "見るだけ参加でもOK、でもできる範囲で反応しよう"
    }
  ]

  const agreementItems = [
    "本規約と行動指針を理解・同意し、遵守すること",
    "上記違反時は運営判断により、警告・制限・退会措置を受け入れること",
    "Slack上のすべての行動・投稿は記録され、重大な違反時は第三者機関（法的機関・職能団体）に報告される場合があります"
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GBC利用ガイドライン
          </h1>
          <p className="text-xl text-gray-600">
            安心・安全なコミュニティ運営のための指針
          </p>
        </div>

        {/* What is GBC */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">🎯 GBCとは</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-900">
                Grow By Connection（つながりを超えて、成長へ）
              </p>
              <p className="text-gray-700 leading-relaxed">
                GBCは、若手理学療法士が安心・自由に相談・学習・協働できるSlackコミュニティです。
                参加者一人ひとりが、患者・同僚・職場・社会に良い影響を与えることを目指します。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-600">🛡️ 法令・規範上の遵守事項</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceItems.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold ml-2">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">🤝 GBC行動指針（共に場をつくるために）</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">原則</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">実践例</th>
                  </tr>
                </thead>
                <tbody>
                  {actionGuidelines.map((guideline, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">{guideline.principle}</td>
                      <td className="py-3 px-4 text-gray-700">{guideline.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Agreement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">📝 参加にあたっての同意事項（明示的同意）</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {agreementItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">👉 同意はこちらから：</p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdnmjSYTRVAwcI8JRMg-Ocyhtj5t-umKiHUH_2ABLWpxAHbtA/viewform?usp=dialog', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                GBC参加同意フォーム（Googleフォーム）
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reporting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-600">🚨 通報・相談窓口</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              不適切投稿やハラスメント行為を発見した場合は、
              @ユーザー までお知らせください（Slack内DM推奨）
            </p>
          </CardContent>
        </Card>

        {/* Guidelines Position */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-700">📌 ガイドラインの位置付け</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                本ガイドラインは医療従事者間の専門コミュニティにおけるモラルと法令順守の基盤として運用されます
              </p>
              <p className="text-gray-700 leading-relaxed">
                内容は運営および外部アドバイザー（医療法務／労務／コンプライアンス）により定期的に見直されます
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Closing Message */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">✨ この場は「自由な対話」と「責任ある発信」の両立を目指します。</h2>
          <p className="text-blue-100 text-lg">
            まずは、敬意を込めた「一言の自己紹介」から始めましょう。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guidelines

