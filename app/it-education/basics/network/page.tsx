import { ArrowLeft, Monitor, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "网络与信息安全 | 周老师教学园地",
  description: "互联网工作原理、搜索引擎使用技巧、密码安全、网络诈骗识别与健康上网。",
}

export default function NetworkPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 max-sm:py-8">
      <Link href="/it-education" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回信息技术
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 max-sm:p-5 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">🌱 入门</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">网络与信息安全</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          了解互联网的工作原理，学会安全上网、保护个人隐私，培养信息辨别能力和网络安全意识。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">互联网的工作原理</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">了解数据是如何在网络中传输的。</p>
              <ul className="space-y-2">
                {["IP 地址：网络中每台设备的唯一标识", "DNS（域名系统）：将网址翻译成 IP 地址", "HTTP/HTTPS：网页数据传输协议", "客户端与服务器：请求与响应的过程", "数据包：信息被拆分成小包传输再重组"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">搜索引擎使用技巧</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">高效搜索信息，快速找到需要的资料。</p>
              <ul className="space-y-2">
                {["关键词选择：用核心词代替长句子", "引号精确搜索：搜索完整短语", "减号排除：排除不相关的关键词", "site: 限定搜索特定网站", "信息筛选：辨别可靠来源与广告"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">密码安全</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">学会创建强密码，保护账户安全。</p>
              <ul className="space-y-2">
                {["弱密码的风险：123456、password 极易被破解", "强密码规则：至少 8 位，包含大小写字母、数字和符号", "不同平台使用不同密码", "双重验证：给账户加第二把锁", "密码管理器：安全存储所有密码"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">识别网络诈骗</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">学会识别常见的网络诈骗手段。</p>
              <ul className="space-y-2">
                {["钓鱼邮件：伪装成官方邮件骗取信息", "虚假中奖信息：天上不会掉馅饼", "冒充熟人诈骗：核实身份再转账", "虚假购物网站：价格过低要警惕", "不点击不明链接，不下载不明附件"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">健康上网</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">培养良好的上网习惯，保护身心健康。</p>
              <ul className="space-y-2">
                {["控制上网时间：每天不超过 2 小时", "保持正确坐姿：眼睛与屏幕距离 50-70cm", "20-20-20 法则：每 20 分钟看 20 英尺外 20 秒", "不沉迷网络游戏，平衡学习与娱乐", "遇到网络欺凌及时告知家长或老师"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
