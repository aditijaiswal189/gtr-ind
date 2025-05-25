"use client"

import Script from "next/script"
import React from "react"

interface ZohoIframeFormProps {
  /** The exact URL Zoho gave you in its iFrame snippet */
  src: string
  /** Optional width/height overrides */
  width?: string
  height?: string
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
      <style jsx global>{`
        .zcwf_col_lab label {
          font-size: 0.875rem;
          color: #374151;
          font-weight: 500;
        }

        .zcwf_col_fld input[type="text"],
        .zcwf_col_fld textarea,
        .zcwf_col_fld select {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .zcwf_col_fld input[type="text"]:focus,
        .zcwf_col_fld textarea:focus,
        .zcwf_col_fld select:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }

        .zcwf_button.formsubmit {
          background-color: #2563eb;
          color: white;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s;
        }

        .zcwf_button.formsubmit:hover {
          background-color: #1d4ed8;
        }

        .zcwf_button[type="reset"] {
          background-color: #e5e7eb;
          color: #1f2937;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          margin-left: 0.5rem;
          transition: background-color 0.2s;
        }

        .zcwf_button[type="reset"]:hover {
          background-color: #d1d5db;
        }

        #crmWebToEntityForm {
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          max-width: 40rem;
          margin: 2rem auto;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </>
  )
}
