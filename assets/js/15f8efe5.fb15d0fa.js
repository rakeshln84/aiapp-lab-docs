"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[940],{7684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7624),o=t(4552);const i={},r="Add knowledge",s={id:"Part-2-labs/Add-Knowledge",title:"Add knowledge",description:"Retrieval-Augmented Generation (RAG) is an AI technique that retrieves relevant information from a database and then uses it to help generate more informed and contextually accurate text responses.",source:"@site/docs/02-Part-2-labs/4-Add-Knowledge.md",sourceDirName:"02-Part-2-labs",slug:"/Part-2-labs/Add-Knowledge",permalink:"/aiapp-lab-docs/Part-2-labs/Add-Knowledge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System Message",permalink:"/aiapp-lab-docs/Part-2-labs/System-Message"},next:{title:"Function Calling",permalink:"/aiapp-lab-docs/Part-2-labs/Function-Calling"}},d={},l=[{value:"Adding current information:",id:"adding-current-information",level:2},{value:"Retrieval-Augmented Generation",id:"retrieval-augmented-generation",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"add-knowledge",children:"Add knowledge"}),"\n",(0,a.jsx)(n.admonition,{title:"Retrieval Augmented Generation",type:"tip",children:(0,a.jsx)(n.p,{children:"Retrieval-Augmented Generation (RAG) is an AI technique that retrieves relevant information from a database and then uses it to help generate more informed and contextually accurate text responses."})}),"\n",(0,a.jsx)(n.p,{children:"In this lab we are going to add new knowledge to the conversation. This is to illustrate how the process of adding your own data would work in a production scenario. We are going to add the data manually, but you can use many different techniques and tools to retrieve the data and add it to the conversation with the assistant."}),"\n",(0,a.jsx)(n.h2,{id:"adding-current-information",children:"Adding current information:"}),"\n",(0,a.jsx)(n.p,{children:"We are building an AI assistant for a bike store. The assistant should be able to answer questions about the products the store sells. The assistant should only provide information that is available in the store's product database."}),"\n",(0,a.jsx)(n.p,{children:"A user can ask the assistant for a recommendation for a road bike."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Can you recommend me a road bike for long rides?\n"})}),"\n",(0,a.jsx)(n.p,{children:"You will see that the model will return a lot of great suggestions, but none of them are being sold by our company."}),"\n",(0,a.jsx)(n.p,{children:"Let's start and fix that problem by giving the model the right information on runtime and without fine-tuning."}),"\n",(0,a.jsx)(n.p,{children:"First we start with giving the assistant a specific task."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the system message:"',children:"You are Contoso Bike Store AI assistant.\nYou help users answer questions about our bike products.\nYou will be given search results as retrieved Documents that contain product information.\nYour answer should be as precise as possible.\nYour answer should only come from the retrieved Documents with product information.\nIf the Retrieved Documents do not contain sufficient information to answer user message completely, you do not answer the question and inform the user you do not have enough information.\n\n## Retrieved Documents\nNo information found.\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Can you recommend me a road bike for long rides?\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notice that the assistant will respond that it has not enough information to answer the question."}),"\n",(0,a.jsx)(n.p,{children:"Now let's add some product information to the prompt. Imagine here that you have done a search query in a database and got the products below back."}),"\n",(0,a.jsx)(n.p,{children:"Update the System Message with Retrieved documents:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the system message:"',children:"You are Contoso Bike Store AI assistant.\nYou help users answer questions about our bike products.\nYou will be given search results as retrieved Documents that contain product information.\nYour answer should be as precise as possible.\nYour answer should only come from the retrieved Documents with product information.\nIf the Retrieved Documents do not contain sufficient information to answer user message completely, you do not answer the question and inform the user you do not have enough information.\n\n## Retrieved Documents\n\nName: Domane SLR 9\nCompany: Trek\nDescription: The Domane SLR 9 is a high-performance road bike designed for comfort and speed over long distances. It features Trek's IsoSpeed technology for enhanced vibration dampening and a lightweight carbon frame.\n\nName: Stumpjumper Expert\nCompany: Specialized\nDescription: The Stumpjumper Expert is a versatile mountain bike known for its agility and capability on diverse terrains. It features a full-suspension system and a durable carbon frame, making it ideal for trail riding.\n\nName: Synapse Carbon 105\nCompany: Cannondale\nDescription: The Synapse Carbon 105 is an endurance road bike built for long rides and rough roads. It combines a lightweight carbon frame with endurance geometry for a comfortable and efficient ride.\n\nName: Bronson CC\nCompany: Santa Cruz\nDescription: The Bronson CC is a robust all-mountain bike with a focus on downhill performance. It boasts a carbon frame, advanced suspension system, and aggressive geometry to tackle challenging trails.\n\nName: Vado SL 4.0\nCompany: Specialized\nDescription: The Vado SL 4.0 is an electric bike designed for urban commuting and leisure rides. It features a lightweight aluminum frame, integrated motor, and a long-lasting battery for extended range.\n\nName: Roadmachine 01\nCompany: BMC\nDescription: The Roadmachine 01 is a premium endurance road bike that balances speed and comfort. It comes with a high-quality carbon frame and advanced compliance technologies for smooth rides over long distances.\n\nName: Trance Advanced Pro 29\nCompany: Giant\nDescription: The Trance Advanced Pro 29 is a high-performance trail bike featuring a carbon frame and 29-inch wheels. It's designed for versatility and excels in both climbing and descending.\n\nName: CrossRip+\nCompany: Trek\nDescription: The CrossRip+ is a hybrid electric bike ideal for commuting and adventure rides. It combines the efficiency of a road bike with the durability of a mountain bike, featuring an integrated motor and battery.\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Clear the conversation and ask the question again."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Can you recommend me a road bike for long rides?\n"})}),"\n",(0,a.jsx)(n.p,{children:"The assistant should recommend you the matching bike from the retrieved documents."}),"\n",(0,a.jsx)(n.h3,{id:"retrieval-augmented-generation",children:"Retrieval-Augmented Generation"}),"\n",(0,a.jsx)(n.p,{children:"Retrieval-Augmented Generation (RAG) combines a language model with a search system to provide more accurate and detailed information. Here are the steps needed:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Ask a Question"}),": You start by providing the RAG system with a question or prompt that you want more information about."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Find Relevant Information"}),": The RAG system searches a large database of texts, like Wikipedia, to find passages that contain useful information related to your question."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Choose the Best Bits"}),": The system picks the most relevant pieces of information it found during the search to help answer the question."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Generate an Answer"}),": Using the chosen information, the language model creates a response that includes details from the texts it found, making the answer more accurate and informative."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Deliver the Response"}),": You receive an answer that's been enhanced with specific information from the search, giving you a better, well-informed reply to your question."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>r});var a=t(1504);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);