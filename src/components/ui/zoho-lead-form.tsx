"use client"

import React from "react"

interface ZohoIframeFormProps {
  src: string
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
      {/* Safer way to embed a postMessage listener without build-time eval */}
      <script
        id="zoho-webform-listener"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
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
            })();
          `,
        }}
      />

      {/* iFrame embed */}
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
  )
}
