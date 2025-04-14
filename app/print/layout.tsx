import type { Metadata } from 'next';
import Script from 'next/script';
import './print-styles.css'; // Updated import path

export const metadata: Metadata = {
  title: 'Duong Cong Tung - Printable Resume',
  description: 'Professional resume of Duong Cong Tung, Senior Full Stack Developer',
};

export default function PrintLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MG6T1L2418`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MG6T1L2418');
          `}
        </Script>
      </head>
      <body className="print-resume-body">
        <main className="print-layout-container">
          {children}

          <Script id="print-handler">
            {`
              // Ensure proper rendering before printing
              window.onbeforeprint = function() {
                document.body.classList.add('printing');
              };
              
              window.onafterprint = function() {
                document.body.classList.remove('printing');
              };

              // Auto-print when page loads (optional)
              window.addEventListener('load', () => {
                setTimeout(() => {
                  window.print();
                }, 500);
              });
            `}
          </Script>
        </main>
      </body>
    </html>
  );
}
