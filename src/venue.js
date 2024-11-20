import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoneyIcon from '@mui/icons-material/Money';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import StarIcon from '@mui/icons-material/Star';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Residential from './images/residential.jpg';
import Commercial from './images/commercial.jpg';
import sb from './images/small-business.jpg'
import dummy from './images/dummy.jpg'
import venue_home from './images/venue-home.png'
import venueresolar from './images/venue-re-solar.png'
import fb from './images/Financial Benefits of Residential Solar Power.png'
import ta from './images/Technological Advances and Accessibility.png'
import battery from './images/solar panels and a battery storage system.png'
import smsolar from './images/What is Small Business Solar Power.png'
import sm2 from './images/2.png'
import sm3 from './images/Financial Benefits of Small Business Solar Power.png'
import sm4 from './images/4.png'
import sm5 from './images/5.png'
import c1 from './images/c1.png'
import c2 from './images/c2.png'
import c3 from './images/c3.png'
import c4 from './images/c4.jpg'
import c5 from './images/c5.jpg'
export const pageData = {
    residential: {
      title: "Residential",
      bannerBackground: Residential,
      description: "Residential Solar Power: Power Your Home with Clean Energy",
      paragraph: "As the world moves toward more sustainable solutions for daily energy needs, solar power has become one of the most viable and impactful ways to make a positive change—starting right at home. Solar power for residential use allows homeowners to harness the sun's energy, offering a renewable, eco-friendly source that benefits both individuals and the broader environment. With the rising costs of electricity, increased awareness of environmental conservation, and technological advances making solar more accessible, installing a residential solar power system is a smart, practical, and future-oriented choice for anyone looking to reduce their carbon footprint, enhance energy independence, and save on long-term costs.",
        title1:{title:"What is Residential Solar Power?",content:"Residential solar power refers to the installation of solar panels on homes to convert sunlight into electricity. This electricity can power all or part of the household’s daily energy requirements, reducing reliance on traditional power sources that often come from fossil fuels. By placing solar panels on rooftops or in yards with optimal sunlight, homeowners can capture clean energy and convert it into power through photovoltaic (PV) technology. These solar systems can be connected to the electrical grid, and with net metering policies, excess energy produced can be sold back to the grid, providing additional savings.",img:venue_home},
        title2:{title:"Why is Solar Power Important for Homeowners?",content:"The residential sector is a significant energy consumer, which makes it crucial in the shift toward more sustainable energy sources. Households typically rely on grid electricity, which often involves burning coal, oil, or natural gas—processes that release greenhouse gases contributing to global warming. Solar power, on the other hand, is a clean, renewable resource that emits no greenhouse gases during electricity production. This transition to solar at the individual level helps reduce environmental harm, conserves natural resources, and promotes energy security.",img:venueresolar},
        title3:{title:"Financial Benefits of Residential Solar Power",content:"One of the most compelling aspects of residential solar power is the potential for long-term financial savings. Although the initial investment in solar installation can be substantial, various financial incentives can help offset costs. Many countries and local governments offer tax credits, rebates, and grants for residential solar installations. These incentives can significantly reduce the upfront cost, making solar more affordable for homeowners. Additionally, solar power systems generally have a payback period of 5-10 years, after which the electricity generated is virtually free.Solar installations also add tangible value to a home. Research shows that homes equipped with solar panels sell for a premium, often attracting eco-conscious buyers willing to pay more for a property with reduced energy costs. In this way, residential solar power can be seen as an investment, enhancing property value while saving on utility expenses.",img:fb},
        title4:{title:"Technological Advances and Accessibility",content:"Residential solar technology has advanced considerably over the past decade, making systems more efficient, affordable, and accessible. Modern solar panels are now capable of capturing more sunlight and generating more power, even in partially shaded conditions. Many panels are also built to withstand harsh weather, including hail, wind, and snow, making them suitable for various climates.",img:ta},
        title5:{title:"The Future of Energy Independence and Security",content:"Investing in residential solar power is also a step toward greater energy independence and security. Solar energy offers homeowners a way to control their energy production and consumption. Rather than being affected by rising utility costs or energy market volatility, solar-powered households can enjoy stable, predictable energy costs.Moreover, residential solar systems contribute to a more resilient energy grid. When homes generate and store their own electricity, they reduce the overall demand on the grid, helping prevent blackouts or service interruptions during peak times. Some neighborhoods even establish solar communities, where solar-powered homes share energy and support each other in emergencies, fostering local resilience and cooperation.",img:battery},
    
      points: [
        { icon: <HomeRepairServiceIcon />, title: "Lower Your Bills", description: "Reduce monthly costs by switching to efficient solar energy." },
        { icon: <SavingsIcon />, title: "Eco-Friendly", description: "Support a cleaner planet by reducing carbon footprint." },
        { icon: <HomeIcon />, title: "Increased Home Value", description: "Homes with solar panels have higher resale value." },
        { icon: <SecurityIcon />, title: "Reliable Energy", description: "Enjoy stable power with minimal maintenance." },
      ],
      reviews:[
        {reviewimage:dummy,name:"Karthik Suresh",Location: "Coimbatore, Tamil Nadu",Review: "Switching to solar has been a game-changer for our household. The installation was efficient, and we immediately saw the impact on our monthly bills. It feels empowering to know that we're contributing to a cleaner environment while also benefiting financially."},
        {reviewimage:dummy,name:"Anjali Ramesh",Location: "Chennai, Tamil Nadu",Review: "The decision to go solar was initially about cutting costs, but it’s brought so many additional benefits. We’re saving a significant amount on electricity, which helps tremendously, and it’s rewarding to know we’re reducing our carbon footprint. "},
        {reviewimage:dummy,name:" Pradeep Rajan",Location: "Madurai, Tamil Nadu",Review: "Solar energy has exceeded our expectations. The entire process, from consultation to installation, was handled with such care and attention to detail. We’ve noticed major savings, and the impact on our utility bills has been exactly what we hoped for. "},
      ],
       faqs : [
        { question: "How much can I save with residential solar panels?", answer: "Solar panels can significantly reduce your monthly energy bills. Savings depend on your energy usage, location, and system size, with many homeowners seeing reductions of 50% or more." },
        { question: "Will solar panels increase my property value? ", answer: "Yes, homes with solar panels often see an increase in property value. Solar installations are attractive to eco-conscious buyers and add long-term energy savings." },
        { question: "What happens on cloudy days or at night?", answer: "Solar panels still generate power on cloudy days, but production may be lower. At night, you will draw power from the grid unless you have a battery storage system." },
        { question: "How long will my residential solar system last?", answer: "Solar panels are built to last 25-30 years or more. Proper maintenance and care can help ensure your system continues to perform efficiently throughout its lifespan." },
        { question: "What size solar system do I need for my home?", answer: "The system size depends on your household’s energy consumption, roof space, and budget. A solar installer can recommend an optimal system based on these factors." },
        { question: "Are there financing options available for residential solar installations?", answer: "Yes, many providers offer financing options such as loans, leases, and power purchase agreements (PPAs), which allow you to go solar with little or no upfront cost." },
        { question: "Will my system need to be connected to the grid?", answer: "Most residential systems remain connected to the grid for reliability. However, with battery storage, you can reduce reliance on the grid and store excess energy for later use." },
        { question: "Do solar panels require a lot of maintenance?", answer: "Solar panels require minimal maintenance—typically just regular cleaning and annual inspections. Most systems include warranties that cover long-term performance." },
        { question: "How will I know if my solar panels are working properly?", answer: "Most systems come with monitoring software that allows you to track your energy production in real time. This ensures your system is working at peak efficiency." }
      ]
    },
    smallBusiness: {
      title: "Small Business",
      bannerBackground: sb,
      description: "Solar Power for Small Businesses: Energize Your Business Sustainably",
      paragraph: "As businesses around the world strive to operate more sustainably, solar energy is becoming an increasingly popular solution for small businesses looking to reduce energy costs and demonstrate environmental responsibility. Installing solar panels not only helps small businesses save on long-term electricity costs, but it also boosts their green credentials, attracting eco-conscious customers and improving their public image. As the costs of solar technology decrease and incentives make it more affordable, small businesses now have an opportunity to secure their energy future while reducing their carbon footprint and contributing to a cleaner planet. ",
    title1:{title:"What is Small Business Solar Power?",content:"Small business solar power refers to the use of solar panels to generate electricity for business operations. Just like residential systems, solar energy can be harnessed by installing photovoltaic (PV) panels on business rooftops or other open spaces with good sunlight exposure. This electricity can power a range of business activities, from lighting and heating to machinery and office equipment. Excess power produced by the solar system can often be sold back to the grid through net metering, providing additional income or savings.",img:smsolar},
        title2:{title:"Why is Solar Power Important for Small Businesses?",content:"For small businesses, the transition to solar power can be a game-changer. High electricity bills are often one of the most significant operational expenses for small enterprises. Solar energy provides a solution to this by significantly reducing energy costs. Solar also positions businesses as leaders in sustainability, allowing them to stand out in competitive markets. Beyond financial savings, solar energy helps reduce the reliance on fossil fuels, promoting clean, renewable energy and contributing to the broader movement toward environmental responsibility.",img:sm2},
        title3:{title:"Financial Benefits of Small Business Solar Power",content:"The financial advantages of solar power are particularly compelling for small businesses. While the initial installation of solar panels may seem costly, businesses can take advantage of various financial incentives such as tax credits, rebates, and grants. These incentives reduce the upfront cost of solar installation, making it more affordable and accessible. In addition, businesses with solar power can save significantly on electricity costs, and many systems have a payback period of 3-7 years. After that period, businesses can enjoy free or significantly reduced electricity for decades.Solar installations can also enhance a business’s property value, especially in markets where sustainability is valued. Furthermore, businesses that adopt solar energy can attract a growing demographic of eco-conscious consumers who are increasingly prioritizing sustainability when choosing where to spend their money.",img:sm3},
        title4:{title:"Environmental Impact and Corporate Responsibility",content:"Switching to solar power reduces a business’s carbon footprint and promotes a greener image. Solar energy is a clean, renewable source of power that does not release harmful emissions, unlike traditional power generation methods that burn coal, oil, or natural gas. By adopting solar energy, small businesses help reduce their environmental impact, conserve natural resources, and contribute to the fight against climate change. This not only benefits the environment but also helps businesses build goodwill and a positive reputation in the eyes of customers, employees, and the community.",img:sm4},
        title5:{title:"Making the Switch: An Easy Process",content:"The process of transitioning to solar power is streamlined and straightforward, especially with the help of experienced providers. Most providers begin with a consultation to assess the energy needs of the business, followed by a design that fits the unique needs of the business. The provider will handle all aspects of installation and activation, ensuring the system is up and running quickly and efficiently.",img:sm5},
 
      points: [
        { icon: <BusinessCenterIcon />, title: "Lower Overhead", description: "Cut energy costs to boost business profits." },
        {
            icon: <TrendingUpIcon />,
            title: "Green Branding",
            description: "Attract eco-conscious clients with sustainable practices."
          },
          {
            icon: <MoneyIcon />,
            title: "Flexible Financing",
            description: "Get access to financing options that fit your budget."
          },
          {
            icon: <ThumbUpIcon />,
            title: "Reliable Power",
            description: "Experience dependable power for your business needs."
          }
      ],
      reviews:[
        {reviewimage:dummy,name:"Raghavendra Prasad",Location: "Salem, Tamil Nadu",Review: "As a small business owner, switching to solar was one of the best decisions we've made. Our energy bills have dropped significantly, freeing up funds we can reinvest into other areas of the business. "},
        {reviewimage:dummy,name:"Priyanka Subramanian",Location: "Erode, Tamil Nadu",Review: "Going solar has had a fantastic impact on our operational costs. With energy prices rising, the predictability and stability of solar power have been a huge asset for us. "},
        {reviewimage:dummy,name:"Kavya",Location: "Bengaluru, Karnataka",Review: "We decided to go solar to reduce our electricity costs, but the benefits have gone beyond our expectations. Not only are we saving money each month, but we've also gained a reputation as an eco-friendly business, which resonates well with our clients. "},
      ],
      faqs :  [
        { 
            question: "How can solar power reduce my business's operational costs?", 
            answer: "Switching to solar can lower your energy bills significantly, allowing small businesses to reduce overhead and increase profitability." 
        },
        { 
            question: "Are there financing options available for small businesses?", 
            answer: "Yes, many solar providers offer flexible financing options, including leases, loans, and Power Purchase Agreements (PPAs) to help small businesses afford solar installations with minimal upfront costs." 
        },
        { 
            question: "Will going solar improve my business's reputation?", 
            answer: "Yes, adopting solar power demonstrates a commitment to sustainability, which can attract eco-conscious customers and enhance your brand image." 
        },
        { 
            question: "How long does the solar installation process take for small businesses?", 
            answer: "Installation time depends on system size and site specifics, but typically takes a few days to a couple of weeks. Installers work to minimize disruptions to daily operations." 
        },
        { 
            question: "What tax incentives are available for small businesses that go solar?", 
            answer: "Small businesses can often take advantage of federal and state tax credits, deductions, and rebates that make solar more affordable and help recoup initial costs." 
        },
        { 
            question: "How does solar power affect property value for a small business?", 
            answer: "Installing solar can increase your property's value and make it more attractive to potential buyers, as it reduces long-term energy costs and shows environmental responsibility." 
        },
        { 
            question: "What maintenance does a small business solar system require?", 
            answer: "Solar systems generally require very little maintenance. Periodic cleaning and occasional inspections are typically sufficient to keep systems operating efficiently." 
        },
        { 
            question: "Can I use solar power alone to run my entire business?", 
            answer: "Depending on your energy needs and system size, it’s possible to cover most or all of your energy requirements. Battery storage options can also help manage energy during off-peak hours." 
        },
        { 
            question: "What happens to the solar energy I don’t use?", 
            answer: "With net metering, excess energy generated by your solar system can be sent back to the grid, earning you credits that can lower your electricity bill even further." 
        },
        { 
            question: "Are there environmental benefits to using solar for small businesses?", 
            answer: "Absolutely. By using solar, your business reduces its carbon footprint, helping combat climate change and supporting a cleaner environment." 
        }
    ]
    },
    commercial: {
      title: "Commercial",
      bannerBackground: Commercial,
      description: "Power Your Business with Commercial Solar Solutions",
      paragraph: "As the global demand for sustainable solutions continues to rise, commercial solar power offers an effective way for businesses of all sizes to reduce their energy consumption, lower operational costs, and enhance their sustainability efforts. Installing solar systems at commercial properties provides a reliable, renewable source of energy that helps businesses mitigate the effects of rising electricity costs and regulatory pressures to reduce carbon footprints. With the added financial incentives and advances in technology, investing in solar power for commercial properties has never been more appealing.",
     
        title1:{title:"What is Commercial Solar Power?",content:"Commercial solar power refers to the installation of solar panels at commercial properties to generate electricity. These systems are typically much larger than residential ones and are designed to meet the high energy demands of businesses. Solar panels are often placed on rooftops or large open spaces at commercial properties, capturing sunlight and converting it into electricity through photovoltaic (PV) technology. Commercial solar systems can be connected to the grid, and through net metering, excess power can be sold back to the grid, generating income or reducing electricity bills.",img:c1},
       title2: {title:"Why is Solar Power Important for Commercial Properties?",content:"FFor commercial properties, solar energy provides a way to reduce operational costs and increase energy efficiency. With rising utility costs and increasing regulatory pressure to adopt cleaner energy sources, solar energy helps businesses become more self-sufficient and less reliant on the grid. By adopting solar power, businesses also improve their corporate image, showcasing their commitment to sustainability and corporate social responsibility.",img:c2},
       title3: {title:"Technological Advances and Accessibility",content:"Solar technology has evolved significantly over the years, making it more affordable and efficient for commercial applications. Modern panels are capable of capturing more sunlight and producing more energy, even in partially shaded environments. Battery storage systems, which allow businesses to store excess energy for later use, have also become more affordable, offering greater flexibility and energy independence.The process of installing solar systems at commercial properties has become more streamlined, with providers offering end-to-end services that include system design, installation, and maintenance. Additionally, financing options such as leases and power purchase agreements (PPAs) make it easier for businesses to adopt solar without the need for large upfront investments.",img:c3},
        title4:{title:"The Future of Commercial Energy Security",content:"Commercial solar power offers businesses a path to greater energy security and independence. With solar panels, businesses can generate their own electricity and reduce reliance on the grid. This reduces exposure to rising energy costs and helps businesses avoid the financial uncertainty associated with volatile energy markets.By investing in solar, businesses can also contribute to a more resilient energy grid. When businesses generate their own electricity, they reduce demand on the grid, helping prevent outages and improve energy reliability.",img:c5},
        title5:{title:"A Sustainable and Profitable Investment",content:"Commercial solar power is an intelligent, forward-thinking investment that can lead to significant savings, enhanced sustainability, and a stronger brand image. By switching to solar, businesses can reduce their environmental footprint, lower their energy costs, and contribute to a cleaner, more resilient energy future. Solar power is not only a solution for today’s energy challenges—it’s a crucial part of tomorrow’s energy landscape.",img:c4},
   
      points: [
        { icon: <ApartmentIcon />, title: "Cost Efficiency", description: "Significant savings on large-scale energy usage." },
        {
            icon: <BusinessIcon />,
            title: "Enhanced Sustainability",
            description: "Improve your business's green footprint."
          },
          {
            icon: <LocalAtmIcon />,
            title: "Tax Benefits",
            description: "Access rebates and tax incentives for solar adoption."
          },
          {
            icon: <StarIcon />,
            title: "High Reliability",
            description: "Minimize disruptions with a consistent power source."
          }
      ],
      reviews:[
        {reviewimage:dummy,name:"Lakshmi ",Location: "Bengaluru, Karnataka",Review: "Implementing solar energy at our commercial facility has been a game-changer. Our monthly energy costs have reduced dramatically, and the long-term savings make it a valuable investment. "},
        {reviewimage:dummy,name:"Priyanka Subramanian",Location: "Erode, Tamil Nadu",Review: "Switching to solar has had a positive impact not just on our bottom line, but also on our brand's reputation. Clients and partners alike have noticed our commitment to green energy, which has boosted our credibility and opened up new opportunities. "},
        {reviewimage:dummy,name:" Kishore Kumar",Location: "Trichy, Tamil Nadu",Review: "Our decision to adopt solar for our commercial property has exceeded our expectations. The energy savings have been impressive, and it feels great to contribute to a greener environment. "},
      ],
      faqs:[
        { 
            question: "What are the primary benefits of solar energy for commercial properties?", 
            answer: "Solar energy can drastically reduce utility expenses, offer tax benefits, and promote a sustainable image. It’s also a long-term investment that provides consistent returns." 
        },
        { 
            question: "How does solar installation affect commercial operations?", 
            answer: "Commercial installations are designed to minimize disruptions. Most installations are completed in phases, allowing businesses to continue normal operations during the setup process." 
        },
        { 
            question: "What kind of maintenance does a commercial solar system require?", 
            answer: "Solar systems require minimal maintenance. Regular cleaning and occasional inspections ensure optimal performance, and most components come with long-term warranties." 
        },
        { 
            question: "How long does it take for a commercial solar system to pay for itself?", 
            answer: "Payback time varies based on system size, incentives, and electricity usage, but most businesses see returns within 3-7 years. After the payback period, energy generated is essentially free." 
        },
        { 
            question: "What factors should I consider when choosing a commercial solar provider?", 
            answer: "Key considerations include experience with commercial installations, financing options, system warranties, and post-installation support." 
        },
        { 
            question: "How do I determine the best location for solar panels on a commercial property?", 
            answer: "Installers assess factors like roof size, angle, shading, and energy needs to determine the optimal location for maximum energy generation." 
        },
        { 
            question: "Are there environmental benefits to going solar for commercial properties?", 
            answer: "Yes, solar energy reduces carbon emissions and reliance on fossil fuels, enhancing your business's eco-friendly image and meeting sustainability goals." 
        },
        { 
            question: "How does net metering benefit commercial solar users?", 
            answer: "With net metering, excess energy generated by your system can be sent back to the grid, allowing you to earn credits that reduce electricity bills." 
        },
        { 
            question: "Can commercial solar systems integrate with battery storage?", 
            answer: "Yes, battery storage systems can be paired with solar to store excess energy, providing backup power and reducing dependency on the grid." 
        },
        { 
            question: "What are the warranties like for commercial solar systems?", 
            answer: "Commercial solar systems typically come with warranties covering 20-25 years for panels and 10-15 years for inverters, ensuring reliability and performance over time." 
        }
    ]
    
    },
  };