1 GETTING STARTED
        CREATE test.ts
        INSTALL TYPES
                npm install --save @types/node
        CODE TEST
            function foo(bar:string) {return 'Hello, '+bar}
            let baz = 'ABC'
            console.log(foo(baz))
        COMPILE
                tsc ./src/test.ts --outDir ./dist
        RUN
                node dist/test
        MAKE AN ERROR
                let baz = 123 // 'ASD': string  123: number
        ERROR OUTPUT
           "Argument of type 'number' is not assignable to parameter of type 'string'."
        .
2 ADDING CONFIGURATION
        testconfig.json
        .
        tsc -p ./src
3 TSC WATCH 
        This process of running   tsc -p ./src   and then seeing the output
        in Node.js using     node ./dist/test.js   for example, can be quite tedious
        if you need to keep typing the tsc and the node commands in turn for every change you make.
        .
        Instead, you can run TSC in watch mode, which will cause it to continue running 
        and automatically compile and check any changes you make to the TypeScript source files
                1ST TERMINAL     tsc -p ./src -w
                2ND TERMINAL     node dist/test
        .
.
DATA & STRUCTURE
.
4 LET CONST VAR    https://sbcode.net/typescript/common_types/
        const baz = '123'  // CANT  change
        var baz = '123'    // GLOBAL variavle
        let baz = '123'    // LOCAL  variable 
        .
5 TYPES            https://sbcode.net/typescript/common_types/
        let a1: string
        let b2: boolean
        let c3: number
        let d4: string[]          // ARRAY string
        let d5: [number, string]  // ARRAY number,string
            d5 = [1, 'abc']
        let e6: { [key: number]: string } // HASHMAP  key : Value
            e6 = { 123: 'abc', 456: 'def' } // ( dictionary = hashmap)
        let f7: Set<number>       // SET of numbers
            f7 = new Set([1, 2, 3])
        .
6 STRINGS
        let foo: string // string type
        foo = 'Lorem Ipsum is simply dummy text of the printing ' // single quote
        foo = ` Bart said : "It wasn't me" ` // Template Literal
	.
7 BOOLEAN
        let bar: boolean
        bar = true
        bar = false
        .
8 NUMBERS	
        let baz: number
        baz = 123     //  decimal
        baz = 123.456 //  float
        baz = 0xffff  //  hex
        baz = 0b10101 //  binary
        baz = 0o671   //  octal
        .
9 ARRAYS
        let a: string[]
            a = ['a', 'b', 'd', 'd']
            a.push('z')    // add an item to the end
            a.unshift('x') // add an item to the beginning
            a.splice(2, 1) // remove 1 item at the 3rd position (0 based index)
        let b: number[]
            b = [1, 2, 3, 4]
        let c: boolean[]
            c = [true, false, true]
        let d: unknown[]
            d = [1, 'a', true, ['even', 'another', 'internal', 'array']]
        .
10 DICTIONARIES
        let a: { [key: number]: string }
            a = { 123: 'abc', 456: 'def' }
            a.123               // GET a[123] .... 'abc'
            a[ 789 ] = 'go-cart'// ADD element
        let b: { [key: string]: boolean }
            b = { abc: true, def: false, ghi: true }
        let c: { [id: number]: number[] } // ARRAY as value 
        .
        console.log(a[123])
        console.log(b['def'])

```Ts
 11 TUPLES
        let a: [number, string]
        a = [1, 'abc']
        let b: [string, boolean, number]
        b = ['abc', false, 123]
        .
11 TOUPLE STRUCT // TS Struct -> JS typless ARRAY
        let a: [number, string]
            a = [1, 'abc']
        let b: [string, boolean, number]
            b = ['abc', false, 123]
12 SETS  // UNIQUE VALUES
        let a: Set<number>
            a = new Set([1, 2, 3, 4])  // Set(4) { 1,2,3,4,}
            Array.from(a)              // [ 1,2,3,4 ]
        let b: Set<string>
            b = new Set(['a', 'b', 'c', 'd', 'a']) // the second `a` is not added
        let c: Set<unknown>
            c = new Set([1, 'b', true])
        a.add('dog')            // adding items   NO DUPLICATED allowed.
        a.delete('dog')         // remove an item
        Array.from(a)[1]        // Get 2nd item.
        a.size                  // Get length of the Set
        a.has(3)                // True
        .
13 CLASSES   "OBJECT TEMPLATE"
    .
    class Cat {                         // CLASS       
        name: string                    // atribute
        stepsWalked: number = 0         // atribute
        constructor(name: string) {     // methode
            this.name = name
        }
        walk(steps: number): void {     // methode
            console.log( this.name +' has walked '+ steps +' steps.')
            this.stepsWalked += steps
        }
        totalStep(): number {
            return this.stepsWalked
        }
    }
    .
    const CAT = new Cat('Cosmo')        // OBJ
    CAT.walk(20)                        // 
    console.log( CAT.name +' has walked '+ CAT.totalStep() +' steps.')
    .
14 INERFACES "CLASS TEMPLATE"
    .
    interface IAnimal {                  // INTERFACE
        name: string
        age: number
        feed(food: string, amount: number): void
    }
    class Feline implements IAnimal {    // CLASS IMPLEMENT 
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age    }
        feed(food: string, amount: number): void {
            console.log(`Feeding ${this.name} ${amount} kg of ${food}` }
    }  //  interfaces only exist befor  compilation to JS.
    .
14.2 EXTENSION
    .
    class Cat extends Feline {          // CLASS IMPLEMENT 
        isHungry: boolean
        constructor(name: string, age: number, isHungry: boolean) {
            super(name, age)            // we must call parent constructor
            this.isHungry = isHungry    // we can  extend the constructor
        }
        feed(food: string, amount: number): void {
            if (this.isHungry) {  super.feed(food, amount) } // 151  Feline.feed()
            else { console.log(`${this.name} the ${this.constructor.name} is not hungry`)}
        }
    }
    let titi = new Cat( "Titi",3,true )
    titi.feed("fish",0.1)
    .
15 ABSTRACT CLASS
    .
    abstract class Animal {
        abstract name: string
        age: number
        constructor(age: number) {
            //this.name = name // this must now be assigned in the derived class instead
            this.age = age }
        feed(food: string, amount: number): void {
            console.log(`Feeding ${this.name} ${amount} kg of ${food}` )
        }
    }
    .
16 PUBLIC ACCES MODIF // default
    class Animal {                  
        public   name: string     // ACCES everywhere    
        private   age: number     // ACCES by methodes current class
        protected heig: number    // ACCES by methodes current & child class
    }
17 STATIC MEMBERS // param & method SHARED between same class objects use less memory
    .
    class Circle {
        radius: number
        static readonly PI = 3.14        // static PI only once... same for every circle
        constructor(radius: number) {    // readonly PI cant be modifyed 
            this.radius = radius
        }
    }
    .
18 IMPORT EXPORT 
  test.ts:
    import { Cat, Dog } from './animals'
    .
    const CAT = new Cat('Cosmo', 8)
    console.log(CAT.name)
    const DOG = new Dog('Rusty', 12)
    console.log(DOG.name)
    ./src/animals.ts
    .
  animals.ts
    import Animal from './animal'
    .
    export class Cat extends Animal {
        constructor(name: string, age: number) {
            super(name, age)
        }
    }
    .
    export class Dog extends Animal {}
    .
19 UML [ UNIFIED MODEL LANG ]
        ╔═════════════════════════╗
        ║       class name{}      ║
        ╠═════════════════════════╣ field = atribute
        ║ - field_1 : type        ║ - : private
        ╠═════════════════════════╣ + : public 
        ║ + method_A(type) : type ║ # : protected  (args)
        ╚═════════════════════════╝
  // USE                  // EXTEND (herence)
  CLASS B                  CLASS B               
    ▲  CLASS A uses B        ∆   CLASS A extends B   
    │  B is A  field         │   A inherits from B   
    │                        │                   
  CLASS A                  CLASS A      
  .
  // IMPLEMENTS            // AGREGATES
  interface B                CLASS B               
    ∆  CLASS A from B         ᗑ CLASS A has reference to B   
    ┆  must have B methods    ┆  can contain several B objects   
    ┆                         ◇      both clases can be independent          
  CLASS A                    CLASS A   (epty library with  no books)    

  // COMPOSITION               // Pseudocode anotation
  interface B                   ○  Method description
    ᗑ  similar to composition  ┆   using a simplified version
    ┆  must have B methods      ┆    of the actual code [pseudo]
    ◆                           Pscode                         
  CLASS A                      
  .
  /* SYMBOLS :  ::::::::::::::::::::
                ⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕
                ░░░░░░░░░░░░░░░░░░░░
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿  
                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▜ ▛ ▚ ▐ ▄ ▘ ▖  ▚▚▚
                ████████████████████ ▟ ▙ ▞ ▌ ▀ ▝ ▗  ▚▚▚

    ▀▀▀▀▀▀  ▐▚▞▌ ▞▚ ▐ ▐▚▐   ▛▘ ▌ ▐ ▐▚▐ ▛▘▝▜▀ ▐ ▞▀▚ ▐▚▐  ▀▀▀▀▀▀▀
    ▄▄▄▄▄▄  ▐  ▌ ▛▜ ▐ ▐ ▜   ▛▘ ▚▄▞ ▐ ▜ ▙▖ ▐  ▐ ▚▄▞ ▐ ▜  ▄▄▄▄▄▄▄     

    https://www.i2symbol.com/symbols/line  ☺ ☻  ¦ ┆ | │ ⎓ ⏚ ⏛ ⏦ ⚐
    ⟳ ↻  ↺ ⟲ ⤹⤸⤻ ⤺ ↷ ↶  ⬎ ⬏ ⬐ ⬑   ↰ ↱ ↲ ↳  ⬱ ⇶  ⬳ 
    ᗕ ᗑ ᗐ ᗒ  ᐸ ᐱ ᐳ ᐯ   ◄ ◀ ▲ ▼ ▶ ► ◅ ◁ △ ▽ ▷ ▻  ◀ ▶ ◤◢ ∆∇ ▻ ◅ ➤   
    ⇠ ⇡ ⇢ ⇣    ← ↑ → ↓    ⟰ ⤊ ⇚ ⇛ ⤋ ⟱   ⍃ ⍌ ⍄ ⍌  ⧏ ⧋ ⧐
    ⬅ ⬆ ➡ ⬇    ⇐ ⇑ ⇒ ⇓     ⇇ ⇈ ⇉ ⇊     ⇦ ⇧ ⇨ ⇩  ↞ ↟ ↠ ↡  ☜☚☞☛☝☟
    ⬉ ⬈ ⬊ ⬋    ⇖ ⇗ ⇘ ⇙     ↖ ↗ ↘ ↙     ⬁ ⬀ ⬂ ⬃ ⬩⬥⬦◆◇⟐◈❖ ◊⧫ ⬭⬬⬯⬮
    ╒═══╕  ╓───╖
    ┌─┬─┐  ╔═╦═╗   ╔═══╗
    ╞═╪═╡  ╟─╫─╢   ╚═══╝
    ├─┴─┤  ╠═╩═╣   
    │   │  ║═╬═║   ╭───╮  
    └───┘  ╚═══╝   ╰───╯      
    ╘═══╛  ╙───╜
    ┏━┳━┓ ┱──╮ ╦━━┓         
    ┣━╋━┫ ┃  │ ║  ┃      
    ┠─┸─┨ ┃  │ ║  ┃
    ┣━┻━┫ ┃  │ ║  ┃   
    ┗━━━┛ ┹──╯ ╩━━┛ 
    ┡━━━━┩           
    ╰────╯
    https://www.alt-codes.net/math-symbols-list  
    ▪▫ ■ □ ▣ ▦ ◫ ⬚ ◰ ◳ ◱ ◲ ☒ ⟎ ⟏ ⧇ ⧈ ⧆ ☒ ☑ ✎ ✏ ✐    ☺☹ ⑁ ⑂ ⑃
    ◯.ं∘●○◌◍◉◎☉● ⌾⍟⌽⍉ ⊙⊚⊛⊖⊕⊛⊘⊜⊚⎊⍟   ⬤〶〇⦿⦷⦹⨁⨂⦵◝◜◞◟ ◐◑◒◓ ⦸◴◵◶◷⨀
    ⌦ ⌫ ⌧ ⌂ ⏏ ⌘ ⌨ ⌶ ⧖ ⌖▮▯  ✖✔ ✓✗    ♥♠♥♦♣ ♤♡♢♧      ⬖⬗⬘⬙ ⬡⬢⬠⬟ ▱▰ 
    ⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ ☩☭✝⚖✡✙⚔☫✜✠☸卐  ⚗⚙☯☮☘☤☣☠☢✇♲✈☸♨✉
    ⓿⓪❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴⓪①②③④⑤⑥⑦⑧⑨⑩     ♂♀⚲♁⥉ ⚢⚣⚤⚥ 
    ⋙⋘⊨⊩ ⊹⋮   ✦✧⋆★☆✴✵❅✱✲    ⚘✿❀❁❇✤✣    ☀☁☂❆☃ϟ☾☽€₤$¢¥₳฿₣₲₭₥₦₱₽₴₮₩
     ✎✑✒✉♯#☏☎✆   ⎉ ⎊ ⎙ ⍰    ♚♛♝♞♜♟ ♔♕♗♘♖♙ 
    ⚠ ♺ ♳ ♴ ♵ ♶ ♷ ♸ ♹  ♩ ♪ ♫ ♬ 𝆺 𝆺𝅥 𝆺𝅥𝅮 𝆺𝅥𝅯 𝆹 𝆹𝅥 𝆹𝅥𝅮 𝆹𝅥𝅯 𝄚𝄞 𝄚𝄡 𝄚𝄢 ♭♮♯ 𝄔 𝇇𝇈𝇉𝇊𝇋𝇌𝇍𝇎
    🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂬🂭🂮🂿🃏🂠 Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅻ Ⅼ Ⅽ Ⅾ Ⅿ
    🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂼🂽🂾
    🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃌🃍🃎
    🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃜🃝🃞🃠
    http://xahlee.info/comp/unicode_math_font.html
    🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉 🆛🆝🆞🆟🆠🆡🆣🆤
    🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉 
    𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ
    𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫
    𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡
    𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵
    𝒶 𝒷 𝒸 𝒹 ℯ 𝒻 ℊ 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ℴ 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏
    𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩
    𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃
    ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕ 
    ᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ  ᛮᛯᛰ
    https://www.ascii-code.com/  
    https://www.symbolspy.com/corner-symbols.html
    https://coolsymbol.com/corner-symbols.html
    


    BRAILE
      ⠁ ⠂ ⠃ ⠄ ⠅ ⠆ ⠇ ⠈ ⠉ ⠊ ⠋ ⠌ ⠍ ⠎ ⠏
    ⠐ ⠑ ⠒ ⠓ ⠔ ⠕ ⠖ ⠗ ⠘ ⠙ ⠚ ⠛ ⠜ ⠝ ⠞ ⠟
    ⠠ ⠡ ⠢ ⠣ ⠤ ⠥ ⠦ ⠧ ⠨ ⠩ ⠪ ⠫ ⠬ ⠭ ⠮ ⠯
    ⠰ ⠱ ⠲ ⠳ ⠴ ⠵ ⠶ ⠷ ⠸ ⠹ ⠺ ⠻ ⠼ ⠽ ⠾ ⠿

    ⡀ ⡁ ⡂ ⡃ ⡄ ⡅ ⡆ ⡇ ⡈ ⡉ ⡊ ⡋ ⡌ ⡍ ⡎ ⡏
    ⡐ ⡑ ⡒ ⡓ ⡔ ⡕ ⡖ ⡗ ⡘ ⡙ ⡚ ⡛ ⡜ ⡝ ⡞ ⡟
    ⡠ ⡡ ⡢ ⡣ ⡤ ⡥ ⡦ ⡧ ⡨ ⡩ ⡪ ⡫ ⡬ ⡭ ⡮ ⡯
    ⡰ ⡱ ⡲ ⡳ ⡴ ⡵ ⡶ ⡷ ⡸ ⡹ ⡺ ⡻ ⡼ ⡽ ⡾ ⡿

    ⢀ ⢁ ⢂ ⢃ ⢄ ⢅ ⢆ ⢇ ⢈ ⢉ ⢊ ⢋ ⢌ ⢍ ⢎ ⢏
    ⢐ ⢑ ⢒ ⢓ ⢔ ⢕ ⢖ ⢗ ⢘ ⢙ ⢚ ⢛ ⢜ ⢝ ⢞ ⢟
    ⢠ ⢡ ⢢ ⢣ ⢤ ⢥ ⢦ ⢧ ⢨ ⢩ ⢪ ⢫ ⢬ ⢭ ⢮ ⢯
    ⢰ ⢱ ⢲ ⢳ ⢴ ⢵ ⢶ ⢷ ⢸ ⢹ ⢺ ⢻ ⢼ ⢽ ⢾ ⢿

    ⣀ ⣁ ⣂ ⣃ ⣄ ⣅ ⣆ ⣇ ⣈ ⣉ ⣊ ⣋ ⣌ ⣍ ⣎ ⣏
    ⣐ ⣑ ⣒ ⣓ ⣔ ⣕ ⣖ ⣗ ⣘ ⣙ ⣚ ⣛ ⣜ ⣝ ⣞ ⣟
    ⣠ ⣡ ⣢ ⣣ ⣤ ⣥ ⣦ ⣧ ⣨ ⣩ ⣪ ⣫ ⣬ ⣭ ⣮ ⣯
    ⣰ ⣱ ⣲ ⣳ ⣴ ⣵ ⣶ ⣷ ⣸ ⣹ ⣺ ⣻ ⣼ ⣽ ⣾ ⣿
            
       */
.
20 DESIGN PATTERNS
    Creational
        Factory
        Abstract Factory
        Builder
        ProtoType
        Singleton
    Structural
        Decorator
        Adapter
        Facade
        Bridge
        Composite
        Flyweight
        Proxy
    Behavioral
        Command
        Chain of Responsibility
        Observer
        Interpreter
        Iterator
        Mediator
        Memento
        State
        Strategy
        Template Method
        Visitor
