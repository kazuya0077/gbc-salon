import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Clock, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // ここで実際のフォーム送信処理を実装
    alert('お問い合わせを受け付けました。ありがとうございます。')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  お問い合わせ情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">メールアドレス</h3>
                    <p className="text-gray-600 text-sm">
                      motokikpy7nsss@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">対応時間</h3>
                    <p className="text-gray-600 text-sm">
                      平日 9:00 - 18:00<br />
                      （土日祝日を除く）
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">お問い合わせの前に</h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    よくあるご質問については、ガイドラインページをご確認ください。
                    お急ぎの場合は、Slackコミュニティ内でのDMもご利用いただけます。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">お問い合わせフォーム</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        お名前 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="山田 太郎"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        メールアドレス <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      件名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="お問い合わせの件名をご入力ください"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      メッセージ <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      rows={6}
                      placeholder="お問い合わせ内容を詳しくご記入ください"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="text-red-500">*</span> は必須項目です。<br />
                      お送りいただいた内容は、プライバシーポリシーに従って適切に管理いたします。<br />
                      通常、2-3営業日以内にご返信いたします。
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-600">コミュニティ参加について</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                GBCコミュニティへの参加をご希望の方は、まずガイドラインをご確認の上、
                参加同意フォームからお申し込みください。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-purple-600">技術的なお問い合わせ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Slackの使用方法やアカウントに関する技術的なお問い合わせについても、
                こちらのフォームからお気軽にご連絡ください。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact

