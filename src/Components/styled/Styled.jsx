// import React, { useEffect, useState } from 'react'
// import styled, {keyframes} from "styled-components";

// const BADGES_LARGE = [
//     { type: "science", icon: "🔬" },
//     { type: "math", icon: "📐" },
//     { type: "history", icon: "📜" },
//     { type: "art", icon: "🎨" },
//   ];
  
//   const badges = {
//     science: {
//       count: 2,
//       badges: [
//         { id: 1, name: "Biology Expert", date_created: { short_date: "2022-01-01" }, type: "science" },
//         { id: 2, name: "Chemistry Master", date_created: { short_date: "2022-02-01" }, type: "science" },
//       ],
//     },
//     math: {
//       count: 1,
//       badges: [
//         { id: 3, name: "Algebra Genius", date_created: { short_date: "2022-03-01" }, type: "math" },
//       ],
//     },
//     history: {
//       count: 0,
//       badges: [],
//     },
//     art: {
//       count: 1,
//       badges: [
//         { id: 4, name: "Painting Prodigy", date_created: { short_date: "2022-04-01" }, type: "art" },
//       ],
//     },
//   };

// const StyledSection = styled.section`
//   padding: 20px 0;

//   p {
//     font-size: 14px;
//     font-weight: 400;
//     color: #586069;
//     padding: 0;
//     margin: 0;
//   }

//   .content {
//     padding: 0;
//     margin-top: 20px;
//     display: flex;

//     height: 100%;
//     gap: 20px;

//     .left {
//       flex-basis: 250px;
//     }

//     .right {
//       flex: 1;
//     }

//     .right-container {
//       border: 1px solid #e1e4e8;
//       padding: 15px 20px;
//       border-radius: 5px;
//       width: 100%;
//     }

    

//     .badges {
//       display: flex;
//       flex-wrap: wrap;
//       align-items: center;
//       gap: 20px;
//       flex 1;
     
//     }
//   }
// `;

// const pulse = keyframes`
//   0% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const StyledSkelelton = styled.div`
//   text-decoration: none;
//   border-radius: 50%;
//   height: 70px;
//   width: 70px;
//   background: rgba(234, 238, 242, 0.7);
//   animation: ${pulse} 2s ease-in-out infinite; /* add pulse animation */
// `;

// const StyledBadge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 5px;

//   .badge {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 14px;
//     cursor: pointer;
//     color: #fff;
//     text-decoration: none;
//     border: 1px solid #00bcd4;
//     border-radius: 50%;
//     height: 70px;
//     width: 70px;
//     background: linear-gradient(135deg, #00bcd4, #88d8b0); /* cyan gradient background */

//     &:hover {
//       border: 1px solid #00bcd4;
//       transition: all 0.2s ease-in-out;
//       background-color: #f6f8fa;
//       rotate: 360deg;
//     }
//   }

//   .badge-name {
//     font-size: 13px;
//     font-weight: 500;
//     text-align: center;
//     color: #00bcd4;
//   }

//   .badge-date {
//     font-size: 12px;
//     font-weight: 400;
//     text-align: center;
//     color: #586069;
//   }
// `;

// const NavList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const NavListItem = styled.li`
//   cursor: pointer;
//   background-color: ${props => (props.active === 'true' ? '#e1e4e8' : 'transparent')};
//   padding: 10px;
//   border-radius: 5px;

//   &:hover {
//     background-color: #e1e4e8;
//   }
// `;

// const BADGES = Object.keys(badges).map(key => ({
//     type: key,
//     name: key.charAt(0).toUpperCase() + key.slice(1),
//     icon: BADGES_LARGE.find(badge => badge.type === key)?.icon,
//     count: badges[key].count,
//   }));

// const renderSkeletons = () => (
//     <div className="badges">
//       {[1, 2, 3, 4].map(index => (
//         <StyledSkelelton key={index} />
//       ))}
//     </div>
//   );

//   const renderNoBadgesMessage = () => <p>No badges yet in this category</p>;

//   function Styled() {
//     const [activeTab, setActiveTab] = useState('science');
//     const [data, setData] = useState(badges.science.badges);
//     const [loading, setLoading] = useState(false);
  
//     const renderSkeletons = () => (
//       <div className="badges">
//         {[1, 2, 3, 4].map(index => (
//           <StyledSkelelton key={index} />
//         ))}
//       </div>
//     );
  
//     const renderNoBadgesMessage = () => <p>No badges yet in this category</p>;
  
//     const renderBadges = () => (
//       <div className="badges">
//         {data.map(badge => (
//           <StyledBadge key={badge.id}>
//             <div className="badge">{BADGES_LARGE.find(b => b.type === badge.type)?.icon}</div>
//             <div className="badge-name">{badge.name}</div>
//             <div className="badge-date">{badge.date_created.short_date}</div>
//           </StyledBadge>
//         ))}
//       </div>
//     );
  
//     return (
//       <StyledSection>
//         <div className="badges-title">All badges earned by the student in each category</div>
//         <section className="content">
//           <div className="left">
//             <NavList>
//               {BADGES.map(badge => (
//                 <NavListItem
//                   onClick={() => {
//                     setActiveTab(badge.type);
//                     setData(badges[badge.name.toLowerCase()]?.badges ?? []);
//                   }}
//                   key={badge.type}
//                   active={activeTab === badge.type ? 'true' : 'false'}
//                 >
//                   {badge.icon}
//                   {badge.name} ({badges[badge.name.toLowerCase()].count})
//                 </NavListItem>
//               ))}
//             </NavList>
//           </div>
//           <div className="right">
//             <div className="right-container">
//               {loading ? renderSkeletons() : data.length > 0 ? renderBadges() : renderNoBadgesMessage()}
//             </div>
//           </div>
//         </section>
//       </StyledSection>
//     );
//   }
  
//   export default Styled;
  