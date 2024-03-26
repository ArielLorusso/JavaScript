https://sbcode.net/typescript/factory/
https://refactoring.guru/design-patterns/factory-method
.
1 FACTORY PATTERN
  Features:
    It allows to dynamically choose classes to instantiate
    adds an abstraction between object creation band where it is used.
    It an easy patterns to understand and implement,
    and makes your code easier to read and document.
    .
  Example:
    An application for designing houses that has a chair already added on the floor by default. 
    By adding the factory pattern, the user can choose different chairs, and how many at RUNTIME.
    
  Terminology:
    Concrete_Creator: CLIENT APPLICATION, 
        Class or method that calls the Creator (Factory method).
    Creator: FACTORY CLASS
        . Declares the Factory method
        that will return the object requested from it.
    Product_Interface : MTHODS THAT CREATE 
        The Interface describing the attributes and methods
        that the Factory will require in order to create the final product/object.
    Concrete_Product: OBJECT RETURNED
    The object returned from the Factory. The object implements the Product interface.
    it is now created outside the current class/method, in a subclass instead.
    .
1.2 FACTORY EXAMPLE_1 : 3 PRODUCTS 
    ////////////////////    Product_Interface    ////////////////////
        interface IProduct {
            name: string
        }
        class ConcreteProduct implements IProduct {
            name = ''
        }
    ///////////////////   3 Concrete Product OBJS     ///////////////////
        class ConcreteProductA extends ConcreteProduct {
            constructor() { super()
                            this.name = 'ConcreteProductA'  } }
        class ConcreteProductB extends ConcreteProduct {
            constructor() { super()
                            this.name = 'ConcreteProductB'  }  }
        class ConcreteProductC extends ConcreteProduct {
            constructor() { super()
                            this.name = 'ConcreteProductC'  }  }
    /////////////////     Creator  (Factory class)     /////////////////
        class Creator {
            static createObject(someProperty: string): IProduct { // Product Interface
                if      (someProperty === 'a') { return new ConcreteProductA() }
                else if (someProperty === 'b') { return new ConcreteProductB() } 
                else                           { return new ConcreteProductC() } }
        }
    /////////////////    The Client         /////////////////
        // Concrete_Creator : we did not implement 
        // class that should call  Creator.createObject()
        const PRODUCT = Creator.createObject('b')
        console.log(PRODUCT.name)
    .
2 FACTORY   EXAMPLE_2 : 3 CHAIR SIZE
    /src/factory/client.ts
        // Factory Use Case Example Code
        import ChairFactory from './chair-factory'  
        const CHAIR = ChairFactory.getChair('SmallChair')
        console.log(CHAIR.getDimensions())
    .
    ./src/factory/chair-factory.ts
        import SmallChair from './small-chair'
        import MediumChair from './medium-chair'
        import BigChair from './big-chair'
        import IChair from './chair'
        .
        export default class ChairFactory {
            static getChair(chair: string): IChair {
                if         (chair == 'BigChair') { return new BigChair()    } 
                else if (chair == 'MediumChair') { return new MediumChair() } 
                else                             { return new SmallChair()  }  }
        }
    .
    ./src/factory/small-chair.ts
        import Chair from './chair'
        .
        export default class SmallChair extends Chair {
            constructor() {
                super()
                this.height = 40
                this.width = 40
                this.depth = 40
            }
        }
    .
    ./src/factory/medium-chair.ts
        import Chair from './chair'
        .
        export default class MediumChair extends Chair {
            constructor() {
                super()
                this.height = 60
                this.width = 60
                this.depth = 60
            }
        }
    .
    ./src/factory/big-chair.ts
        import Chair from './chair'
        .
        export default class BigChair extends Chair {
            constructor() {
                super()
                this.height = 80
                this.width = 80
                this.depth = 80
            }
        }
    .
    ./src/factory/chair.ts
            import { dimension } from './dimension'
            // A Chair Interface
            interface IChair {
                height: number
                width: number
                depth: number
                getDimensions(): dimension
            }
            // The Chair Base Class using interface
            export default class Chair implements IChair {
                height = 0
                width = 0
                depth = 0
                getDimensions(): dimension {
                    return {
                        width: this.width,
                        depth: this.depth,
                        height: this.height, }
                }
            }
    .
    /src/factory/dimension.ts
        export type dimension = {
            height: number
            width: number
            depth: number
        }.
    .
3 ABSTRACT FACTOTY
    ./src/abstract-factory/abstract-factory-concept.ts
        // Abstract Factory Concept Sample Code
        import { FactoryA, IProductA } from './factory-a'
        import { FactoryB, IProductB } from './factory-b'
        .
        interface IProduct extends IProductA, IProductB {}
        .
        class AbstractFactory {
            // The Abstract Factory Concrete Class
            static createObject(factory: string): IProduct | undefined {
                try {
                    if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
                        return FactoryA.getObject(factory[1])
                    }
                    if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
                        return FactoryB.getObject(factory[1])
                    }
                    throw new Error('No Factory Found')
                } catch (e) {
                    console.log(e)
                }
            }
        }
        ///////////////    The Client   ///////////////////////////
        let PRODUCT = AbstractFactory.createObject('ab')
        console.log(PRODUCT)
        .
        PRODUCT = AbstractFactory.createObject('bc')
        console.log(PRODUCT)
    ./src/abstract-factory/factory-a.ts
        // FactoryA Sample Code
        export interface IProductA {
            name: string
        }
        .
        class ConcreteProduct implements IProductA {
            name = ''
        }
        /////////////////////////////////////////////////////////////
        class ConcreteProductA extends ConcreteProduct {
            constructor() { super()
                            this.name = 'FactoryA:ConcreteProductA' } }
        class ConcreteProductB extends ConcreteProduct {
            constructor() { super()
                            this.name = 'FactoryA:ConcreteProductB' } }
        class ConcreteProductC extends ConcreteProduct {
            constructor() { super()
                            this.name = 'FactoryA:ConcreteProductC' } }
        /////////////////////////////////////////////////////////////
        export class FactoryA {
            static getObject(some_property: string): IProductA {
                try {
                    if (some_property === 'a') {
                        return new ConcreteProductA()
                    } else if (some_property === 'b') {
                        return new ConcreteProductB()
                    } else if (some_property === 'c') {
                        return new ConcreteProductC()
                    } else {
                        throw new Error('Class Not Found')
                    }
                } catch (e) {
                    console.log(e)
                }
                return new ConcreteProduct()
            }
        }
    ./src/abstract-factory/factory-b.ts
        .
        // FactoryB Sample Code
        .
       export interface IProductB {
            name: string
        }
        .
        class ConcreteProduct implements IProductB {
            name = ''
        }
        .
        class ConcreteProductA extends ConcreteProduct {
            constructor() {
                super()
                this.name = 'FactoryB:ConcreteProductA'
            }
        }
        .
        class ConcreteProductB extends ConcreteProduct {
            constructor() {
                super()
                this.name = 'FactoryB:ConcreteProductB'
            }
        }
        .
        class ConcreteProductC extends ConcreteProduct {
            constructor() {
                super()
                this.name = 'FactoryB:ConcreteProductC'
            }
        }
        .
        export class FactoryB {
            static getObject(some_property: string): IProductB {
                try {
                    if (some_property === 'a') {
                        return new ConcreteProductA()
                    } else if (some_property === 'b') {
                        return new ConcreteProductB()
                    } else if (some_property === 'c') {
                        return new ConcreteProductC()
                    } else {
                        throw new Error('Class Not Found')
                    }
                } catch (e) {
                    console.log(e)
                }
                return new ConcreteProduct()
            }
        }
    .
4 ABSTRACT FACTOTY USE CASE
5 BUILDER // COMPLEX OBJECT ASEMBLY
    FEATURES
        Separates the construction of a complex object from its representation
        Allowing to use the same construction process to create different representations.
        as_Factory it instantiates new objects at runtime but is for complex objects.
    TERMINOLOGY
        Product: The Product being built.
        Builder_Interface: The Interface that the Concrete builder should implement.
        Builder: Provides methods to build and retrieve the concrete product. Implements the Builder Interface.
        Director: Has a construct() method that when called creates a customized product using the methods of the Builder.
    EXAMPLE_1   // Builder Concept Sample Code
        //////////////////////  PRODUCT     /////////////////////////
            class Product {
                parts: string[] = []
            }
            .
            interface IBuilder {
                buildPartA(): this
                buildPartB(): this
                buildPartC(): this
                getResult(): Product
            }
        //////////////////////  BUILDER     /////////////////////////
            class Builder implements IBuilder {
                // The Concrete Builder
                product: Product
                .
                constructor() { this.product = new Product() }
                .
                buildPartA() {  this.product.parts.push('a')
                    return this
                }
                buildPartB() {  this.product.parts.push('b')
                    return this
                }
                buildPartC() {   this.product.parts.push('c')
                    return this
                }
                getResult() {
                    return this.product
                }
            }
        //////////////////////  DIRECTOR    ////////////////////////
            class Director {
                // The Director, building a complex representation
                static construct() {
                    'Constructs and returns the final product'
                    return new Builder()
                        .buildPartA()
                        .buildPartB()
                        .buildPartC()
                        .getResult()
                }
            }
        /////////////////////   Client      /////////////////////////////
            // The Client
            const PRODUCT1 = Director.construct()
            console.log(PRODUCT1.parts)
        .
6 BUILDER USE CASE 
7 PROTOTYPE
8 PROTOTYPE USE CASE
9 SINGLETON
        https://sbcode.net/typescript/singleton/

        ./src/singleton/singleton-concept.ts
        .
        // Singleton Concept Sample Code
        .
        export class Singleton {
            // The Singleton Class
            static instance: Singleton
            id: number
        .
            constructor(id: number) {
                this.id = id
                if (Singleton.instance) {
                    return Singleton.instance
                }
                Singleton.instance = this
            }
        }
        .
        // The Client
        // All uses of the singleton point to the same original object
        .
        const OBJECT1 = new Singleton(1) // setting its id property to 1
        const OBJECT2 = new Singleton(2) // setting its id property to 2

        console.log(OBJECT1 === OBJECT2) // = true
        console.log(OBJECT1.id) // returns 1
        console.log(OBJECT2.id) // returns 1
10 SINGLETON USE CASE

    
    