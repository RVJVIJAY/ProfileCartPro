import React from 'react'
import User from './User'
const UserCard = () => {
    const data=[
        {
            id:1,
            name:"vijay",
            status:true,
            skils:['html','css','javascript','bootstrap','java','Reactjs','mysql'],
            role:"ReactDeveloper",
            distict:"madurai",
            img:'/images/vj.webp'
        },
        {
            id:2,
            name:"mohen",
            status:true,
            skils:['html','css','javascript','bootstrap','redux','Reactjs','mongodb'],
            role:"FrontEnd Developer",
            distict:"kovi",
            img:'/images/mohen.webp'
        },
        {
            id:3,
            name:"mithun",
            status:true,
            skils:['javascript','nodejs','php','mysql','mongodb','Typescript'],
            role:"BackEnd Developer",
            distict:"Thirupur",
            img:'/images/mithun.jpg'
        },
        {
            id:4,
            name:"nithish",
            status:false,
            skils:['html','tailwind css','redux','angular','mongodb'],
            role:"FrontEnd Developer",
            distict:"theni",
            img:'/images/nithish.webp'
        },
        {
            id:5,
            name:"Raja",
            status:true,
            skils:['html','tailwind css','redux','angular','mongodb','figma'],
            role:"UI/ux designer",
            distict:"chennai",
            img:'/images/raja.webp'
        },
        {
            id:6,
            name:"Jegan",
            status:true,
            skils:['html','tailwind css','redux','angular','mongodb','figma'],
            role:"ReactDeveloper",
            distict:"Thenkasi",
            img:'/images/jegan.webp'
        },   
        {
            id:7,
            name:"Anbu",
            status:false,
            skils:['nodejs','expressjs','nextjs','mongodb','mysql','typescript'],
            role:"NodeDeveloper",
            distict:"Thenkasi",
            img:'/images/anbu.webp'
        },
        {
        id:8,
        name:"Athira",
        status:true,
        skils:['javascript','reactjs','nextjs'],
        role:"ReactDeveloper",
        distict:"coimbatore",
        img:'/images/akka.webp'
        }
    ]
    
  return (
    <div>
        <h1 className='heading'>React Team </h1>
        {
        
        data.map((datas)=>
        (<User key={datas.id} name={datas.name} status={datas.status} skils={datas.skils} role={datas.role}
            distict={datas.distict} img={datas.img}
     />))
     }
     
    </div>
  )
}

export default UserCard
