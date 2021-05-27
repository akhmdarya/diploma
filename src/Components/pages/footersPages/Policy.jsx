

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import Wallpaper from '../../Wallpaper';

const styles = {
  main: {
    paddingTop: '50px',
    // backgroundColor: '#cfe8fc',
    minHeight: '85vh',
    position: "relative",
    fontWeight: '600',
    // color: ' rgb(63, 81, 181)',
    textAlign: 'left'

  },
  container: {
    paddingTop: '50px',
  },
  text: {
    textIndent: '1.5em',
    fontSize: '18px',
    fontWeight: '400',
    paddingTop: '10px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
    paddingTop: '30px',
  },
  text_padding:{
    fontSize: '18px',
    fontWeight: '400',
    paddingTop: '10px',
    paddingBottom:'40px'
  }
}
function Policy() {


  return (
    <>
      <Wallpaper></Wallpaper>
      <Container component="div" maxWidth="lg">

        <div  >



          <Typography style={styles.main} component="h1" variant='h4'  >Terms of Service.
<Typography style={styles.text} component="p">By using the gdprchecker.com website checking service (hereinafter - GDPR Checker),
   you agree with the terms and conditions of the service that are laid out on this page.</Typography>


            <Typography style={styles.subtitle} component="p">1. Services
            </Typography>

            <Typography style={styles.text} component="p">1.1. The services provided by GDPR Checker are free and include the following:</Typography>
            <Typography style={styles.text} component="p">- Checking the website for compliance with the EU
            General Data Protection Regulation (EU GDPR) and provide the result of the check according to Standart articles.
            </Typography>
            <Typography style={styles.text} component="p">
              - Checking the encryption and security of sites where data and cookies can be sent
            </Typography>
            <Typography style={styles.text} component="p">
              - Checking the security of a web page that collects User's Personal Data (open ports, viruses).
            </Typography>


            <Typography style={styles.text} component="p">
              1.2. The checks specified in clause 1.1 are based on the key requirements of the GDPR in the processing of personal data of users,
              as well as on the basic principles of the regulation: legality, fairness,
              transparency, accuracy, storage time limits and purpose, integrity, confidentiality and accountability.
            </Typography>

            <Typography style={styles.text} component="p">
              The results are generated on the basis of automatic analysis using various checks of the website for cookies,
              data in local and session storages, sending cookies to other pages, as well as fields on web pages,
              the number of which should be minimal and reasonable, and also give the user the right to give consent to the processing of his data and receipt of mailing lists.
            </Typography>
            <Typography style={styles.text} component="p">
              A positive verification result should not be taken as a guarantee that the site complies with all GDPR requirements.

            </Typography>



            <Typography style={styles.text} component="p">
              A negative result indicates only possible existing problems, according to the specified articles of the regulations,
              and gives recommendations for correcting shortcomings and improving security in the site.
            </Typography>




            <Typography style={styles.text} component="p">
              1.3. The Puppetteer library is used for automated checks such as cookies, domains and storages.
   </Typography>
            <Typography style={styles.text} component="p">

              Puppeteer is a Node.js library maintained by the Chrome Devtools team.
              The library runs a Chrome / Chromium instance and provides a set of high-level APIs to automate the collection of data from websites.
</Typography>


            <Typography style={styles.subtitle} component="p">
              2. Use of the Services
</Typography>

            <Typography style={styles.text} component="p">

              2.1. Using this service,
              you acknowledge that you understand that the products and services we provide do not carry any guarantees of conformity,
              or exemption from GDPR and any other rules. You acknowledge that data privacy laws and
              GDPR is much broader than website modifications and you agree to take responsibility
              to ensure that all necessary steps are taken in accordance with your approach and your commitments.
              You agree to carefully study the products we offer and take action when you believe that
              there may be inconsistencies, deficiencies or gaps in your compliance obligations.
  </Typography>

            <Typography style={styles.text} component="p">2.2. It is strictly prohibited to use the Services through any automated or non-traditional means.</Typography>

            <Typography style={styles.subtitle} component="p">
              3. Confidentiality
</Typography>

            <Typography style={styles.text} component="p">3.1. For checks, a library is used that performs web scraping anonymously.</Typography>
            <Typography style={styles.text} component="p">3.2. We do not register or collect any personal data, including your IP address or browser headers.</Typography>
            <Typography style={styles.text} component="p">3.3. The GDPR Checker does not in any way track site users and their behavior on the site.</Typography>
            <Typography style={styles.text} component="p">3.4. If we receive your personal data,
            you have the right to access, change or transfer your personal data, as well as to restrict the processing
            or delete your personal data from the database. To exercise these rights or to contact us with any other privacy concerns,
 please contact us at the following email address: gdpr.kz@gmail.com</Typography>

            <Typography style={styles.subtitle} component="p">
              4. Copyright
</Typography>
            <Typography style={styles.text} component="p">4.1. The copyright for the materials on the site and its services belongs to the site administration.</Typography>
            <Typography style={styles.text} component="p">4.2. Copying the content of the site without the consent of the administration is prohibited.</Typography>
            <Typography style={styles.text} component="p">4.3. Partial citation of site materials is allowed with a mandatory link to the source page.</Typography>

            <Typography style={styles.subtitle} component="p">
              5. Disclaimer of Warranties and Limitation of Liability
</Typography>
            <Typography style={styles.text} component="p">
              5.1. The GDPR services are provided "as is" without warranty of any kind. You are not guaranteed that:
</Typography>
            <Typography style={styles.text} component="p">- The services will meet your expectations or requirements;</Typography>
            <Typography style={styles.text} component="p">- The provision of the Services will be permanent, uninterrupted, secure or error-free;</Typography>
            <Typography style={styles.text} component="p">- Information obtained when using the Services will be accurate or reliable.</Typography>
            <Typography style={styles.text_padding} component="p">5.2. Under no circumstances will GDPR Checker be liable for any direct, indirect, incidental or
other damages arising from the use, inability to use, or obtain results from the use of the Services.</Typography>


          </Typography>



          {/* <Footer/> */}

        </div>


      </Container>


    </>
  )
}

export default Policy;
