import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Twiter from "../../../assets/twitter.png";
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10">
    <nav className="space-y-2 border- border-white">
        <span className="font-bold text-5xl text-white">KeenKeeper</span>
        <p className="text-[16px] font-normal text-white">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <span className="text-white text-[20px] font-medium">Social Links</span>
        <div className="grid grid-flow-col gap-4 mt-0">
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twiter} alt="" />
        </div>
    </nav>
       <div className="border-b border-gray-500 w-full"></div>
    <nav className="">
        <div 
        className="flex justify-between items-center w-[150%] gap-4 text-gray-500 text-[16px] font-medium">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside> 
            <ul className="flex gap-5">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
            </ul>
        </div>
    </nav>
  
</footer>
    );
};

export default Footer;