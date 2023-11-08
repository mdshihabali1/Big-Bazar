import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-4 text-center mt-5">
            <div className="footer-container">
                <div className="item1">
                    {/* <PrivacyModal /> */}
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    {/* <FontAwesomeIcon icon={FaCopyright} />{" "} */}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>
             
            </div>
        </footer>
    );
};

export default Footer;