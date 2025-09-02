'use client'

import React, { useState } from 'react'
import { subscribeToNewsletter } from '../actions'
import { trackNewsletterSignup } from '../config/analytics'

export default function Connect() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('+234')
  const [country, setCountry] = useState('')

  const [isSubscribed, setIsSubscribed] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setSubmitMessage({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await subscribeToNewsletter({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: `${countryCode}${phone.trim()}`,
        country: country.trim()
      })

      if (result.success) {
        trackNewsletterSignup()
        setSubmitMessage({ type: 'success', message: result.message })
        setIsSubscribed(true)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setCountryCode('+234')
        setCountry('')
        setTimeout(() => {
          setIsSubscribed(false)
          setSubmitMessage(null)
        }, 5000)
      } else {
        setSubmitMessage({ type: 'error', message: result.message })
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="connect" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-anime-xl text-white text-center mb-4">CONNECT</h2>
        
        {/* Section Underline */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="h-px bg-white mx-4"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Newsletter Signup Form - Mavin Records Style */}
          <div className="text-center mb-12">
            <h3 className="text-futuristic text-white text-center mb-8 text-2xl font-bold uppercase tracking-wider">
              BE THE FIRST TO KNOW
            </h3>
            <p className="text-white text-center mb-8 text-sm">
              Get exclusive updates on new releases, tour dates, and behind-the-scenes content
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name Field */}
                <div className="text-left">
                  <label className="block text-white text-base font-bold uppercase tracking-wider mb-2">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-red-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 py-2 text-xl font-cyberpunk"
                  />
                  <div className="h-px bg-red-600 mt-1"></div>
                </div>

                {/* Last Name Field */}
                <div className="text-left">
                  <label className="block text-white text-base font-bold uppercase tracking-wider mb-2">
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-red-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 py-2 text-xl font-cyberpunk"
                  />
                  <div className="h-px bg-red-600 mt-1"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="text-left">
                <label className="block text-white text-base font-bold uppercase tracking-wider mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-red-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 py-2 text-xl font-cyberpunk"
                />
                <div className="h-px bg-red-600 mt-1"></div>
              </div>

              {/* Phone Number Field */}
              <div className="text-left">
                <label className="block text-white text-base font-bold uppercase tracking-wider mb-2">
                  PHONE NUMBER *
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent border-0 border-b-2 border-red-600 text-white focus:outline-none focus:border-red-500 py-2 appearance-none text-xl font-cyberpunk min-w-[120px]"
                  >
                    <option value="+234" className="bg-black text-white">🇳🇬 +234</option>
                    <option value="+1" className="bg-black text-white">🇺🇸 +1</option>
                    <option value="+44" className="bg-black text-white">🇬🇧 +44</option>
                    <option value="+33" className="bg-black text-white">🇫🇷 +33</option>
                    <option value="+49" className="bg-black text-white">🇩🇪 +49</option>
                    <option value="+39" className="bg-black text-white">🇮🇹 +39</option>
                    <option value="+34" className="bg-black text-white">🇪🇸 +34</option>
                    <option value="+31" className="bg-black text-white">🇳🇱 +31</option>
                    <option value="+32" className="bg-black text-white">🇧🇪 +32</option>
                    <option value="+41" className="bg-black text-white">🇨🇭 +41</option>
                    <option value="+43" className="bg-black text-white">🇦🇹 +43</option>
                    <option value="+45" className="bg-black text-white">🇩🇰 +45</option>
                    <option value="+46" className="bg-black text-white">🇸🇪 +46</option>
                    <option value="+47" className="bg-black text-white">🇳🇴 +47</option>
                    <option value="+358" className="bg-black text-white">🇫🇮 +358</option>
                    <option value="+7" className="bg-black text-white">🇷🇺 +7</option>
                    <option value="+86" className="bg-black text-white">🇨🇳 +86</option>
                    <option value="+81" className="bg-black text-white">🇯🇵 +81</option>
                    <option value="+82" className="bg-black text-white">🇰🇷 +82</option>
                    <option value="+91" className="bg-black text-white">🇮🇳 +91</option>
                    <option value="+55" className="bg-black text-white">🇧🇷 +55</option>
                    <option value="+52" className="bg-black text-white">🇲🇽 +52</option>
                    <option value="+54" className="bg-black text-white">🇦🇷 +54</option>
                    <option value="+56" className="bg-black text-white">🇨🇱 +56</option>
                    <option value="+57" className="bg-black text-white">🇨🇴 +57</option>
                    <option value="+51" className="bg-black text-white">🇵🇪 +51</option>
                    <option value="+27" className="bg-black text-white">🇿🇦 +27</option>
                    <option value="+20" className="bg-black text-white">🇪🇬 +20</option>
                    <option value="+212" className="bg-black text-white">🇲🇦 +212</option>
                    <option value="+213" className="bg-black text-white">🇩🇿 +213</option>
                    <option value="+216" className="bg-black text-white">🇹🇳 +216</option>
                    <option value="+218" className="bg-black text-white">🇱🇾 +218</option>
                    <option value="+220" className="bg-black text-white">🇬🇲 +220</option>
                    <option value="+221" className="bg-black text-white">🇸🇳 +221</option>
                    <option value="+222" className="bg-black text-white">🇲🇷 +222</option>
                    <option value="+223" className="bg-black text-white">🇲🇱 +223</option>
                    <option value="+224" className="bg-black text-white">🇬🇳 +224</option>
                    <option value="+225" className="bg-black text-white">🇨🇮 +225</option>
                    <option value="+226" className="bg-black text-white">🇧🇫 +226</option>
                    <option value="+227" className="bg-black text-white">🇳🇪 +227</option>
                    <option value="+228" className="bg-black text-white">🇹🇬 +228</option>
                    <option value="+229" className="bg-black text-white">🇧🇯 +229</option>
                    <option value="+230" className="bg-black text-white">🇲🇺 +230</option>
                    <option value="+231" className="bg-black text-white">🇱🇷 +231</option>
                    <option value="+232" className="bg-black text-white">🇸🇱 +232</option>
                    <option value="+233" className="bg-black text-white">🇬🇭 +233</option>
                    <option value="+235" className="bg-black text-white">🇹🇩 +235</option>
                    <option value="+236" className="bg-black text-white">🇨🇫 +236</option>
                    <option value="+237" className="bg-black text-white">🇨🇲 +237</option>
                    <option value="+238" className="bg-black text-white">🇨🇻 +238</option>
                    <option value="+239" className="bg-black text-white">🇸🇹 +239</option>
                    <option value="+240" className="bg-black text-white">🇬🇶 +240</option>
                    <option value="+241" className="bg-black text-white">🇬🇦 +241</option>
                    <option value="+242" className="bg-black text-white">🇨🇬 +242</option>
                    <option value="+243" className="bg-black text-white">🇨🇩 +243</option>
                    <option value="+244" className="bg-black text-white">🇦🇴 +244</option>
                    <option value="+245" className="bg-black text-white">🇬🇼 +245</option>
                    <option value="+246" className="bg-black text-white">🇮🇴 +246</option>
                    <option value="+248" className="bg-black text-white">🇸🇨 +248</option>
                    <option value="+249" className="bg-black text-white">🇸🇩 +249</option>
                    <option value="+250" className="bg-black text-white">🇷🇼 +250</option>
                    <option value="+251" className="bg-black text-white">🇪🇹 +251</option>
                    <option value="+252" className="bg-black text-white">🇸🇴 +252</option>
                    <option value="+253" className="bg-black text-white">🇩🇯 +253</option>
                    <option value="+254" className="bg-black text-white">🇰🇪 +254</option>
                    <option value="+255" className="bg-black text-white">🇹🇿 +255</option>
                    <option value="+256" className="bg-black text-white">🇺🇬 +256</option>
                    <option value="+257" className="bg-black text-white">🇧🇮 +257</option>
                    <option value="+258" className="bg-black text-white">🇲🇿 +258</option>
                    <option value="+260" className="bg-black text-white">🇿🇲 +260</option>
                    <option value="+261" className="bg-black text-white">🇲🇬 +261</option>
                    <option value="+262" className="bg-black text-white">🇷🇪 +262</option>
                    <option value="+263" className="bg-black text-white">🇿🇼 +263</option>
                    <option value="+264" className="bg-black text-white">🇳🇦 +264</option>
                    <option value="+265" className="bg-black text-white">🇲🇼 +265</option>
                    <option value="+266" className="bg-black text-white">🇱🇸 +266</option>
                    <option value="+267" className="bg-black text-white">🇧🇼 +267</option>
                    <option value="+268" className="bg-black text-white">🇸🇿 +268</option>
                    <option value="+269" className="bg-black text-white">🇰🇲 +269</option>
                    <option value="+290" className="bg-black text-white">🇸🇭 +290</option>
                    <option value="+291" className="bg-black text-white">🇪🇷 +291</option>
                    <option value="+297" className="bg-black text-white">🇦🇼 +297</option>
                    <option value="+298" className="bg-black text-white">🇫🇴 +298</option>
                    <option value="+299" className="bg-black text-white">🇬🇱 +299</option>
                    <option value="+350" className="bg-black text-white">🇬🇮 +350</option>
                    <option value="+351" className="bg-black text-white">🇵🇹 +351</option>
                    <option value="+352" className="bg-black text-white">🇱🇺 +352</option>
                    <option value="+353" className="bg-black text-white">🇮🇪 +353</option>
                    <option value="+354" className="bg-black text-white">🇮🇸 +354</option>
                    <option value="+355" className="bg-black text-white">🇦🇱 +355</option>
                    <option value="+356" className="bg-black text-white">🇲🇹 +356</option>
                    <option value="+357" className="bg-black text-white">🇨🇾 +357</option>
                    <option value="+358" className="bg-black text-white">🇫🇮 +358</option>
                    <option value="+359" className="bg-black text-white">🇧🇬 +359</option>
                    <option value="+370" className="bg-black text-white">🇱🇹 +370</option>
                    <option value="+371" className="bg-black text-white">🇱🇻 +371</option>
                    <option value="+372" className="bg-black text-white">🇪🇪 +372</option>
                    <option value="+373" className="bg-black text-white">🇲🇩 +373</option>
                    <option value="+374" className="bg-black text-white">🇦🇲 +374</option>
                    <option value="+375" className="bg-black text-white">🇧🇾 +375</option>
                    <option value="+376" className="bg-black text-white">🇦🇩 +376</option>
                    <option value="+377" className="bg-black text-white">🇲🇨 +377</option>
                    <option value="+378" className="bg-black text-white">🇸🇲 +378</option>
                    <option value="+380" className="bg-black text-white">🇺🇦 +380</option>
                    <option value="+381" className="bg-black text-white">🇷🇸 +381</option>
                    <option value="+382" className="bg-black text-white">🇲🇪 +382</option>
                    <option value="+383" className="bg-black text-white">🇽🇰 +383</option>
                    <option value="+385" className="bg-black text-white">🇭🇷 +385</option>
                    <option value="+386" className="bg-black text-white">🇸🇮 +386</option>
                    <option value="+387" className="bg-black text-white">🇧🇦 +387</option>
                    <option value="+389" className="bg-black text-white">🇲🇰 +389</option>
                    <option value="+420" className="bg-black text-white">🇨🇿 +420</option>
                    <option value="+421" className="bg-black text-white">🇸🇰 +421</option>
                    <option value="+423" className="bg-black text-white">🇱🇮 +423</option>
                    <option value="+500" className="bg-black text-white">🇫🇰 +500</option>
                    <option value="+501" className="bg-black text-white">🇧🇿 +501</option>
                    <option value="+502" className="bg-black text-white">🇬🇹 +502</option>
                    <option value="+503" className="bg-black text-white">🇸🇻 +503</option>
                    <option value="+504" className="bg-black text-white">🇭🇳 +504</option>
                    <option value="+505" className="bg-black text-white">🇳🇮 +505</option>
                    <option value="+506" className="bg-black text-white">🇨🇷 +506</option>
                    <option value="+507" className="bg-black text-white">🇵🇦 +507</option>
                    <option value="+508" className="bg-black text-white">🇵🇲 +508</option>
                    <option value="+509" className="bg-black text-white">🇭🇹 +509</option>
                    <option value="+590" className="bg-black text-white">🇬🇵 +590</option>
                    <option value="+591" className="bg-black text-white">🇧🇴 +591</option>
                    <option value="+592" className="bg-black text-white">🇬🇾 +592</option>
                    <option value="+593" className="bg-black text-white">🇪🇨 +593</option>
                    <option value="+594" className="bg-black text-white">🇬🇫 +594</option>
                    <option value="+595" className="bg-black text-white">🇵🇾 +595</option>
                    <option value="+596" className="bg-black text-white">🇲🇶 +596</option>
                    <option value="+597" className="bg-black text-white">🇸🇷 +597</option>
                    <option value="+598" className="bg-black text-white">🇺🇾 +598</option>
                    <option value="+599" className="bg-black text-white">🇧🇶 +599</option>
                    <option value="+670" className="bg-black text-white">🇹🇱 +670</option>
                    <option value="+672" className="bg-black text-white">🇦🇶 +672</option>
                    <option value="+673" className="bg-black text-white">🇧🇳 +673</option>
                    <option value="+674" className="bg-black text-white">🇳🇷 +674</option>
                    <option value="+675" className="bg-black text-white">🇵🇬 +675</option>
                    <option value="+676" className="bg-black text-white">🇹🇴 +676</option>
                    <option value="+677" className="bg-black text-white">🇸🇧 +677</option>
                    <option value="+678" className="bg-black text-white">🇻🇺 +678</option>
                    <option value="+679" className="bg-black text-white">🇫🇯 +679</option>
                    <option value="+680" className="bg-black text-white">🇵🇼 +680</option>
                    <option value="+681" className="bg-black text-white">🇼🇫 +681</option>
                    <option value="+682" className="bg-black text-white">🇨🇰 +682</option>
                    <option value="+683" className="bg-black text-white">🇳🇺 +683</option>
                    <option value="+684" className="bg-black text-white">🇦🇸 +684</option>
                    <option value="+685" className="bg-black text-white">🇼🇸 +685</option>
                    <option value="+686" className="bg-black text-white">🇰🇮 +686</option>
                    <option value="+687" className="bg-black text-white">🇳🇨 +687</option>
                    <option value="+688" className="bg-black text-white">🇹🇻 +688</option>
                    <option value="+689" className="bg-black text-white">🇵🇫 +689</option>
                    <option value="+690" className="bg-black text-white">🇹🇰 +690</option>
                    <option value="+691" className="bg-black text-white">🇫🇲 +691</option>
                    <option value="+692" className="bg-black text-white">🇲🇭 +692</option>
                    <option value="+850" className="bg-black text-white">🇰🇵 +850</option>
                    <option value="+852" className="bg-black text-white">🇭🇰 +852</option>
                    <option value="+853" className="bg-black text-white">🇲🇴 +853</option>
                    <option value="+855" className="bg-black text-white">🇰🇭 +855</option>
                    <option value="+856" className="bg-black text-white">🇱🇦 +856</option>
                    <option value="+880" className="bg-black text-white">🇧🇩 +880</option>
                    <option value="+886" className="bg-black text-white">🇹🇼 +886</option>
                    <option value="+960" className="bg-black text-white">🇲🇻 +960</option>
                    <option value="+961" className="bg-black text-white">🇱🇧 +961</option>
                    <option value="+962" className="bg-black text-white">🇯🇴 +962</option>
                    <option value="+963" className="bg-black text-white">🇸🇾 +963</option>
                    <option value="+964" className="bg-black text-white">🇮🇶 +964</option>
                    <option value="+965" className="bg-black text-white">🇰🇼 +965</option>
                    <option value="+966" className="bg-black text-white">🇸🇦 +966</option>
                    <option value="+967" className="bg-black text-white">🇾🇪 +967</option>
                    <option value="+968" className="bg-black text-white">🇴🇲 +968</option>
                    <option value="+970" className="bg-black text-white">🇵🇸 +970</option>
                    <option value="+971" className="bg-black text-white">🇦🇪 +971</option>
                    <option value="+972" className="bg-black text-white">🇮🇱 +972</option>
                    <option value="+973" className="bg-black text-white">🇧🇭 +973</option>
                    <option value="+974" className="bg-black text-white">🇶🇦 +974</option>
                    <option value="+975" className="bg-black text-white">🇧🇹 +975</option>
                    <option value="+976" className="bg-black text-white">🇲🇳 +976</option>
                    <option value="+977" className="bg-black text-white">🇳🇵 +977</option>
                    <option value="+992" className="bg-black text-white">🇹🇯 +992</option>
                    <option value="+993" className="bg-black text-white">🇹🇲 +993</option>
                    <option value="+994" className="bg-black text-white">🇦🇿 +994</option>
                    <option value="+995" className="bg-black text-white">🇬🇪 +995</option>
                    <option value="+996" className="bg-black text-white">🇰🇬 +996</option>
                    <option value="+998" className="bg-black text-white">🇺🇿 +998</option>
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    required
                    className="flex-1 bg-transparent border-0 border-b-2 border-red-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 py-2 text-xl font-cyberpunk"
                  />
                </div>
                <div className="h-px bg-red-600 mt-1"></div>
              </div>

              {/* Country Field */}
              <div className="text-left">
                <label className="block text-white text-base font-bold uppercase tracking-wider mb-2">
                  COUNTRY
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-red-600 text-white focus:outline-none focus:border-red-500 py-2 appearance-none text-xl font-cyberpunk"
                >
                  <option value="" className="bg-black text-white">Select Country</option>
                  <option value="Afghanistan" className="bg-black text-white">Afghanistan</option>
                  <option value="Albania" className="bg-black text-white">Albania</option>
                  <option value="Algeria" className="bg-black text-white">Algeria</option>
                  <option value="Argentina" className="bg-black text-white">Argentina</option>
                  <option value="Armenia" className="bg-black text-white">Armenia</option>
                  <option value="Australia" className="bg-black text-white">Australia</option>
                  <option value="Austria" className="bg-black text-white">Austria</option>
                  <option value="Azerbaijan" className="bg-black text-white">Azerbaijan</option>
                  <option value="Bahamas" className="bg-black text-white">Bahamas</option>
                  <option value="Bahrain" className="bg-black text-white">Bahrain</option>
                  <option value="Bangladesh" className="bg-black text-white">Bangladesh</option>
                  <option value="Barbados" className="bg-black text-white">Barbados</option>
                  <option value="Belarus" className="bg-black text-white">Belarus</option>
                  <option value="Belgium" className="bg-black text-white">Belgium</option>
                  <option value="Belize" className="bg-black text-white">Belize</option>
                  <option value="Benin" className="bg-black text-white">Benin</option>
                  <option value="Bhutan" className="bg-black text-white">Bhutan</option>
                  <option value="Bolivia" className="bg-black text-white">Bolivia</option>
                  <option value="Bosnia and Herzegovina" className="bg-black text-white">Bosnia and Herzegovina</option>
                  <option value="Botswana" className="bg-black text-white">Botswana</option>
                  <option value="Brazil" className="bg-black text-white">Brazil</option>
                  <option value="Brunei" className="bg-black text-white">Brunei</option>
                  <option value="Bulgaria" className="bg-black text-white">Bulgaria</option>
                  <option value="Burkina Faso" className="bg-black text-white">Burkina Faso</option>
                  <option value="Burundi" className="bg-black text-white">Burundi</option>
                  <option value="Cambodia" className="bg-black text-white">Cambodia</option>
                  <option value="Cameroon" className="bg-black text-white">Cameroon</option>
                  <option value="Canada" className="bg-black text-white">Canada</option>
                  <option value="Cape Verde" className="bg-black text-white">Cape Verde</option>
                  <option value="Central African Republic" className="bg-black text-white">Central African Republic</option>
                  <option value="Chad" className="bg-black text-white">Chad</option>
                  <option value="Chile" className="bg-black text-white">Chile</option>
                  <option value="China" className="bg-black text-white">China</option>
                  <option value="Colombia" className="bg-black text-white">Colombia</option>
                  <option value="Comoros" className="bg-black text-white">Comoros</option>
                  <option value="Congo" className="bg-black text-white">Congo</option>
                  <option value="Costa Rica" className="bg-black text-white">Costa Rica</option>
                  <option value="Croatia" className="bg-black text-white">Croatia</option>
                  <option value="Cuba" className="bg-black text-white">Cuba</option>
                  <option value="Cyprus" className="bg-black text-white">Cyprus</option>
                  <option value="Czech Republic" className="bg-black text-white">Czech Republic</option>
                  <option value="Denmark" className="bg-black text-white">Denmark</option>
                  <option value="Djibouti" className="bg-black text-white">Djibouti</option>
                  <option value="Dominica" className="bg-black text-white">Dominica</option>
                  <option value="Dominican Republic" className="bg-black text-white">Dominican Republic</option>
                  <option value="Ecuador" className="bg-black text-white">Ecuador</option>
                  <option value="Egypt" className="bg-black text-white">Egypt</option>
                  <option value="El Salvador" className="bg-black text-white">El Salvador</option>
                  <option value="Equatorial Guinea" className="bg-black text-white">Equatorial Guinea</option>
                  <option value="Eritrea" className="bg-black text-white">Eritrea</option>
                  <option value="Estonia" className="bg-black text-white">Estonia</option>
                  <option value="Ethiopia" className="bg-black text-white">Ethiopia</option>
                  <option value="Fiji" className="bg-black text-white">Fiji</option>
                  <option value="Finland" className="bg-black text-white">Finland</option>
                  <option value="France" className="bg-black text-white">France</option>
                  <option value="Gabon" className="bg-black text-white">Gabon</option>
                  <option value="Gambia" className="bg-black text-white">Gambia</option>
                  <option value="Georgia" className="bg-black text-white">Georgia</option>
                  <option value="Germany" className="bg-black text-white">Germany</option>
                  <option value="Ghana" className="bg-black text-white">Ghana</option>
                  <option value="Greece" className="bg-black text-white">Greece</option>
                  <option value="Grenada" className="bg-black text-white">Grenada</option>
                  <option value="Guatemala" className="bg-black text-white">Guatemala</option>
                  <option value="Guinea" className="bg-black text-white">Guinea</option>
                  <option value="Guinea-Bissau" className="bg-black text-white">Guinea-Bissau</option>
                  <option value="Guyana" className="bg-black text-white">Guyana</option>
                  <option value="Haiti" className="bg-black text-white">Haiti</option>
                  <option value="Honduras" className="bg-black text-white">Honduras</option>
                  <option value="Hungary" className="bg-black text-white">Hungary</option>
                  <option value="Iceland" className="bg-black text-white">Iceland</option>
                  <option value="India" className="bg-black text-white">India</option>
                  <option value="Indonesia" className="bg-black text-white">Indonesia</option>
                  <option value="Iran" className="bg-black text-white">Iran</option>
                  <option value="Iraq" className="bg-black text-white">Iraq</option>
                  <option value="Ireland" className="bg-black text-white">Ireland</option>
                  <option value="Israel" className="bg-black text-white">Israel</option>
                  <option value="Italy" className="bg-black text-white">Italy</option>
                  <option value="Jamaica" className="bg-black text-white">Jamaica</option>
                  <option value="Japan" className="bg-black text-white">Japan</option>
                  <option value="Jordan" className="bg-black text-white">Jordan</option>
                  <option value="Kazakhstan" className="bg-black text-white">Kazakhstan</option>
                  <option value="Kenya" className="bg-black text-white">Kenya</option>
                  <option value="Kiribati" className="bg-black text-white">Kiribati</option>
                  <option value="Kuwait" className="bg-black text-white">Kuwait</option>
                  <option value="Kyrgyzstan" className="bg-black text-white">Kyrgyzstan</option>
                  <option value="Laos" className="bg-black text-white">Laos</option>
                  <option value="Latvia" className="bg-black text-white">Latvia</option>
                  <option value="Lebanon" className="bg-black text-white">Lebanon</option>
                  <option value="Lesotho" className="bg-black text-white">Lesotho</option>
                  <option value="Liberia" className="bg-black text-white">Liberia</option>
                  <option value="Libya" className="bg-black text-white">Libya</option>
                  <option value="Liechtenstein" className="bg-black text-white">Liechtenstein</option>
                  <option value="Lithuania" className="bg-black text-white">Lithuania</option>
                  <option value="Luxembourg" className="bg-black text-white">Luxembourg</option>
                  <option value="Madagascar" className="bg-black text-white">Madagascar</option>
                  <option value="Malawi" className="bg-black text-white">Malawi</option>
                  <option value="Malaysia" className="bg-black text-white">Malaysia</option>
                  <option value="Maldives" className="bg-black text-white">Maldives</option>
                  <option value="Mali" className="bg-black text-white">Mali</option>
                  <option value="Malta" className="bg-black text-white">Malta</option>
                  <option value="Marshall Islands" className="bg-black text-white">Marshall Islands</option>
                  <option value="Mauritania" className="bg-black text-white">Mauritania</option>
                  <option value="Mauritius" className="bg-black text-white">Mauritius</option>
                  <option value="Mexico" className="bg-black text-white">Mexico</option>
                  <option value="Micronesia" className="bg-black text-white">Micronesia</option>
                  <option value="Moldova" className="bg-black text-white">Moldova</option>
                  <option value="Monaco" className="bg-black text-white">Monaco</option>
                  <option value="Mongolia" className="bg-black text-white">Mongolia</option>
                  <option value="Montenegro" className="bg-black text-white">Montenegro</option>
                  <option value="Morocco" className="bg-black text-white">Morocco</option>
                  <option value="Mozambique" className="bg-black text-white">Mozambique</option>
                  <option value="Myanmar" className="bg-black text-white">Myanmar</option>
                  <option value="Namibia" className="bg-black text-white">Namibia</option>
                  <option value="Nauru" className="bg-black text-white">Nauru</option>
                  <option value="Nepal" className="bg-black text-white">Nepal</option>
                  <option value="Netherlands" className="bg-black text-white">Netherlands</option>
                  <option value="New Zealand" className="bg-black text-white">New Zealand</option>
                  <option value="Nicaragua" className="bg-black text-white">Nicaragua</option>
                  <option value="Niger" className="bg-black text-white">Niger</option>
                  <option value="Nigeria" className="bg-black text-white">Nigeria</option>
                  <option value="North Korea" className="bg-black text-white">North Korea</option>
                  <option value="North Macedonia" className="bg-black text-white">North Macedonia</option>
                  <option value="Norway" className="bg-black text-white">Norway</option>
                  <option value="Oman" className="bg-black text-white">Oman</option>
                  <option value="Pakistan" className="bg-black text-white">Pakistan</option>
                  <option value="Palau" className="bg-black text-white">Palau</option>
                  <option value="Palestine" className="bg-black text-white">Palestine</option>
                  <option value="Panama" className="bg-black text-white">Panama</option>
                  <option value="Papua New Guinea" className="bg-black text-white">Papua New Guinea</option>
                  <option value="Paraguay" className="bg-black text-white">Paraguay</option>
                  <option value="Peru" className="bg-black text-white">Peru</option>
                  <option value="Philippines" className="bg-black text-white">Philippines</option>
                  <option value="Poland" className="bg-black text-white">Poland</option>
                  <option value="Portugal" className="bg-black text-white">Portugal</option>
                  <option value="Qatar" className="bg-black text-white">Qatar</option>
                  <option value="Romania" className="bg-black text-white">Romania</option>
                  <option value="Russia" className="bg-black text-white">Russia</option>
                  <option value="Rwanda" className="bg-black text-white">Rwanda</option>
                  <option value="Saint Kitts and Nevis" className="bg-black text-white">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia" className="bg-black text-white">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines" className="bg-black text-white">Saint Vincent and the Grenadines</option>
                  <option value="Samoa" className="bg-black text-white">Samoa</option>
                  <option value="San Marino" className="bg-black text-white">San Marino</option>
                  <option value="Sao Tome and Principe" className="bg-black text-white">Sao Tome and Principe</option>
                  <option value="Saudi Arabia" className="bg-black text-white">Saudi Arabia</option>
                  <option value="Senegal" className="bg-black text-white">Senegal</option>
                  <option value="Serbia" className="bg-black text-white">Serbia</option>
                  <option value="Seychelles" className="bg-black text-white">Seychelles</option>
                  <option value="Sierra Leone" className="bg-black text-white">Sierra Leone</option>
                  <option value="Singapore" className="bg-black text-white">Singapore</option>
                  <option value="Slovakia" className="bg-black text-white">Slovakia</option>
                  <option value="Slovenia" className="bg-black text-white">Slovenia</option>
                  <option value="Solomon Islands" className="bg-black text-white">Solomon Islands</option>
                  <option value="Somalia" className="bg-black text-white">Somalia</option>
                  <option value="South Africa" className="bg-black text-white">South Africa</option>
                  <option value="South Korea" className="bg-black text-white">South Korea</option>
                  <option value="South Sudan" className="bg-black text-white">South Sudan</option>
                  <option value="Spain" className="bg-black text-white">Spain</option>
                  <option value="Sri Lanka" className="bg-black text-white">Sri Lanka</option>
                  <option value="Sudan" className="bg-black text-white">Sudan</option>
                  <option value="Suriname" className="bg-black text-white">Suriname</option>
                  <option value="Sweden" className="bg-black text-white">Sweden</option>
                  <option value="Switzerland" className="bg-black text-white">Switzerland</option>
                  <option value="Syria" className="bg-black text-white">Syria</option>
                  <option value="Taiwan" className="bg-black text-white">Taiwan</option>
                  <option value="Tajikistan" className="bg-black text-white">Tajikistan</option>
                  <option value="Tanzania" className="bg-black text-white">Tanzania</option>
                  <option value="Thailand" className="bg-black text-white">Thailand</option>
                  <option value="Timor-Leste" className="bg-black text-white">Timor-Leste</option>
                  <option value="Togo" className="bg-black text-white">Togo</option>
                  <option value="Tonga" className="bg-black text-white">Tonga</option>
                  <option value="Trinidad and Tobago" className="bg-black text-white">Trinidad and Tobago</option>
                  <option value="Tunisia" className="bg-black text-white">Tunisia</option>
                  <option value="Turkey" className="bg-black text-white">Turkey</option>
                  <option value="Turkmenistan" className="bg-black text-white">Turkmenistan</option>
                  <option value="Tuvalu" className="bg-black text-white">Tuvalu</option>
                  <option value="Uganda" className="bg-black text-white">Uganda</option>
                  <option value="Ukraine" className="bg-black text-white">Ukraine</option>
                  <option value="United Arab Emirates" className="bg-black text-white">United Arab Emirates</option>
                  <option value="United Kingdom" className="bg-black text-white">United Kingdom</option>
                  <option value="United States" className="bg-black text-white">United States</option>
                  <option value="Uruguay" className="bg-black text-white">Uruguay</option>
                  <option value="Uzbekistan" className="bg-black text-white">Uzbekistan</option>
                  <option value="Vanuatu" className="bg-black text-white">Vanuatu</option>
                  <option value="Vatican City" className="bg-black text-white">Vatican City</option>
                  <option value="Venezuela" className="bg-black text-white">Venezuela</option>
                  <option value="Vietnam" className="bg-black text-white">Vietnam</option>
                  <option value="Yemen" className="bg-black text-white">Yemen</option>
                  <option value="Zambia" className="bg-black text-white">Zambia</option>
                  <option value="Zimbabwe" className="bg-black text-white">Zimbabwe</option>
                </select>
                <div className="h-px bg-red-600 mt-1"></div>
              </div>







              {/* Privacy Policy */}
              <div className="text-center">
                <p className="text-white text-xs leading-relaxed">
                  EMAILS FROM SHINE TTW WILL BE SENT BY OR ON BEHALF OF SHINE TTW. YOU CAN UNSUBSCRIBE AT ANY TIME.
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-800 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-12 text-lg uppercase tracking-wider transition-all duration-300"
                >
                  {isSubmitting ? 'SUBMITTING...' : isSubscribed ? 'SUBMITTED' : 'SUBMIT'}
                </button>
              </div>
              
              {/* Error Messages Only */}
              {submitMessage && submitMessage.type === 'error' && (
                <div className="text-center mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                  <p className="text-sm font-medium">{submitMessage.message}</p>
                </div>
              )}
            </form>
          </div>

          

        </div>
      </div>
    </section>
  )
}
