import React, { useState, useCallback } from 'react'


export default function Questioncard() {

    // const handleopenquestion = (e) => {        
    //     let awscardido = ''
    //     let icoid = ''
    //     let fullcard = document.querySelectorAll('.cardbody') 
    //     let cardname = e.target.parentElement.className.split(' ')[0]

    //     if (cardname === 'carditem') {
    //         awscardido = e.target.parentElement.children[1].id
    //         icoid = e.target.parentElement.children[0].lastChild.id  
    //     }
    //     else {            
    //         awscardido = e.target.parentElement.parentElement.children[1].id
    //         icoid = e.target.parentElement.parentElement.children[0].lastChild.id
    //     }       
    //     fullcard.forEach((item)=>{
    //         let allcarditems = item.children
    //         Array.from(allcarditems).forEach((card)=>{                
    //             if(card.children[1].id===awscardido){
    //                 document.getElementById(awscardido).classList.toggle('openorclosecard')
    //                 document.getElementById(icoid).classList.toggle('openorcloserotate')
    //             }
    //             else{
    //                 card.children[1].classList.remove('openorclosecard')
    //                card.children[0].lastChild.classList.remove('openorcloserotate')
    //             }
    //         })
    //     })

    // }
    const [isopen, setIsopen] = useState({ open: false, name: '' })
    const [isiconrotate, setIsiconrotate] = useState('')
    const handleopenquestion = useCallback((name) => {
        // setIsopen(isopen.name !== name ? { open: true, name: name } : { open: false })
        if (isopen.name !== name) {
            setIsopen({ open: true, name: name })
            setIsiconrotate('rotate-[45deg]')
        }
        else {
            setIsopen({ open: false })
            setIsiconrotate('')

        }
    },[isopen])
    return (

        <div className='max-w-[50rem] mx-auto h-full flex flex-col gap-10 justify-center items-center py-20 text-white'>


            <h1 className='text-white lg:text-5xl font-semibold text-center max-xs:text-3xl sm:text-4xl'>Frequently Asked Questions</h1>
            <div className='cardbody w-full flex flex-col gap-2'>
                {/* 1 */}
                <div className='carditem  flex flex-col gap-1'>
                    <div onClick={() => { handleopenquestion('card1') }} id='1' className='question bg-[#303030] flex justify-between items-center py-4 cursor-pointer select-none px-6'>
                        <h1 className='capitalize text-2xl font-medium '>what is netflix?</h1>

                        <h1 id='ico1' className={`text-5xl font-thin leading-7 transform 
                        ${isopen.name === 'card1' && isiconrotate}
                        transition-all`}>+</h1>

                    </div>
                    {isopen.name === 'card1' && <div id='aws1' className={`awnser bg-[#303030] p-4 text-2xl px-6 transition-all`}>
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                        </p>
                        <br />
                        <p>
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </p>
                    </div>}
                </div>
                {/* 2 */}
                <div className='carditem  flex flex-col gap-1'>
                    <div onClick={() => { handleopenquestion('card2') }} id='2' className='question bg-[#303030] flex justify-between items-center p-4 cursor-pointer select-none px-6'>
                        <h1 className='capitalize text-2xl font-medium'>how much does netflix cost?</h1>
                        <span id='ico2' className={`text-5xl font-thin leading-7 transform 
                        ${isopen.name === 'card2' && isiconrotate}
                        transition-all origin-center`}>+</span>
                    </div>
                    {isopen.name === 'card2' && <div id='aws2' className='awnser bg-[#303030] p-4 text-2xl px-6'>
                        <p>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </p>
                    </div>}
                </div>
                {/* 3 */}
                <div className='carditem  flex flex-col gap-1'>
                    <div onClick={() => { handleopenquestion('card3') }} id='3' className='question bg-[#303030] flex justify-between items-center p-4 cursor-pointer select-none px-6'>
                        <h1 className='capitalize text-2xl font-medium'>where can i watch?</h1>
                        <span id='ico3' className={`text-5xl font-thin leading-7 transform 
                        ${isopen.name === 'card3' && isiconrotate}
                        transition-all origin-center`}>+</span>
                    </div>
                    {isopen.name === 'card3' && <div id='aws3' className='awnser bg-[#303030] p-4 text-2xl px-6 '>
                        <p>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        </p>
                        <br />
                        <p>
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </p>
                    </div>}
                </div>
                {/* 4 */}
                <div className='carditem  flex flex-col gap-1'>
                    <div onClick={() => { handleopenquestion('card4') }} id='4' className='question bg-[#303030] flex justify-between items-center p-4 cursor-pointer select-none px-6'>
                        <h1 className='capitalize text-2xl font-medium'>how do i cancle?</h1>
                        <span id='ico4' className={`text-5xl font-thin leading-7 transform 
                        ${isopen.name === 'card4' && isiconrotate}
                        transition-all origin-center`}>+</span>
                    </div>
                    {isopen.name === 'card4' && <div id='aws4' className='awnser bg-[#303030] p-4 text-2xl px-6 '>
                        <p>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </p>
                    </div>}
                </div>
                {/* 5 */}
                <div className='carditem  flex flex-col gap-1'>
                    <div onClick={() => { handleopenquestion('card5') }} id='5' className='question bg-[#303030] flex justify-between items-center p-4 cursor-pointer select-none px-6'>
                        <h1 className='capitalize text-2xl font-medium'>what can i watch on netflix?</h1>
                        <span id='ico5' className={`text-5xl font-thin leading-7 transform 
                        ${isopen.name === 'card5' && isiconrotate}
                        transition-all origin-center`}>+</span>
                    </div>
                    {isopen.name === 'card5' && <div id='aws5' className='awnser bg-[#303030] p-4 text-2xl px-6 '>
                        <p>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </p>
                    </div>}
                </div>
                {/* 6 */}
                <div className='carditem  flex flex-col gap-1'>
                    <div onClick={() => { handleopenquestion('card6') }} id='6' className='question bg-[#303030] flex justify-between items-center p-4 cursor-pointer select-none px-6'>
                        <h1 className='capitalize text-2xl font-medium'>is netflix good for kid?</h1>
                        <span id='ico6' className={`text-5xl font-thin leading-7 transform 
                        ${isopen.name === 'card6' && isiconrotate}
                        transition-all origin-center`}>+</span>
                    </div>
                    {isopen.name === 'card6' && <div id='aws6' className='awnser bg-[#303030] p-4 text-2xl px-6 '>
                        <p>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                        </p>
                        <br />
                        <p>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </p>
                    </div>}
                </div>


            </div>

        </div>
    )
}
