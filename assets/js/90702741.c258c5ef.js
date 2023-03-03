"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[6],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),u=function(e){return function(n){var a=d(n.components);return t.createElement(e,o({},n,{components:a}))}},d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,p=u["".concat(r,".").concat(m)]||u[m]||g[m]||o;return a?t.createElement(p,l(l({ref:n},s),{},{components:a})):t.createElement(p,l({ref:n},s))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},86113:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=a(83117),i=a(80102),o=(a(67294),a(3905)),r=["components"],l={id:"Enabling_WSA",title:"Enabling WSA"},c=void 0,s={unversionedId:"facebook/Working_Set_Analysis/Enabling_WSA",id:"facebook/Working_Set_Analysis/Enabling_WSA",title:"Enabling WSA",description:"Enabling Working Set Analysis logging in Cache Library",source:"@site/docs/facebook/Working_Set_Analysis/Enabling_WSA.md",sourceDirName:"facebook/Working_Set_Analysis",slug:"/facebook/Working_Set_Analysis/Enabling_WSA",permalink:"/docs/facebook/Working_Set_Analysis/Enabling_WSA",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/facebook/Working_Set_Analysis/Enabling_WSA.md",tags:[],version:"current",frontMatter:{id:"Enabling_WSA",title:"Enabling WSA"}},u={},d=[{value:"Enabling Working Set Analysis logging in Cache Library",id:"enabling-working-set-analysis-logging-in-cache-library",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:4},{value:"Sampling configuration",id:"sampling-configuration",level:3},{value:"What do we log?",id:"what-do-we-log",level:3},{value:"CacheLib Operation Results",id:"cachelib-operation-results",level:3}],m={toc:d};function g(e){var n=e.components,a=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h3",{id:"enabling-working-set-analysis-logging-in-cache-library"},"Enabling Working Set Analysis logging in Cache Library"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"\u2757",(0,o.mdx)("strong",{parentName:"p"},"Note: only use cachelib's built-in WSA if your use-case uses cachelib as a typical lookaside KV cache. If you have complex business logic (e.g. reading part of objects, mutating parts of objects, double read on misses, read cache before write, etc.), you should consider building your own WSA logger and log directly from within your application code"))),(0,o.mdx)("p",null,"To enable CacheLib's built-in Working Set Analysis, add the appropriate options to the config before instantiating the cache:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"// Use cacheConfig to instantiate the cache.\nfacebook::cachelib::CacheAdmin::enableWorkingSetAnalsysis(cacheConfig);\n// ...\n// Construct the cache.\n facebook::cachelib::LruAllocator cache{cacheConfig};\n")),(0,o.mdx)("h4",{id:"advanced-configuration"},"Advanced configuration"),(0,o.mdx)("p",null,"Working Set Analysis logging component has a number of advanced configuration options that you can control by setting some parameters while you initialize the ",(0,o.mdx)("inlineCode",{parentName:"p"},"CacheAdmin::Config::WSAConfig")," object. The following options are available:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"// Path to the sampling config for Working Set Analsysis in configerator.\nfolly::StringPiece samplingConfig;\n\n// Number of shards for Working Set Analysis logging to use.\n// Increasing shards reduces lock contention during logging at the expense\n// of increased duplication (identical requests on different shards are not\n// merged).\nunsigned int nShards;\n\n// Collection interval for Working Set Analysis logging library.\n// Under normal circumstances the library will persist data once per\n// interval. Multiple identical requests that happen during this interval\n// are collapsed.\nstd::chrono::seconds collectionInterval;\n\n// Maximum backlog (in records) for the Working Set Analysis library.\nunsigned int maxBacklog;\n\n// Maximum buffer size for copying keys in Working Set Analysis logging.\nsize_t maxBufferSize;\n")),(0,o.mdx)("p",null,"To configure the advanced configuration options for Working Set Analysis, call the ",(0,o.mdx)("inlineCode",{parentName:"p"},"enableWorkingSetAnalysis()")," method."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"\u2757",(0,o.mdx)("strong",{parentName:"p"},"Note: you must configure this in the config object BEFORE you start CacheLib!"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},'facebook::cachelib::CacheAdmin::WSAConfig wsaConfig;\nwsaConfig.nShards = 12;\nwsaConfig.collectionInterval = std::chrono::seconds(120);\nwsaConfig.maxBacklog = 1024;\n\n// Optional, define this if you want to group "unrelated" keys together\n// For example, for each request if you need to look up two separate keys in cache\n//  foo-1 and foo-2\n// In this case, you can define a transformer that chops off suffixes such as "-1" and "-2"\n// from the key. It allows the logger to always log keys that have prefix foo. It\'s useful\n// if the behavior of all foo-* are the same.\nwsaConfig.keyTransformer = /* user defined transformer */;\n\n// Optional, define this if you want to surface some relationship among your keys.\n// For example, if you run a multi-tenant service, some of your keys belong to\n// the same use case, you can define this function that returns the use case\n// name for a key. This will allow us to examine your cache\'s workload use-case by use-case.\nwsaConfig.keyGroupingFn = /* user defined grouping function */;\n\n// cacheConfig is the config object for the cache.\n// This line MUST be before creating CacheLib instance.\nfacebook::cachelib::CacheAdmin::enableWorkingSetAnalysis(cacheConfig, wsaConfig);\n// ...\n// Construct the cache\nfacebook::cachelib::LruAllocator cache{cacheConfig};\n')),(0,o.mdx)("h3",{id:"sampling-configuration"},"Sampling configuration"),(0,o.mdx)("p",null,"Working Set Analysis logging library has a deterministic sampling component that determines operations on what keys get recorded. It is controlled through configerator."),(0,o.mdx)("p",null,"The default config file for Cache Library is specified by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"kWsaSamplingConfig")," constant in ",(0,o.mdx)("inlineCode",{parentName:"p"},"CacheAdmin.h")," (by default this is ",(0,o.mdx)("a",{parentName:"p",href:"https://fburl.com/diffusion/ald97i9p"},"source/graphene/working_set/cachelib_working_set_analysis.cinc"),". Currently we support customizing sampling rates on a per region and per-use case (cache name) basis. Setting sampling rate to 0 turns off logging for the use case. In general , if an operation on a key is in the Working Set Analysis dataset, every other operation on that key is also logged."),(0,o.mdx)("p",null,"To enable sampling, you need to add a selector matching your tier to the config file as follows (see example ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/diff/D17211216/"},"diff"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},'// ...\nCachelibSamplingConfig(\n    selector=GeographySelector(type=GeographySelectorType.GLOBAL),\n    samplingRate=5000,\n    cacheNameFilter=CachelibCacheNameFilter(\n        cacheNames={"&lt;your cache name&gt;"}\n    ),\n),\n// ...\n')),(0,o.mdx)("p",null,"The sampling rate you decide will impact the footprint in Hive and potentially the CPU overhead for logging. We recommend a default value of 5,000 (e.g., 1 in 5,000 keys will be logged deterministically). Increase it if you suspect there\u2019s too much noise in the data."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"\u2757",(0,o.mdx)("strong",{parentName:"p"},"NOTE"),": This config is re-loaded at runtime when it gets updated. So it will take effect immediately when it lands. Please canary this change on your tier carefully.")),(0,o.mdx)("p",null,"For more information on sampling configuration, see ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Core_Data/Graphene/Working_Set_Analysis/Sampler_Configuraiton/"},"Working Set Sampler Configuration"),"."),(0,o.mdx)("h3",{id:"what-do-we-log"},"What do we log?"),(0,o.mdx)("p",null,"For each cachelib operation, we log the following:"),(0,o.mdx)("h3",{id:"cachelib-operation-results"},"CacheLib Operation Results"),(0,o.mdx)("p",null,"Refer to ",(0,o.mdx)("inlineCode",{parentName:"p"},"AllocatorApiResult")," in ",(0,o.mdx)("inlineCode",{parentName:"p"},"cachelib/common/EventInterface.h"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"// Enum to describe possible outcomes of Allocator API calls.\nenum class AllocatorApiResult : uint8_t {\n  FAILED = 0,              // Hard failure.\n  FOUND = 1,               // Found an item in a 'find' call.\n  NOT_FOUND = 2,           // Item was not found in a 'find' call.\n  NOT_FOUND_IN_MEMORY = 3, // Item was not found in memory with NVM enabled.\n  ALLOCATED = 4,           // Successfully allocated a new item.\n  INSERTED = 5,            // Inserted a new item in the map.\n  REPLACED = 6,            // Replaced an item in a map.\n  REMOVED = 7,             // Removed an item.\n  EVICTED = 8,             // Evicted an item.\n};\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The key (e.g., ",(0,o.mdx)("inlineCode",{parentName:"li"},"cdn:v/t31.0-8/fr/cp0/e15/..."),")"),(0,o.mdx)("li",{parentName:"ul"},"The operation (e.g., ",(0,o.mdx)("inlineCode",{parentName:"li"},"FIND"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"REMOVE"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"INSERT_FROM_NVM"),", etc.)"),(0,o.mdx)("li",{parentName:"ul"},"The operation result (",(0,o.mdx)("inlineCode",{parentName:"li"},"NOT_FOUND"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"FOUND"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"REMOVED"),", etc.)"),(0,o.mdx)("li",{parentName:"ul"},"The operation time (to determine the gap between ",(0,o.mdx)("inlineCode",{parentName:"li"},"GET"),"'s and ",(0,o.mdx)("inlineCode",{parentName:"li"},"SET"),"'s for a given key)"),(0,o.mdx)("li",{parentName:"ul"},"The total size in bytes (to simulate theoretical size given different retention)"),(0,o.mdx)("li",{parentName:"ul"},"The sampling rate (to extrapolate total footprint based on size)"),(0,o.mdx)("li",{parentName:"ul"},"The Cachelib use case (e.g., ",(0,o.mdx)("inlineCode",{parentName:"li"},"big_cache"),")"),(0,o.mdx)("li",{parentName:"ul"},"The host name and region of the box logging")))}g.isMDXComponent=!0}}]);