
//* MOZILA       WebAPI             https://developer.mozilla.org/es/docs/Web/API
//* W3CONSORTIUM Window Object      https://www.w3.org/TR/2009/WD-html5-20090212/browsers.html#window
//* W3SCHOOL     DOM manipulation   https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_doc_url
// let doc = document;
// document.getElementById("demo").innerHTML = document;
// console.log(doc)     
let win = window;   //!  NODE.JS : has NO window element 
console.log(win)    //!  console : EXIST in NODE.JS   ->   console.log(console)



Window:ƒ Window()
0: Window      {   window:Window ,self:Window , document:document , name:'iframeResult' , location:Location, …}
Window { 0:Window, window:Window, self:Window , document:document , name:''             , location:Location, …}
parent:     Window {0: Window, window: Window, self: Window, document: document, name: '',location:Location, …}
frames:     Window {0: Window,window: Window, self: Window, document: document, name: '' ,location:Location, …}
globalThis: Window {0: Window, window: Window, self: Window, document: document, name: '',location:Location, …}
self:       Window {0: Window, window: Window, self: Window, document: document, name: '',location:Location, …}
top:        Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
window:     Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

document:document
clientInformation:Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}
external:External {}
caches:CacheStorage {}

performance:Performance {timeOrigin: 1714235080821, onresourcetimingbufferfull: null, timing: PerformanceTiming, navigation: PerformanceNavigation, memory: MemoryInfo, …}
scheduler:Scheduler {}

crypto:Crypto {subtle: SubtleCrypto}
customElements:CustomElementRegistry {}
localStorage:Storage {preferredmode: 'null', MyLearning.tracking: '{"version":"1.0.1","createdUts":1714234848,"update…33858c639g3b-00600d458d50567g337230401133228027"}', preferredpagemode: 'null', length: 3}
sharedStorage:SharedStorage {worklet: SharedStorageWorklet}
cookieStore:CookieStore {onchange: null}
trustedTypes:TrustedTypePolicyFactory {emptyHTML: emptyHTML "", emptyScript: emptyScript "", defaultPolicy: null}


history:History {length: 1, scrollRestoration: 'auto', state: null, pushState: ƒ, replaceState: ƒ}
navigator:Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}
navigation:Navigation {currentEntry: NavigationHistoryEntry, transition: null, canGoBack: false, canGoForward: false, onnavigate: null, …}
location:Location {ancestorOrigins: DOMStringList, href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_doc_url', origin: 'https://www.w3schools.com', protocol: 'https:', host: 'www.w3schools.com', …}
indexedDB:IDBFactory {}
editor:CodeMirror$1 {options: {…}, doc: Doc, display: Display, state: {…}, curOp: null, …}
launchQueue:LaunchQueue {}
documentPictureInPicture:DocumentPictureInPicture {window: null, onenter: null}
visualViewport:VisualViewport {offsetLeft: 0, offsetTop: 0, pageLeft: 0, pageTop: 0, width: 1548.1817626953125, …}
styleMedia:StyleMedia {type: 'screen'}
google_tag_data:{tidr: wj, uach_promise: Promise, ics: ll, uach: {…}, gl: {…}}
googletag:{cmd: Array(1), queryIds: {…}}
chrome:{loadTimes: ƒ, csi: ƒ}
Util:{_debug: {…}, getCurrentUts: ƒ, getCurrentUtms: ƒ, getDictSnapshot: ƒ, isDebugMode: ƒ, …}



open:ƒ open()
close: ƒ close() 
openMenu:ƒ openMenu()

queueMicrotask:ƒ queueMicrotask()

requestAnimationFrame:ƒ requestAnimationFrame()
requestIdleCallback:ƒ requestIdleCallback()
resizeBy:ƒ resizeBy()
resizeTo:ƒ resizeTo()
moveBy:ƒ moveBy()
moveTo:ƒ moveTo()

restack:ƒ restack(horizontal)
retheme:ƒ retheme()
clickTab:ƒ clickTab(x)
find:  ƒ find()
focus: ƒ focus()
CodeMirror:ƒ CodeMirror$1(place, options)
blur: ƒ blur()
cancelAnimationFrame:ƒ cancelAnimationFrame()
cancelIdleCallback:  ƒ cancelIdleCallback()

colorcoding:ƒ colorcoding()
createImageBitmap:ƒ createImageBitmap()
hideSpinner:ƒ hideSpinner()
displaySpinner:ƒ displaySpinner()
dragend:  ƒ dragend()
dragmove: ƒ dragmove(e)
dragstart:ƒ dragstart(e)
fixDragBtn:ƒ fixDragBtn()

getComputedStyle:ƒ getComputedStyle()
getScreenDetails:ƒ getScreenDetails()
getSelection:    ƒ getSelection()



//!  EVENTS atributes
let  EVENTS;
{   //* EVENT FUNCTIONS
    captureEvents:ƒ            captureEvents()
    releaseEvents:ƒ            releaseEvents()
    BeforeInstallPromptEvent:ƒ BeforeInstallPromptEvent()
    BeforeUnloadEvent:ƒ        BeforeUnloadEvent()
}
{   //* EVENT ATRIBUTES
    onYouTubeIframeAPIReady:ƒ ()   ,onabort:null                    ,onafterprint:null               ,
    onanimationend:null            ,onanimationiteration:null       ,onanimationstart:null           ,
    onappinstalled:null            ,onauxclick:null                 ,onbeforeinput:null              ,
    onbeforeinstallprompt:null     ,onbeforematch:null              ,onbeforeprint:null              ,
    onbeforetoggle:null            ,onbeforeunload:null             ,onbeforexrselect:null           ,
    onblur:null                     ,oncancel:null                   ,oncanplay:null                  ,
    oncanplaythrough:null           ,onchange:null                   ,onclick:ƒ (event)               ,
    onclose:null                    ,oncontentvisibilityautostatechange:null,  oncontextlost:null     ,
    oncontextmenu:null              ,oncontextrestored:null          ,oncuechange:null                ,
    ondblclick:null                 ,ondevicemotion:null             ,ondeviceorientation:null        ,
    ondeviceorientationabsolute:null,
    
    ondrag:null                     ,ondragend:null                  ,ondragstart:null                ,
    ondragenter:null                ,ondragleave:null                ,ondragover:null                 ,
                
    ondrop:null                     ,ondurationchange:null           ,
    onemptied:null                  ,onended:null                    ,onerror:null                    ,
    onfocus:null                    ,ongotpointercapture:null         ,
    onhashchange:() => {…}          ,oninput:null                    
    
    onkeydown:null                  ,onkeypress:null                 ,onkeyup:null                    ,
    onlanguagechange:null           ,onload:null                     ,onloadeddata:null               ,
    onloadedmetadata:null           ,onloadstart:null                ,onlostpointercapture:null       ,
    onmessage:null                  ,onmessageerror:null,             
    
    onmousedown:null                ,
    onmouseenter:null               ,onmouseleave:null               ,onmousemove:null                ,
    onmouseout:null                 ,onmouseover:null                ,onmouseup:null                  ,
    onmousewheel:null               ,
    
    onoffline:null                  ,ononline:null               ,
    
    onpagehide:null                 ,onpagereveal:null               ,onpageshow:null                 ,
    
    onpause:null                    ,onplay:null                     ,onplaying:null                  ,
    
    onpointercancel:null            ,onpointerdown:null              ,onpointerenter:null             ,
    onpointerleave:null             ,onpointermove:null              ,onpointerout:null               ,
    onpointerover:null              ,onpointerrawupdate:null         ,onpointerup:null                ,

    onpopstate:null                 ,onprogress:null                 ,onratechange:null               ,
    onrejectionhandled:null         ,onresize:null                   ,
    
    onscroll:null                   ,onscrollend:null                ,onsearch:null                   ,
    onsecuritypolicyviolation:null  ,onseeked:null                   ,onseeking:null                  ,
    onselect:null                   ,onselectionchange:null          ,onselectstart:null              ,
    onslotchange:null               ,onstalled:null                  ,onstorage:null                  ,

    onformdata:null                 ,onsubmit:null                   ,onreset:null                    ,
    oninvalid:null                 ,
    
    onsuspend:null                  ,ontimeupdate:null               ,
    ontoggle:null                   ,ontransitioncancel:null         ,ontransitionend:null            ,
    ontransitionrun:null            ,ontransitionstart:null          ,onunhandledrejection:null       ,
    onunload:null                   ,onvolumechange:null             ,onwaiting:null                  ,
    onwebkitanimationend:null       ,onwebkitanimationiteration:null ,onwebkitanimationstart:null     ,
    onwebkittransitionend:null      ,onwheel:null                    
}
let  ATTRIBUTES;
{   //* OTHER ATRIBUTES
    devicePixelRatio:1.100000023841858
    innerHeight:899
    innerWidth:1548,
    closed:false,
    fileID:"",
    frameElement:null,

    credentialless:false,
    isSecureContext:true,
    crossOriginIsolated:false
    origin:"https://www.w3schools.com",

    fence:null,
    currentStack:true,
    dragging:false,
    opener:null,            ,        
    originAgentCluster:true,         ,
    pageXOffset:0,     pageYOffset:0,
    
    length:1,
    status:"",
    name:""
    stack:undefined,
    k42:true,
    gaGlobal:{vid: '68910760.1714234845', from_cookie: true},
    dataLayer:(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, push: ƒ],
    google_tag_manager:{tcf: {…}, pscdl: '', GTM-KTCFC3S: {…}, dataLayer: {…}, mb: Kx, …},
    gptAdSlots:[],
    snigelPubConf:{adengine: {…}},
    subjectFolder:"jsref",
    textareaheight:"744.105px",
    textareasize:752.273,
    xbeforeResize:1548,
}


//!     SCREEN & SCROLL         
let SCREEN;
{
    screen:Screen {availWidth: 2560, availHeight: 1080, width: 2560, height: 1080, colorDepth: 24 },
    outerHeight:1080,
    outerWidth :1711,
    screenTop  : 0,
    screenLeft : 701,
    screenX : 701,
    screenY : 0,
    browserResize = ƒ = browserResize()  
}
let SCROLL;
{
    scroll:ƒ = scroll(),
    scrollBy:ƒ = scrollBy(),
    scrollTo:ƒ = scrollTo(),
    setCodewindowHeight = ƒ = setCodewindowHeight(),
    scrollX = 0,
    scrollY = 0,
    showFrameSize = ƒ = showFrameSize()
}


showDirectoryPicker:ƒ showDirectoryPicker()
showOpenFilePicker:ƒ showOpenFilePicker()
showSaveFilePicker:ƒ showSaveFilePicker()


structuredClone:ƒ structuredClone()
submitTryit:ƒ submitTryit(n)
w3_getStyleValue:ƒ w3_getStyleValue(elmnt,style)
_0x1e4206:ƒ _0x1e4206(_0x158f62,_0x4700d5,_0x2e54e0,_0x2ba705,_0x309c67)
_0x2cdf:ƒ (_0x458931,_0x755fd2)
_0x4e2c85:ƒ _0x4e2c85(_0x20d125,_0x1ae67a,_0x584dda,_0x4c299b,_0x5f4a09)
_0x494c:ƒ ()
AbortController:ƒ AbortController()
AbortSignal:    ƒ AbortSignal()
AbstractRange: ƒ AbstractRange()
AbsoluteOrientationSensor:ƒ AbsoluteOrientationSensor()



//!     ANIMATION       
let ANIMATION;
{
    Animation:ƒ Animation()
    AnimationEffect:ƒ AnimationEffect()
    webkitCancelAnimationFrame:ƒ webkitCancelAnimationFrame()
    webkitRequestAnimationFrame:ƒ webkitRequestAnimationFrame()
    AnimationEvent:ƒ AnimationEvent()
    AnimationPlaybackEvent:ƒ AnimationPlaybackEvent()
    AnimationTimeline:ƒ AnimationTimeline()
    KeyframeEffect:ƒ KeyframeEffect()
}

Atomics:Atomics {load: ƒ, store: ƒ, add: ƒ, sub: ƒ, and: ƒ, …}
Attr:ƒ Attr()


// #region : MEDIA 
//!     AUDIO     SPEACH    
let AUDIO;
{
    Audio:ƒ Audio()
    AudioNode:ƒ AudioNode()
    AnalyserNode:ƒ AnalyserNode()
    GainNode:ƒ GainNode()
    ChannelMergerNode:ƒ ChannelMergerNode()
    ChannelSplitterNode:ƒ ChannelSplitterNode()
    ConvolverNode:ƒ ConvolverNode()
    PannerNode:ƒ PannerNode()
    StereoPannerNode:ƒ StereoPannerNode()
    DelayNode:ƒ DelayNode()
    OscillatorNode:ƒ OscillatorNode()
    BiquadFilterNode:ƒ BiquadFilterNode()
    IIRFilterNode:ƒ IIRFilterNode()
    ConstantSourceNode:ƒ ConstantSourceNode()
    DynamicsCompressorNode:ƒ DynamicsCompressorNode()
    AudioBufferSourceNode:ƒ AudioBufferSourceNode()
    AudioScheduledSourceNode:ƒ AudioScheduledSourceNode()
    AudioDestinationNode:ƒ AudioDestinationNode()
    AudioWorkletNode:ƒ AudioWorkletNode()
    ScriptProcessorNode:ƒ ScriptProcessorNode()
    AudioBuffer:ƒ AudioBuffer()
    AudioContext:ƒ AudioContext()
    AudioData:ƒ AudioData()
    AudioDecoder:ƒ AudioDecoder()
    AudioEncoder:ƒ AudioEncoder()
    AudioListener:ƒ AudioListener()
    AudioParam:ƒ AudioParam()
    AudioParamMap:ƒ AudioParamMap()
    AudioProcessingEvent:ƒ AudioProcessingEvent()
    AudioSinkInfo:ƒ AudioSinkInfo()
    AudioWorklet:ƒ AudioWorklet()
    BaseAudioContext:ƒ BaseAudioContext()
}
let SPEACH;
{
    webkitSpeechGrammar:ƒ SpeechGrammar()
    webkitSpeechGrammarList:ƒ SpeechGrammarList()
    webkitSpeechRecognition:ƒ SpeechRecognition()
    webkitSpeechRecognitionError:ƒ SpeechRecognitionErrorEvent()
    webkitSpeechRecognitionEvent:ƒ SpeechRecognitionEvent()
    speechSynthesis:SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}
    SpeechSynthesis:ƒ SpeechSynthesis()
    SpeechSynthesisErrorEvent:ƒ SpeechSynthesisErrorEvent()
    SpeechSynthesisEvent:ƒ SpeechSynthesisEvent()
    SpeechSynthesisUtterance:ƒ SpeechSynthesisUtterance()
    SpeechSynthesisVoice:ƒ SpeechSynthesisVoice()
}


//!     AUTENTICATION  SESSION PASSWD  PERMISION      

AuthenticatorAssertionResponse:ƒ AuthenticatorAssertionResponse()
AuthenticatorAttestationResponse:ƒ AuthenticatorAttestationResponse()
AuthenticatorResponse:ƒ AuthenticatorResponse()
HashChangeEvent:ƒ HashChangeEvent()
Storage:ƒ Storage()
sessionStorage:Storage {length: 0}
UserSession:{_fetchTimeout: 15000, _refreshUserSessionState: {…}, _cookies: null, loggedIn: null, processingRes: null, …}
StorageBucket:ƒ StorageBucket()
StorageBucketManager:ƒ StorageBucketManager()
StorageEvent:ƒ StorageEvent()
StorageManager:ƒ StorageManager()
PermissionStatus:ƒ PermissionStatus()
Permissions:ƒ Permissions()

//!     COOKIE      

CookieChangeEvent:ƒ CookieChangeEvent()
CookieDeprecationLabel:ƒ CookieDeprecationLabel()
CookieStore:ƒ CookieStore()
CookieStoreManager:ƒ CookieStoreManager()
CountQueuingStrategy:ƒ CountQueuingStrategy()
Cookies:{attributes: {…}, converter: {…}, noConflict: ƒ}

//!     CREDENTIAL CRIPTO     

Credential:ƒ Credential()
PublicKeyCredential:ƒ PublicKeyCredential()
PasswordCredential:ƒ PasswordCredential()
CredentialsContainer:ƒ CredentialsContainer()
CropTarget:ƒ CropTarget()
Crypto:ƒ Crypto()
CryptoKey:ƒ CryptoKey()

//!     PAYMENT     

PaymentAddress:ƒ PaymentAddress()
PaymentManager:ƒ PaymentManager()
PaymentMethodChangeEvent:ƒ PaymentMethodChangeEvent()
PaymentRequest:ƒ PaymentRequest()
PaymentRequestUpdateEvent:ƒ PaymentRequestUpdateEvent()
PaymentResponse:ƒ PaymentResponse()


//!     FETCH         
{

    fetch: ƒ fetch()
    BackgroundFetchManager:ƒ BackgroundFetchManager()
    BackgroundFetchRecord:ƒ BackgroundFetchRecord()
    BackgroundFetchRegistration:ƒ BackgroundFetchRegistration()
}


BarProp:ƒ BarProp()
BatteryManager:ƒ BatteryManager()


//!     INPUT / OUTPUT   &   ERROR   
{
    console:console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
    alert:ƒ   alert()
    confirm:ƒ confirm()
    prompt:ƒ  prompt()
    print:ƒ   print()
    postMessage:ƒ postMessage()
    reportError:ƒ reportError()
    Error:ƒ      Error()
    ErrorEvent:ƒ ErrorEvent()
    EvalError:ƒ  EvalError()
    TypeError:ƒ  TypeError()
    AggregateError:ƒ AggregateError()
}

//!     ARRAY       
let ARRAY;
{

    Array:       ƒ Array()
    ArrayBuffer: ƒ ArrayBuffer()
    Int8Array:ƒ Int8Array()
    Int16Array:ƒ Int16Array()
    Int32Array:ƒ Int32Array()
    Uint8Array:ƒ Uint8Array()
    Uint8ClampedArray:ƒ Uint8ClampedArray()
    Uint16Array:ƒ Uint16Array()
    Uint32Array:ƒ Uint32Array()
    Float32Array:ƒ Float32Array()
    Float64Array:ƒ Float64Array()
    BigInt64Array:ƒ BigInt64Array()
    BigUint64Array:ƒ BigUint64Array()
    parseFloat:ƒ parseFloat()
    parseInt:ƒ parseInt()
}

//!     DATA         

Math:Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
MathMLElement:ƒ MathMLElement()
isNaN:ƒ isNaN()
isFinite:ƒ isFinite()
DataTransfer:    ƒ DataTransfer()
DataTransferItem:ƒ DataTransferItem()
DataTransferItemList:ƒ DataTransferItemList()
NaN:NaN
Infinity:Infinity
undefined:undefined     // NOT DECLARATED
null:null               // Declarated as not having value
Number:ƒ Number()
String:ƒ String()
Object:ƒ Object()
Boolean:ƒ Boolean()    
Set:ƒ Set() 
Map:ƒ Map()
Date:ƒ Date()
Option:ƒ Option()
Function:ƒ Function()
DataView:ƒ DataView()
BigInt:ƒ BigInt()       // 64-bit signed
Blob:ƒ Blob()                               //!  inmutable   RAW FILE
BlobEvent:ƒ BlobEvent()
atob: ƒ atob()                              //!  String -> Base 64 
btoa: ƒ btoa()
Base64Decode:ƒ Base64Decode(r)
Base64Encode:ƒ Base64Encode(r)

//!     CSS         

CSS:CSS {highlights: HighlightRegistry, Hz: ƒ, Q: ƒ, ch: ƒ, cm: ƒ, …}
CSSAnimation:ƒ CSSAnimation()
CSSConditionRule:ƒ CSSConditionRule()
CSSContainerRule:ƒ CSSContainerRule()
CSSCounterStyleRule:ƒ CSSCounterStyleRule()
CSSFontFaceRule:ƒ CSSFontFaceRule()
CSSFontPaletteValuesRule:ƒ CSSFontPaletteValuesRule()
CSSGroupingRule:ƒ CSSGroupingRule()
CSSImageValue:ƒ CSSImageValue()
CSSImportRule:ƒ CSSImportRule()
CSSKeyframeRule:ƒ CSSKeyframeRule()
CSSKeyframesRule:ƒ CSSKeyframesRule()
CSSKeywordValue:ƒ CSSKeywordValue()
CSSLayerBlockRule:ƒ CSSLayerBlockRule()
CSSLayerStatementRule:ƒ CSSLayerStatementRule()
CSSMathClamp:ƒ CSSMathClamp()
CSSMathInvert:ƒ CSSMathInvert()
CSSMathMax:ƒ CSSMathMax()
CSSMathMin:ƒ CSSMathMin()
CSSMathNegate:ƒ CSSMathNegate()
CSSMathProduct:ƒ CSSMathProduct()
CSSMathSum:ƒ CSSMathSum()
CSSMathValue:ƒ CSSMathValue()
CSSMatrixComponent:ƒ CSSMatrixComponent()
CSSMediaRule:ƒ CSSMediaRule()
CSSNamespaceRule:ƒ CSSNamespaceRule()
CSSNumericArray:ƒ CSSNumericArray()
CSSNumericValue:ƒ CSSNumericValue()
CSSPageRule:ƒ CSSPageRule()
CSSPerspective:ƒ CSSPerspective()
CSSPositionValue:ƒ CSSPositionValue()
CSSPropertyRule:ƒ CSSPropertyRule()
CSSRotate:ƒ CSSRotate()
CSSRule:ƒ CSSRule()
CSSRuleList:ƒ CSSRuleList()
CSSScale:ƒ CSSScale()
CSSScopeRule:ƒ CSSScopeRule()
CSSSkew:ƒ CSSSkew()
CSSSkewX:ƒ CSSSkewX()
CSSSkewY:ƒ CSSSkewY()
CSSStartingStyleRule:ƒ CSSStartingStyleRule()
CSSStyleDeclaration:ƒ CSSStyleDeclaration()
CSSStyleRule:ƒ CSSStyleRule()
CSSStyleSheet:ƒ CSSStyleSheet()
CSSStyleValue:ƒ CSSStyleValue()
CSSSupportsRule:ƒ CSSSupportsRule()
CSSTransformComponent:ƒ CSSTransformComponent()
CSSTransformValue:ƒ CSSTransformValue()
CSSTransition:ƒ CSSTransition()
CSSTranslate:ƒ CSSTranslate()
CSSUnitValue:ƒ CSSUnitValue()
CSSUnparsedValue:ƒ CSSUnparsedValue()
CSSVariableReferenceValue:ƒ CSSVariableReferenceValue()

//!     CACHE     

Cache:ƒ Cache()
CacheStorage:ƒ CacheStorage()
CanvasCaptureMediaStreamTrack:ƒ CanvasCaptureMediaStreamTrack()
CanvasGradient:ƒ CanvasGradient()
CanvasPattern:ƒ CanvasPattern()
CanvasRenderingContext2D:ƒ CanvasRenderingContext2D()
CaptureController:ƒ CaptureController()

//!     CHANNEL     

CharacterBoundsUpdateEvent:ƒ CharacterBoundsUpdateEvent()
CharacterData:ƒ CharacterData()
Clipboard:ƒ Clipboard()
ClipboardEvent:ƒ ClipboardEvent()
ClipboardItem:ƒ ClipboardItem()
CloseEvent:ƒ CloseEvent()
Comment:ƒ Comment()
CompositionEvent:ƒ CompositionEvent()
CompressionStream:ƒ CompressionStream()
ContentVisibilityAutoStateChangeEvent:ƒ ContentVisibilityAutoStateChangeEvent()

CustomElementRegistry:ƒ CustomElementRegistry()
CustomStateSet:ƒ CustomStateSet()


//!     DOCUMENT     

Document:ƒ Document()
DocumentFragment:ƒ DocumentFragment()
DocumentPictureInPicture:ƒ DocumentPictureInPicture()
DocumentPictureInPictureEvent:ƒ DocumentPictureInPictureEvent()
DocumentTimeline:ƒ DocumentTimeline()
DocumentType:ƒ DocumentType()
Element:ƒ Element()
ElementInternals:ƒ ElementInternals()
FormData:ƒ FormData()
FormDataEvent:ƒ FormDataEvent()
EditContext:ƒ EditContext()
Node:ƒ Node()
NodeFilter:ƒ NodeFilter()
NodeIterator:ƒ NodeIterator()
NodeList:ƒ NodeList()


//!     DOM  MANIPULATION    

DOMError:ƒ DOMError()
DOMException:ƒ DOMException()
DOMImplementation:ƒ DOMImplementation()
DOMMatrix:ƒ DOMMatrix()
DOMMatrixReadOnly:ƒ DOMMatrixReadOnly()
DOMParser:ƒ DOMParser()
DOMPoint:ƒ DOMPoint()
DOMPointReadOnly:ƒ DOMPointReadOnly()
DOMQuad:ƒ DOMQuad()
DOMRect:ƒ DOMRect()
DOMRectList:ƒ DOMRectList()
DOMRectReadOnly:ƒ DOMRectReadOnly()
DOMStringList:ƒ DOMStringList()
DOMStringMap:ƒ DOMStringMap()
DOMTokenList:ƒ DOMTokenList()
Headers:ƒ Headers()                         //!     HTTP
NetworkInformation:ƒ NetworkInformation()   //!     HTTP
History:ƒ History()
Selection:ƒ Selection()
Proxy:ƒ Proxy()
escape:ƒ escape()
unescape:ƒ unescape()
StaticRange:ƒ StaticRange()
Range:ƒ Range()
RangeError:ƒ RangeError()


    

//!     EVENT   KEYWORD  MOUSE  TIME-FLOW   

event:undefined
Event:ƒ Event()
Promise:ƒ Promise()
CustomEvent:ƒ CustomEvent()
EventCounts:ƒ EventCounts()
EventSource:ƒ EventSource()
EventTarget:ƒ EventTarget()
FocusEvent: ƒ FocusEvent()
InputEvent: ƒ InputEvent()
DragEvent:  ƒ DragEvent()
WheelEvent:ƒ WheelEvent()
Keyboard:   ƒ Keyboard()
KeyboardEvent:ƒ KeyboardEvent()
KeyboardLayoutMap:ƒ KeyboardLayoutMap()
MouseEvent: ƒ MouseEvent()
PointerEvent:ƒ PointerEvent()
ProgressEvent:ƒ ProgressEvent()
setInterval:ƒ setInterval()
setTimeout:ƒ setTimeout()
stop:ƒ stop()
clearInterval:ƒ clearInterval()
clearTimeout: ƒ clearTimeout()
PromiseRejectionEvent:ƒ PromiseRejectionEvent()
TimeRanges:ƒ TimeRanges()
IdleDeadline:ƒ IdleDeadline()
IdleDetector:ƒ IdleDetector()

External:ƒ External()
EyeDropper:ƒ EyeDropper()
FeaturePolicy:ƒ FeaturePolicy()
FederatedCredential:ƒ FederatedCredential()
Fence:ƒ Fence()
FencedFrameConfig:ƒ FencedFrameConfig()

//!     FILE_SYSTEM  &  FILE   

File:ƒ File()
FileList:ƒ FileList()
FileReader:ƒ FileReader()
FileSystemDirectoryHandle:ƒ FileSystemDirectoryHandle()
FileSystemFileHandle:ƒ FileSystemFileHandle()
FileSystemHandle:ƒ FileSystemHandle()
FileSystemWritableFileStream:ƒ FileSystemWritableFileStream()
FinalizationRegistry:ƒ FinalizationRegistry()
webkitRequestFileSystem:ƒ webkitRequestFileSystem()
webkitResolveLocalFileSystemURL:ƒ webkitResolveLocalFileSystemURL()

//!     FONT       

FontData:ƒ FontData()
FontFace:ƒ FontFace()
FontFaceSetLoadEvent:ƒ FontFaceSetLoadEvent()
queryLocalFonts:ƒ queryLocalFonts()
FragmentDirective:ƒ FragmentDirective()

//!     GPU       

GPU:ƒ GPU()
GPUAdapter:ƒ GPUAdapter()
GPUAdapterInfo:ƒ GPUAdapterInfo()
GPUBindGroup:ƒ GPUBindGroup()
GPUBindGroupLayout:ƒ GPUBindGroupLayout()
GPUBuffer:ƒ GPUBuffer()
GPUBufferUsage:GPUBufferUsage {MAP_READ: 1, MAP_WRITE: 2, COPY_SRC: 4, COPY_DST: 8, INDEX: 16, …}
GPUCanvasContext:ƒ GPUCanvasContext()
GPUColorWrite:GPUColorWrite {RED: 1, GREEN: 2, BLUE: 4, ALPHA: 8, ALL: 15, …}
GPUCommandBuffer:ƒ GPUCommandBuffer()
GPUCommandEncoder:ƒ GPUCommandEncoder()
GPUCompilationInfo:ƒ GPUCompilationInfo()
GPUCompilationMessage:ƒ GPUCompilationMessage()
GPUComputePassEncoder:ƒ GPUComputePassEncoder()
GPUComputePipeline:ƒ GPUComputePipeline()
GPUDevice:ƒ GPUDevice()
GPUDeviceLostInfo:ƒ GPUDeviceLostInfo()
GPUError:ƒ GPUError()
GPUExternalTexture:ƒ GPUExternalTexture()
GPUInternalError:ƒ GPUInternalError()
GPUMapMode:GPUMapMode {READ: 1, WRITE: 2, Symbol(Symbol.toStringTag): 'GPUMapMode'}
GPUOutOfMemoryError:ƒ GPUOutOfMemoryError()
GPUPipelineError:ƒ GPUPipelineError()
GPUPipelineLayout:ƒ GPUPipelineLayout()
GPUQuerySet:ƒ GPUQuerySet()
GPUQueue:ƒ GPUQueue()
GPURenderBundle:ƒ GPURenderBundle()
GPURenderBundleEncoder:ƒ GPURenderBundleEncoder()
GPURenderPassEncoder:ƒ GPURenderPassEncoder()
GPURenderPipeline:ƒ GPURenderPipeline()
GPUSampler:ƒ GPUSampler()
GPUShaderModule:ƒ GPUShaderModule()
GPUShaderStage:GPUShaderStage {VERTEX: 1, FRAGMENT: 2, COMPUTE: 4, Symbol(Symbol.toStringTag): 'GPUShaderStage'}
GPUSupportedFeatures:ƒ GPUSupportedFeatures()
GPUSupportedLimits:ƒ GPUSupportedLimits()
GPUTexture:ƒ GPUTexture()
GPUTextureUsage:GPUTextureUsage {COPY_SRC: 1, COPY_DST: 2, TEXTURE_BINDING: 4, STORAGE_BINDING: 8, RENDER_ATTACHMENT: 16, …}
GPUTextureView:ƒ GPUTextureView()
GPUUncapturedErrorEvent:ƒ GPUUncapturedErrorEvent()
GPUValidationError:ƒ GPUValidationError()
Gamepad:ƒ Gamepad()
GamepadButton:ƒ GamepadButton()
GamepadEvent:ƒ GamepadEvent()
GamepadHapticActuator:ƒ GamepadHapticActuator()

//!     URL     

Location:ƒ Location()   
URL:ƒ URL()
webkitURL:ƒ URL()
URLPattern:ƒ URLPattern()
URLSearchParams:ƒ URLSearchParams()


//!     DEVICE   &   GEOLOCATION   

Sensor:ƒ Sensor()
SensorErrorEvent:ƒ SensorErrorEvent()
Accelerometer: ƒ Accelerometer()
Gyroscope:ƒ Gyroscope()
GravitySensor:ƒ GravitySensor()
OrientationSensor:ƒ OrientationSensor()
LinearAccelerationSensor:ƒ LinearAccelerationSensor()
DeviceMotionEvent:ƒ DeviceMotionEvent()
DeviceMotionEventAcceleration:ƒ DeviceMotionEventAcceleration()
DeviceMotionEventRotationRate:ƒ DeviceMotionEventRotationRate()
DeviceOrientationEvent:ƒ DeviceOrientationEvent()
Geolocation:ƒ Geolocation()
GeolocationCoordinates:ƒ GeolocationCoordinates()
GeolocationPosition:ƒ GeolocationPosition()
GeolocationPositionError:ƒ GeolocationPositionError()
Screen:ƒ Screen()
ScreenDetailed:ƒ ScreenDetailed()
ScreenDetails:ƒ ScreenDetails()
ScreenOrientation:ƒ ScreenOrientation()
HID:ƒ HID()         //! HID : Human Intarface Devide
HIDConnectionEvent:ƒ HIDConnectionEvent()
HIDDevice:ƒ HIDDevice()
HIDInputReportEvent:ƒ HIDInputReportEvent()
VirtualKeyboard:ƒ VirtualKeyboard()
VirtualKeyboardGeometryChangeEvent:ƒ VirtualKeyboardGeometryChangeEvent()

//!         HTML        

HTMLAllCollection:ƒ HTMLAllCollection()
HTMLAnchorElement:ƒ HTMLAnchorElement()
HTMLAreaElement:ƒ HTMLAreaElement()
HTMLAudioElement:ƒ HTMLAudioElement()
HTMLBRElement:ƒ HTMLBRElement()
HTMLBaseElement:ƒ HTMLBaseElement()
HTMLBodyElement:ƒ HTMLBodyElement()
HTMLButtonElement:ƒ HTMLButtonElement()
HTMLCanvasElement:ƒ HTMLCanvasElement()
HTMLCollection:ƒ HTMLCollection()
HTMLDListElement:ƒ HTMLDListElement()
HTMLDataElement:ƒ HTMLDataElement()
HTMLDataListElement:ƒ HTMLDataListElement()
HTMLDetailsElement:ƒ HTMLDetailsElement()
HTMLDialogElement:ƒ HTMLDialogElement()
HTMLDirectoryElement:ƒ HTMLDirectoryElement()
HTMLDivElement:ƒ HTMLDivElement()
HTMLDocument:ƒ HTMLDocument()
HTMLElement:ƒ HTMLElement()
HTMLEmbedElement:ƒ HTMLEmbedElement()
HTMLFencedFrameElement:ƒ HTMLFencedFrameElement()
HTMLFieldSetElement:ƒ HTMLFieldSetElement()
HTMLFontElement:ƒ HTMLFontElement()
HTMLFormControlsCollection:ƒ HTMLFormControlsCollection()
HTMLFormElement:ƒ HTMLFormElement()
HTMLFrameElement:ƒ HTMLFrameElement()
HTMLFrameSetElement:ƒ HTMLFrameSetElement()
HTMLHRElement:ƒ HTMLHRElement()
HTMLHeadElement:ƒ HTMLHeadElement()
HTMLHeadingElement:ƒ HTMLHeadingElement()
HTMLHtmlElement:ƒ HTMLHtmlElement()
HTMLIFrameElement:ƒ HTMLIFrameElement()
HTMLImageElement:ƒ HTMLImageElement()
HTMLInputElement:ƒ HTMLInputElement()
HTMLLIElement:ƒ HTMLLIElement()
HTMLLabelElement:ƒ HTMLLabelElement()
HTMLLegendElement:ƒ HTMLLegendElement()
HTMLLinkElement:ƒ HTMLLinkElement()
HTMLMapElement:ƒ HTMLMapElement()
HTMLMarqueeElement:ƒ HTMLMarqueeElement()
HTMLMediaElement:ƒ HTMLMediaElement()
HTMLMenuElement:ƒ HTMLMenuElement()
HTMLMetaElement:ƒ HTMLMetaElement()
HTMLMeterElement:ƒ HTMLMeterElement()
HTMLModElement:ƒ HTMLModElement()
HTMLOListElement:ƒ HTMLOListElement()
HTMLObjectElement:ƒ HTMLObjectElement()
HTMLOptGroupElement:ƒ HTMLOptGroupElement()
HTMLOptionElement:ƒ HTMLOptionElement()
HTMLOptionsCollection:ƒ HTMLOptionsCollection()
HTMLOutputElement:ƒ HTMLOutputElement()
HTMLParagraphElement:ƒ HTMLParagraphElement()
HTMLParamElement:ƒ HTMLParamElement()
HTMLPictureElement:ƒ HTMLPictureElement()
HTMLPreElement:ƒ HTMLPreElement()
HTMLProgressElement:ƒ HTMLProgressElement()
HTMLQuoteElement:ƒ HTMLQuoteElement()
HTMLScriptElement:ƒ HTMLScriptElement()
HTMLSelectElement:ƒ HTMLSelectElement()
HTMLSlotElement:ƒ HTMLSlotElement()
HTMLSourceElement:ƒ HTMLSourceElement()
HTMLSpanElement:ƒ HTMLSpanElement()
HTMLStyleElement:ƒ HTMLStyleElement()
HTMLTableCaptionElement:ƒ HTMLTableCaptionElement()
HTMLTableCellElement:ƒ HTMLTableCellElement()
HTMLTableColElement:ƒ HTMLTableColElement()
HTMLTableElement:ƒ HTMLTableElement()
HTMLTableRowElement:ƒ HTMLTableRowElement()
HTMLTableSectionElement:ƒ HTMLTableSectionElement()
HTMLTemplateElement:ƒ HTMLTemplateElement()
HTMLTextAreaElement:ƒ HTMLTextAreaElement()
HTMLTimeElement:ƒ HTMLTimeElement()
HTMLTitleElement:ƒ HTMLTitleElement()
HTMLTrackElement:ƒ HTMLTrackElement()
HTMLUListElement:ƒ HTMLUListElement()
HTMLUnknownElement:ƒ HTMLUnknownElement()
HTMLVideoElement:ƒ HTMLVideoElement()


Highlight:ƒ Highlight()
HighlightRegistry:ƒ HighlightRegistry()

//!     INDEXED DATABASE        

IDBCursor:ƒ IDBCursor()
IDBCursorWithValue:ƒ IDBCursorWithValue()
IDBDatabase:ƒ IDBDatabase()
IDBFactory:ƒ IDBFactory()
IDBIndex:ƒ IDBIndex()
IDBKeyRange:ƒ IDBKeyRange()
IDBObjectStore:ƒ IDBObjectStore()
IDBOpenDBRequest:ƒ IDBOpenDBRequest()
IDBRequest:ƒ IDBRequest()
IDBTransaction:ƒ IDBTransaction()
IDBVersionChangeEvent:ƒ IDBVersionChangeEvent()


IdentityProvider:ƒ IdentityProvider()


//!     IMAGE        

Image:ƒ Image()
ImageBitmap:ƒ ImageBitmap()
ImageBitmapRenderingContext:ƒ ImageBitmapRenderingContext()
ImageCapture:ƒ ImageCapture()
ImageData:ƒ ImageData()
ImageDecoder:ƒ ImageDecoder()
ImageTrack:ƒ ImageTrack()
ImageTrackList:ƒ ImageTrackList()
Ink:ƒ Ink()
DelegatedInkTrailPresenter:ƒ DelegatedInkTrailPresenter()




//!     MIDI        
MIDIAccess:ƒ MIDIAccess()
MIDIConnectionEvent:ƒ MIDIConnectionEvent()
MIDIInput:ƒ MIDIInput()
MIDIInputMap:ƒ MIDIInputMap()
MIDIMessageEvent:ƒ MIDIMessageEvent()
MIDIOutput:ƒ MIDIOutput()
MIDIOutputMap:ƒ MIDIOutputMap()
MIDIPort:ƒ MIDIPort()




//!     MEDIA   & STREAM     

MediaCapabilities:ƒ MediaCapabilities()
MediaDeviceInfo:ƒ MediaDeviceInfo()
MediaDevices:ƒ MediaDevices()
MediaElementAudioSourceNode:ƒ MediaElementAudioSourceNode()
MediaEncryptedEvent:ƒ MediaEncryptedEvent()
MediaError:ƒ MediaError()
MediaKeyMessageEvent:ƒ MediaKeyMessageEvent()
MediaKeySession:ƒ MediaKeySession()
MediaKeyStatusMap:ƒ MediaKeyStatusMap()
MediaKeySystemAccess:ƒ MediaKeySystemAccess()
MediaKeys:ƒ MediaKeys()
MediaList:ƒ MediaList()
MediaMetadata:ƒ MediaMetadata()
MediaQueryList:ƒ MediaQueryList()
MediaQueryListEvent:ƒ MediaQueryListEvent()
MediaRecorder:ƒ MediaRecorder()
MediaSession:ƒ MediaSession()
MediaSource:ƒ MediaSource()
MediaSourceHandle:ƒ MediaSourceHandle()
MediaStream:ƒ MediaStream()
webkitMediaStream:ƒ MediaStream()  //!   webkit :    the same but for   OLD BROWSER 
MediaStreamAudioDestinationNode:ƒ MediaStreamAudioDestinationNode()
MediaStreamAudioSourceNode:ƒ MediaStreamAudioSourceNode()
MediaStreamEvent:ƒ MediaStreamEvent()
MediaStreamTrack:ƒ MediaStreamTrack()
MediaStreamTrackEvent:ƒ MediaStreamTrackEvent()
MediaStreamTrackGenerator:ƒ MediaStreamTrackGenerator()
MediaStreamTrackProcessor:ƒ MediaStreamTrackProcessor()
MediaStreamTrackVideoStats:ƒ MediaStreamTrackVideoStats()
matchMedia:ƒ matchMedia()
EncodedAudioChunk:ƒ EncodedAudioChunk()
EncodedVideoChunk:ƒ EncodedVideoChunk()
eviceCapabilities:ƒ InputDeviceCapabilities()
InputDeviceInfo:ƒ InputDeviceInfo()


//!     MESSAGE      

MessageChannel:ƒ MessageChannel()
MessageEvent:ƒ MessageEvent()
MessagePort:ƒ MessagePort()
MimeType:ƒ MimeType()
MimeTypeArray:ƒ MimeTypeArray()

MutationEvent:ƒ MutationEvent()
MutationObserver:ƒ MutationObserver()
MutationRecord:ƒ MutationRecord()

NamedNodeMap:ƒ NamedNodeMap()

//!     NAVIGATION      

NavigateEvent:ƒ NavigateEvent()
Navigation:ƒ Navigation()
NavigationActivation:ƒ NavigationActivation()
NavigationCurrentEntryChangeEvent:ƒ NavigationCurrentEntryChangeEvent()
NavigationDestination:ƒ NavigationDestination()
NavigationHistoryEntry:ƒ NavigationHistoryEntry()
NavigationPreloadManager:ƒ NavigationPreloadManager()
NavigationTransition:ƒ NavigationTransition()
Navigator:ƒ Navigator()
NavigatorLogin:ƒ NavigatorLogin()
NavigatorManagedData:ƒ NavigatorManagedData()
NavigatorUAData:ƒ NavigatorUAData()


NotRestoredReasonDetails:ƒ NotRestoredReasonDetails()
NotRestoredReasons:ƒ NotRestoredReasons()
Notification:ƒ Notification()

OTPCredential:ƒ OTPCredential()

IdentityCredential:ƒ IdentityCredential()
IdentityCredentialError:ƒ IdentityCredentialError()

OfflineAudioCompletionEvent:ƒ OfflineAudioCompletionEvent()
OfflineAudioContext:ƒ OfflineAudioContext()
OffscreenCanvas:ƒ OffscreenCanvas()
OffscreenCanvasRenderingContext2D:ƒ OffscreenCanvasRenderingContext2D()


OverconstrainedError:ƒ OverconstrainedError()
PageRevealEvent:ƒ PageRevealEvent()
PageTransitionEvent:ƒ PageTransitionEvent()
Path2D:ƒ Path2D()

//!   PERFORMANCE    PROFILER  

Profiler:ƒ Profiler()
Performance:ƒ Performance()
PerformanceElementTiming:ƒ PerformanceElementTiming()
PerformanceEntry:ƒ PerformanceEntry()
PerformanceEventTiming:ƒ PerformanceEventTiming()
PerformanceLongAnimationFrameTiming:ƒ PerformanceLongAnimationFrameTiming()
PerformanceLongTaskTiming:ƒ PerformanceLongTaskTiming()
PerformanceMark:ƒ PerformanceMark()
PerformanceMeasure:ƒ PerformanceMeasure()
PerformanceNavigation:ƒ PerformanceNavigation()
PerformanceNavigationTiming:ƒ PerformanceNavigationTiming()
PerformanceObserver:ƒ PerformanceObserver()
PerformanceObserverEntryList:ƒ PerformanceObserverEntryList()
PerformancePaintTiming:ƒ PerformancePaintTiming()
PerformanceResourceTiming:ƒ PerformanceResourceTiming()
PerformanceScriptTiming:ƒ PerformanceScriptTiming()
PerformanceServerTiming:ƒ PerformanceServerTiming()
PerformanceTiming:ƒ PerformanceTiming()
PeriodicSyncManager:ƒ PeriodicSyncManager()
PeriodicWave:ƒ PeriodicWave()


PictureInPictureEvent:ƒ PictureInPictureEvent()
PictureInPictureWindow:ƒ PictureInPictureWindow()
Plugin:ƒ Plugin()
PluginArray:ƒ PluginArray()

PopStateEvent:ƒ PopStateEvent()

Presentation:ƒ Presentation()
PresentationAvailability:ƒ PresentationAvailability()
PresentationConnection:ƒ PresentationConnection()
PresentationConnectionAvailableEvent:ƒ PresentationConnectionAvailableEvent()
PresentationConnectionCloseEvent:ƒ PresentationConnectionCloseEvent()
PresentationConnectionList:ƒ PresentationConnectionList()
PresentationReceiver:ƒ PresentationReceiver()
PresentationRequest:ƒ PresentationRequest()


ProcessingInstruction:ƒ ProcessingInstruction()



PushManager:ƒ PushManager()
PushSubscription:ƒ PushSubscription()
PushSubscriptionOptions:ƒ PushSubscriptionOptions()


//!  Peer to Peer  Real Time    
RTCDataChannel:ƒ RTCDataChannel()
RTCDataChannelEvent:ƒ RTCDataChannelEvent()
RTCDtlsTransport:ƒ RTCDtlsTransport()
RTCPeerConnection:ƒ RTCPeerConnection()
RTCPeerConnectionIceErrorEvent:ƒ RTCPeerConnectionIceErrorEvent()
RTCPeerConnectionIceEvent:ƒ RTCPeerConnectionIceEvent()
RTCCertificate:ƒ RTCCertificate()
RTCDTMFSender:ƒ RTCDTMFSender()
RTCDTMFToneChangeEvent:ƒ RTCDTMFToneChangeEvent()
RTCEncodedAudioFrame:ƒ RTCEncodedAudioFrame()
RTCEncodedVideoFrame:ƒ RTCEncodedVideoFrame()
RTCError:ƒ RTCError()
RTCErrorEvent:ƒ RTCErrorEvent()
RTCIceCandidate:ƒ RTCIceCandidate()
RTCIceTransport:ƒ RTCIceTransport()
RTCRtpReceiver:ƒ RTCRtpReceiver()
RTCRtpSender:ƒ RTCRtpSender()
RTCRtpTransceiver:ƒ RTCRtpTransceiver()
RTCSctpTransport:ƒ RTCSctpTransport()
RTCSessionDescription:ƒ RTCSessionDescription()
RTCStatsReport:ƒ RTCStatsReport()
RTCTrackEvent:ƒ RTCTrackEvent()


RadioNodeList:ƒ RadioNodeList()



ReferenceError:ƒ ReferenceError()
Reflect:Reflect {defineProperty: ƒ, deleteProperty: ƒ, apply: ƒ, construct: ƒ, get: ƒ, …}
RegExp:ƒ RegExp()
RelativeOrientationSensor:ƒ RelativeOrientationSensor()
RemotePlayback:ƒ RemotePlayback()
ReportingObserver:ƒ ReportingObserver()
Request:ƒ Request()
ResizeObserver:ƒ ResizeObserver()
ResizeObserverEntry:ƒ ResizeObserverEntry()
ResizeObserverSize:ƒ ResizeObserverSize()
Response:ƒ Response()

//!     SVG         

SVGAElement:ƒ SVGAElement()
SVGAngle:ƒ SVGAngle()
SVGAnimateElement:ƒ SVGAnimateElement()
SVGAnimateMotionElement:ƒ SVGAnimateMotionElement()
SVGAnimateTransformElement:ƒ SVGAnimateTransformElement()
SVGAnimatedAngle:ƒ SVGAnimatedAngle()
SVGAnimatedBoolean:ƒ SVGAnimatedBoolean()
SVGAnimatedEnumeration:ƒ SVGAnimatedEnumeration()
SVGAnimatedInteger:ƒ SVGAnimatedInteger()
SVGAnimatedLength:ƒ SVGAnimatedLength()
SVGAnimatedLengthList:ƒ SVGAnimatedLengthList()
SVGAnimatedNumber:ƒ SVGAnimatedNumber()
SVGAnimatedNumberList:ƒ SVGAnimatedNumberList()
SVGAnimatedPreserveAspectRatio:ƒ SVGAnimatedPreserveAspectRatio()
SVGAnimatedRect:ƒ SVGAnimatedRect()
SVGAnimatedString:ƒ SVGAnimatedString()
SVGAnimatedTransformList:ƒ SVGAnimatedTransformList()
SVGAnimationElement:ƒ SVGAnimationElement()
SVGCircleElement:ƒ SVGCircleElement()
SVGClipPathElement:ƒ SVGClipPathElement()
SVGComponentTransferFunctionElement:ƒ SVGComponentTransferFunctionElement()
SVGDefsElement:ƒ SVGDefsElement()
SVGDescElement:ƒ SVGDescElement()
SVGElement:ƒ SVGElement()
SVGEllipseElement:ƒ SVGEllipseElement()
SVGFEBlendElement:ƒ SVGFEBlendElement()
SVGFEColorMatrixElement:ƒ SVGFEColorMatrixElement()
SVGFEComponentTransferElement:ƒ SVGFEComponentTransferElement()
SVGFECompositeElement:ƒ SVGFECompositeElement()
SVGFEConvolveMatrixElement:ƒ SVGFEConvolveMatrixElement()
SVGFEDiffuseLightingElement:ƒ SVGFEDiffuseLightingElement()
SVGFEDisplacementMapElement:ƒ SVGFEDisplacementMapElement()
SVGFEDistantLightElement:ƒ SVGFEDistantLightElement()
SVGFEDropShadowElement:ƒ SVGFEDropShadowElement()
SVGFEFloodElement:ƒ SVGFEFloodElement()
SVGFEFuncAElement:ƒ SVGFEFuncAElement()
SVGFEFuncBElement:ƒ SVGFEFuncBElement()
SVGFEFuncGElement:ƒ SVGFEFuncGElement()
SVGFEFuncRElement:ƒ SVGFEFuncRElement()
SVGFEGaussianBlurElement:ƒ SVGFEGaussianBlurElement()
SVGFEImageElement:ƒ SVGFEImageElement()
SVGFEMergeElement:ƒ SVGFEMergeElement()
SVGFEMergeNodeElement:ƒ SVGFEMergeNodeElement()
SVGFEMorphologyElement:ƒ SVGFEMorphologyElement()
SVGFEOffsetElement:ƒ SVGFEOffsetElement()
SVGFEPointLightElement:ƒ SVGFEPointLightElement()
SVGFESpecularLightingElement:ƒ SVGFESpecularLightingElement()
SVGFESpotLightElement:ƒ SVGFESpotLightElement()
SVGFETileElement:ƒ SVGFETileElement()
SVGFETurbulenceElement:ƒ SVGFETurbulenceElement()
SVGFilterElement:ƒ SVGFilterElement()
SVGForeignObjectElement:ƒ SVGForeignObjectElement()
SVGGElement:ƒ SVGGElement()
SVGGeometryElement:ƒ SVGGeometryElement()
SVGGradientElement:ƒ SVGGradientElement()
SVGGraphicsElement:ƒ SVGGraphicsElement()
SVGImageElement:ƒ SVGImageElement()
SVGLength:ƒ SVGLength()
SVGLengthList:ƒ SVGLengthList()
SVGLineElement:ƒ SVGLineElement()
SVGLinearGradientElement:ƒ SVGLinearGradientElement()
SVGMPathElement:ƒ SVGMPathElement()
SVGMarkerElement:ƒ SVGMarkerElement()
SVGMaskElement:ƒ SVGMaskElement()
SVGMatrix:ƒ SVGMatrix()
SVGMetadataElement:ƒ SVGMetadataElement()
SVGNumber:ƒ SVGNumber()
SVGNumberList:ƒ SVGNumberList()
SVGPathElement:ƒ SVGPathElement()
SVGPatternElement:ƒ SVGPatternElement()
SVGPoint:ƒ SVGPoint()
SVGPointList:ƒ SVGPointList()
SVGPolygonElement:ƒ SVGPolygonElement()
SVGPolylineElement:ƒ SVGPolylineElement()
SVGPreserveAspectRatio:ƒ SVGPreserveAspectRatio()
SVGRadialGradientElement:ƒ SVGRadialGradientElement()
SVGRect:ƒ SVGRect()
SVGRectElement:ƒ SVGRectElement()
SVGSVGElement:ƒ SVGSVGElement()
SVGScriptElement:ƒ SVGScriptElement()
SVGSetElement:ƒ SVGSetElement()
SVGStopElement:ƒ SVGStopElement()
SVGStringList:ƒ SVGStringList()
SVGStyleElement:ƒ SVGStyleElement()
SVGSwitchElement:ƒ SVGSwitchElement()
SVGSymbolElement:ƒ SVGSymbolElement()
SVGTSpanElement:ƒ SVGTSpanElement()
SVGTextContentElement:ƒ SVGTextContentElement()
SVGTextElement:ƒ SVGTextElement()
SVGTextPathElement:ƒ SVGTextPathElement()
SVGTextPositioningElement:ƒ SVGTextPositioningElement()
SVGTitleElement:ƒ SVGTitleElement()
SVGTransform:ƒ SVGTransform()
SVGTransformList:ƒ SVGTransformList()
SVGUnitTypes:ƒ SVGUnitTypes()
SVGUseElement:ƒ SVGUseElement()
SVGViewElement:ƒ SVGViewElement()


Scheduler:ƒ Scheduler()
Scheduling:ƒ Scheduling()
ScrollTimeline:ƒ ScrollTimeline()
ServiceWorker:ƒ ServiceWorker()
TaskAttributionTiming:ƒ TaskAttributionTiming()
TaskController:ƒ TaskController()
TaskSignal:ƒ TaskSignal()
TaskPriorityChangeEvent:ƒ TaskPriorityChangeEvent()
ServiceWorkerContainer:ƒ ServiceWorkerContainer()
ServiceWorkerRegistration:ƒ ServiceWorkerRegistration()


SecurityPolicyViolationEvent:ƒ SecurityPolicyViolationEvent()


Serial:ƒ Serial()
SerialPort:ƒ SerialPort()

ShadowRoot:ƒ ShadowRoot()
SharedStorage:ƒ SharedStorage()
SharedStorageWorklet:ƒ SharedStorageWorklet()
SharedWorker:ƒ SharedWorker()
SourceBuffer:ƒ SourceBuffer()
SourceBufferList:ƒ SourceBufferList()


StylePropertyMap:ƒ StylePropertyMap()
StylePropertyMapReadOnly:ƒ StylePropertyMapReadOnly()
StyleSheet:ƒ StyleSheet()
StyleSheetList:ƒ StyleSheetList()
SubmitEvent:ƒ SubmitEvent()
SubtleCrypto:ƒ SubtleCrypto()
Symbol:ƒ Symbol()
SyncManager:ƒ SyncManager()
SyntaxError:ƒ SyntaxError()

//!         TEXT        
{
    Text:ƒ Text()
    TextDecoder:ƒ TextDecoder()
    TextDecoderStream:ƒ TextDecoderStream()
    TextEncoder:ƒ TextEncoder()
    TextEncoderStream:ƒ TextEncoderStream()
    TextEvent:ƒ TextEvent()
    TextFormat:ƒ TextFormat()
    TextFormatUpdateEvent:ƒ TextFormatUpdateEvent()
    TextMetrics:ƒ TextMetrics()
    TextTrack:ƒ TextTrack()
    TextTrackCue:ƒ TextTrackCue()
    TextTrackCueList:ƒ TextTrackCueList()
    TextTrackList:ƒ TextTrackList()
    TextUpdateEvent:ƒ TextUpdateEvent()
}

ToggleEvent:ƒ ToggleEvent()
Touch:ƒ Touch()
TouchList:ƒ TouchList()
TouchEvent:ƒ TouchEvent()
TrackEvent:ƒ TrackEvent()
TransformStream:ƒ TransformStream()
TransformStreamDefaultController:ƒ TransformStreamDefaultController()
TransitionEvent:ƒ TransitionEvent()
TreeWalker:ƒ TreeWalker()

TrustedHTML:ƒ TrustedHTML()
TrustedScript:ƒ TrustedScript()
TrustedScriptURL:ƒ TrustedScriptURL()
TrustedTypePolicy:ƒ TrustedTypePolicy()
TrustedTypePolicyFactory:ƒ TrustedTypePolicyFactory()

UIEvent:ƒ UIEvent()
URIError:ƒ URIError()



//!         USB         

USB:ƒ USB()
USBAlternateInterface:ƒ USBAlternateInterface()
USBConfiguration:ƒ USBConfiguration()
USBConnectionEvent:ƒ USBConnectionEvent()
USBDevice:ƒ USBDevice()
USBEndpoint:ƒ USBEndpoint()
USBInTransferResult:ƒ USBInTransferResult()
USBInterface:ƒ USBInterface()
USBIsochronousInTransferPacket:ƒ USBIsochronousInTransferPacket()
USBIsochronousInTransferResult:ƒ USBIsochronousInTransferResult()
USBIsochronousOutTransferPacket:ƒ USBIsochronousOutTransferPacket()
USBIsochronousOutTransferResult:ƒ USBIsochronousOutTransferResult()
USBOutTransferResult:ƒ USBOutTransferResult()

UserActivation:ƒ UserActivation()
VTTCue:ƒ VTTCue()
ValidityState:ƒ ValidityState()

VideoColorSpace:ƒ VideoColorSpace()
VideoDecoder:ƒ VideoDecoder()
VideoEncoder:ƒ VideoEncoder()
VideoFrame:ƒ VideoFrame()
VideoPlaybackQuality:ƒ VideoPlaybackQuality()

ViewTimeline:ƒ ViewTimeline()
ViewTransition:ƒ ViewTransition()


VisibilityStateEntry:ƒ VisibilityStateEntry()
VisualViewport:ƒ VisualViewport()
WGSLLanguageFeatures:ƒ WGSLLanguageFeatures()
WakeLock:ƒ WakeLock()
WakeLockSentinel:ƒ WakeLockSentinel()
WaveShaperNode:ƒ WaveShaperNode()
WeakMap:ƒ WeakMap()
WeakRef:ƒ WeakRef()
WeakSet:ƒ WeakSet()
WebAssembly:WebAssembly {compile: ƒ, validate: ƒ, instantiate: ƒ, compileStreaming: ƒ, instantiateStreaming: ƒ, …}

//!         WEBGL       

WebGL2RenderingContext:ƒ WebGL2RenderingContext()
WebGLActiveInfo:ƒ WebGLActiveInfo()
WebGLBuffer:ƒ WebGLBuffer()
WebGLContextEvent:ƒ WebGLContextEvent()
WebGLFramebuffer:ƒ WebGLFramebuffer()
WebGLProgram:ƒ WebGLProgram()
WebGLQuery:ƒ WebGLQuery()
WebGLRenderbuffer:ƒ WebGLRenderbuffer()
WebGLRenderingContext:ƒ WebGLRenderingContext()
WebGLSampler:ƒ WebGLSampler()
WebGLShader:ƒ WebGLShader()
WebGLShaderPrecisionFormat:ƒ WebGLShaderPrecisionFormat()
WebGLSync:ƒ WebGLSync()
WebGLTexture:ƒ WebGLTexture()
WebGLTransformFeedback:ƒ WebGLTransformFeedback()
WebGLUniformLocation:ƒ WebGLUniformLocation()
WebGLVertexArrayObject:ƒ WebGLVertexArrayObject()
WebKitCSSMatrix:ƒ DOMMatrix()
WebKitMutationObserver:ƒ MutationObserver()

//!         TRANSPORT  SOCKET   STREAM    

WebSocket:ƒ WebSocket()
WebSocket:ƒ WebSocket.open()
WebSocket:ƒ WebSocket.close()
BroadcastChannel:ƒ BroadcastChannel()
WebTransport:ƒ WebTransport()
WebTransportBidirectionalStream:ƒ WebTransportBidirectionalStream()
WebTransportDatagramDuplexStream:ƒ WebTransportDatagramDuplexStream()
WebTransportError:ƒ WebTransportError()
ReadableByteStreamController:ƒ ReadableByteStreamController()
ReadableStream:ƒ ReadableStream()
ReadableStreamBYOBReader:ƒ ReadableStreamBYOBReader()
ReadableStreamBYOBRequest:ƒ ReadableStreamBYOBRequest()
ReadableStreamDefaultController:ƒ ReadableStreamDefaultController()
ReadableStreamDefaultReader:ƒ ReadableStreamDefaultReader()
BrowserCaptureMediaStreamTrack:ƒ BrowserCaptureMediaStreamTrack()
DecompressionStream:ƒ DecompressionStream()
WritableStream:ƒ WritableStream()
WritableStreamDefaultController:ƒ WritableStreamDefaultController()
WritableStreamDefaultWriter:ƒ WritableStreamDefaultWriter()
ByteLengthQueuingStrategy:ƒ ByteLengthQueuingStrategy()


//!     WORKER  PARALLEL PROCESS

Worker:ƒ Worker()
Worklet:ƒ Worklet()


//!         XML         
XMLDocument:ƒ XMLDocument()
XMLHttpRequest:ƒ XMLHttpRequest()
XMLHttpRequestEventTarget:ƒ XMLHttpRequestEventTarget()
XMLHttpRequestUpload:ƒ XMLHttpRequestUpload()
XMLSerializer:ƒ XMLSerializer()
CDATASection:ƒ CDATASection()
XPathEvaluator:ƒ XPathEvaluator()
XPathExpression:ƒ XPathExpression()
XPathResult:ƒ XPathResult()

//!         XR VR Virtual Reality         
XRAnchor:ƒ XRAnchor()
XRAnchorSet:ƒ XRAnchorSet()
XRBoundedReferenceSpace:ƒ XRBoundedReferenceSpace()
XRCPUDepthInformation:ƒ XRCPUDepthInformation()
XRCamera:ƒ XRCamera()
XRDOMOverlayState:ƒ XRDOMOverlayState()
XRDepthInformation:ƒ XRDepthInformation()
XRFrame:ƒ XRFrame()
XRHitTestResult:ƒ XRHitTestResult()
XRHitTestSource:ƒ XRHitTestSource()
XRInputSource:ƒ XRInputSource()
XRInputSourceArray:ƒ XRInputSourceArray()
XRInputSourceEvent:ƒ XRInputSourceEvent()
XRInputSourcesChangeEvent:ƒ XRInputSourcesChangeEvent()
XRLayer:ƒ XRLayer()
XRLightEstimate:ƒ XRLightEstimate()
XRLightProbe:ƒ XRLightProbe()
XRPose:ƒ XRPose()
XRRay:ƒ XRRay()
XRReferenceSpace:ƒ XRReferenceSpace()
XRReferenceSpaceEvent:ƒ XRReferenceSpaceEvent()
XRRenderState:ƒ XRRenderState()
XRRigidTransform:ƒ XRRigidTransform()
XRSession:ƒ XRSession()
XRSessionEvent:ƒ XRSessionEvent()
XRSpace:ƒ XRSpace()
XRSystem:ƒ XRSystem()
XRTransientInputHitTestResult:ƒ XRTransientInputHitTestResult()
XRTransientInputHitTestSource:ƒ XRTransientInputHitTestSource()
XRView:ƒ XRView()
XRViewerPose:ƒ XRViewerPose()
XRViewport:ƒ XRViewport()
XRWebGLBinding:ƒ XRWebGLBinding()
XRWebGLDepthInformation:ƒ XRWebGLDepthInformation()
XRWebGLLayer:ƒ XRWebGLLayer()

XSLTProcessor:ƒ XSLTProcessor()
decodeURI:ƒ decodeURI()
decodeURIComponent:ƒ decodeURIComponent()
encodeURI:ƒ encodeURI()
encodeURIComponent:ƒ encodeURIComponent()
eval:ƒ eval()



offscreenBuffering:true


webkitRTCPeerConnection:ƒ RTCPeerConnection()




[[Prototype]]:Window
