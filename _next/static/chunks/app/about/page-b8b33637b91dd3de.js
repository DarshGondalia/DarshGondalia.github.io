(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{9733:(e,t,i)=>{Promise.resolve().then(i.bind(i,290))},290:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>j});var n=i(5155),a=i(5565),s=i(2115),r=i(1714),o=i(9656),l=i(9234),c=i(7249);class d extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function m(e){let{children:t,isPresent:i}=e,a=(0,s.useId)(),r=(0,s.useRef)(null),o=(0,s.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,s.useContext)(c.Q);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:s}=o.current;if(i||!r.current||!e||!t)return;r.current.dataset.motionPopId=a;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[i]),(0,n.jsx)(d,{isPresent:i,childRef:r,sizeRef:o,children:s.cloneElement(t,{ref:r})})}let u=e=>{let{children:t,initial:i,isPresent:a,onExitComplete:r,custom:c,presenceAffectsLayout:d,mode:u}=e,h=(0,l.M)(p),g=(0,s.useId)(),f=(0,s.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;r&&r()},[h,r]),y=(0,s.useMemo)(()=>({id:g,initial:i,isPresent:a,custom:c,onExitComplete:f,register:e=>(h.set(e,!1),()=>h.delete(e))}),d?[Math.random(),f]:[a,f]);return(0,s.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[a]),s.useEffect(()=>{a||h.size||!r||r()},[a]),"popLayout"===u&&(t=(0,n.jsx)(m,{isPresent:a,children:t})),(0,n.jsx)(o.t.Provider,{value:y,children:t})};function p(){return new Map}var h=i(4710),g=i(5107);let f=e=>e.key||"";function y(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}var v=i(5403);let x=e=>{let{children:t,exitBeforeEnter:i,custom:a,initial:r=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync"}=e;(0,g.V)(!i,"Replace exitBeforeEnter with mode='wait'");let m=(0,s.useMemo)(()=>y(t),[t]),p=m.map(f),x=(0,s.useRef)(!0),b=(0,s.useRef)(m),w=(0,l.M)(()=>new Map),[j,M]=(0,s.useState)(m),[S,N]=(0,s.useState)(m);(0,v.E)(()=>{x.current=!1,b.current=m;for(let e=0;e<S.length;e++){let t=f(S[e]);p.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[S,p.length,p.join("-")]);let E=[];if(m!==j){let e=[...m];for(let t=0;t<S.length;t++){let i=S[t],n=f(i);p.includes(n)||(e.splice(t,0,i),E.push(i))}"wait"===d&&E.length&&(e=E),N(y(e)),M(m);return}let{forceRender:P}=(0,s.useContext)(h.L);return(0,n.jsx)(n.Fragment,{children:S.map(e=>{let t=f(e),i=m===S||p.includes(t);return(0,n.jsx)(u,{isPresent:i,initial:(!x.current||!!r)&&void 0,custom:i?void 0:a,presenceAffectsLayout:c,mode:d,onExitComplete:i?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),N(b.current),o&&o())},children:e},t)})})},b=s.memo(e=>{let{exp:t,uniqueId:i,isHovered:a,onHover:s,isLeft:o,isMobile:l}=e,c=()=>{l&&s(a?null:i)},d=(0,n.jsxs)(r.P.div,{initial:{opacity:0,x:o?-50:50},animate:{opacity:1,x:0},transition:{duration:.5},className:"bg-gray-800 p-4 rounded shadow-lg cursor-pointer",onMouseEnter:()=>{l||s(i)},onMouseLeave:()=>{l||s(null)},onClick:c,onKeyPress:e=>{("Enter"===e.key||" "===e.key)&&c()},tabIndex:0,role:"button","aria-expanded":a,children:[(0,n.jsxs)("h3",{className:"text-xl font-semibold",children:[t.title," at ",t.company]}),(0,n.jsx)("span",{className:"text-sm text-gray-400",children:t.duration}),(0,n.jsx)(x,{children:a&&(0,n.jsx)(r.P.ul,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"mt-2 pl-5 list-disc text-gray-300 overflow-hidden",children:t.description.map((e,t)=>(0,n.jsx)("li",{className:"mb-1",children:e},t))})})]});return(0,n.jsxs)("div",{className:"flex items-center w-full",children:[o?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-1/2 pr-4 hidden md:block",children:d}),(0,n.jsx)("div",{className:"flex flex-col items-center",children:(0,n.jsx)("span",{className:"block w-4 h-4 rounded-full ring-4 ring-gray-900 ".concat(a?"bg-blue-600":"bg-blue-300")})}),(0,n.jsx)("div",{className:"w-1/2 pl-4 hidden md:block"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-1/2 pr-4 hidden md:block"}),(0,n.jsx)("div",{className:"flex flex-col items-center",children:(0,n.jsx)("span",{className:"block w-4 h-4 rounded-full ring-4 ring-gray-900 ".concat(a?"bg-blue-600":"bg-blue-300")})}),(0,n.jsx)("div",{className:"w-1/2 pl-4 hidden md:block",children:d})]}),(0,n.jsx)("div",{className:"w-full md:hidden px-4 mt-4",children:d})]})});b.displayName="ExperienceItem";let w=[{year:"2024",experiences:[{title:"Application Engineer",company:"SICK Sensor Intelligence",duration:"Dec 2023 - Dec 2024 \xb7 1 yr 1 mo",description:["Developed and implemented dynamic analytics algorithms for production line monitoring, transforming static sensor detected information pages into responsive sensor analytics page following OOP best practices.","Provide top-tier technical support to customers, resulting in a 20% increase in satisfaction ratings and a 15% reduction in software bugs.","Expand the capabilities of industrial software by implementing advanced analytics algorithms, leading to a potential increase in customer satisfaction scores.","Developed customer analytics applications for various industrial production line instances with SICK Field Analytics."]},{title:"Project Tech Lead - Large Language Model Personalization in Recommendation",company:"Spotify Research",duration:"Jan 2024 - Jun 2024",description:["Advanced the existing industry leading LLM for Text based sequential matching (TASTE model) by investigating methods to improve and optimise personalised Large Language Model recommendation.","Analysed the effectiveness of utilising low rank adapter (LoRA) weights per user based on their review history, leading to a 15% improvement in recommendation speed with zero to minimal loss in accuracy.","Led the research and implementation of individual-based fine-tuning models, reducing training time while maintaining a high level of personalisation for individual users.","For Paper and results go to portfolio page"]}]},{year:"2023",experiences:[{title:"Researcher",company:"UMass Amherst Math Department",duration:"Jun 2023 - Dec 2023 \xb7 7 mos",description:["Research Experience for Undergraduates (REU) in the UMass Amherst Mathematics Department, where I spearheaded a meta-population model of COVID-19 to project transmission across major cities.","Leveraged extensive real-world data—including daily case counts, mortality rates, infection/recovery rates, and population susceptibility—to uncover critical drivers of airborne disease spread.","Developed and validated a compartmental SEIR epidemiology framework, accurately estimating city-to-city transmission dynamics and informing actionable insights for public health strategies."]},{title:"Project: Snapchat UI Element Pruner",company:"University of Massachusetts Amherst",duration:"Jan 2023 - May 2023",description:["Collaborated with cross-functional teams to develop a robust algorithm that quickly prunes any disrupting elements from images containing child sexual abuse material on Snapchat, contributing to a 80% increase in successful restoration of original images.","Utilized Yolov8 and pretrained StableDiffusion model to detect and remove essential elements that hide important information in Snapchat images, such as text boxes, unknown scratches and additional user added GUI elements, resulting in a 90% increase in image clarity for FBI investigations.","Implemented a feature allowing users to select specific areas of the image to target anomalies created by the Snapchat paint tool, leading to a 75% reduction in time spent identifying and removing disruptive elements.","Skills: Computer Vision \xb7 Stable Diffusion \xb7 REST APIs \xb7 Machine Learning \xb7 Agile Development"]}]},{year:"2022",experiences:[{title:"Project: EnRoute- Travel Planning Website for College Students",company:"University of Massachusetts Amherst",duration:"Mar 2022 - May 2022",description:["Built and deployed custom EnRoute Travel website using Javascript, ExpressJS, HTML & CSS for college students to easily plan their vacations.","Created user-friendly interface with features tailored to college student's vacation needs; grew monthly customer base by 25%.","Optimized MongoDB database for data storage and retrieval speed resulting in a 30% reduction of loading times.","Implemented server using Node.js, Express.js; database using MongoDB; dynamic website using HTML, CSS, Javascript, Bootstrap."]},{title:"Project: Hear Your Feelings",company:"University of Massachusetts Amherst",duration:"Apr 2022 - May 2022",description:["Developed a project that uses computer vision to detect a user's emotion and provides song genre and playlist recommendations based on that emotion.","Integrated Machine Learning algorithms to recognize 5 different emotions with 95% accuracy, increasing user engagement by 25%.","Deployed an automated system for analyzing images of human faces in real-time using TensorFlow & OpenCV technologies, resulting in a 30% reduction in development costs.","Merging two models- 1. Emotion detector using PyTorch, KNF, NumPy. 2. Song Suggestion using SGD on Spotify music dataset."]},{title:"Project: Movie Recommendation system",company:"University of Massachusetts Amherst",duration:"Apr 2022 - May 2022",description:["Integrated Popularity Based System, Content-Based Filtering, Collaborative Filtering & Hybrid System to recommend movies to users based on preferences & likings.","Achieved 100% approval upon conducting beta test with 300 users for measuring success of the app.","Recommends a movie to a user based on ratings history and personal data like age, gender, location, etc.","Python, SGD on sparse matrix of data to train; Achieved over 85% accuracy using a 94% sparse matrix."]},{title:"Project: Scrabble Clone",company:"University of Massachusetts Amherst",duration:"Mar 2022 - May 2022",description:["Designed and developed scrabble game clone.","Implemented all time scorekeeping using ExpressJS, NodeJS, Javascript, HTML, CSS."]},{title:"Project: Artificial Face Generator",company:"University of Massachusetts Amherst",duration:"Feb 2022 - Feb 2022",description:["Created a model that generates a fake face which looks like an actor/actress but is actually fake.","Implemented GANs using PyTorch, NumPy and CNNs/filters and achieved over 95% accuracy in testing."]}]},{year:"2021",experiences:[{title:"Machine Learning Engineer Intern",company:"99Bridges",duration:"Jun 2021 - Sep 2021 \xb7 3 mos",description:["Developed object detection algorithm to identify & classify recyclable Chicobag images to automatically increment the count used in a self-checkout counter in product pilot operation in Target, CVS and Walmart.","Collaborated with a cross-functional team to optimize the existing model, improving throughput and latency by 50%, while decreasing false positives.","Engineered & tested a novel image processing pipeline for 99Bridges’ Chicobag using TensorFlow, achieving 98% precision within 2 weeks."]},{title:"Project: TradeComm",company:"Personal Venture",duration:"Aug 2020 - Nov 2021",description:["Developed TradeComm platform to enable seamless digital communication between different stakeholders in the textile industry, allowing for improved collaboration & feedback.","Installed direct conversation & public review system accessible to over 4K users worldwide, increasing visibility of customer reviews by 20%.","Enabled automated follow-up processes for customer feedback, resulting in increased satisfaction ratings by 15%.","Implemented an immediate feedback system and public/private forums- swift, RESTful API, Firebase."]}]},{year:"2020",experiences:[{title:"Software Application Developer",company:"SGKWA",duration:"Jun 2020 - Oct 2020 \xb7 5 mos",description:["Worked with the team to understand requirements and used requirements elicitation techniques such as interviews, questionnaires and surveys and documented them.","Used Java with Android studio and developed a basic 4 page app."]}]}];function j(){let[e,t]=(0,s.useState)(null),[i,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{r(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.jsxs)("main",{className:"max-w-5xl mx-auto p-6 bg-gray-900 text-gray-100 min-h-screen",children:[(0,n.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"About Me"}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center md:space-x-6 mb-12",children:[(0,n.jsx)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:(0,n.jsx)(a.default,{src:"/images/portrait.jpg",alt:"Profile Picture",width:300,height:300,sizes:"(max-width: 768px) 100vw, 300px",className:"rounded-full object-cover shadow-lg"})}),(0,n.jsxs)("div",{className:"w-full md:w-2/3",children:[(0,n.jsx)("p",{className:"text-gray-300 mb-4",children:"Hello! I am a Machine Learning Engineer focused on creating real-world applications that enhance daily experiences and optimize industrial processes. With dual degrees in Computer Science and Statistics from the University of Massachusetts Amherst, I specialize in developing intelligent algorithms to improve sensor capabilities, building regression and predictive models, and conducting statistical modeling for stochastic processes. I am passionate about researching computer vision algorithms, enhancing their robustness, and increasing their effectiveness in existing applications."}),(0,n.jsx)("p",{className:"text-gray-300 mb-4",children:"Machine Learning and Analytics are my core strengths. I thrive on learning new technologies and frameworks and am always eager to engage with and contribute to cutting-edge open-source initiatives. Don’t hesitate to reach out if you have exciting projects or collaborations in mind."}),(0,n.jsx)("p",{className:"text-gray-300 mb-4",children:"In my free time, I enjoy playing the drums and playing soccer."})]})]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"}),(0,n.jsx)("ul",{className:"space-y-16",children:w.map((a,s)=>(0,n.jsxs)("li",{className:"relative",children:[(0,n.jsx)("div",{className:"flex items-center mb-6",children:(0,n.jsx)("div",{className:"absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 px-4 py-2 rounded-full text-lg font-semibold",children:a.year})}),a.experiences.map((r,o)=>{let l="".concat(a.year,"-").concat(o);return(0,n.jsx)(b,{exp:r,uniqueId:l,isHovered:e===l,onHover:t,isLeft:s%2==0,isMobile:i},l)})]},s))})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[390,441,517,358],()=>t(9733)),_N_E=e.O()}]);