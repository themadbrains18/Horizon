import Image from 'next/image'
import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'

import plusIcon from '/public/plus-icon.svg'
import unreadCheck from '/public/unreadCheckmark.svg'
import minusIcon from '/public/minus-icon.svg'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'



const TopicsBar = () => {
  
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [route,setAciveRoute] = useState();
  const router = useRouter()
  
  const [toggle, setToggle] = useState(0);

  const topicsData = [
    {
      "topicHeading": "JS Introduction",
      "topics": [
        {
          "topic": "Getting Started",
          "topicRoute": "/javascript/getStarted"
        },
        {
          "topic": "JS Variables & Constants",
          "topicRoute": "/javascript/variables"
        },
        {
          "topic": "JS Console.log",
          "topicRoute": "/javascript/console"
        },
        {
          "topic": "JavaScript Data Types",
          "topicRoute": "/javascript/dataTypes"
        },
        {
          "topic": "JavaScript Operators",
          "topicRoute": "/javascript/operators"
        },
        {
          "topic": "JavaScript Comments",
          "topicRoute": "/javascript/comments"
        },
        {
          "topic": "JS Type Conversions",
          "topicRoute": "/javascript/typeConversion"
        },
      ]
    },
    {
      "topicHeading": "JS Control Flow",
      "topics": [
        {
          "topic": "JS Comparison Operators",
          "topicRoute": "/javascript/comparisionLogical"
        },
        {
          "topic": "JavaScript if else Statement",
          "topicRoute": "/javascript/elseIf"
        },
        {
          "topic": "JavaScript for loop",
          "topicRoute": "/javascript/forLoop"
        },
        {
          "topic": "JavaScript while loop",
          "topicRoute": "/javascript/whileLoop"
        },
        {
          "topic": "JavaScript break Statement",
          "topicRoute": "/javascript/breakStatement"
        },
        {
          "topic": "JavaScript continue Statement",
          "topicRoute": "/javascript/continueStatement"
        },
        {
          "topic": "JavaScript switch Statement",
          "topicRoute": "/javascript/switch"
        },
      ]
    },
    {
      "topicHeading": "JS Functions",
      "topics": [
        {
          "topic": "JavaScript Function",
          "topicRoute": "/javascript/functions"
        },
        {
          "topic": "Variable Scope",
          "topicRoute": "/javascript/variableScope"
        },
        {
          "topic": "JavaScript Hoisting",
          "topicRoute": "/javascript/hoisting"
        },
        {
          "topic": "JavaScript Recursion",
          "topicRoute": "/javascript/recursion"
        },
      ]
    },
    {
      "topicHeading": "JS Objects",
      "topics": [
        {
          "topic": "JavaScript Objects",
          "topicRoute": "/javascript/objects"
        },
        {
          "topic": "JavaScript Methods & this",
          "topicRoute": "/javascript/thisKeyword"
        },
        {
          "topic": "JavaScript Constructor",
          "topicRoute": "/javascript/constructor"
        },
        {
          "topic": "JavaScript Getter and Setter",
          "topicRoute": "/javascript/getterAndSetter"
        },
        {
          "topic": "JavaScript Prototype",
          "topicRoute": "/javascript/jsPrototype"
        }
      ]
    },
    {
      "topicHeading": "JS Types",
      "topics": [
        {
          "topic": "JavaScript Array",
          "topicRoute": "/javascript/jsArray"
        },
        {
          "topic": "JS Multidimensional Array",
          "topicRoute": "/javascript/multidimensionalArray"
        },
        {
          "topic": "JavaScript String",
          "topicRoute": "/javascript/string"
        },
        {
          "topic": "JavaScript for...in loop",
          "topicRoute": "/javascript/forIn"
        },
        {
          "topic": "JavaScript Number",
          "topicRoute": "/javascript/jsNumber"
        },
        {
          "topic": "JavaScript Symbol",
          "topicRoute": "/javascript/jsSymbol"
        }
      ]
    },
    {
      "topicHeading": "Exceptions and Modules",
      "topics": [
        {
          "topic": "JavaScript try...catch...finally",
          "topicRoute": "/javascript/tryCatchFinally"
        },
        {
          "topic": "JavaScript throw Statement",
          "topicRoute": "/javascript/throwStatement"
        },
        {
          "topic": "JavaScript Modules",
          "topicRoute": "/javascript/jsModules"
        }

      ]
    },
    {
      "topicHeading": "JS ES6",
      "topics": [
        {
          "topic": "JavaScript ES6",
          "topicRoute": "/javascript/jsEs6"
        },
        {
          "topic":"JavaScript Arrow Function",
          "topicRoute":"/javascript/arrowFunc"
        },
        {
          "topic":"JavaScript Default Parameters",
          "topicRoute":"/javascript/defaultParameter"
        },
        {
          "topic":"JavaScript Template Literals",
          "topicRoute":"/javascript/templateLiterals"
        },
        {
          "topic":"JavaScript Spread Operator",
          "topicRoute":"/javascript/spreadOperator"
        },
        {
          "topic":"JavaScript Map",
          "topicRoute": "/javascript/map"
        },
        {
          "topic":"JavaScript Set",
          "topicRoute": "/javascript/set"
        },
        {
          "topic":"Destructuring Assignment",
          "topicRoute": "/javascript/destructuring"
        },
        {
          "topic":"JavaScript Classes",
          "topicRoute": "/javascript/classes"
        },
        {
          "topic":"JavaScript Inheritance",
          "topicRoute": "/javascript/inheritance"
        },
        {
          "topic":"JavaScript for...of ",
          "topicRoute": "/javascript/forOf"
        },
        {
          "topic":"JavaScript Proxies",
          "topicRoute": "/javascript/proxies"
        }
      ]
    },



    {
      "topicHeading": "JavaScript Asynchronous",
      "topics": [
        {
          "topic": "Javascript setTimeout()",
          "topicRoute": "/javascript/setTimeout"
        },
        {
          "topic": "JavaScript CallBack Function",
          "topicRoute": "/javascript/callBack"
        }
      ]
    }
  ]

  
  useEffect(()=>{
    setAciveRoute(router.pathname);
    let activeIndex = localStorage?.getItem("activeindex");
    if(activeIndex){
      setToggle(activeIndex);
    }
  },[]);


  return (
    <>
      // {console.log(height, "height of  div")}

      {
        topicsData?.map((item, index) => {
          return (
            <Fragment key={index}>
            <div className='border_bottom pb-1 last:pb-0 last:border-b-0 '>
              <div className='flex justify-between items-center py-5 cursor-pointer' onClick={() =>{setToggle(index)}}>
                <h3 className='bar_heading'>{item?.topicHeading}</h3>
                {toggle == index ? <Image src={minusIcon} width={14} height={14} alt='plus Icon' className='transition-all' /> : <Image src={plusIcon} width={14} height={14} alt='plus Icon' className='transition-all' />}
              </div>
              <div className={`transition-all overflow-hidden duration-1000 ${toggle == index ? `opacity-100  h-[${height}px] visible ` : "invisible h-0 opacity-0 "} `} ref={ref}>
                {
                  item?.topics?.map((elem, ind) => {
                    return (
                      <Fragment key={ind}>
                        <Link href={`${elem.topicRoute}?${item.topicHeading}`} className={`flex gap-[10px] pb-[14px] cursor-pointer`} onClick={()=>{localStorage.setItem("activeindex",index) }}>
                          <Image src={unreadCheck} width={26} height={26} alt='unread checkmark icon' className='p-[5px] rounded-full bg-light-dark' />
                          <p className={` font-normal font-lato text-[18px] ${route === elem.topicRoute ? "text-white font-black":"text-quartary"}`}>{elem?.topic}</p>
                        </Link>
                      </Fragment>
                    )
                  })
                }
              </div>
            </div>
          </Fragment>
          )
        })
      }
    </>
  )
}



export default TopicsBar
