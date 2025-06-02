// "use client";
// import { useEffect } from "react";

// export default function ZohoStyledForm() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=56247ad28c4e404ae54d2b9bf60dca5a35d293ea7913d793bbc292ff8a64bae315ca4e28c30985d1c4a71176f519281bgide27b55f5ffb795dafa577dc3e7d660c144cb4268b228e2c42da999b1fb392cf7gid884a9aea9188534b828836251b65d77180868f40c6d7c1a39f75e506f348d862gidfb0c5175a16ab4e88c9104d8ad1516a8add6c950520d1a37f548cb4b9011d141&tw=489843073114ac741c684d329440a9a664912ba3036e7073c0ccf7e43585c385";
//     script.id = "wf_anal";
//     document.body.appendChild(script);
//   }, []);

//   const checkMandatory = () => {
//     const required = [
//       { name: "First Name", label: "First Name" },
//       { name: "Last Name", label: "Last Name" },
//       { name: "LEADCF10", label: "Email" },
//       { name: "Phone", label: "Phone" },
//       { name: "Description", label: "Message" },
//     ];

//     for (const field of required) {
//       const el = document.forms["WebToLeads919410000000639005"][field.name];
//       if (el && el.value.trim() === "") {
//         alert(`${field.label} cannot be empty.`);
//         el.focus();
//         return false;
//       }
//     }

//     document.querySelector(".formsubmit")?.setAttribute("disabled", "true");
//     return true;
//   };

//   return (
//     <form
//       name="WebToLeads919410000000639005"
//       method="POST"
//       action="https://crm.zoho.in/crm/WebToLeadForm"
//       acceptCharset="UTF-8"
//       className="bg-white max-w-2xl mx-auto px-8 py-10 rounded-2xl shadow-xl border border-gray-200"
//       onSubmit={() => {
//         return checkMandatory();
//       }}
//     >
//       <input
//         type="hidden"
//         name="xnQsjsdp"
//         value="071dfc7b7bac29eebe79206a0da0696fb5df4c321445b1163b8210cef34ca220"
//       />
//       <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//       <input
//         type="hidden"
//         name="xmIwtLD"
//         value="0ea72f51dc9bd29e67306e38d09f51fb3bef78e11cd9f1ed1d6e5c0439fa53831c056b7f005c20f8804eb1b3b13d5bc6"
//       />
//       <input type="hidden" name="actionType" value="TGVhZHM=" />
//       <input
//         type="hidden"
//         name="returnURL"
//         value="https://gtr-india.vercel.app"
//       />

//       {[
//         { label: "First Name", name: "First Name", type: "text" },
//         { label: "Last Name", name: "Last Name", type: "text" },
//         { label: "Email", name: "LEADCF10", type: "email" },
//         { label: "Phone", name: "Phone", type: "tel" },
//       ].map((field) => (
//         <div key={field.name} className="mb-6">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             {field.label} <span className="text-primary">*</span>
//           </label>
//           <input
//             type={field.type}
//             name={field.name}
//             className="w-full px-2 py-1 border border-primary/10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 text-sm"
//             required
//           />
//         </div>
//       ))}

//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           Message <span className="text-red-500">*</span>
//         </label>
//         <textarea
//           name="Description"
//           rows={5}
//           className="w-full px-2 py-1 border border-primary/10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 text-sm"
//           required
//         ></textarea>
//       </div>

//       <div className="flex justify-end gap-4">
//         <button
//           type="submit"
//           className="formsubmit bg-primary hover:bg-primary/40 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
//         >
//           Submit
//         </button>
//         <button
//           type="reset"
//           className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-lg transition duration-200"
//         >
//           Reset
//         </button>
//       </div>
//     </form>
//   );
// }
"use client";
import React, { useEffect } from "react";

export default function ZohoStyledForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=56247ad28c4e404ae54d2b9bf60dca5a35d293ea7913d793bbc292ff8a64bae315ca4e28c30985d1c4a71176f519281bgide27b55f5ffb795dafa577dc3e7d660c144cb4268b228e2c42da999b1fb392cf7gid884a9aea9188534b828836251b65d77180868f40c6d7c1a39f75e506f348d862gidfb0c5175a16ab4e88c9104d8ad1516a8add6c950520d1a37f548cb4b9011d141&tw=489843073114ac741c684d329440a9a664912ba3036e7073c0ccf7e43585c385";
    script.id = "wf_anal";
    document.body.appendChild(script);
  }, []);

  const checkMandatory = () => {
    const required = [
      { name: "First Name", label: "First Name" },
      { name: "Last Name", label: "Last Name" },
      { name: "LEADCF10", label: "Email" },
      { name: "Phone", label: "Phone" },
      { name: "Description", label: "Message" },
    ];

    for (const field of required) {
      const el = document.forms["WebToLeads919410000000639005"][field.name];
      if (el && el.value.trim() === "") {
        alert(`${field.label} cannot be empty.`);
        el.focus();
        return false;
      }
    }

    document.querySelector(".formsubmit")?.setAttribute("disabled", "true");
    return true;
  };

  return (
    <div
      className="min-h-screen
    
       p-4 sm:p-6 md:p-8 flex items-center justify-center"
    >
      <form
        name="WebToLeads919410000000639005"
        method="POST"
        action="https://crm.zoho.in/crm/WebToLeadForm"
        acceptCharset="UTF-8"
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm backdrop-filter"
        onSubmit={() => checkMandatory()}
      >
        <div className="p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Contact Us
          </h2>

          <input
            type="hidden"
            name="xnQsjsdp"
            value="071dfc7b7bac29eebe79206a0da0696fb5df4c321445b1163b8210cef34ca220"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="hidden"
            name="xmIwtLD"
            value="0ea72f51dc9bd29e67306e38d09f51fb3bef78e11cd9f1ed1d6e5c0439fa53831c056b7f005c20f8804eb1b3b13d5bc6"
          />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input
            type="hidden"
            name="returnURL"
            value="https://gtr-india.vercel.app"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "First Name", name: "First Name", type: "text" },
              { label: "Last Name", name: "Last Name", type: "text" },
              {
                label: "Email",
                name: "LEADCF10",
                type: "email",
                className: "sm:col-span-2",
              },
              {
                label: "Phone",
                name: "Phone",
                type: "tel",
                className: "sm:col-span-2",
              },
            ].map((field) => (
              <div key={field.name} className={field.className}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label}
                  <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg 
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
              Message
              <span className="text-primary ml-1">*</span>
            </label>
            <textarea
              name="Description"
              rows={5}
              className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg 
                       shadow-sm transition duration-200 ease-in-out
                       focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                       placeholder-gray-400 text-gray-900 resize-none"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-end">
            <button
              type="reset"
              className="order-2 sm:order-1 px-6 py-2.5 rounded-lg text-gray-700 bg-gray-100 
                       hover:bg-gray-200 active:bg-gray-300 
                       transition duration-200 font-medium text-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-400/20"
            >
              Reset
            </button>
            <button
              type="submit"
              className="order-1 sm:order-2 px-6 py-2.5 rounded-lg text-white bg-primary 
                       hover:bg-primary/50 active:bg-primary
                       transition duration-200 font-medium text-sm
                       focus:outline-none focus:ring-2 focus:ring-primary/60
                       disabled:opacity-50 disabled:cursor-not-allowed formsubmit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
