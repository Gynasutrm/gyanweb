import React from 'react'
import './Privacy.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Privacy = () => {
  return (
    <section className="row_full">
      <div className="row_full pageBanner" style={{background:`url(${images_path}reachus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Privacy Policy</h2>
        </div>
      </div>


      <div className="row_full privacyBox">
        <div className="container">
          <div className="row_full boxsdElm">
            <div className="row_full leftPvc">
              <div className="leftElm">
                <h3 className="row_full">GSPL COMMITMENT TO DATA PRIVACY PROTECTION</h3>
                <p className="row_full">Protecting the security and privacy of your personal data is important to GSPL; therefore, we conduct our business in compliance with applicable laws on data privacy protection and data security. We hope the policy outlined below will help you understand what data GSPL may collect, how GSPL uses and safeguards that data and with whom we may share it</p>
                <p className="row_full">This Privacy Policy explains how GSPL collects personal and non-personal information, classified as mandatory or voluntary and uses, discloses and protects such information through the website. 'Personal Information' is data that can be used to uniquely identify or contact a single person ("Personal Information"). Personal Information for the purposes of this Policy shall include, but not limited to, information regarding your name, address, telephone number, date of birth, gender, e-mail address etc.</p>
                <p className="row_full">You may need to provide GSPL your personal information during the course of using some services of the brand, for instance, creating a User ID, provide information while registering on the Website, or provide financial information while making an online purchase, upload content, participate in any online survey or contest, communicate with GSPL by phone, email or otherwise, provide reviews for the content available on the Website</p>
              </div>
              <img src={`${images_path}img_2.jpg`}/>
            </div>
            <div className="row_full">
              <h3>THE INFORMATION GSPL COLLECTS</h3>
              <p>User-provided Information: When you register for, browse and use the website, you may provide GSPL what is generally called "personally identifiable information" (such as your full name, email address, postal mailing address, and/or home/mobile telephone number). If you decide to register through or otherwise grant access to a 3rd party social networking or integrated service that we may make available ("Integrated Service"), such as Facebook Connect or Google, GSPL may also collect any such "personally identifiable information" that you have provided to the Integrated Service from the account you have with the Integrated Service. You should check your privacy settings on each Integrated Service to understand and change the information sent to us through each Integrated Service. Please review each Integrated Service’s terms of use and privacy policies carefully before using their services and connecting to our Website. From time to time, GSPL may also ask you optionally to provide other information. If you choose to provide such information, during registration or otherwise, you are giving GSPL the permission to use and store it in consistence with this policy. Therefore, please understand that when you sign in with GSPL, you are not anonymous to us</p>
              <p><strong>"Cookies" Information:</strong> When you visit the Website, whether or not you are a registered member, we may send one or more cookies - small text files containing a string of alphanumeric characters to your computer. Cookies remember information about your activities on a website. GSPL may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to the Website. Persistent cookies can be removed. Please review your web browser "Help" file to learn the proper way to modify your cookie settings. However, without cookies you will not have access to certain services and features on the Website. Third party advertisements displayed in connection with the Website may also contain cookies set by internet advertisers. We do not control these cookies and users of the Website should check the privacy policy of the 3rd party advertiser to see whether and how it uses cookies.</p>
              <p><strong>"Automatically Collected" Information:</strong> When you use the Website, we may automatically record certain information from your browser by using different types of technology, including standard log files, "clear gifs" or "web beacons." This "automatically collected" information may include your Internet Protocol (IP) address, browser type, internet service provider (ISP), referring or exit pages, click stream data, operating system and the date and time when you visit the Website. Additionally, we may record certain information regarding your use of features that GSPL may make available on the Website, such as the number of problems you have attempted, the number of videos you have viewed and the amount of time spent to complete a problem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy
