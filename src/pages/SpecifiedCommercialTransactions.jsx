import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SpecifiedCommercialTransactions = () => {
  const commercialInfo = [
    {
      label: "事業者の名称",
      value: "Grow By Connecting"
    },
    {
      label: "事業者の所在地",
      value: "個人情報保護の観点より、住所の公開は控えさせていただいております。",
      note: "ご請求をいただいた場合には、遅滞なく開示いたします。お問い合わせはメールにてお願いいたします。"
    },
    {
      label: "事業者の連絡先",
      value: "motokikpy7nsss@gmail.com"
    },
    {
      label: "運営統括責任者",
      value: "森元城"
    },
    {
      label: "販売価格",
      value: "各サービスの料金ページに記載"
    },
    {
      label: "サービス代金以外の必要料金",
      value: "消費税、銀行振込手数料（銀行振込の場合）"
    },
    {
      label: "支払方法",
      value: "クレジットカード決済、銀行振込など、各サービスの料金ページに記載"
    },
    {
      label: "サービスの提供時期",
      value: "お申し込み後、所定の手続き完了次第、ご利用いただけます。"
    },
    {
      label: "返品・キャンセルについて",
      value: "サービスの性質上、お申し込み後の返品・キャンセルは原則としてお受けできません。ただし、当コミュニティの責めに帰すべき事由による場合は、この限りではありません。"
    },
    {
      label: "動作環境",
      value: "インターネット接続環境、対応ブラウザ（Google Chrome, Mozilla Firefox, Microsoft Edge, Safariの最新版を推奨）"
    },
    {
      label: "その他",
      value: "本表記に定めのない事項については、別途定める利用規約に準じます。"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            特定商取引法に基づく表記
          </h1>
          <p className="text-xl text-gray-600">
            Specified Commercial Transactions Act
          </p>
        </div>

        {/* Commercial Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">事業者情報</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {commercialInfo.map((info, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold text-gray-900 bg-gray-50 w-1/3 align-top">
                        {info.label}
                      </td>
                      <td className="py-4 px-4 text-gray-700 align-top">
                        <div>
                          {info.value}
                          {info.note && (
                            <div className="text-sm text-red-600 mt-1 italic">
                              {info.note}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            ⚠️ 重要なお知らせ
          </h3>
          <div className="text-yellow-700 space-y-2">
            <p>
              この特定商取引法に基づく表記は、実際のサービス運営前に以下の情報を正確に記載する必要があります：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>事業者の正確な所在地（住所）</li>
              <li>連絡先（電話番号またはメールアドレス）</li>
              <li>運営統括責任者の氏名</li>
              <li>具体的な料金体系</li>
            </ul>
            <p className="mt-3 font-medium">
              これらの情報は法的要件であり、正確な記載が必要です。
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">
            最終更新日：2025年7月1日
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecifiedCommercialTransactions

