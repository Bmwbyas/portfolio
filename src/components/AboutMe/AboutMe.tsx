import React from 'react';
import s from './AboutMe.module.scss'
import myPhoto from "../../assets/image/myPhoto.jpg";
import {Card} from "./Card/Card";
import {TitleDesc} from "../../common/components/TitleDesc/TitleDesc";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {Skills} from "../Skills/Skills";

export type ExpEdDataType = {
    years: string
    place: string
    description: any
}

export const AboutMe = () => {
    const myAvatar = {
        backgroundImage: 'url(' + myPhoto + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const educationData: ExpEdDataType[] = [
        {
            years: '12.2021 - 05.2022',
            place: 'frontend developer-IT-INCUBATOR',
            description: `Sect for frontend and backend developers.
            This is the place where I realized that I like the frontend.`
        },
        {
            years: '07.2021-12.2021',
            place: 'frontend developer-self-study',
            description: ` I learned the basics of HTML CSS JavaScript.`
        },
        {
            years: '06.2021',
            place: 'IT-ACADEMY - basics computer science',
            description: `Here I got knowledge about how a computer works and how it works. Also got acquainted with the Python programming language. 
            Gained skills in solving algorithmic problems, got acquainted with data types, etc.`
        },
        {
            years: '2009-2014',
            place: 'BSTU - woodworking mechanical engineer',
            description: `I Studied the design of woodworking tools and equipment, microprocessor control systems for woodworking machines.
            Gained skills in designing and repairing woodworking equipment.`
        }
    ]
    const expirienseData: ExpEdDataType[] = [
        {
            years: '06.2022 - PRESENT',
            place: 'XI-EFFECT',
            description: <span> Stack: next, mobx, MUI, react-hook-form, REST API, GIT, Discord, Kaiten, UI-KIT.<br/> It is a platform for building educational processes in educational organizations.  We only provide a comfortable, useful environment for teachers, teachers, students, tutors, the administration of the educational organization and parents. </span>
        },
        {
            years: '12.2021 - 05.2022',
            place: 'IT-INCUBATOR - EDUCATIONAL CARDS',
            description: `This a web-based tool that allows users to create study cards. User can learn from his or someone else's cards.`
        },
        {
            years: '12.2021 - 05.2022',
            place: 'IT-INCUBATOR - TO DO LIST',
            description: ` It’s a list of tasks you need to complete or things that you want to do.
                                You can use a to do list in your home and personal life, or in the workplace.`
        },
        {
            years: '12.2021 - 05.2022',
            place: 'IT-INCUBATOR - SOCIAL NETWORK',
            description: `Social network that makes it easy for you to connect with friends online.`
        },
        {
            years: '08.2014-PRESENT',
            place: 'JSC "Borisovskiy DOK" - Deputy head of department for technical issues',
            description: `My main task is to ensure the smooth operation of woodworking equipment. My team consists of 20 people.`
        }

    ]
    return (
        <div className={s.mainBlock}>
            <Fade direction={"down"}>
                <Title title={'About'} span={'me'}/>
                <TitleDesc text={'I love how I can make codes turn into softwares and apps'}/>
            </Fade>
            <div className={s.mainContainer}>


                    <div className={s.photoContainer}>
                        <div className={s.photo} style={myAvatar}></div>
                    </div>

                <Fade direction={"right"}>
                    <div className={s.intro}>
                        <ul className={s.personalInfo}>
                            <li><span>First Name </span> Alexandr</li>
                            <li><span>Last Name </span> Askerko</li>
                            <li><span>Birthdate </span>26 october 1991</li>
                            <li><span>Nationality </span>Belarus</li>
                            <li><span>Experience </span>1 years</li>
                        </ul>
                        <ul className={s.personalInfo}>
                            <li><span> Langages </span>Russian, English</li>
                            <li><span>Phone </span>+375 29 689 30 21</li>
                            <li><span> Email </span>askerko50@gmail.com</li>
                            <li><span>Telegram </span>@askerkoSasha</li>
                            <li><span>Possibility of remote work</span> Yes</li>
                        </ul>
                        <div className={s.containerCV}><a className={s.cv}
                                                          target={'_blank'}
                                                          href={'https://drive.google.com/file/d/1E2ozShOK0qT0jQFyL4iLE2ViTHqoblRf/view?usp=sharing'}>
                            download my cv</a>
                        </div>
                    </div>
                </Fade>
            </div>
            <Fade>
            <div className={s.aboutMe}>I am a patient and a diligent person. I am attentive to details and work with focus on outcomes. I work well autonomously and in a team. Thanks to my personal traits I can meet deadlines, lead people and follow management directions.
                Now I'm in charge of 20 people. I coordinate, control, foster work safety and comfortable microclimate in my team. I'm responsible for my team reliability and performance.
                My personal traits include honesty and stress tolerance - they help me leading the team and accomplishing work in time.</div>
            <hr className={s.aboutHr}/>

                <div className={s.expEdContainer}>
                    <Card title={'expirience'} cardsData={expirienseData}/>
                    <Card title={'education'} cardsData={educationData}/>
                </div>
            </Fade>
           <Skills/>
        </div>
    )
        ;
};

