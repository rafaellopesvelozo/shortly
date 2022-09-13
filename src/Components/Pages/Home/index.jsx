import React from 'react';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import Logocard1 from '../../../Assets/images/icon-brand-recognition.svg'
import Logocard2 from '../../../Assets/images/icon-detailed-records.svg'
import Logocard3 from '../../../Assets/images/icon-fully-customizable.svg'

import './styles.css'

const schema = yup.object().shape({
    search: yup
        .string()
        .min(7, 'You need to enter at least 7 characters !')
        .required('Required field !'),
})
const Home = () => {
    const {
        register,
        handleSubmit: onSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const handleSubmit = (data) => {
        console.log(data)
    }

    return (
        <main className="main">
            <article>
                <section className="section1">
                    <div className="infoSction1">
                        <div className='title'>
                            <h1>More than just shorten links</h1>
                        </div>
                        <div className='info'>
                            <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        </div>
                        <div className="btnGetStarted">
                            <button type="submit">Get Started</button>
                        </div>
                    </div>
                    <div className="img">

                    </div>
                </section>
                <section className="section2">
                    <form className="btnGeneratorLink" onSubmit={onSubmit(handleSubmit)}>
                        <div className='inputForm'>
                            <input style={{ border: errors.search ? '1px solid red' : '' }} type="search" id="search" {...register('search')} />
                            <span className='error'>{errors?.search?.message}</span>
                        </div>
                        <button type="submit">Shorten It!</button>
                    </form>


                    <div className="statistics">
                        <div className="titleStatistics">
                            <h2>Advandced Statistics</h2>

                            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="logoCard">
                                    <img src={Logocard1} alt="" />
                                </div>
                                <p>brand Recognition</p>
                                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                            <div className="card">
                                <div className="logoCard">
                                    <img src={Logocard2} alt="" />
                                </div>
                                <p>brand Recognition</p>
                                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                            <div className="card">
                                <div className="logoCard">
                                    <img src={Logocard3} alt="" />
                                </div>
                                <p>brand Recognition</p>
                                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='section3'>
                    <div className="BoostYourLinks">
                        <div className='title'>
                            <h3>Boost your links today</h3>
                        </div>
                        <div className="BoostLinksStarted">
                            <button type="submit">Get Started</button>
                        </div>
                    </div>
                </section>

            </article>
        </main>



    );
}

export default Home;