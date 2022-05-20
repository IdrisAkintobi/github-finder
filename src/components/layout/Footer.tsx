import { githubSvg } from "../../utils/utils";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <div className="footer p-5 bg-gray-700 text-primary-content footer-center">
        {githubSvg}
        <p>Copyright &copy; {year} iDris</p>
      </div>
    </>
  );
};

export default Footer;
