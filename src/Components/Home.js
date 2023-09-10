import React, { useEffect } from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = () => {
  const { i18n, t } = useTranslation(["home"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="home">
      <img
        src="https://s3-alpha-sig.figma.com/img/7b23/de0d/18b0de5eaadd2c2d747276a31c8ae75c?Expires=1694995200&Signature=UABFcONRLBNe-9nvky~DgrgYBiHwQZM7bacboFa-CPkk0GIHgyoxmUzSpOYkOWaZzWc3WEXW9aodiaZKXxZ0UAVTv-bs1xdPtmlB8mGQMYlNOU7mZ~~piQONShDn1olI20n-mtfjmKGCCHFxxMbCCQ-7Jl-h3bCKT~FB83p3JMvOx4QzHcqqQ~QnxS8NlwXbuKWb~Jz50ILsf2NvuYa23Fb~nzF1C6CxraGM8jPstxnPOwmRgbavUcleVTHokD7syh-C0Ko5c4lShgz0leyVBA91qCFjrzTb0dc4zrZyjgSt564sKx6~xxMwJp2~-kFyVeRTJvXKhI84vv9vIJecUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        width="100%"
        height="100%"
      ></img>
      <div className="home_content">
        <p
          style={{
            fontSize: "63px",
            fontWeight: "700",
            fontStyle: "normal",
            fontFamily: "cursive",
            color: "white",
            margin: 0,
          }}
        >
          {t("title")}
        </p>
        <p
          style={{
            fontSize: "36px",
            fontWeight: "500",
            fontStyle: "normal",
            fontFamily: "cursive",
            color: "white",
            margin: 0,
          }}
        >
          {t("desc")}
        </p>
      </div>
    </div>
  );
};

export default Home;
