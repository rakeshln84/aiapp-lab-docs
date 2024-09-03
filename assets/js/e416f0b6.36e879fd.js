"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[550],{4204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=n(7624),s=n(4552);const i={title:"Tokenization",slug:"/tokenization"},r=void 0,a={id:"Concepts/Understand-Tokens",title:"Tokenization",description:"We've mentioned \"tokens\" a few times in previous lessons, but we didn't explain what those were and why they matter. Let's discuss that now.",source:"@site/docs/03-Concepts/3-Understand-Tokens.md",sourceDirName:"03-Concepts",slug:"/tokenization",permalink:"/aiapp-lab-docs/tokenization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tokenization",slug:"/tokenization"},sidebar:"tutorialSidebar",previous:{title:"At home",permalink:"/aiapp-lab-docs/at-home"},next:{title:"Summary",permalink:"/aiapp-lab-docs/summary"}},l={},h=[{value:"What is Tokenization?",id:"what-is-tokenization",level:2},{value:"How are Tokens Used?",id:"how-are-tokens-used",level:2},{value:"Why Does It Matter?",id:"why-does-it-matter",level:2},{value:"OpenAI Tokenizer Tool",id:"openai-tokenizer-tool",level:2},{value:"Try The Example",id:"try-the-example",level:3},{value:"Try The Exercises",id:"try-the-exercises",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"We've mentioned \"tokens\" a few times in previous lessons, but we didn't explain what those were and why they matter. Let's discuss that now."}),"\n",(0,o.jsx)(t.h2,{id:"what-is-tokenization",children:"What is Tokenization?"}),"\n",(0,o.jsxs)(t.p,{children:["The OpenAI natural language models don't operate on words or characters as units of text, but instead use something in-between: ",(0,o.jsx)(t.strong,{children:"tokens."})," By ",(0,o.jsx)(t.a,{href:"https://platform.openai.com/docs/introduction/tokens",children:"definition"}),' tokens are text "chunks" that represent ',(0,o.jsx)(t.em,{children:"commonly occurring sequences of characters"})," in the large language training dataset."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"A token can be a single character, fraction of a word, or an entire word."}),"\n",(0,o.jsx)(t.li,{children:"Many common words are represented by a single token."}),"\n",(0,o.jsx)(t.li,{children:"Less common words are represented by multiple tokens."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tokenization"}),' is now the process by which text data (e.g., "prompt") gets ',(0,o.jsx)(t.em,{children:"deconstructed"})," into a sequence of tokens. The model can then generate the next token in sequence for text 'completion'. We'll see concrete examples of tokenization later in this lesson."]}),"\n",(0,o.jsx)(t.h2,{id:"how-are-tokens-used",children:"How are Tokens Used?"}),"\n",(0,o.jsx)(t.p,{children:"Given an input prompt, the natural language models generate completions one token at a time. However, the generated token is not deterministic. At each step, the model outputs a list of all possible tokens with associated weights. The API samples one token from this list, with heavily-weighted tokens more likely to be selected than the others."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Explanation of tokens used",src:n(8764).c+"",width:"2052",height:"352"})}),"\n",(0,o.jsxs)(t.p,{children:['It then adds that token to the prompt and repeats the process until the "max token count" limit (context window) is met for the completion - or until the model generates a special "stop token", which halts further token generation. (This ',(0,o.jsx)(t.a,{href:"https://bea.stollnitz.com/blog/how-gpt-works/",children:"blog post"})," by Beatriz Stollnitz explains the process in detail.)"]}),"\n",(0,o.jsx)(t.p,{children:"This is how the model generates completions of one or more words, and why those completions can change from invocation to invocation."}),"\n",(0,o.jsx)(t.h2,{id:"why-does-it-matter",children:"Why Does It Matter?"}),"\n",(0,o.jsxs)(t.p,{children:["To understand why tokenization matters, we need to think about two aspects of deployed models: ",(0,o.jsx)(t.em,{children:"token limits"})," and ",(0,o.jsx)(t.em,{children:"token pricing"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Token Limits"}),". Every model has a context window defined as the maximum number of tokens it can process for a single request. For instance, older gpt-3.5-turbo models have a 4K token limit (context) for each request. The token limit is ",(0,o.jsx)(t.em,{children:"shared between prompt and completion"}),". Because the completion gets added to the prompt in order to generate the next token, it becomes necessary to fit both within the total context window for a single request."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Token Pricing"}),". Like with any API, model deployment usage incurs costs based on the model type and version. Currently, model pricing is tied to number of tokens used, with different price points possible for each model type or version."]}),"\n",(0,o.jsx)(t.p,{children:"The table below shows the context window (max tokens) and the model pricing (billed in 1K increments) for Azure OpenAI Models."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Token Pricing",src:n(4480).c+"",width:"1473",height:"608"})}),"\n",(0,o.jsx)(t.p,{children:"Note how newer models like gpt-4-32k have much larger token limits: up to 32,768 tokens. This not only allows for longer completions but also much larger prompts. This is particularly useful for prompt engineering, as we'll see later."}),"\n",(0,o.jsx)(t.p,{children:"Keep in mind that usage cost is correspondingly higher. Prompt engineering techniques can also help improve cost efficiency by crafting prompts that minimize token usage costs without sacrificing quality of responses."}),"\n",(0,o.jsx)(t.h2,{id:"openai-tokenizer-tool",children:"OpenAI Tokenizer Tool"}),"\n",(0,o.jsxs)(t.p,{children:["Want to get a better sense of how tokenization works on real text? Use ",(0,o.jsx)(t.a,{href:"https://platform.openai.com/tokenizer",children:(0,o.jsx)(t.strong,{children:"OpenAI Tokenizer"})})," - a free online tool that visualizes the tokenization and displays the total token count for the given text data."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://help.openai.com/articles/4936856-what-are-tokens-and-how-to-count-them",children:"\ud83d\udd16 Learn More:"})}),"\n",(0,o.jsx)(t.h3,{id:"try-the-example",children:"Try The Example"}),"\n",(0,o.jsxs)(t.p,{children:['Visit the site and click "show example" to see it in action as shown below. Each color-coded segment represents a single token, with the total token count displayed below (',(0,o.jsx)(t.strong,{children:"57 tokens"}),")."]}),"\n",(0,o.jsx)(t.p,{children:'Note how "1234567890" and "underlying" have the same string lengths - but the former counts for 4 tokens while the latter counts for 1. Also observe how punctuation (":",".") take up 1 token each, cutting into prompt token limits.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Image of tokenizer example",src:n(7108).c+"",width:"730",height:"619"})}),"\n",(0,o.jsx)(t.h3,{id:"try-the-exercises",children:"Try The Exercises"}),"\n",(0,o.jsx)(t.admonition,{title:"YOUR TURN",type:"tip",children:(0,o.jsxs)(t.p,{children:["Visit ",(0,o.jsx)(t.a,{href:"https://platform.openai.com/tokenizer",children:(0,o.jsx)(t.strong,{children:"https://platform.openai.com/tokenizer"})}),". Clear the tool before each exercise. Enter the exercise text into the Tokenizer and observe the output - it should update interactively."]})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Exercise 1:"}),' As a common word, "apple" requires only one token.']}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"apple\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Exercise 2:"}),'  The word "blueberries" requires two tokens: "blue" and "berries".']}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"blueberries\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Exercise 3:"})," Proper names generally require multiple tokens (unless common)"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Skarsg\xe5rd\n"})}),"\n",(0,o.jsx)(t.p,{children:"It's this token representation that allows AI models to generate words that are not in any dictionary, but without having to generate text on a letter-by-letter basis (which could easily result in gibberish)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Build your intuition by trying out other words or phrases."})})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4480:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/aoia-pricing-tokens-ee857536d0519b526a2b31062575f591.png"},8764:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/llm-002-392e502091b9423ce85a7a1db1c258d2.png"},7108:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/tokenizer-example-30354110d0fda1fedd261a2223fd80c8.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var o=n(1504);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);