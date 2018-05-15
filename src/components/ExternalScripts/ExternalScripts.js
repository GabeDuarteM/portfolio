const ExternalScripts = () =>
  process.env.NODE_ENV === "production" ? (
    <React.Fragment>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-106120004-2"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date),gtag('config','UA-106120004-2');`,
        }}
      />

      {/* Hotjar Tracking Code for https://www.gabrielduarte.tech/ */}
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `(function(b,c,d,e,f,g){b.hj=b.hj||function(){(b.hj.q=b.hj.q||[]).push(arguments)},b._hjSettings={hjid:848161,hjsv:6},f=c.getElementsByTagName('head')[0],g=c.createElement('script'),g.async=1,g.src=d+b._hjSettings.hjid+e+b._hjSettings.hjsv,f.appendChild(g)})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    </React.Fragment>
  ) : null

export default ExternalScripts
