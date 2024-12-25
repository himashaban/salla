import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#00414D] p-4 text-white text-center fixed bottom-0 left-0 right-0 flex flex-row-reverse justify-center align-items-center
    alignContent: center  flex-wrap-reverse"
    >
      <p className="p-2">
        عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة!
      </p>
      <button className="flex-2 text-[#004e5c] bg-[#BAF3E6] hover:bg-[#76E8CD] p-2 rounded">
        انشئ حسابك الخاص
      </button>
    </footer>
  );
};

export default Footer;
