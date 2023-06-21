import Link from 'next/link'
import React from 'react'
import SectonHeader from '../snippets/sectonHeader'
const PricingSection = ({show, setShow} ) => {
  return (
    <section className='bg-[#0C1012] font-lato text-white py-10 md:py-16 lg:py-25'>
    <div className='lg2:px-15 px-5 max-w-[90.625rem] w-full mx-auto '>
        <div className=" max-w-[48.75rem] w-full mx-auto">
            <SectonHeader subHeading="Mattis dui tellus amet neque diam. Interdum sit cras morbi mi porta amet egestas lacinia. Viverra posuere dolor in arcu nisi arcu ut." />
        </div>

                <div className='grid grid-cols-5 bg-[#182024] rounded-30'>
                    <ul className='pricingCard rounded-30 border-2 border-[#18C9BF] overflow-hidden lg2:col-span-2   col-span-5'>
                        <li className='header pt-13 pb-5 pl-5 pr-[23px] md:pt-50 md:pb-13 md:px-10 bg-pricingCardHead flex justify-between items-baseline leading-[29px] md:leading-[43px]'>
                            <h3 className='font-lato text-[1.5rem] font-bold md:text-4xl text-white'>Web Design &<br /> Development Workshop</h3>
                            <span>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.19 0.36L1.19 3.47C0.47 3.79 0 4.51 0 5.3V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V5.3C18 4.51 17.53 3.79 16.81 3.47L9.81 0.36C9.3 0.13 8.7 0.13 8.19 0.36ZM9 10.99H16C15.47 15.11 12.72 18.78 9 19.93V11H2V5.3L9 2.19V10.99Z" fill="#18C9BF" />
                                </svg>
                            </span>
                        </li>

                        <li className='body px-5 md:px-10 '>
                            <div className='pt-8 md:pt-50 pb-[16px] md:pb-[54px]'>
                                <h4 className='text-[0.75rem] font-medium pb-[10px] md:text-[0.875rem] md:pb-[18px] '>About Pricing:</h4>
                                <ul>
                                    <li className='flex gap-2 pb-[10px] items-center md:pb-[18px] md:gap-3'>
                                        <span className='w-5 h-5 md:w-6 md:h-6 bg-[#18C9BF] p-[3px] rounded-full flex items-center justify-center'>
                                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.9987 0.333984C3.3187 0.333984 0.332031 3.32065 0.332031 7.00065C0.332031 10.6807 3.3187 13.6673 6.9987 13.6673C10.6787 13.6673 13.6654 10.6807 13.6654 7.00065C13.6654 3.32065 10.6787 0.333984 6.9987 0.333984ZM6.9987 12.334C4.0587 12.334 1.66536 9.94065 1.66536 7.00065C1.66536 4.06065 4.0587 1.66732 6.9987 1.66732C9.9387 1.66732 12.332 4.06065 12.332 7.00065C12.332 9.94065 9.9387 12.334 6.9987 12.334ZM9.58537 4.52732L5.66536 8.44732L4.41203 7.19398C4.15203 6.93398 3.73203 6.93398 3.47203 7.19398C3.21203 7.45398 3.21203 7.87398 3.47203 8.13398L5.1987 9.86065C5.4587 10.1207 5.8787 10.1207 6.1387 9.86065L10.532 5.46732C10.792 5.20732 10.792 4.78732 10.532 4.52732C10.272 4.26732 9.84536 4.26732 9.58537 4.52732Z" fill="black" />
                                            </svg>
                                        </span>
                                        <p className='text-[0.75rem] font-medium md:text-[1rem]'>25+ Week Program to learn & Develop your skills.</p>
                                    </li>
                                    <li className='flex gap-2 pb-[10px] items-center md:pb-[18px] md:gap-3'>
                                        <span className='w-5 h-5 md:w-6 md:h-6 bg-[#18C9BF] p-[3px] rounded-full flex items-center justify-center'>
                                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.9987 0.333984C3.3187 0.333984 0.332031 3.32065 0.332031 7.00065C0.332031 10.6807 3.3187 13.6673 6.9987 13.6673C10.6787 13.6673 13.6654 10.6807 13.6654 7.00065C13.6654 3.32065 10.6787 0.333984 6.9987 0.333984ZM6.9987 12.334C4.0587 12.334 1.66536 9.94065 1.66536 7.00065C1.66536 4.06065 4.0587 1.66732 6.9987 1.66732C9.9387 1.66732 12.332 4.06065 12.332 7.00065C12.332 9.94065 9.9387 12.334 6.9987 12.334ZM9.58537 4.52732L5.66536 8.44732L4.41203 7.19398C4.15203 6.93398 3.73203 6.93398 3.47203 7.19398C3.21203 7.45398 3.21203 7.87398 3.47203 8.13398L5.1987 9.86065C5.4587 10.1207 5.8787 10.1207 6.1387 9.86065L10.532 5.46732C10.792 5.20732 10.792 4.78732 10.532 4.52732C10.272 4.26732 9.84536 4.26732 9.58537 4.52732Z" fill="black" />
                                            </svg>
                                        </span>
                                        <p className='text-[0.75rem] font-medium md:text-[1rem]'>200+ People have already applied for the program. So make sure you apply now!</p>
                                    </li>

                                    <li className='flex gap-2 pb-[10px] items-center md:pb-[18px] md:gap-3'>
                                        <span className='w-5 h-5 md:w-6 md:h-6 bg-[#18C9BF] p-[3px] rounded-full flex items-center justify-center'>
                                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.9987 0.333984C3.3187 0.333984 0.332031 3.32065 0.332031 7.00065C0.332031 10.6807 3.3187 13.6673 6.9987 13.6673C10.6787 13.6673 13.6654 10.6807 13.6654 7.00065C13.6654 3.32065 10.6787 0.333984 6.9987 0.333984ZM6.9987 12.334C4.0587 12.334 1.66536 9.94065 1.66536 7.00065C1.66536 4.06065 4.0587 1.66732 6.9987 1.66732C9.9387 1.66732 12.332 4.06065 12.332 7.00065C12.332 9.94065 9.9387 12.334 6.9987 12.334ZM9.58537 4.52732L5.66536 8.44732L4.41203 7.19398C4.15203 6.93398 3.73203 6.93398 3.47203 7.19398C3.21203 7.45398 3.21203 7.87398 3.47203 8.13398L5.1987 9.86065C5.4587 10.1207 5.8787 10.1207 6.1387 9.86065L10.532 5.46732C10.792 5.20732 10.792 4.78732 10.532 4.52732C10.272 4.26732 9.84536 4.26732 9.58537 4.52732Z" fill="black" />
                                            </svg>
                                        </span>
                                        <p className='text-[0.75rem] font-medium md:text-[1rem]'>90+ Courses for you. 99% Job Placement</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex justify-between items-center relative before:absolute before:bg-pricingLogoBg before:bottom-0 before:left-2/4  before:right-2/4 before:-translate-x-2/4 before:w-[250px] before:h-[220px] md:before:w-[291px] md:before:h-[257.5px]'>
                                <span className='block font-Oswald text-white text-3xl md:text-6xl leading-44 md:leading-86 font-semibold'>₹50000.00</span>
                                <span className='block'>
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="52" height="52" rx="26" fill="#F1FCFB" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21.981 37.7398V40.003L13.9937 37.041V27.0568C13.794 26.6907 13.4945 26.3246 13.2282 26.0583C12.729 25.5591 12.0967 25.3262 11.3312 25.2929H10V22.6304H11.3312C12.0301 22.6304 12.729 22.3642 13.2282 21.865C13.7274 21.3658 13.9937 20.7002 13.9937 19.968V14.5765C13.9937 13.8776 14.2599 13.1787 14.7591 12.6795C15.2584 12.1803 15.9572 11.9141 16.6561 11.9141H19.3186V14.5765H16.6561V21.2327C16.6561 21.9315 16.3899 22.6304 15.8907 23.1297C15.3915 23.6289 14.7259 23.8951 13.9937 23.8951C14.6926 23.8951 15.3915 24.1614 15.8907 24.6606C16.3899 25.1598 16.523 25.8587 16.523 26.5576V30.3849L16.5563 35.4103L21.981 37.2073V37.7398Z" fill="#18C9BF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.9648 37.2073L35.3895 35.4767L35.4229 30.4514V26.5908C35.4229 25.8919 35.556 25.1931 36.0552 24.6938C36.5544 24.1946 37.22 23.9284 37.9523 23.9284C37.2533 23.9284 36.5544 23.6621 36.0552 23.1629C35.556 22.6637 35.2897 21.9648 35.2897 21.2327V14.5765H32.6273V11.9141H35.2897C35.9886 11.9141 36.6876 12.1803 37.1867 12.6795C37.686 13.1787 37.9523 13.8776 37.9523 14.5765V19.9014C37.9523 20.6003 38.2184 21.2992 38.7177 21.7984C39.2168 22.2976 39.8825 22.5639 40.6147 22.5639H41.9458V25.2263H40.6147C39.8825 25.2596 39.2168 25.4926 38.7177 25.9917C38.4182 26.2914 38.1519 26.6241 37.9523 26.9902V36.9744L29.9648 39.9363V37.6732V37.2073Z" fill="#5552FE" />
                                        <path d="M21.25 29.8868V26.4922L22.2817 27.0579V29.2544L25.9758 31.3511L29.67 29.2544V27.0579L30.7017 26.4922V29.8868L25.9758 32.5492L21.25 29.8868Z" fill="#18C9BF" />
                                        <path d="M18.5859 23.9622V23.0636L25.9742 19.2363L33.3625 23.0636V27.4566H32.2976V24.5612L25.9742 28.0557L18.5859 23.9622ZM19.9837 23.5295L25.9742 26.8577L31.9647 23.5295L25.9742 20.4344L19.9837 23.5295Z" fill="#5552FE" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <button  onClick={() => setShow(!show)} className='block text-white text-[1.125rem] py-[0.625rem] font-medium hover:bg-[#4946ff9f] transition duration-500 bg-[#4946FF] mt-3.5 md:mb-5 md:py-[0.875rem]  w-full text-center rounded-large m-auto  '> Start Now </button>
                                
                                <Link href="/" className='block text-white text-[1.125rem] py-[0.625rem] font-medium hover:bg-[#37474f9a] transition duration-500  bg-[#37474F] mt-3.5 md:mb-5 md:py-[0.875rem]  w-full text-center rounded-large m-auto  '>  View More Details</Link>
                            </div>
                        </li>

                        <li className='footer flex p-5 gap-3 md:p-10'>
                            <span className='text-[0.875rem] text-[#D2F4F2] font-medium'> Note: </span>
                            <p className='text-[0.875rem] text-[#CFD8DC] md:text-[1rem]'>Lobortis molestie pretium urna vitae. Sit egestas id amet malesuada. Scelerisque nunc tellus arcu quis purus accumsan ut volutpat.</p>
                        </li>
                    </ul>
                    <div className='lg2:col-span-3 col-span-5 p-5 lg2:py-[69.5px] lg2:px-[108.5px] relative before:absolute md:before:drop-shadow-3xl  before:w-[87px] before:h-[87px] before:bg-[length:87px_87px] before:top-[10px] before:right-[-10px] md:before:w-[115px] md:before:h-[115px] md:before:bg-[length:115px_115px] md:before:top-[20px] lg2:before:top-[-57.5px] lg2:before:right-[-57.5px] before:bg-pricingCornerLogo before:bg-no-repeat'>
                        <div className='lg2:max-w-[591px] lg2:mx-auto w-full'>
                            <h3 className='font-lato text-[1.5rem] font-bold md:text-4xl text-white'>What you’ll get</h3>
                            <span className='bg-[#37474F] w-full h-px block my-3 md:my-[30px]'></span>
                            <h4 className='text-[0.75rem] font-medium pb-[10px] md:text-[0.875rem] md:pb-[18px] '>Details</h4>
                            <ul>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6 p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Facilisis lectus vitae faucibus nunc congue neque.</p>
                                </li>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6  p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Egestas sit tellus turpis integer.</p>
                                </li>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6 p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Malesuada velit eu vitae integer praesent enim ullamcorper phasellus.</p>
                                </li>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6  p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Auctor nunc in eget quis id elementum hendrerit.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='lg2:max-w-[591px] lg2:mx-auto w-full lg2:mt-15 '>
                            <h3 className='font-lato text-[1.5rem] font-bold md:text-4xl text-white'>And bonuses too</h3>
                            <span className='bg-[#37474F] w-full h-px block my-3 md:my-[30px]'></span>
                            <h4 className='text-[0.75rem] font-medium pb-[12px] md:text-[0.875rem] md:pb-[30px] '>Details</h4>
                            <ul>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6 p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Sit aliquet tincidunt sit posuere feugiat.</p>
                                </li>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6 p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Vitae aliquam blandit viverra enim pulvinar tincidunt viverra praesent tortor.</p>
                                </li>
                                <li className='flex gap-2 items-center pb-[12px] md:pb-[30px] md:gap-3'>
                                    <span className='w-5 h-5 md:w-6 md:h-6  p-[3px] flex items-center justify-center'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.5C4.98 0.5 0.5 4.98 0.5 10.5C0.5 16.02 4.98 20.5 10.5 20.5C16.02 20.5 20.5 16.02 20.5 10.5C20.5 4.98 16.02 0.5 10.5 0.5ZM10.5 18.5C6.09 18.5 2.5 14.91 2.5 10.5C2.5 6.09 6.09 2.5 10.5 2.5C14.91 2.5 18.5 6.09 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5ZM14.38 6.79L8.5 12.67L6.62 10.79C6.23 10.4 5.6 10.4 5.21 10.79C4.82 11.18 4.82 11.81 5.21 12.2L7.8 14.79C8.19 15.18 8.82 15.18 9.21 14.79L15.8 8.2C16.19 7.81 16.19 7.18 15.8 6.79C15.41 6.4 14.77 6.4 14.38 6.79Z" fill="#18C9BF" />
                                        </svg>
                                    </span>
                                    <p className='text-[0.75rem] font-medium md:text-[1rem]'>Nisl mattis amet non hendrerit arcu.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection