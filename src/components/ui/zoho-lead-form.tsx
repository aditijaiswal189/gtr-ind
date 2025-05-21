// // // components/ZohoLeadForm.tsx
// // "use client";
// // import Script from "next/script";

// // export default function ZohoLeadForm() {
// //   return (
// //     <>
// //       <div className="zoho-webform">
// //         <div id="zoho-form-container" />
// //         <Script
// //           strategy="afterInteractive"
// //           id="formScript919410000000639005"
// //           src="https://crm.zoho.in/crm/WebFormServeServlet?rid=6667a61d6f3563323baffaa6973706c35f8b7caa4d9d61495177d02da81e2a6f42cf08db21db81adf900962b1e4711c1gid43d23f8c64c6c86a0a9ff895c763c752e904df81f167d860aaf591ea7ffc7bd4&script=$sYG"
// //         />
// //       </div>
// //     </>
// //   );
// // }

// "use client";
// import Script from "next/script";

// export default function ZohoLeadForm() {
//   return (
//     <>
//       <div className="zoho-webform">
//         {/* This DIV ID is required by Zoho’s embed script */}
//         <div id="crmWebToEntityForm"></div>

//         <Script
//           strategy="afterInteractive"
//           id="formScript919410000000639005"
//           src="https://crm.zoho.in/crm/WebFormServeServlet?rid=6667a61d6f3563323baffaa6973706c35f8b7caa4d9d61495177d02da81e2a6f42cf08db21db81adf900962b1e4711c1gid43d23f8c64c6c86a0a9ff895c763c752e904df81f167d860aaf591ea7ffc7bd4&script=$sYG"
//         />
//       </div>
//     </>
//   );
// }
// components/ZohoIframeForm.tsx
// components/ZohoIframeForm.tsx
"use client";

import Script from "next/script";
import React from "react";

interface ZohoIframeFormProps {
  /** The exact URL Zoho gave you in its iFrame snippet */
  src: string;
  /** Optional width/height overrides */
  width?: string;
  height?: string;
}

export default function ZohoIframeForm({
  src,
  width = "100%",
  height = "450px",
}: ZohoIframeFormProps) {
  return (
    <>
      {/* 1) Zoho’s postMessage listener script */}
      <Script id="zoho-webform-listener" strategy="afterInteractive">
        {`
          function wfa_pstMesgFrmFom(evt) {
            if (
              evt.origin === "https://crm.zoho.in" ||
              evt.origin === "https://crm.zohopublic.in"
            ) {
              var loc_obj = JSON.stringify({
                origin: window.location.origin,
                pathname: window.location.pathname,
                search: window.location.search,
                hash: window.location.hash,
              });
              evt.source.postMessage(
                "prnt_wnd_pg_lc_rc_frm_prwindow_" + loc_obj,
                evt.origin
              );
            }
          }
          window.addEventListener("message", wfa_pstMesgFrmFom, false);
        `}
      </Script>

      {/* 2) The Zoho CRM Webform iFrame */}
      <div className="zoho-iframe-container my-8">
        <iframe
          title="Zoho Contact Us Form"
          src={src}
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </>
  );
}
