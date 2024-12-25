"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '../globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faWallet, faTools, faUsers, faShop, faCreditCard, faTags , faHouse } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const englishOptions = [
    {label:"settings",href:"/settings",icon: faHouse},
    { label: "General Settings", href: "/settings/general", icon: faCog },
    { label: "Payment Settings", href: "/settings/payment", icon: faCreditCard },
    { label: "Wallet", href: "/settings/wallet", icon: faWallet },
    { label: "Temporary Maintenance Time", href: "/settings/maintenance", icon: faTools },
    { label: "Domain Settings (Soon)", href: "#", icon: faTools },
    { label: "Users Settings", href: "/settings/users", icon: faUsers },
    { label: "Technical Support", href: "/settings/support", icon: faTools },
    { label: "Branches", href: "/settings/branches", icon: faShop },
    { label: "Employees Permissions", href: "/settings/employees", icon: faUsers },
    { label: "Delivery Settings (Soon)", href: "#", icon: faTools },
    { label: "Coupons", href: "/settings/coupons", icon: faTags },
  ];

  const arabicOptions = [
    { label: "الرئيسية", href: "/settings", icon: faHouse },
    { label: "الإعدادات العامة", href: "/settings/general", icon: faCog },
    { label: "إعدادات الدفع", href: "/settings/payment", icon: faCreditCard },
    { label: "المحفظة", href: "/settings/wallet", icon: faWallet },
    {
      label: "وقت الصيانة المؤقت",
      href: "/settings/maintenance",
      icon: faTools,
    },
    { label: "إعدادات النطاق (قريبًا)", href: "#", icon: faTools },
    { label: "إعدادات المستخدمين", href: "/settings/users", icon: faUsers },
    { label: "الدعم الفني", href: "/settings/support", icon: faTools },
    { label: "الفروع", href: "/settings/branches", icon: faShop },
    { label: "صلاحيات الموظفين", href: "/settings/employees", icon: faUsers },
    { label: "إعدادات التوصيل (قريبًا)", href: "#", icon: faTools },
    { label: "القسائم", href: "/settings/coupons", icon: faTags },
  ];

  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(null);

  // Set language from localStorage on initial render
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      setLanguage("en");
    }
    setLoading(false); 
  }, []); 

  // Set the settings options based on the current language
  const settingsOptions = language === "en" ? englishOptions : arabicOptions;

  useEffect(() => {
    const currentIndex = settingsOptions.findIndex(
      (option) => option.href === pathname
    );
    setActiveIndex(currentIndex);
  }, [pathname, settingsOptions]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); 
  };

  if (loading) {
    return null;
  }
//retun ==================================================
  return (
    <aside
      style={{
        width: "270px",
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#00414D",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
        direction: "rtl",
      }}
    >
      <span className="logo"></span>
      <h2 style={{ color: "#fff", marginBottom: "20px" }}>
        {/* {language === "en" ? "Settings" : "الإعدادات"} */}
      </h2>
      <ul style={{ padding: 0 }}>
        {settingsOptions.map((option, index) => (
          <li
            className={`p-5 my-2 rounded-lg cursor-pointer ${
              activeIndex === index ? "bg-[#002d35]" : "hover:bg-[#002d35]"
            }`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <Link
              href={option.href}
              className={`flex justify-between items-center text-white no-underline ${
                activeIndex === index ? "text-[#a2f2de]" : "text-white"
              }`}
            >
              <span>{option.label}</span>
              <FontAwesomeIcon
                icon={option.icon}
                className={`ml-2 ${
                  activeIndex === index ? "text-[#a2f2de]" : "text-white"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleLanguage}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#006d7a",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transform:"translate(-50px)",
        }}
      >
        {language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      </button>
    </aside>
  );
};

export default Sidebar;
