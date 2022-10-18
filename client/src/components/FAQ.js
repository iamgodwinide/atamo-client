import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import './faq.css'

const FAQ = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className='faq-wrap'>
            <section id='faq' className='acc-wrap'>
                <h2>FAQ's</h2>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem className='item'>
                        <AccordionHeader className='header' targetId="1">
                            <h3>What is Atamo Ascension?</h3>
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <p>
                                The Atamo Ascension is the journey of revolutionary sisters who must overcome two types of struggles – personal struggles and the environmental struggles of a decaying futuristic society – to reach a better life by climbing up the Ethereum Blockchain. Will they make it? Reader, find out.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem className='item'>
                        <AccordionHeader className='header' targetId="2">
                            <h3>How many nfts will there be?</h3>
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                            <p>
                                There will only be 5555 Atamo girls in existence
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem className='item'>
                        <AccordionHeader className='header' targetId="3">
                            <h3>What is the mint price?</h3>
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                            <p>
                                One free or additional paid at 0.005 ETH
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem className='item'>
                        <AccordionHeader className='header' targetId="4">
                            <h3>On which blockchain are the Atamo girls ascending?</h3>
                        </AccordionHeader>
                        <AccordionBody accordionId="4">
                            <p>
                                Ethereum blockchain
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    )
}

export default FAQ