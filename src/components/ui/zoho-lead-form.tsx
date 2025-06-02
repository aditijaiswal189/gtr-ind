"use client"
import React, { useEffect, useRef, useState } from "react"

export default function ZohoStyledForm() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=56247ad28c4e404ae54d2b9bf60dca5a35d293ea7913d793bbc292ff8a64bae315ca4e28c30985d1c4a71176f519281bgide27b55f5ffb795dafa577dc3e7d660c144cb4268b228e2c42da999b1fb392cf7gid884a9aea9188534b828836251b65d77180868f40c6d7c1a39f75e506f348d862gidfb0c5175a16ab4e88c9104d8ad1516a8add6c950520d1a37f548cb4b9011d141&tw=489843073114ac741c684d329440a9a664912ba3036e7073c0ccf7e43585c385"
    script.id = "wf_anal"
    document.body.appendChild(script)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
      setSubmitted(true)
      form.reset()
    } catch {
      alert("Submission failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center relative">
      <form
        ref={formRef}
        name="WebToLeads919410000000639005"
        method="POST"
        action="https://crm.zoho.in/crm/WebToLeadForm"
        acceptCharset="UTF-8"
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm backdrop-filter"
        onSubmit={handleSubmit}
      >
        <div className="p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-primary mb-6">Contact Us</h2>

          <input type="hidden" name="xnQsjsdp" value="071dfc7b7bac29eebe79206a0da0696fb5df4c321445b1163b8210cef34ca220" />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="hidden" name="xmIwtLD" value="0ea72f51dc9bd29e67306e38d09f51fb3bef78e11cd9f1ed1d6e5c0439fa53831c056b7f005c20f8804eb1b3b13d5bc6" />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="https://gtr-india.vercel.app" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "First Name", name: "First Name", type: "text" },
              { label: "Last Name", name: "Last Name", type: "text" },
              { label: "Email", name: "LEADCF10", type: "email", className: "sm:col-span-2" },
              { label: "Phone", name: "Phone", type: "tel", className: "sm:col-span-2" },
            ].map((field) => (
              <div key={field.name} className={field.className}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label}
                  <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg \
                           shadow-sm transition duration-200 ease-in-out
                           focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30
                           placeholder-gray-400 text-gray-900"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  required
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Message <span className="text-primary ml-1">*</span>
            </label>
            <textarea
              name="Description"
              rows={5}
              className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg \
                       shadow-sm transition duration-200 ease-in-out
                       focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30
                       placeholder-gray-400 text-gray-900 resize-none"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-end">
            <button
              type="reset"
              className="order-2 sm:order-1 px-6 py-2.5 rounded-lg text-gray-700 bg-gray-100 \
                       hover:bg-gray-200 active:bg-gray-300 \
                       transition duration-200 font-medium text-sm"
            >
              Reset
            </button>
            <button
              type="submit"
              className="order-1 sm:order-2 px-6 py-2.5 rounded-lg text-white bg-primary \
                       hover:bg-primary/80 active:bg-primary \
                       transition duration-200 font-medium text-sm formsubmit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {submitted && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center space-y-4">
            <h3 className="text-xl font-semibold text-primary">Thank You!</h3>
            <p className="text-gray-700">Your form has been successfully submitted.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/70 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
