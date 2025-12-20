import { useTranslation } from "react-i18next";

export function AboutPortafolio() {
  const { t } = useTranslation();
  
  return <div className='p-4 text-white md:flex md:flex-col md:justify-center md:items-start md:h-screen'>
    <p className="pb-4" dangerouslySetInnerHTML={{ __html: t('aboutPortafolio.text1') }} />
    <p className="pb-4" dangerouslySetInnerHTML={{ __html: t('aboutPortafolio.text2') }} />
    <p className="pb-4" dangerouslySetInnerHTML={{ __html: t('aboutPortafolio.text3') }} />
    <p className="pb-4" dangerouslySetInnerHTML={{ __html: t('aboutPortafolio.text4') }} />
  </div>
}