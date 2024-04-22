import { LanguageType, useLanguage } from "@/store/languageStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  const [langList] = useState([
    {
      text: "中文",
      code: LanguageType.zh,
    },
    {
      text: "英文",
      code: LanguageType.en,
    },
    {
      text: "日文",
      code: LanguageType.ja,
    },
  ]);
  return (
    <>
      <div className="tw-flex tw-w-screen tw-h-screen tw-flex-col">
        <p className="tw-text-5xl tw-text-center tw-my-10 tw-text-cyan-900">{t("hello")}</p>
        <div className="tw-flex tw-justify-center">
          {langList.map((item) => {
            return (
              <button v-for="item in langList" key={item.code} className="tw-text-cyan-700 tw-mx-2" onClick={() => changeLanguage(item.code)}>
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
