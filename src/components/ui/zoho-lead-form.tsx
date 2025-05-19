// components/ZohoLeadForm.tsx
"use client";
import Script from "next/script";

export default function ZohoLeadForm() {
  return (
    <>
      <div className="zoho-webform">
        <div id="zoho-form-container" />
        <Script
          strategy="afterInteractive"
          id="formScript919410000000639005"
          src="https://crm.zoho.in/crm/WebFormServeServlet?rid=6667a61d6f3563323baffaa6973706c35f8b7caa4d9d61495177d02da81e2a6f42cf08db21db81adf900962b1e4711c1gid43d23f8c64c6c86a0a9ff895c763c752e904df81f167d860aaf591ea7ffc7bd4&script=$sYG"
        />
      </div>
    </>
  );
}
