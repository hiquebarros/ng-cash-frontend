import { useEffect, useState } from "react";
import Final from "./final.png";
import ngLogo3 from "../../assets/ng-logo3.png";
import { DivLogo, DivRights, DivUp, FooterContainer, FooterContent } from "./styles";
import UpButton from "./up.png";

const Footer = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (scrollUp) => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <DivLogo>
          <img src={ngLogo3}></img>
        </DivLogo>
        <DivRights>
          <p>
            © NG.CASH SERVIÇOS FINANCEIROS LTDA. | CNPJ 40.940.251/0001-70
          </p>
        </DivRights>
        {backToTopButton && (
          <DivUp onClick={scrollUp}>
            <img src={UpButton} alt="button" />
          </DivUp>
        )}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
