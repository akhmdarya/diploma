import { createStyles, TableContainer, TableHead, TableRow, TableCell, Paper, Table, TableBody, Typography, Container } from '@material-ui/core';
import React, { useState } from 'react';



import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
    createStyles({

        root: {

            backgroundColor: "#87CEFA",
            // flex: "0 0 auto",

            flexWrap: "wrap"
        },
        footer: {
            backgroundColor: "#4169E1",
            // bottom: "0",
            bottom: "0",
            // position: "fixed",
            width: "100%",
        },
        tableContainer: {
            maxWidth: '1250px'
        },
        tableMain: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50px'
        },
        flag: {
            backgroundColor: 'yellow'
        },
        title: {
            paddingTop: '50px',
        },
        text: {
            fontSize: '18px',
            fontWeight: '400',
            paddingTop: '10px',
        },
        subtitle: {
            fontSize: '20px',
            fontWeight: '600',
            paddingTop: '30px',
        },
        text_padding: {
            fontSize: '18px',
            fontWeight: '400',
            paddingTop: '10px',
            paddingBottom: '40px'
        },
        mainText:{
            textAlign: 'left'
        }
    }))

const FlagInfo = (flagName) => {
    // const {flagName} = useParams();
    const flag = flagName.match.params.flagName;


    const [, setValue] = useState("Recents")
    const results = [
       
        { name: 'google_no_anonymip', description: 'No anonymization of IP addresses that are sent to Google Analytics is requested.' },
        { name: 'Google_DoubleClick_Ads', description: 'Ads are most likely not required for the functionality of the site and thus sharing IP address and user agent with Google for this purpose requires consent.' },
        { name: 'li_ads', description: 'Ads are most likely not required for the functionality of the site and thus sharing IP address and user agent with Microsoft for this purpose requires consent.' },
        { name: 'Facebook_Connect', description: 'Before people click the facebook connect/login button, their IP address and user agent is already shared with Facebook.' },
        { name: 'Chartbeat_Analytics', description: 'This analytics service requires visitors consent according to it s General Terms and Privacy Policy.' },
        { name: 'nr_in_us', description: 'New Relic has seperate domains for Browser Application Monitoring monitoring in the European Union.' },

        { name: 'CookieControl', description: 'This cookie is used to remember a user’s choice about cookies on ico.org.uk. Where users have previously indicated a preference, that user’s preference will be stored in this cookie.' },
        { name: 'language', description: 'This cookie is used to remember any selection a user has made about language on ico.org.uk, using the language selector, so that the site will be shown in their chosen language when returning to the site. ' },
        { name: '__zjc*', description: 'This cookie is set by a third-party web application firewall from Dyn to help maintain the security and performance of our website. Some traffic may receive a challenge to check if it is genuine and if it is, a cookie is set so the user isn’t challenged again.' },
        { name: 'ASP.NET_SessionId', description: 'This cookie is essential for the breach notification form – the form that public electronic communications service providers use to notify the ICO of a security breach – to operate. It is set only for those people using the form. This cookie is deleted when you close your browser.' },
        { name: 'VISITOR_INFO1_LIVE*', description: 'VISITOR_INFO1_LIVE - *expires after eight months' },
        { name: '_ym_isad', description: 'Это сторонние файлы cookie, размещенные Яндексом, которые позволяют нам использовать службу Yandex Metrics.Эти файлы cookie позволяют анонимно отслеживать, как посетители получают доступ и просматривают наш веб-сайт, что позволяет нам оптимизировать и улучшать наш сервис.' },
        { name: 'no_ssl', description: "It seems that there are requests done with 'http://' instead of 'https://' (no SSL)." },
        { name: '_ga', description: "Allows to distinguish between users." },
        { name: '_gid', description: "Allows to distinguish between users." },
        { name: '_gat', description: "Limits the frequency of requests. If Google Analytics is supported using Google Tag Manager, the file will be named _dc_gtm_ <property- id>" },
        { name: '_ym_uid', description: "Allows to distinguish between users." },
        { name: '_ym_d', description: "Stores the date of the first visit of a visitor to the site" },
        { name: '_gid', description: "Allows to distinguish between users." },
    ];



    const classes = useStyles();
    return (

        <>
<Container component="div" maxWidth="lg">

        <div className={classes.mainText}>
            <Typography className={classes.title} component="h1" variant='h4' >Cookie consent</Typography>


            <Typography className={classes.subtitle} component="p">About cookies
            </Typography>

            <Typography className={classes.text} component="p">Cookies are small data files that 
            are placed on your computer or mobile device when you visit a website. Cookies are widely 
            used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. 
            </Typography>

            <Typography className={classes.text} component="p">Data stored in a cookie is created by the server upon your connection.
            This data is labeled with an ID unique to you and your computer.

When the cookie is exchanged between your computer and the network server, the server reads the ID and knows what information to specifically serve to you.
            </Typography>

            <Typography className={classes.subtitle} component="p">Types of cookies
            </Typography>

            <Typography className={classes.subtitle} component="p">First-party Cookies
            </Typography>
            <Typography className={classes.text} component="p">First-party cookies are set by the website visited by the user. 
            The data collected using first-party cookies is used for purposes like calculating pageviews, sessions, and number of users. 
            </Typography>

            <Typography className={classes.text} component="p">Primarily, publishers have access to data collected using first-party cookies,
             which can later be shared with advertisers or agencies for ad targeting. Apart from that, analytics tools – like Google Analytics
             – use first-party cookies to understand user behavior and present it in tabular or graphical form for the publisher’s understanding.
            </Typography>

            <Typography className={classes.subtitle} component="p">Third-party Cookies
            </Typography>

            <Typography className={classes.text} component="p">Third-party cookies are set by domains that are not directly visited by the user.
             This happens when publishers add third-party elements (like chatbot, social plugins, or ads) on their website. 
            </Typography>


            <Typography className={classes.text} component="p">Once installed, third-party cookies also track users and save their information for ad targeting and behavioral advertising.
             For example: Let’s say that you added a YouTube link to one of your blogs. Whenever this YouTube link gets a click, 
             a YouTube cookie will be added to the user’s browser. This cookie can track him/her until it expires.
             </Typography>


             <Typography className={classes.subtitle} component="p">Session Cookies
            </Typography>

            <Typography className={classes.text} component="p">Session cookies either expire immediately or within a few seconds of the user leaving the web browser. 
            Among other uses, these cookies are used by e-commerce websites to remember the product placed in cart by the user,
             to keep users logged in, and to calculate each user session for analytical purposes.
            </Typography>
            <Typography className={classes.text} component="p">For example, if an e-commerce website does not use session cookies, then the items added in cart will be removed by the time the user reaches the checkout page. And the server will forget the user and treat him/her like a completely new visitor. 
            </Typography>


            <Typography className={classes.subtitle} component="p">Persistent Cookies
            </Typography>

            <Typography className={classes.text} component="p">As the name suggests, persistent cookies stay on the user’s browser for a very long time. 
            Generally, persistent cookies are required to have an expiration date which could be anything between a second to 10 years.
            </Typography>
            <Typography className={classes.text} component="p">Permanent cookies, also known as 'persistent cookies', remain in operation even after the web browser has closed. For example they can remember login details and passwords so web users don't need to re-enter them every time they use a site.
            </Typography>

            <Typography className={classes.subtitle} component="p">Secure Cookies
            </Typography>

            <Typography className={classes.text} component="p">Only HTTPS websites can set secure cookies, i.e., cookies with encrypted data. Mostly, the checkout or payment pages of e-commerce websites have secure cookies to facilitate safer transactions. Similarly, online banking websites are required to use secure cookies for security reasons.
            </Typography>
           

</div>
</Container>


            <div className={classes.tableMain}>

                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow className={classes.mainn}>
                                <TableCell align="left">name</TableCell>
                                <TableCell align="left">description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {results.map((result) => (

                                result.name === flag ? (

                                    <><TableRow key={result.name}>
                                        <TableCell className={classes.flag} align="left">{flag}</TableCell>
                                        <TableCell className={classes.flag} align="left">{result.description}</TableCell>
                                    </TableRow>


                                    </>)
                                    :
                                    (<><TableRow key={result.name}>

                                        <TableCell align="left">{result.name}</TableCell>
                                        <TableCell align="left">{result.description}</TableCell>
                                    </TableRow>

                                    </>)
                            )
                            )}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div></>
    );
};
export default FlagInfo