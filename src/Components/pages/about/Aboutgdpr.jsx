
import Header from '../../Header'
import { Link } from 'react-router-dom';

import SpacingGrid from '../../Grid'
import SimpleContainer from '../../Container'
import ResultPage from '../ResultPage'
// import ResultPage from './Components/pages/login/LoginPage'
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../../footer/Footer.jsx';
import FlagInfo from '../../flags/FlagInfo'
import rightsofsubjects from "../../../assets/images/gdprsubject.png";
import principles from "../../../assets/images/principles.png";
import processing2 from "../../../assets/images/processing2.jpg";
import confData from "../../../assets/images/confData.png";
import { createStyles, useMediaQuery, Avatar, AppBar, BottomNavigationAction, Button, Container, IconButton, Toolbar, Typography, useTheme, BottomNavigation, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


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
    text_padding: {
        fontSize: '18px',
        fontWeight: '400',
        paddingTop: '10px',
        paddingBottom: '40px'
    }

}


const useStyles = makeStyles((theme) =>
    createStyles({

        root: {
            //   padding:'0 10% 0 10%',
            boxShadow: 'none',
            // backgroundColor: "#87CEFA",
            // flex: "0 0 auto",
            display: 'flex',
            alignItems: 'center',
            // background: '#f7f7f7',
            width: ' 100%',
            [theme.breakpoints.down('sm')]: {

                display: 'flex',
                flexDirection: 'column'
            },
        },
        footer: {

            // backgroundColor: "#4169E1",
            // bottom: "0",
            bottom: "0",
            // position: "fixed",
            width: "100%",
        },
        book: {
            paddingTop: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        },
        cardActionArea: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'none',
            // flexDirection:'column',
            [theme.breakpoints.down('sm')]: {

                display: 'flex',
                flexDirection: 'column'
            },
        },
        img: {
            height: '100%',
            width: '550px',

        },
        img1: {
            height: '100%',
            width: '350px',

        },
        img2: {
            height: '100%',
            width: '350px',

        },
        button: {
            padding: '0 25px',
            margin: ' 6px 0 0',
            borderRadius: '20px',
            // background: '#77b748',

            color: ' #fff',
            font: '400 13px/38px ',
        },
        cardAction: {
            display: 'flex',
            flexDirection: 'column',
        },
        descr: {
            padding: '0 10% 0 10%',
        },
        cardContent1: {
            paddingLeft: '7%'
        },
        cardContent: {
            paddingLeft: '7%'
        },
        cardContent2: {
            paddingLeft: '1%'
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
        }



    }))
function Aboutgdpr() {
    const classes = useStyles();
    return (
        <>
            <Wallpaper></Wallpaper>
            <Container component="div" maxWidth="lg">

                <div  >
                    <Typography style={styles.main} component="h1" variant='h4'  >General Data Protection Regulation (General Data Protection
                    Regulation)

                         <Typography style={styles.subtitle} component="p">Legislative process with regard to legislation on
                         privacy and data protection</Typography>
                        <Typography style={styles.text} component="p">
                            In May 2018, Europe switched to the updated rules for the processing of personal data established by the General Data Protection Regulation (EU Regulation 2016/679 of April 27, 2016 or GDPR - General Data Protection Regulation). This regulation, which has direct effect in all 28 EU countries, will replace the Personal Data Protection Directive 95/46 / EC of 24 October 1995.
                            The GDPR is aimed primarily at giving citizens control over their own personal data, and at simplifying international economic relations by unifying regulation within the EU.

                        </Typography>
                        <Typography style={styles.text} component="p">GDPR (General Data Protection Regulation, or General Protection Rules
                        data) is a vault
                        regulations for companies that collect and process data from users of the European Union online
                        The Internet. The new regulation aims to increase the level of protection and give citizens control
                        over your data. Failure to comply with the rules by companies leads to the imposition of large fines (up to
                         4% of the annual income of the business, or 20 million euros).</Typography>
                        <Typography style={styles.text} component="p">The requirements of the act relate to both organizations registered in the EU,
                        and companies located
                        in other countries, provided that they provide services to citizens of the European Union, or otherwise
                         collect data from such users in a way.</Typography>




                        <Typography style={styles.subtitle} component="p">Key principles of the GDPR:
            </Typography>





                        <div className={classes.book}>

                            <Card className={classes.root}>
                                {/* <CardActionArea className={classes.cardActionArea}> */}
                                <CardMedia className={classes.img1}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"

                                    image={principles}
                                    title="Contemplative Reptile" />
                                <CardContent className={classes.cardContent1}>
                                    <Typography style={styles.text} component="p" align='left'>1.	Legality, fairness and transparency - there must be legal grounds under the GDPR for the collection and use of data, non-violation of any laws, openness, honesty from start to finish on the use of personal data.</Typography>
                                    <Typography style={styles.text} component="p">2. 	Purpose limitation - processing should be limited to what has been declared to the data subject.</Typography>
                                    <Typography style={styles.text} component="p">3. 	Data minimization - using an adequate amount of data to meet the goals.</Typography>
                                    <Typography style={styles.text} component="p">4. 	Accuracy - personal data must be accurate and must not be misleading.</Typography>
                                    <Typography style={styles.text} component="p">5. 	Limiting data storage - do not store data longer than necessary, periodically audit data and delete unused data.</Typography>
                                    <Typography style={styles.text} component="p">6. 	Integrity and confidentiality / security - keep data in a safe place.</Typography>
                                    <Typography style={styles.text} component="p">7. 	Accountability - responsibility for the processing of personal data; the appointment of a data protection officer (DPO).</Typography>


                                </CardContent>
                                {/* </CardActionArea> */}
                                <CardActions className={classes.cardAction}>


                                </CardActions>
                            </Card>

                        </div>


                        <Typography style={styles.text} component="p">Personal data is any information relating to an
                        identifiable natural person (data subject) by which it can be identified.
                        Such information includes, but is not limited to, the name, location data, one or more factors of the physical,
                     physiological, genetic, mental, economic, cultural or social identity of that individual. Even IP addresses can also be personal data.</Typography>
                        <Typography style={styles.subtitle} component="p">Personal data includes:</Typography>
                        <Typography style={styles.text} component="p"> -	Full Name,</Typography>
                        <Typography style={styles.text} component="p"> -	year, month, date and place of birth,</Typography>
                        <Typography style={styles.text} component="p" >-	address, family, social, property status, education, profession, income,</Typography>
                        <Typography style={styles.text} component="p"> -	other personal identification information. For example: passport data, financial statements, medical records, biometrics.</Typography>

                        <Typography style={styles.subtitle} component="p">The law expanded the concept of personal data, introduced the following concepts:</Typography>

                        <Typography style={styles.text} component="p"> -	Data controller - a person who determines the purposes and means of processing personal data, for example, a social network or a taxi service.</Typography>
                        <Typography style={styles.text} component="p">-	Data processor - a person who processes personal data on behalf of the controller, for example, a cloud service provider.</Typography>
                        <Typography style={styles.text} component="p"> -	Data subject (person) - the person to whom the data concerns.</Typography>
                        <Typography style={styles.text} component="p">-	Special categories of personal data - data about race, political opinion, biometric data that allows you to identify a specific person, health data, etc.</Typography>




                        <div className={classes.book}>

                            <Card className={classes.root}>
                                <div className={classes.column}>
                                    <CardMedia className={classes.img}
                                        component="img"

                                        height="140"

                                        image={rightsofsubjects}
                                    // title="Contemplative Reptile" 
                                    />
                                    {/* <Typography style={styles.text} align='center' component="p">Rights of Data Subject</Typography> */}
                                </div>
                                <CardContent className={classes.cardContent}>
                                    <Typography style={styles.subtitle} align='center' component="p"> Information to be provided to persons whose
                         data is collected.</Typography>
                                    <Typography style={styles.text} component="p" align='left'>When collecting their data, people should be clear
                         informed at least about:</Typography>
                                    <Typography style={styles.text} component="p">1. 	The identity and contact details of the controller and, where applicable, the representative
                                     controller;</Typography>
                                    <Typography style={styles.text} component="p">2. 	Contact details of the data protection officer, where applicable;</Typography>
                                    <Typography style={styles.text} component="p">3. The purpose of processing for which the personal data are intended, as well as the legal
                                     basis for processing;</Typography>
                                    <Typography style={styles.text} component="p">4. 	Recipients or categories of recipients of personal data, if any
                                     are available;</Typography>
                                    <Typography style={styles.text} component="p">5. 	Legal basis for
                                     processing their data;</Typography>
                                    <Typography style={styles.text} component="p">6. 	The period for which the personal data will be stored, or, if this is not possible,
                                     the criteria used to determine this period;</Typography>
                                    <Typography style={styles.text} component="p">7. 	Having the right to request access from the controller and rectification or deletion
                                    personal data or restriction of processing concerning the data subject or
                                     the object of processing, as well as the right to data portability;</Typography>
                                    <Typography style={styles.text} component="p">8. 	The right to lodge a complaint with the
                                     data protection (DPA);</Typography>
                                    <Typography style={styles.text} component="p">9. 	The existence of the right to withdraw consent in
                                    any time without affecting the legality of the processing based on consent prior to it
                                     withdrawal;</Typography>
                                    <Typography style={styles.text} component="p">10. 	Is the provision
                                    personal data by statutory or contractual requirement or requirement,
                                    necessary for the conclusion of the contract, as well as whether the data subject is obliged to provide
                                     personal data and the possible consequences of failure to provide such data;</Typography>
                                    <Typography style={styles.subtitle} component="p"> Complete list
                    of information to be provided can be found <a target="_blank"
                                            href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e2254-1-1'>HERE</a></Typography>

                                </CardContent>
                                {/* </CardActionArea> */}

                            </Card>

                        </div>
                        <Typography tyle={styles.subtitle} variant='p' align='center'></Typography>
                        <Typography  tyle={styles.text} component="h1" variant='h4' align='center'>Lawful Basis for Processing</Typography>
 


                        <div className={classes.book}>

                            <Card className={classes.root}>
                                {/* <CardActionArea className={classes.cardActionArea}> */}
                               
                                <CardContent >
                                <Typography style={styles.subtitle} component="p" >Your company / organization may process personal
                                         data only in the following cases:</Typography>
                                    <Typography style={styles.text} component="p" >1.	With the consent of the interested parties;</Typography>
                                    <Typography style={styles.text} component="p">2. 	If there is a contractual obligation (contract between your company / organization and the client)</Typography>
                                    <Typography style={styles.text} component="p">3. 	When fulfilling a legal obligation under EU or national law;</Typography>
                                    <Typography style={styles.text} component="p">4. 	The processing is necessary for the performance of a task performed in the public interest in accordance with EU or national legislation;</Typography>
                                    <Typography style={styles.text} component="p">5. 	Ror the legitimate interests of your organization, 
                                    but only after verifying that the fundamental rights and freedoms of the person whose data you are processing are not seriously affected. If human rights outweigh your interests, then the processing cannot be carried out based on legitimate interests. The assessment of whether your company / organization has a legitimate interest in processing that outweighs the interests of stakeholders depends on the individual circumstances of the case.</Typography>
                                   
                                    <Typography style={styles.subtitle} component="p" >Validity of consent to data processing</Typography>

                                    <Typography style={styles.text} component="p"> When consent is 
                                    required for the processing of personal data, in order for this consent to be valid, the following conditions must be met:</Typography>
                                    <Typography style={styles.text} component="p">1. 	Consent must be given freely;</Typography>
                                    <Typography style={styles.text} component="p">2. 	consent must be given after providing information about the organization, the purposes of processing and collecting data, the type of data to be processed, the use of personal data;</Typography>
                                    <Typography style={styles.text} component="p">3. 	Consent must be given for a specific purpose;</Typography>
                                    <Typography style={styles.text} component="p">4. 	Consent must be explicit (for example, an electronic checkmark that a person must check online, or a signature on a form);</Typography>
                                    <Typography style={styles.text} component="p">5. 	The ability to revoke consent (for example, the unsubscribe link at the end of the email).</Typography>
                                    <Typography style={styles.text} component="p">For consent to be freely given, a person must have a free choice and be able to 
                                    refuse or withdraw consent without being disadvantaged. Consent is not given freely if, 
                                    for example, there is a clear imbalance between an individual and a business / organization (for example, an employer-employee relationship) or when a business / organization requires individuals to consent 
                                    to the processing of unnecessary personal data as a precondition for fulfillment of a contract or service.</Typography>

                                </CardContent> 
                                
                                <CardMedia className={classes.img}
                                    component="img"
                                    
                                    height="140"

                                    image={processing2
                                    }
                                   
                                    />
                                {/* </CardActionArea> */}
                           
                            </Card>

                        </div>


                        <Typography style={styles.subtitle} component="p">Revocation of consent to data processing</Typography>

                        <Typography style={styles.text} component="p">If consent is withdrawn, your company / organization can no longer process the data. Once consent has been withdrawn, your company / organization must ensure that the data is deleted, unless it can be processed on another legal basis (for example, retention requirements or as necessary to fulfill a contract). If the data was processed for several purposes, your company / organization cannot use the personal data for the part of the processing for which the consent was withdrawn, or for any purpose, depending on the nature of the withdrawal of consent.</Typography>


                        <div className={classes.book}>

                            <Card className={classes.root}>
                            <div className={classes.column}>
                            <Typography style={styles.subtitle} component="p" align='center'>Confidential data</Typography>
                                {/* <CardActionArea className={classes.cardActionArea}> */}
                                <CardMedia className={classes.img2}
                                    component="img"
                                 
                                    height="140"

                                    image={confData}
                                   />
                                   </div>
                                <CardContent className={classes.cardContent2}>
                                <Typography style={styles.subtitle} component="p">Data considered confidential</Typography>
                                    <Typography style={styles.text} component="p" align='left'>1.	Personal data revealing racial or ethnic origin, political views, religious or philosophical beliefs;</Typography>
                                    <Typography style={styles.text} component="p">2. 	Trade union membership;</Typography>
                                    <Typography style={styles.text} component="p">3. 	Genetic data, biometric data processed exclusively for the identification of a person;</Typography>
                                    <Typography style={styles.text} component="p">4. 	Medical data;</Typography>
                                    <Typography style={styles.text} component="p">5. 	Data on a person's sexual life or sexual orientation.</Typography>

                                    <Typography style={styles.subtitle} component="p">Conditions under which a company / organization may process confidential data</Typography>
                                    <Typography style={styles.text} component="p">1. 	The individual's explicit consent has been obtained (the law may exclude this possibility in some cases);</Typography>
                                    <Typography style={styles.text} component="p">2. 	EU or national legislation requirement from your company / organization to process data in order to fulfill its obligations and rights, as well as the requirement of persons in the field of employment, social security and social protection law;</Typography>
                                    <Typography style={styles.text} component="p">3. 	If the vital interests of a person or person who is physically or legally unable to consent are placed</Typography>
                                    <Typography style={styles.text} component="p">4. 	If you are a foundation, association or other non-profit body with political, philosophical, religious or trade union goals, processing data about your members or people who regularly contact the organization;</Typography>
                                    <Typography style={styles.text} component="p">5. 	The personal data was clearly disclosed by the person;</Typography>
                                    <Typography style={styles.text} component="p">6. 	The data is necessary to establish, exercise or defend legal claims;</Typography>
                                    <Typography style={styles.text} component="p">7. 	The data is processed for reasons of significant public interest, based on EU or national legislation;</Typography>
                                    <Typography style={styles.text} component="p">8. 	The data is processed for the purposes of preventive or occupational medicine, evaluating the performance of an employee, making a medical diagnosis, providing medical or social assistance or treatment or managing health or social protection systems and services based on EU or national legislation, or on the basis of a contract as a medical professional;</Typography>
                                    <Typography style={styles.text} component="p">9. 	The data is processed for reasons of public interest in the field of public health based on EU or national legislation;</Typography>
                                    <Typography style={styles.text} component="p">10. 	The data is processed for archiving purposes, scientific or historical research or for statistical purposes on the basis of EU or national legislation.</Typography>

                                   

                                </CardContent>
                         
                               
                            </Card>

                        </div>


                        <Typography style={styles.subtitle} component="p">Use of data obtained from third parties for marketing</Typography>
                        <Typography style={styles.text} component="p">Before receiving a contact list or contact database of individuals from another organization, 
                        that organization must be able to demonstrate that the data was collected in accordance with the General Data Protection Regulation and that 
                        it can use it for advertising purposes. For example, if an organization acquired it on a consent basis,
                         it would have to include the ability to transfer the data to other recipients for their own direct marketing.</Typography>
                        <Typography style={styles.text} component="p">Your company / organization must also ensure that the list or database is up-to-date and not send advertisements to individuals who have objected to the processing of their personal data for direct marketing purposes. Your company / 
                        organization should also ensure that if it uses communication media such as email for direct marketing purposes, it complies with the rules set
                         out in<a target="_blank"
                            href='https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CELEX:32002L0058:en:HTML'> EPrivacy Directive
                            (Directive 2002/58 / EC 1).</a></Typography>


                        <Typography style={styles.subtitle} component="p">Recommendations:
                        </Typography>
                        <Typography style={styles.text} component="p"><a target="_blank"
                            href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&toc=OJ:L:2016:119:FULL'>Articles 1, 2 and 3 Recital (13), (14), (15), (18), (19)
                            and
                                (21) of the GDPR</a>
                        </Typography>
                        <Typography style={styles.text} component="p"><a target="_blank"
                            href='https://curia.europa.eu/juris/document/document.jsf?text=&docid=194059&pageIndex=0&doclang=EN&mode=req&dir=&occ=first&part=1&cid=1767678'>Judgement of the Court of Justice of 9 March 2017,
                            Manni,
                                C-398/15</a>
                        </Typography>
                        <Typography style={styles.text} component="p"><a target="_blank"
                            href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&toc=OJ:L:2016:119:FULL'>Article 5(1)(e) and Recital (39) of the GDPR</a>
                        </Typography>

                        <Typography style={styles.text} component="p"><a target="_blank"
                            href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&toc=OJ:L:2016:119:FULL'>
                                Article 6 and Recitals (40) to (49) of the GDPR
                                        
                            </a>
                        </Typography>
                        <Typography style={styles.text} component="p"><a target="_blank"
                            href='https://ec.europa.eu/justice/article-29/documentation/opinion-recommendation/files/2014/wp217_en.pdf'>
                                Article 29 Working Party Opinion 06/2014 on the
                                                notion of
                                                legitimate interests of the data controller under Article 7 of Directive
                                                95/46/EC
                            </a>
                        </Typography>
                        <Typography style={styles.text} component="p"><a target="_blank"
                            href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&toc=OJ:L:2016:119:FULL'>
                                Article 9 and Recitals (51) to (56) of the GDPR
                                        
                            </a>
                        </Typography>
                     




                    </Typography></div>
            </Container>
        </>
    )
}

export default Aboutgdpr;