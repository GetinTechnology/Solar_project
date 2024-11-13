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



export const pageData = {
    residential: {
      title: "Residential",
      bannerBackground: Residential,
      description: "Residential Solar Power: Power Your Home with Clean Energy",
      paragraph: "Transform your home with sustainable, reliable energy from the sun. Residential solar power lets homeowners reduce their energy bills, increase property value, and contribute to a cleaner environment. Our high-quality solar solutions are tailored for residential needs, ensuring your home remains powered efficiently and economically.",
      points: [
        { icon: <HomeRepairServiceIcon />, title: "Lower Your Bills", description: "Reduce monthly costs by switching to efficient solar energy." },
        { icon: <SavingsIcon />, title: "Eco-Friendly", description: "Support a cleaner planet by reducing carbon footprint." },
        { icon: <HomeIcon />, title: "Increased Home Value", description: "Homes with solar panels have higher resale value." },
        { icon: <SecurityIcon />, title: "Reliable Energy", description: "Enjoy stable power with minimal maintenance." },
      ],
      reviews:[
        {reviewimage:dummy,name:"Karthik Suresh",Location: "Coimbatore, Tamil Nadu",Review: "Switching to solar has been a game-changer for our household. The installation was efficient, and we immediately saw the impact on our monthly bills. It feels empowering to know that we're contributing to a cleaner environment while also benefiting financially. The panels are low maintenance, and the energy savings are exactly as promised. We couldn't be happier with this sustainable choice."},
        {reviewimage:dummy,name:"Anjali Ramesh",Location: "Chennai, Tamil Nadu",Review: "The decision to go solar was initially about cutting costs, but it’s brought so many additional benefits. We’re saving a significant amount on electricity, which helps tremendously, and it’s rewarding to know we’re reducing our carbon footprint. The team handled the setup professionally, and the panels have been extremely reliable. This investment has added great value to our home, and we feel future-proofed in terms of energy costs."},
        {reviewimage:dummy,name:" Pradeep Rajan",Location: "Madurai, Tamil Nadu",Review: "Solar energy has exceeded our expectations. The entire process, from consultation to installation, was handled with such care and attention to detail. We’ve noticed major savings, and the impact on our utility bills has been exactly what we hoped for. It’s wonderful to know we’re helping the planet, and the positive feedback we get from friends and family about our eco-friendly choice is a bonus. Solar is truly the way forward!"},
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
      paragraph: "For small businesses, solar power is a smart investment that cuts operational costs, enhances brand reputation, and promotes long-term sustainability. Our custom-designed solar solutions provide businesses of all sizes with a reliable and eco-friendly energy source, empowering you to focus on growth without the burden of high utility bills.    ",
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
        {reviewimage:dummy,name:"Raghavendra Prasad",Location: "Salem, Tamil Nadu",Review: "As a small business owner, switching to solar was one of the best decisions we've made. Our energy bills have dropped significantly, freeing up funds we can reinvest into other areas of the business. Beyond the financial savings, our customers appreciate our commitment to sustainability, which has strengthened our brand reputation. The solar installation was smooth, and the panels require very little maintenance—just what a busy business needs!"},
        {reviewimage:dummy,name:"Priyanka Subramanian",Location: "Erode, Tamil Nadu",Review: "Going solar has had a fantastic impact on our operational costs. With energy prices rising, the predictability and stability of solar power have been a huge asset for us. Our decision to go green has also drawn positive attention from eco-conscious customers, and it feels great to align our values with our practices. The savings on electricity alone make this investment worthwhile, and the environmental impact is just icing on the cake"},
        {reviewimage:dummy,name:"Kavya",Location: "Bengaluru, Karnataka",Review: "We decided to go solar to reduce our electricity costs, but the benefits have gone beyond our expectations. Not only are we saving money each month, but we've also gained a reputation as an eco-friendly business, which resonates well with our clients. The installation process was efficient, and we were operational in no time. Knowing that our business is powered by renewable energy is incredibly rewarding, and we’re proud to be part of the green movement."},
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
      paragraph: "Embrace solar energy to reduce costs, achieve sustainability goals, and enhance your company’s reputation. Our commercial solar solutions are customized to meet the unique needs of businesses across industries, offering reliable, renewable energy that helps control expenses and supports long-term growth.",
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
        {reviewimage:dummy,name:"Lakshmi ",Location: "Bengaluru, Karnataka",Review: "Implementing solar energy at our commercial facility has been a game-changer. Our monthly energy costs have reduced dramatically, and the long-term savings make it a valuable investment. The ability to lock in energy costs has been a huge benefit, especially in budgeting for our operations. Beyond the savings, we’re proud to run our business on clean, renewable energy—it’s been great for our image and aligns with our commitment to sustainability."},
        {reviewimage:dummy,name:"Priyanka Subramanian",Location: "Erode, Tamil Nadu",Review: "Switching to solar has had a positive impact not just on our bottom line, but also on our brand's reputation. Clients and partners alike have noticed our commitment to green energy, which has boosted our credibility and opened up new opportunities. The stability of solar power gives us peace of mind, knowing that we’re less affected by fluctuations in energy prices. It’s a long-term investment we’re genuinely happy about."},
        {reviewimage:dummy,name:" Kishore Kumar",Location: "Trichy, Tamil Nadu",Review: "Our decision to adopt solar for our commercial property has exceeded our expectations. The energy savings have been impressive, and it feels great to contribute to a greener environment. We now have a reliable, consistent power source that supports our daily operations, and the tax benefits have made it even more cost-effective. The installation process was seamless, and we’re already seeing the positive impact on our business."},
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