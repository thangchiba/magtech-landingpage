'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormState } from 'react-dom'

export default function LandingPage() {
  const homeRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const clientsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const clientsContainerRef = useRef<HTMLDivElement>(null)

  const submitContact = ()=>{
    console.log("Do nothing");
  }
  const [state, formAction] = useFormState(submitContact, null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scroll = (direction: 'left' | 'right') => {
    if (clientsContainerRef.current) {
      const scrollAmount = 300
      const newScrollLeft = clientsContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      clientsContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
          <div className="w-full p-8 h-24 flex items-center justify-between">
            <div className="text-4xl font-bold">Magtech</div>
            <nav className="hidden md:flex items-center gap-8 text-2xl">
              <button onClick={() => scrollToSection(homeRef)} className="hover:text-purple-600">Home</button>
              <button onClick={() => scrollToSection(servicesRef)} className="hover:text-purple-600">Services</button>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-purple-600">About</button>
              <button onClick={() => scrollToSection(clientsRef)} className="hover:text-purple-600">Clients</button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-purple-600">Contact</button>
            </nav>
            <a
                href="tel:(+84)35-956-8799"
                className="bg-purple-600 hover:bg-purple-700 text-xl rounded-2xl p-4 text-white inline-block text-center"
            >
              Call Now
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section ref={homeRef} className="pt-24 pb-12">
          <div className="w-full px-0">
            <div className="relative h-[800px]">
              <Image
                  src="/images/landingpage.avif"
                  alt="Hero Background"
                  fill
                  className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col p-16">
                <h1 className="text-8xl font-bold mb-4">
                  技術とデザインを<br/>融合し、新価値を
                </h1>
                <p className="text-4xl mt-5">
                  Magtechが関わることで、世界の可能性を<br/>どこまでも伸ばしていきたい
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section ref={servicesRef} className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-8 text-purple-500">提供サービス</h2>
            <h2 className="text-center text-4xl font-bold mb-8">最新の技術、最適な提案を提供します。</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {/* Education Program */}
              <div className="p-8 rounded-lg text-center mt-5">
                <div className="mb-4 flex justify-center items-center">
                  <Image
                      src="/icon1.svg"
                      alt="Education Icon"
                      width={128}
                      height={128}
                      className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">教育プログラム事業</h3>
                <p>
                  私たちは、企業の研修、大学の学生、そして学校の生徒に向けて、オーダーメイドの教育デジタルコンテンツを作成いたします。最新のテクノロジーと豊富なノウハウを駆使し、受講者の学習意欲を高め、効果的な知識習得をサポートします。
                </p>
              </div>

              {/* Application Development */}
              <div className="p-8 rounded-lg text-center">
                <div className="mb-4 flex justify-center items-center">
                  <Image
                      src="/icon2.svg"
                      alt="App Development Icon"
                      width={128}
                      height={128}
                      className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">アプリケーション開発事業</h3>
                <p>
                  多様化するビジネス環境において、IT技術の活用はもはや選択肢ではなく、必須事項となっています。
                  私たちは、Web、AI、アプリ、VR、ARといった最先端技術を駆使し、お客様のビジネス課題を解決し、新たな成長の機会を創出します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1A1A44] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-8">この数値をお誇り</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xl md:text-3xl">
              {/* Experience Years */}
              <div className="flex flex-col items-center">
                <div className="font-bold text-6xl">3</div>
                <p className="mt-2 text-sm md:text-base">経験数</p>
              </div>
              <div className="text-6xl">・</div>
              {/* Development Engineers */}
              <div className="flex flex-col items-center">
                <div className="font-bold text-6xl">47</div>
                <p className="mt-2 text-sm md:text-base">開発エンジニア</p>
              </div>
              <div className="text-6xl">・</div>
              {/* Customers */}
              <div className="flex flex-col items-center">
                <div className="font-bold text-6xl">30+</div>
                <p className="mt-2 text-sm md:text-base">顧客数</p>
              </div>
              <div className="text-6xl">・</div>
              {/* Partner Companies */}
              <div className="flex flex-col items-center">
                <div className="font-bold text-6xl">9</div>
                <p className="mt-2 text-sm md:text-base">パートナー企業</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="bg-white">
          <div className="w-full">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left Side - Image with Text */}
              <div className="relative h-[800px]">
                {/* Image */}
                <Image
                    src="/images/about1.avif"
                    alt="About Left Image"
                    fill
                    className="object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center bg-black/50 text-white text-left px-16 py-16">
                  <h2 className="text-4xl font-bold mb-6">私たち</h2>
                  <p className="text-lg leading-relaxed">
                    私たちが提供するソリューションは、単なる技術的なサポートにとどまりません。
                    <br />
                    ベトナムの若者たちに最新の技術を学び、活用してもらうことで、彼ら自身が社会をより良くする力を持っていることを感じてもらいたい。
                    <br />
                    そして、その技術が世界中で評価され、認められることを目指しています。
                    Magtechが関わることで、世界の可能性をどこまでも伸ばしていきたいと考えています。
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-[800px]">
                {/* Image */}
                <Image
                    src="/images/about2.avif"
                    alt="About Right Image"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Clients Section */}
        <section ref={clientsRef} className="py-12 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-8">お取引先</h2>
            <div className="relative">
              {/* Left Scroll Button */}
              <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
              >
                ←
              </button>

              {/* Clients Container */}
              <div
                  ref={clientsContainerRef}
                  className="flex overflow-x-auto gap-8 px-4 scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex-none w-[300px] aspect-video relative snap-center">
                      <Image
                          src={`/cus${i}.svg`}
                          alt={`Client ${i}`}
                          fill
                          className="object-contain"
                      />
                    </div>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">お問い合わせ</h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left Side - Contact Information */}
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">一緒に未来を作ろう</h3>
                <p className="text-lg mb-4">
                  私たちのサービスについてご興味をお持ちいただきありがとうございます。下記の方法でお気軽にお問い合わせください。
                </p>
                <p className="mb-4 text-lg">
                  <strong>住所:</strong><br />
                  29T1 Hoang Dao Thuy, Trung Hoa, Cau Giay, Ha Noi, Viet Nam
                </p>
                <p className="mb-4 text-lg">
                  <strong>電話番号:</strong><br />
                  (+84)35-956-8799
                </p>
                <p className="text-lg">
                  <strong>メール:</strong><br />
                  contact@magtech.com
                </p>
              </div>

              {/* Right Side - Contact Form */}
              <div>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">姓 *</label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">名 *</label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス *</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">お問い合わせ内容</label>
                    <Textarea id="message" name="message" rows={6} />
                  </div>
                  <div className="text-left">
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 px-8">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
  )
}

