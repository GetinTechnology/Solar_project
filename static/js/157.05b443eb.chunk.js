"use strict";(self.webpackChunksolarproject=self.webpackChunksolarproject||[]).push([[157],{4143:(e,s,i)=>{i.d(s,{A:()=>n});i(5043);const n=i.p+"static/media/booking.bf60123ee15408d893013ecd30235c48.svg"},5681:(e,s,i)=>{i.d(s,{h:()=>c});var n,a,t=i(5043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(null,arguments)}function l(e,s){let{title:i,titleId:l,...c}=e;return t.createElement("svg",r({width:60,height:61,viewBox:"0 0 60 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":l},c),i?t.createElement("title",{id:l},i):null,n||(n=t.createElement("path",{d:"M40 8.32202C38.6739 8.32202 37.4021 8.84881 36.4645 9.78649C35.5268 10.7242 35 11.9959 35 13.322V28.322C35 29.6481 35.5268 30.9199 36.4645 31.8576C37.4021 32.7952 38.6739 33.322 40 33.322C40.663 33.322 41.2989 33.5854 41.7678 34.0543C42.2366 34.5231 42.5 35.159 42.5 35.822V38.322C42.5 39.6481 41.9732 40.9199 41.0355 41.8576C40.0979 42.7952 38.8261 43.322 37.5 43.322C36.837 43.322 36.2011 43.5854 35.7322 44.0543C35.2634 44.5231 35 45.159 35 45.822V50.822C35 51.4851 35.2634 52.1209 35.7322 52.5898C36.2011 53.0586 36.837 53.322 37.5 53.322C41.4782 53.322 45.2936 51.7417 48.1066 48.9286C50.9196 46.1156 52.5 42.3003 52.5 38.322V13.322C52.5 11.9959 51.9732 10.7242 51.0355 9.78649C50.0979 8.84881 48.8261 8.32202 47.5 8.32202H40Z",fill:"#0B2F9F"})),a||(a=t.createElement("path",{d:"M12.5 8.32202C11.1739 8.32202 9.90215 8.84881 8.96447 9.78649C8.02678 10.7242 7.5 11.9959 7.5 13.322V28.322C7.5 29.6481 8.02678 30.9199 8.96447 31.8576C9.90215 32.7952 11.1739 33.322 12.5 33.322C13.163 33.322 13.7989 33.5854 14.2678 34.0543C14.7366 34.5231 15 35.159 15 35.822V38.322C15 39.6481 14.4732 40.9199 13.5355 41.8576C12.5979 42.7952 11.3261 43.322 10 43.322C9.33696 43.322 8.70107 43.5854 8.23223 44.0543C7.76339 44.5231 7.5 45.159 7.5 45.822V50.822C7.5 51.4851 7.76339 52.1209 8.23223 52.5898C8.70107 53.0586 9.33696 53.322 10 53.322C13.9782 53.322 17.7936 51.7417 20.6066 48.9286C23.4196 46.1156 25 42.3003 25 38.322V13.322C25 11.9959 24.4732 10.7242 23.5355 9.78649C22.5979 8.84881 21.3261 8.32202 20 8.32202H12.5Z",fill:"#0B2F9F"})))}const c=t.forwardRef(l);i.p},6210:(e,s,i)=>{i.d(s,{A:()=>n});i(5043);const n=i.p+"static/media/review.9cce79a578d187db96e04e5f8b4b6ff2.svg"},4797:(e,s,i)=>{i.d(s,{A:()=>n});i(5043);const n=i.p+"static/media/solar.50a570e17da6976b08aa727996d1b264.svg"},9607:(e,s,i)=>{i.d(s,{A:()=>n});i(5043);const n=i.p+"static/media/track.854bdba2ad1a32ada7f68a303d0da97c.svg"},6055:(e,s,i)=>{i.d(s,{A:()=>d});var n=i(5043),a=i(3519),t=i(1072),r=i(8602),l=i(3814),c=i(4282),o=i(579);const d=function(){const[e,s]=(0,n.useState)([]),[i,d]=(0,n.useState)({name:"",quantity:1}),[h,m]=(0,n.useState)("home"),[u,x]=(0,n.useState)(0),[p,j]=(0,n.useState)({systemSize:0,spaceRequired:0,annualEnergy:0,annualSavings:0,price:0,subsidy:0}),g={TV:100,AC:3160,Fan:70,Light:20,Refrigerator:350,"Washing Machine":350,"Microwave Oven":300,Computer:200,"Water Heater":400,Dishwasher:300,Iron:200};return(0,n.useEffect)((()=>{const s=5*e.reduce(((e,s)=>e+30*((g[s.name]||0)*s.quantity)*5/1e3),0);x(s.toFixed(2));let i=0,n=0,a=0,t=0,r=0,l=0;if(s>0&&s<=1e3)i=0,n=0,a=0,t=0,r=0,l=0;else{i=Math.floor(s/1e3),n=95*i,a=1714*i,t=12e3*i,r=96589*i,l=3e4*i}j({systemSize:i,spaceRequired:n,annualEnergy:a.toFixed(2),annualSavings:t.toFixed(2),price:r.toFixed(2),subsidy:l.toFixed(2)})}),[e,h,g]),(0,o.jsx)(a.A,{children:(0,o.jsx)("div",{className:"calculator",children:(0,o.jsxs)(t.A,{children:[(0,o.jsx)("h2",{children:"Calculate Your Savings"}),(0,o.jsx)(r.A,{children:(0,o.jsxs)("div",{className:"calculate-box-1",children:[(0,o.jsx)("h3",{children:"Enter Electronic Items and Quantity"}),(0,o.jsx)(l.A,{children:(0,o.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"20px"},children:[(0,o.jsxs)(l.A.Group,{children:[(0,o.jsx)(l.A.Label,{children:"Electronic"}),(0,o.jsx)(l.A.Control,{as:"select",value:i.name,onChange:e=>d({...i,name:e.target.value}),children:Object.keys(g).map(((e,s)=>(0,o.jsx)("option",{value:e,children:e},s)))})]}),(0,o.jsxs)(l.A.Group,{children:[(0,o.jsx)(l.A.Label,{children:"Quantity"}),(0,o.jsx)(l.A.Control,{type:"number",value:i.quantity,onChange:e=>d({...i,quantity:Number(e.target.value)}),min:"1"})]}),(0,o.jsx)(c.A,{onClick:()=>{const n=e.findIndex((e=>e.name===i.name));if(-1===n)s([...e,i]);else{const a=e.map(((e,s)=>s===n?{...e,quantity:e.quantity+i.quantity}:e));s(a)}d({name:i.name,quantity:1})},variant:"primary",className:"add-btn",children:"Add Item"})]})}),(0,o.jsxs)("div",{className:"mt-4",style:{height:"180px"},children:[(0,o.jsx)("h4",{children:"Items List"}),(0,o.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:0===e.length?(0,o.jsx)("p",{children:"electriconic item list "}):e.map(((i,n)=>(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("p",{style:{marginRight:"10px"},children:[i.quantity," x ",i.name]}),(0,o.jsx)(c.A,{variant:"danger",size:"sm",onClick:()=>(i=>{s(e.filter(((e,s)=>s!==i)))})(n),children:"Remove"})]},n)))})]}),(0,o.jsxs)(l.A.Group,{className:"mt-3",children:[(0,o.jsx)(l.A.Label,{children:"Usage Type"}),(0,o.jsxs)(l.A.Control,{as:"select",value:h,onChange:e=>m(e.target.value),children:[(0,o.jsx)("option",{value:"home",children:"Home"}),(0,o.jsx)("option",{value:"commercial",children:"Commercial"}),(0,o.jsx)("option",{value:"smallBusiness",children:"Small Business"})]})]}),(0,o.jsx)("p",{children:" Calculate your savings with solar energy and take a step towards a greener future. Discover how much you can reduce your electricity costs while getting tailored recommendations for the ideal solar system based on your needs."})]})}),(0,o.jsx)(r.A,{children:(0,o.jsxs)("div",{className:"calculate-box-2",children:[(0,o.jsxs)("h3",{children:["Optimized Solar Recommendations for Your  ",h]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Monthly Electricity Cost"})}),(0,o.jsxs)("p",{children:["\u20b9",u]})]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"System Size"})}),(0,o.jsxs)("p",{children:[p.systemSize," kW"]})]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Space Required"})}),(0,o.jsxs)("p",{children:[p.spaceRequired," sq ft"]})]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:"Annual Energy"}),(0,o.jsxs)("p",{children:[p.annualEnergy," kWh"]})]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Annual Savings"})}),(0,o.jsxs)("p",{children:["\u20b9",p.annualSavings]})]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Price"})}),(0,o.jsxs)("p",{children:["\u20b9",p.price]})]}),(0,o.jsxs)("div",{className:"calculate-box",children:[(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Subsidy"})}),(0,o.jsxs)("p",{children:["\u20b9",p.subsidy]})]})]})})]})})})}},7947:(e,s,i)=>{i.d(s,{A:()=>r});var n=i(5043),a=i(579);const t=e=>{let{question:s,answer:i}=e;const[t,r]=(0,n.useState)(!1);return(0,a.jsxs)("div",{className:"faq-item "+(t?"open":""),onClick:()=>{r(!t)},children:[(0,a.jsxs)("div",{className:"faq-question",children:[(0,a.jsx)("h3",{children:s}),(0,a.jsx)("span",{children:"+"})]}),(0,a.jsx)("div",{className:"faq-answer",children:i})]})},r=e=>{let{faqs:s}=e;return(0,a.jsxs)("div",{className:"faq-container",children:[(0,a.jsx)("h2",{className:"headings",children:"Frequently Asked Questions"}),(0,a.jsx)("div",{className:"faq-list",children:s.map(((e,s)=>(0,a.jsx)(t,{question:e.question,answer:e.answer},s)))})]})}},3773:(e,s,i)=>{i.r(s),i.d(s,{default:()=>O});var n=i(5043);i(6783);i.p;const a=i.p+"static/media/experties.5ff185a1031cac1b57cc360376719a9e.svg";const t=i.p+"static/media/shield-check-svgrepo-com.f0d76d683f837c3ac651bca6261634d8.svg";const r=i.p+"static/media/puzzle-piece-6-svgrepo-com.7e6f3d027b5f62097fe919ad3074000b.svg";const l=i.p+"static/media/headset-svgrepo-com.78960c60a9ed8f94be1947ac4f8b1b2f.svg";const c=i.p+"static/media/rupee-2-svgrepo-com.c8a4328d44b22d5373cbf30c289698fc.svg";const o=i.p+"static/media/eco-home-eco-house-svgrepo-com.eefde1129b12f0ef3ae5fd5a757f1153.svg";var d=i(3673),h=i(3341),m=i(4671),u=i(3519),x=i(1072),p=i(8602),j=i(5284),g=i(6055),v=i(7701),b=i(8117),y=i(2666),f=i(7631),w=i(7947),N=i(5475),C=i(8436),A=i(5681),S=i(1591),q=i(4143),k=i(9607),E=i(6210),R=i(4797),F=i(579);const O=function(){(0,n.useEffect)((()=>{window.scrollTo(0,0)}),[]);const e=[{title:"Experienced Professionals",img:a,content:"Our team has years of experience in the solar industry, ensuring that your installation is handled by experts."},{title:"Quality & Durability",img:t,content:"We use only top-quality materials and equipment to provide you with reliable, long-lasting solar solutions."},{title:"Customized Solutions",img:r,content:"Every home and business is unique. We tailor our solar solutions to meet your specific energy needs and goals"},{title:"Affordable Financing",img:c,content:"We offer flexible financing options to make solar accessible and affordable for everyone."},{title:"Comprehensive Support",img:l,content:"Our dedicated support team is here to assist you before, during, and after installation, ensuring your complete satisfaction."},{title:"Commitment to Sustainability",img:o,content:"We are dedicated to promoting sustainable energy solutions that protect our planet and future generations."}],s=[{reviewimg:f,name:"Priya Rajan",location:"Chennai, Tamil Nadu",review:"Switching to solar energy has truly transformed how we manage energy costs. Since installation, our energy bills have dropped significantly, providing immediate savings.  "},{reviewimg:f,name:"Arun Kumar",location:"Coimbatore, Tamil Nadu",review:"Our move to solar power was a smart decision that continues to pay off. Not only has it been a major cost-saver, but the peace of mind that comes from energy independence has been priceless.  "},{reviewimg:f,name:"Lakshmi",location:"Madurai, Tamil Nadu",review:"Solar energy has been a game-changer for us. The system operates seamlessly with minimal maintenance, and the impact on our energy bills has been immediate.  "}],i=[{title:"Book a Free Consultation",description:"Schedule a consultation with our solar experts.",icon:q.A},{title:"Review Proposal & Confirm Order",description:"Receive a detailed proposal tailored to your site.",icon:E.A},{title:"Track Project Installation",description:"Keep tabs on each stage of the installation process.",icon:k.A},{title:"Your Site is Solar Powered",description:"Celebrate as your property begins harnessing the sun.",icon:R.A}],[O,W]=(0,n.useState)(!1);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(S.m,{}),(0,F.jsx)("div",{className:"banner",children:(0,F.jsx)(u.A,{children:(0,F.jsxs)("div",{className:"banner-content",children:[(0,F.jsx)("h1",{children:"Unlock the Power of Solar Energy for Your Home"}),(0,F.jsx)("p",{children:"Take the first step toward a sustainable future by embracing solar energy. Say goodbye to high electricity bills and hello to long-term savings. Experience the benefits of clean, renewable power while reducing your carbon footprint. Transform your home into a beacon of sustainability and efficiency today!"}),(0,F.jsx)("button",{className:"quote",onClick:()=>W(!0),children:"Get A Quote"})]})})}),(0,F.jsx)("div",{className:"banner-bottom",children:(0,F.jsx)(u.A,{children:(0,F.jsxs)(x.A,{children:[(0,F.jsx)(p.A,{sm:12,lg:4,md:4,children:(0,F.jsxs)("div",{className:"banner-bottom-box box-1",children:[(0,F.jsx)(v.A,{className:"banner-bottom-box-icon"}),(0,F.jsxs)("h2",{children:["Save on Energy ",(0,F.jsx)("br",{}),"Bills"]}),(0,F.jsx)("p",{children:"Reduce your monthly bills and enjoy long-term savings with our high-efficiency solar systems. Say goodbye to rising electricity costs!"})]})}),(0,F.jsx)(p.A,{sm:12,lg:4,md:4,children:(0,F.jsxs)("div",{className:"banner-bottom-box box-2",children:[(0,F.jsx)(b.A,{className:"banner-bottom-box-icon"}),(0,F.jsx)("h2",{children:"Reduce Your Carbon Footprint"}),(0,F.jsx)("p",{children:"By switching to solar, you\u2019re supporting a cleaner, greener environment. Join us in making a positive impact on the planet with renewable energy."})]})}),(0,F.jsx)(p.A,{sm:12,lg:4,md:4,children:(0,F.jsxs)("div",{className:"banner-bottom-box box-3",children:[(0,F.jsx)(y.A,{className:"banner-bottom-box-icon"}),(0,F.jsx)("h2",{children:"Reliable and Low Maintenance"}),(0,F.jsx)("p",{children:"Our solar panels are designed for durability and low maintenance, providing you with reliable energy for years to come."})]})})]})})}),(0,F.jsx)("div",{className:"saving-calculater",children:(0,F.jsx)(g.A,{})}),(0,F.jsx)("div",{className:"why-choose-us",children:(0,F.jsxs)(u.A,{children:[(0,F.jsx)("h2",{className:"headings",children:"Why Choose Us"}),(0,F.jsx)("p",{children:"At Getin, we\u2019re committed to making clean energy accessible, affordable, and easy for everyone. With a dedicated team, cutting-edge technology, and customized solutions tailored to your specific needs, we ensure a seamless transition to solar power. Trust us to help you achieve energy independence while contributing to a sustainable future."}),(0,F.jsx)(x.A,{children:e.map((e=>(0,F.jsx)(p.A,{lg:4,children:(0,F.jsxs)("div",{className:"wcu-box",children:[(0,F.jsx)("img",{src:e.img,alt:""}),(0,F.jsx)("h3",{children:e.title}),(0,F.jsx)("p",{children:e.content})]})})))})]})}),(0,F.jsx)("div",{className:"segments",children:(0,F.jsxs)(u.A,{children:[(0,F.jsx)("h2",{className:"headings",children:"Our Segments"}),(0,F.jsxs)(x.A,{children:[(0,F.jsx)(p.A,{sm:12,md:4,lg:4,children:(0,F.jsx)(N.N_,{to:"/venue/residential",children:(0,F.jsxs)("div",{className:"segment",children:[(0,F.jsx)("img",{src:d,alt:""}),(0,F.jsx)("div",{className:"se-name",children:(0,F.jsx)("h3",{children:"Residential"})})]})})}),(0,F.jsx)(p.A,{sm:12,md:4,lg:4,children:(0,F.jsx)(N.N_,{to:"/venue/commercial",children:(0,F.jsxs)("div",{className:"segment",children:[(0,F.jsx)("img",{src:h,alt:""}),(0,F.jsx)("div",{className:"se-name",children:(0,F.jsx)("h3",{children:"Commercial"})})]})})}),(0,F.jsx)(p.A,{sm:12,md:4,lg:4,children:(0,F.jsx)(N.N_,{to:"/venue/smallbusiness",children:(0,F.jsxs)("div",{className:"segment",children:[(0,F.jsx)("img",{src:m,alt:""}),(0,F.jsx)("div",{className:"se-name",children:(0,F.jsx)("h3",{children:"Small Bussiness"})})]})})})]})]})}),(0,F.jsx)("div",{className:"solar-steps",children:(0,F.jsx)(u.A,{children:(0,F.jsxs)(x.A,{children:[(0,F.jsx)("h2",{className:"headings",children:"Get Your Solar in Steps"}),i.map((e=>(0,F.jsx)(p.A,{style:{display:"flex",justifyContent:"center",alignItems:"center"},sm:12,md:6,lg:3,children:(0,F.jsxs)("div",{className:"step-box",children:[(0,F.jsx)("div",{children:(0,F.jsx)("img",{src:e.icon,alt:"",className:"step-icon"})}),(0,F.jsx)("h3",{children:e.title}),(0,F.jsx)("p",{children:e.description})]})},e.title)))]})})}),(0,F.jsxs)("div",{className:"review",children:[(0,F.jsx)("h2",{className:"headings",children:"Customers Review"}),(0,F.jsx)(u.A,{children:(0,F.jsx)(x.A,{className:"review-container",children:s.map((e=>(0,F.jsx)(p.A,{lg:4,children:(0,F.jsxs)("div",{className:"review-box",children:[(0,F.jsxs)("div",{className:"review-box-top",children:[(0,F.jsxs)("div",{className:"review-box-top-1",children:[(0,F.jsx)("img",{src:e.reviewimg,alt:""}),(0,F.jsxs)("div",{className:"review-box-top-content",children:[(0,F.jsx)("p",{children:e.name}),(0,F.jsx)("p",{children:e.location})]})]}),(0,F.jsx)(A.h,{className:"review-box-top-2"})]}),(0,F.jsx)("div",{className:"review-box-content",children:(0,F.jsx)("p",{className:"review-box-content-p",children:e.review})})]})},e.name)))})})]}),(0,F.jsx)(w.A,{faqs:[{question:"What is solar energy?",answer:"Solar energy is the energy from the sun that is converted into thermal or electrical energy."},{question:"How does solar power work?",answer:"Solar power works by converting sunlight into electricity using photovoltaic (PV) cells."},{question:"Is solar energy environmentally friendly?",answer:"Yes, solar energy is a clean and renewable resource that reduces carbon emissions."},{question:"How long do solar panels last?",answer:"Most solar panels have a lifespan of 25-30 years, depending on the brand and maintenance."},{question:"What are the benefits of solar energy?",answer:"Solar energy reduces energy bills, lowers carbon footprint, and provides energy independence."}]}),(0,F.jsx)(j.A,{show:O,onHide:()=>W(!1),children:(0,F.jsx)(C.A,{setModalIsOpen:W})})]})}},6783:()=>{},3341:(e,s,i)=>{e.exports=i.p+"static/media/commercial.7beed3e7d705ab5cb18f.jpg"},7631:(e,s,i)=>{e.exports=i.p+"static/media/dummy.56243a16914d41a3c2f2.jpg"},3673:(e,s,i)=>{e.exports=i.p+"static/media/residential.91a9bfa3fbb508184774.jpg"},4671:(e,s,i)=>{e.exports=i.p+"static/media/small-business.2d9f3aebe936020df2b7.jpg"}}]);
//# sourceMappingURL=157.05b443eb.chunk.js.map