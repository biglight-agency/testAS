 // Rabbits
    /* 
 Author: Chris Davies 
 Company: Biglight 
 Date: Thursday 28th December 2017
 Description: Rabbit finder search functionality
*/

/*
    Options scale - 1-4 

    Intensity
    1: Moderate
    2: Intense
    3: Powerful
    4: Off the scale

    Style
    1: Pulse patterns
    2: Rotations
    3: Variable vibration speeds
    4: Thrusting shaft

    Size
    1: Mini 
    2: Smaller
    3: Medium
    4: Larger

    Feel (shape)
    1: Contoured
    2: Straight
    3: G-spot
    4: Flexible


*/

var ASRFS = {};
ASRFS.rabbitList = [];
ASRFS.rabbit = function (id, url, imgURL, options, optionsValue, features, matches) {
    this.id = id;
    this.url = url;
    this.imgURL = imgURL;
    this.options = options;
    this.optionsValue = optionsValue;
    this.features = features;
    this.matches = matches;

    return this;
}
ASRFS.setupRabbits = function () {
    // OVO E6>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        1,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/ovo-e6-rechargeable-rabbit-triple-vibrator/85470.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1180041_Z?$product-large$',
        {
            intensity: [1],
            style: [3],
            size: [2, 3],
            feel: [3]
        },
        {
            intensity: "Moderate",
            style: "Variable speeds and patterns",
            size: "Small to Medium",
            feel: "G-spot"
        },
         {
            name: 'OVO E6 Rechargeable Rabbit Triple Vibrator',
            price: '£53.00',
            brand: 'OVO',
            forCouples: true,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE BUNNY BANGER MINI RABBIT >>PINK>>NO SIZE
    ASRFS.pushRabbit(
        2,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/bunny-banger-mini-rabbit-vibrator/88295.html#start=4',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1187041_Z?$product-large$',
        {
            intensity: [1],
            style: [0],
            size: [1],
            feel: [2]
        },{
            intensity: "Moderate",
            style: "Single speed",
            size: "Mini",
            feel: "Straight"
        }, {
            name: 'Bunny Banger Mini Rabbit Vibrator',
            price: '£10.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE METAL ONE (SILICONE)>>PURPLE>>NO SIZE
    ASRFS.pushRabbit(
        3,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-metal-one/59967.html#q=the+metal+one&qrd=1&start=2',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1265043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [3]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "G-spot"
        }, {
            name: 'Rampant Rabbit The Metal One',
            price: '£60.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: true
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE AQUA ONE>>GREEN>>NO SIZE
    ASRFS.pushRabbit(
        4,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-aqua-one/73526.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1018026_Z?$product-large$',
        {
            intensity: [3],
            style: [3, 1],
            size: [3],
            feel: [1]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'Rampant Rabbit The Aqua One',
            price: '£30.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE SIGNATURE ONE MOREGASM RABBIT>>BLACK>>NO SIZE
    ASRFS.pushRabbit(
        5,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator--the-signature-moregasm-black-one/74872.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1029006_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [1]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'The Signature Moregasm Black One',
            price: '£70.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // MOREGASM CONTOUR RABBIT>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        6,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/moregasm-contour-rampant-rabbit/77726.html#q=MOREGASM%2BCONTOUR%2BRABBIT&start=2',
        'https://i1.adis.ws/i/annsummers/07NCSVAS1145041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [1]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'Moregasm Contour Rampant Rabbit',
            price: '£70.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: false,
                soft: true
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE PEARLISED ONE (SB)>>WHITE>>NO SIZE
    ASRFS.pushRabbit(
        7,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-pearlised-one/85199.html',
        'https://i1.adis.ws/i/annsummers/07SCRTAS1050051_Z?$product-large$',
        {
            intensity: [1],
            style: [1, 2, 3],
            size: [3],
            feel: [1]
        },{
            intensity: "Moderate",
            style: "Variable vibration speeds and rotations",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'Rampant Rabbit The Pearlised One',
            price: '£50.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // INA WAVE CERISE>>CERISE>>NO SIZE
    ASRFS.pushRabbit(
        8,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/lelo-ina-wave-luxury-g-spot-vibrator/65936.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1163016_Z?$product-large$',
        {
            intensity: [4],
            style: [3, 1],
            size: [3],
            feel: [1, 4]
        },{
            intensity: "Off the scale",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured and flexible"
        }, {
            name: 'LELO Ina Wave Luxury G-Spot Vibrator',
            price: '£149.00',
            brand: 'Lelo',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // WE VIBE NOVA RABBIT>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        9,
        'https://www.annsummers.com/we-vibe-nova-rabbit-vibrator.html',
        'https://i1.adis.ws/i/annsummers/WeVibe_product_image_nova_1.jpg?qlt=90&fmt.jpeg.chroma=1,1,1',
        {
            intensity: [3],
            style: [3, 1],
            size: [3],
            feel: [1, 4]
        },{
            intensity: "Powerful",
            style: "10 vibration modes + Controllable via app",
            size: "Medium",
            feel: "Contoured and flexible"
        }, {
            name: 'Nova by We-Vibe',
            price: '£107.00',
            brand: 'We-Vibe',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: true
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE MIGHTY ONE PINK>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        10,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-mighty-one/63326.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1155041_Z?$product-large$',
        {
            intensity: [3],
            style: [3],
            size: [4],
            feel: [1, 4]
        },{
            intensity: "Moderate",
            style: "Variable vibration speeds",
            size: "Larger",
            feel: "Contoured and flexible"
        }, {
            name: 'Rampant Rabbit The Mighty One',
            price: '£65.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // PURPLE SILICONE CURVED RABBIT (UPF)>>PURPLE>>NO SIZE
    // ASRFS.pushRabbit(
    //     11,
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-purple-silicone-curved-one/80292.html',
    //     'https://i1.adis.ws/i/annsummers/07CSSPAS1047043_Z?$product-large$',
    //     {
    //         intensity: [1],
    //         style: [1, 3],
    //         size: [3],
    //         feel: [3]
    //     }, {
    //         intensity: "Moderate",
    //         style: "Variable speeds and patterns",
    //         size: "Medium",
    //         feel: "Contoured"
    //     },{
    //         name: 'The Purple Silicone Curved One',
    //         price: '£50.00',
    //         brand: 'Ann Summers',
    //         forCouples: false,
    //         waterResistant: true,
    //         flexibility: {
    //             firm: false,
    //             flexable: true,
    //             soft: false
    //         },
    //         material: {
    //             silicone: false,
    //             metal: false
    //         },
    //         controllerType: {
    //             pushButton: true,
    //             switch: false,
    //             app: false
    //         },
    //         noiseLevel: {
    //             quiet: false,
    //             normal: true
    //         },
    //         powerSource: {
    //             USB: false,
    //             battery: {
    //                 used: true,
    //                 batteryType: 'AAA',
    //                 noBattery: 3,
    //                 batteryIncluded: false,
    //             }
    //         },
    //         matchedFeatures: {
    //             size: false,
    //             intensity: false,
    //             feel: false,
    //             style: false
    //         }
    //     },
    //     0
    // );

    // RR THROBBING>>NO COLOUR>>NO SIZE
    ASRFS.pushRabbit(
        12,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-throbbing-one/43571.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1105037_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [3]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "G-spot"
        }, {
            name: 'Rampant Rabbit The Throbbing One',
            price: '£45.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 4,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // SENSATIONS FEEL THE RIPPLE ONE>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        13,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/sensations-feel-the-ripple-rampant-rabbit/76408.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1043041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [2, 3]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "Straight and G-spot"
        }, {
            name: 'Sensations Feel The Ripple Rampant Rabbit',
            price: '£55.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // RR ROTATING ONE UPDATE>>SILVER>>NO SIZE
    ASRFS.pushRabbit(
        14,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-platinum-rotating-one/76410.html#q=rotating+one&qrd=1&start=1',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1045047_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [2]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "Straight"
        }, {
            name: 'Rampant Rabbit The Platinum Rotating One',
            price: '£45.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // MAGNET RABBIT>>NO COLOUR>>NO SIZE
    ASRFS.pushRabbit(
        15,
        'https://www.annsummers.com/magnetize-rampant-rabbit.html',
        'https://i1.adis.ws/i/annsummers/Magnetize_product_image_hero_rabbit?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [1, 4]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured and flexible"
        }, {
            name: 'Magnetize Rampant Rabbit',
            price: '£80.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // RR THE BENDY ONE>>NO COLOUR>>NO SIZE
    ASRFS.pushRabbit(
        16,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-bendy-one/42791.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1099037_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1, 3, 4]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "Contoured, flexible and G-spot"
        }, {
            name: 'Rampant Rabbit The Bendy One',
            price: '£40.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 4,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // RR THE MOREGASM MOVE ONE WHITE>>PURPLE>>NO SIZE
    ASRFS.pushRabbit(
        17,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-moregasm-move-rechargeable-one/73902.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1019043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "Contoured"
        }, {
            name: 'The Moregasm Move Rechargeable One',
            price: '£75.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );


    // NEWLY ADDED TO THE SITE 01/01/2018

    // THE SLIM RECHARGABLE ONE
    ASRFS.pushRabbit(
        18,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-slim-rechargeable-one/91253.html#start=1',
        'https://i1.adis.ws/i/annsummers/07CSNRAS1041043_Z?$product-mobile-large$',
        {
            intensity: [1],
            style: [1, 3],
            size: [3],
            feel: [2]
        },{
            intensity: "Moderate",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Straight"
        }, {
            name: 'The Slim Rechargeable One',
            price: '£55.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // MILA RECHARGABLE FLEXIBLE ONE
    // ASRFS.pushRabbit(
    //     19,
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/mila-rechargeable-flexible-rabbit-vibrator/88414.html#start=10',
    //     'https://i1.adis.ws/i/annsummers/07SCNRAS1189043_Z?$product-large$',
    //     {
    //         intensity: [3],
    //         style: [1, 3],
    //         size: [4],
    //         feel: [1, 4]
    //     },{
    //         intensity: "Powerful",
    //         style: "Variable speeds and patterns",
    //         size: "Larger",
    //         feel: "Contoured and flexible"
    //     }, {
    //         name: 'Mila Rechargeable Flexible Rabbit Vibrator',
    //         price: '£90.00',
    //         brand: 'OVO',
    //         forCouples: false,
    //         waterResistant: true,
    //         flexibility: {
    //             firm: true,
    //             flexable: false,
    //             soft: false
    //         },
    //         material: {
    //             silicone: false,
    //             metal: false
    //         },
    //         controllerType: {
    //             pushButton: true,
    //             switch: false,
    //             app: false
    //         },
    //         noiseLevel: {
    //             quiet: true,
    //             normal: false
    //         },
    //         powerSource: {
    //             USB: true,
    //             battery: {
    //                 used: false,
    //                 batteryType: '',
    //                 noBattery: 0,
    //                 batteryIncluded: false,
    //             }
    //         },
    //         matchedFeatures: {
    //             size: false,
    //             intensity: false,
    //             feel: false,
    //             style: false
    //         }
    //     },
    //     0
    // );

    // PORNHUB TURBO CHARGED
    // ASRFS.pushRabbit(
    //     20,
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/pornhub-turbo-rabbit-vibrator/94589.html#start=11',
    //     'https://i1.adis.ws/i/annsummers/07NCHDAS1295006_Z?$product-large$',
    //     {
    //         intensity: [2],
    //         style: [1, 3],
    //         size: [3],
    //         feel: [1]
    //     },{
    //         intensity: "Intense",
    //         style: "Variable speeds and patterns",
    //         size: "Medium",
    //         feel: "Contoured"
    //     }, {
    //         name: 'Pornhub Turbo Rabbit Vibrator',
    //         price: '£75.00',
    //         brand: 'OVO',
    //         forCouples: false,
    //         waterResistant: true,
    //         flexibility: {
    //             firm: true,
    //             flexable: false,
    //             soft: false
    //         },
    //         material: {
    //             silicone: false,
    //             metal: false
    //         },
    //         controllerType: {
    //             pushButton: true,
    //             switch: false,
    //             app: false
    //         },
    //         noiseLevel: {
    //             quiet: false,
    //             normal: true
    //         },
    //         powerSource: {
    //             USB: true,
    //             battery: {
    //                 used: false,
    //                 batteryType: '',
    //                 noBattery: 0,
    //                 batteryIncluded: false,
    //             }
    //         },
    //         matchedFeatures: {
    //             size: false,
    //             intensity: false,
    //             feel: false,
    //             style: false
    //         }
    //     },
    //     0
    // );



    // RR SUCTION BASE ONE
    ASRFS.pushRabbit(
        21,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-suction-base-one/92295.html#start=2',
        'https://i1.adis.ws/i/annsummers/07CSNRAS1047028_Z?$product-mobile-large$',
        {
            intensity: [2],
            style: [1, 3],
            size: [3],
            feel: [1]
        },{
            intensity: "Intense",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'The Suction Base One',
            price: '£55.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // SEARLE PINK RECHARGABLE
    ASRFS.pushRabbit(
        22,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/searle-pink-rechargeable-rabbit/104975.html#start=3',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1322041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [2],
            feel: [3]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Smaller",
            feel: "Contoured"
        }, {
            name: 'Searle Pink Rechargeable Rabbit',
            price: '£70.00',
            brand: 'Searle',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );


    // // SEARLE BLACK RECHARGABLE
    ASRFS.pushRabbit(
        23,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/searle-black-rechargeable-rabbit/104974.html#start=5',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1321006_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [2],
            feel: [3]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Smaller",
            feel: "Contoured"
        }, {
            name: 'Searle Black Rechargeable Rabbit',
            price: '£70.00',
            brand: 'Searle',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // // SEARLE PURPLE RECHARGABLE
    ASRFS.pushRabbit(
        24,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/searle-purple-rechargeable-rabbit/104976.html#start=7',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1323043_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [2],
            feel: [3]
        }, {
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Smaller",
            feel: "Contoured"
        },{
            name: 'Searle Purple Rechargeable Rabbit',
            price: '£70.00',
            brand: 'Searle',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // SILICONE PURPLE G-SPOT ONE
    ASRFS.pushRabbit(
        25,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/silicone-bunny-purple-rabbit/104967.html#start=4',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1317043_Z?$product-large$',
        {
            intensity: [3],
            style: [1],
            size: [2],
            feel: [3, 4]
        },{
            intensity: "Powerful",
            style: "Vibration patterns",
            size: "Smaller",
            feel: "Flexible and G-spot"
        }, {
            name: 'Silicone Bunny Purple Rabbit',
            price: '£70.00',
            brand: 'Shots Toys',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // // SILICONE PINK G-SPOT ONE
    ASRFS.pushRabbit(
        26,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/silicone-bunny-pink-rabbit/104966.html#start=8',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1316041_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1],
            size: [2],
            feel: [3, 4]
        },{
            intensity: "Powerful",
            style: "Vibration patterns",
            size: "Smaller",
            feel: "Flexible and G-spot"
        }, {
            name: 'Silicone Bunny Pink Rabbit',
            price: '£70.00',
            brand: 'Shots Toys',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // // SILICONE BLACK G-SPOT ONE
    ASRFS.pushRabbit(
        27,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/silicone-bunny-black-rabbit/104962.html#start=9',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1315006_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1],
            size: [2],
            feel: [3, 4]
        },{
            intensity: "Powerful",
            style: "Vibration patterns",
            size: "Smaller",
            feel: "Flexible and G-spot"
        }, {
            name: 'Silicone Bunny Black Rabbit',
            price: '£70.00',
            brand: 'Shots Toys',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // THE THRUSTING ONE ONE
    ASRFS.pushRabbit(
        28,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator--the-thrusting-one/74897.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1030043_Z?$product-mobile-large$',
        {
            intensity: [1],
            style: [1, 3, 4],
            size: [2],
            feel: [2]
        },{
            intensity: "Moderate",
            style: "Variable vibration speeds and Thrusting",
            size: "Smaller",
            feel: "Straight"
        }, {
            name: 'The Thrusting One',
            price: '45.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: false,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Pulsar Double Stimulation Vibrator 
    ASRFS.pushRabbit(
        29,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/pulsar-double-stimulation-vibrator/86712.html#start=4',
        'https://i1.adis.ws/i/annsummers/07NCSVAS1149041_Z?$product-mobile-large$',
        {
            intensity: [1],
            style: [3],
            size: [2],
            feel: [1]
        },{
            intensity: "Moderate",
            style: "Variable vibration speeds",
            size: "Smaller",
            feel: "Contoured"
        }, {
            name: 'Pulsar Double Stimulation Vibrator',
            price: '£35.00',
            brand: 'Shots Toys',
            forCouples: true,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // The G Spot One
    ASRFS.pushRabbit(
        30,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-g-spot-one/86355.html#start=12',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1181041_Z?$product-mobile-large$',
        {
            intensity: [1],
            style: [1, 3],
            size: [3],
            feel: [1, 3]
        },{
            intensity: "Intense",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured and g-spot"
        }, {
            name: 'The G Spot One',
            price: '£50.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // LELO Soraya Luxury Rechargeable Vibrator
    ASRFS.pushRabbit(
        31,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/lelo-soraya-luxury-rechargeable-vibrator/50714.html#start=6',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1121041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [1]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'LELO Soraya Luxury Rechargeable Vibrator',
            price: '£189.00',
            brand: 'LELO',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Remote Controlled Rampant Rabbit
    ASRFS.pushRabbit(
        32,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbits-type-rechargeable/remote-controlled-rampant-rabbit/104339.html#start=3',
        'https://i1.adis.ws/i/annsummers/07CPHDAS1018006_Z?$product-mobile-large$',
        {
            intensity: [2],
            style: [1, 3],
            size: [3],
            feel: [1]
        },{
            intensity: "Intense",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured"
        }, {
            name: 'Remote Controlled Rampant Rabbit',
            price: '£75.00',
            brand: 'Ann Summers',
            forCouples: true,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // MILA PINK RECHARGABLE FLEXIBLE ONE
    ASRFS.pushRabbit(
        33,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbits-type-rechargeable/jil-mila-pink-rechargeable-flexible-rabbit-vibrator/105659.html',
        'https://i1.adis.ws/i/annsummers/07NCSVAS1162043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1, 4]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "Contoured and flexible"
        }, {
            name: 'Mila Pink Rechargeable Flexible One',
            price: '£90.00',
            brand: 'Jil',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // PornHUB Virtual Rabbit
    // ASRFS.pushRabbit(
    //     33,
    //     'https://www.annsummers.com/pornhub-virtual-rabbit.html#start=8',
    //     'https://i1.adis.ws/i/annsummers/PH-RABBIT-VIRTUAL-TOY-v1_z?$product-large$',
    //     {
    //         intensity: [2],
    //         style: [1, 3],
    //         size: [3],
    //         feel: [1]
    //     },{
    //         intensity: "Intense",
    //         style: "Vibration patterns and speeds",
    //         size: "Medium",
    //         feel: "Contoured"
    //     }, {
    //         name: 'PornHUB Virtual Rabbit',
    //         price: '£139.00',
    //         brand: 'Pornhub',
    //         forCouples: true,
    //         waterResistant: true,
    //         flexibility: {
    //             firm: false,
    //             flexable: true,
    //             soft: false
    //         },
    //         material: {
    //             silicone: true,
    //             metal: false
    //         },
    //         controllerType: {
    //             pushButton: false,
    //             switch: true,
    //             app: false
    //         },
    //         noiseLevel: {
    //             quiet: true,
    //             normal: false
    //         },
    //         powerSource: {
    //             USB: true,
    //             battery: {
    //                 used: false,
    //                 batteryType: '',
    //                 noBattery: 2,
    //                 batteryIncluded: false,
    //             }
    //         },
    //         matchedFeatures: {
    //             size: false,
    //             intensity: false,
    //             feel: false,
    //             style: false
    //         }
    //     },
    //     0
    // );

    // The Sleek One
    // ASRFS.pushRabbit(
    //     34,
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-sleek-one/92294.html#start=5',
    //     'https://i1.adis.ws/i/annsummers/07CSNRAS1046014_Z?$product-mobile-large$',
    //     {
    //         intensity: [1],
    //         style: [1],
    //         size: [2],
    //         feel: [1 ,3]
    //     },{
    //         intensity: "Moderate",
    //         style: "10 pulse settings",
    //         size: "Smaller",
    //         feel: "Contoured and g-spot"
    //     }, {
    //         name: 'The Sleek One',
    //         price: '£50.00',
    //         brand: 'Ann Summers',
    //         forCouples: false,
    //         waterResistant: true,
    //         flexibility: {
    //             firm: true,
    //             flexable: false,
    //             soft: false
    //         },
    //         material: {
    //             silicone: true,
    //             metal: false
    //         },
    //         controllerType: {
    //             pushButton: false,
    //             switch: true,
    //             app: false
    //         },
    //         noiseLevel: {
    //             quiet: false,
    //             normal: true
    //         },
    //         powerSource: {
    //             USB: true,
    //             battery: {
    //                 used: false,
    //                 batteryType: '',
    //                 noBattery: 2,
    //                 batteryIncluded: false,
    //             }
    //         },
    //         matchedFeatures: {
    //             size: false,
    //             intensity: false,
    //             feel: false,
    //             style: false
    //         }
    //     },
    //     0
    // );

    // Rechargable mini one
    ASRFS.pushRabbit(
        35,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator--the-rechargeable-mini-one/63316.html#start=2',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1153041_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [3],
            size: [1],
            feel: [1, 3]
        },{
            intensity: "Powerful",
            style: "Variable vibration speeds",
            size: "Mini",
            feel: "Contoured and g-spot"
        }, {
            name: 'Rechargable mini one',
            price: '£45.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Vibrating beginners one
    ASRFS.pushRabbit(
        36,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/vibrating-beginners-rabbit/100263.html#start=8',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1197043_Z?$product-mobile-large$',
        {
            intensity: [2],
            style: [3],
            size: [2 ,3],
            feel: [2, 3]
        },{
            intensity: "Moderate",
            style: "Variable vibration speeds",
            size: "Small to medium",
            feel: "Straight and g-spot"
        }, {
            name: 'Vibrating beginners one',
            price: '£20.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: true,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // ORIGINAL ONE
    ASRFS.pushRabbit(
        37,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/the-original-rampant-rabbit/67767.html#start=3',
        'https://i1.adis.ws/i/annsummers/07SCRTAS1047041_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [2, 3],
            size: [2, 3],
            feel: [2]
        },{
            intensity: "Moderate",
            style: "Variable vibration speeds and rotations",
            size: "Small to medium",
            feel: "Straight"
        }, {
            name: 'Original One',
            price: '£21.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: false,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: true,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // ELATION RABBIT
    ASRFS.pushRabbit(
        38,
        'https://www.annsummers.com/elation-rabbit.html#start=1',
        'https://i1.adis.ws/i/annsummers/Elation-Rabbit-Profile-Shot1?$product-large$',
        {
            intensity: [1],
            style: [1, 3],
            size: [3],
            feel: [1, 3]
        },{
            intensity: "Moderate",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Contoured and g-spot"
        }, {
            name: 'Elation Rabbit',
            price: '£80.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: false,
                switch: false,
                app: true
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );


    //NEW PRODUCTS 21 March 2018
    // Rampant Rabbit Vibrator - The Purple Silicone Curved One
    ASRFS.pushRabbit(
        39,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-purple-silicone-curved-one/80292.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1047043_Z?$product-large$',
        {
            intensity: [1],
            style: [1, 3],
            size: [3],
            feel: [1, 3]
        },{
            intensity: "Moderate",
            style: "Vibration patterns and speeds",
            size: "Medium",
            feel: "Contoured and g-spot"
        }, {
            name: 'The Purple Silicone Curved One',
            price: '£50.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Jil Mila Rechargeable Flexible Rabbit Vibrator
    ASRFS.pushRabbit(
        40,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/jil-mila-rechargeable-flexible-rabbit-vibrator/88414.html#start=10',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1189043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1, 4]
        },{
            intensity: "Powerful",
            style: "Vibration patterns and speeds",
            size: "Larger",
            feel: "Contoured and flexible"
        }, {
            name: 'Jil Mila Rechargeable Flexible Rabbit Vibrator',
            price: '£90.00',
            brand: 'Jil',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Vibrating Black Rabbit
    ASRFS.pushRabbit(
        41,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/vibrating-black-rabbit/104940.html',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1306006_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 2],
            size: [2],
            feel: [2]
        },{
            intensity: "Powerful",
            style: "Vibration patterns and rotations",
            size: "Smaller",
            feel: "Straight"
        }, {
            name: 'Vibrating Black Rabbit',
            price: '£40.00',
            brand: 'Shots Toys',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: false,
                soft: true
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: true,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Vibrating Pink Rabbit
    ASRFS.pushRabbit(
        42,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/vibrating-pink-rabbit/104941.html#q=vibrating%2Bpink%2Brabbit&start=12',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1307041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 2],
            size: [2],
            feel: [2]
        },{
            intensity: "Powerful",
            style: "Vibration patterns and rotations",
            size: "Smaller",
            feel: "Straight"
        }, {
            name: 'Vibrating Pink Rabbit',
            price: '£40.00',
            brand: 'Shots Toys',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: false,
                soft: true
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 2,
                    batteryIncluded: true,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Jil Ava Rechargeable Flexible Rabbit
    ASRFS.pushRabbit(
        43,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbits-type-rechargeable/jil-ava-rechargeable-flexible-rabbit/104692.html',
        'https://i1.adis.ws/i/annsummers/07NCSVAS1160041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1]
        },{
            intensity: "Powerful",
            style: "Vibration patterns and speeds",
            size: "Larger",
            feel: "Contoured"
        }, {
            name: 'Jil Ava Rechargeable Flexible Rabbit',
            price: '£90.00',
            brand: 'Jil',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Jil Keira Rechargeable Flexible Vibrator
    ASRFS.pushRabbit(
        44,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/jil-keira-rechargeable-flexible-vibrator/104690.html',
        'https://i1.adis.ws/i/annsummers/07NCSVAS1159043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1, 4]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Larger",
            feel: "Contoured and flexible"
        }, {
            name: 'Jil Keira Rechargeable Flexible Vibrator',
            price: '£90.00',
            brand: 'Jil',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Rampant Rabbit Vibrator - The Sleek One
    ASRFS.pushRabbit(
        45,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-sleek-one/92294.html#start=5',
        'https://i1.adis.ws/i/annsummers/07CSNRAS1046014_Z?$product-large$',
        {
            intensity: [1],
            style: [1, 3],
            size: [2],
            feel: [1, 4]
        },{
            intensity: "Moderate",
            style: "10 pulse settings and speeds",
            size: "Smaller",
            feel: "Contoured and g-spot"
        }, {
            name: 'The Sleek One',
            price: '£50.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 2,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Sensations Feel The Ripple Rampant Rabbit
    ASRFS.pushRabbit(
        46,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/sensations-feel-the-ripple-rampant-rabbit/76408.html#start=12',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1043041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [2, 3]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Straight and g-spot"
        }, {
            name: 'Sensations Feel The Ripple Rampant Rabbit',
            price: '£55.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: true,
                flexable: false,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Jil Hayden Rechargeable Flexible Couples Rabbit Vibrator
    ASRFS.pushRabbit(
        47,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-couples/jil-hayden-rechargeable-flexible-couples-rabbit-vibrator/88416.html#start=12',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1052043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [1, 3, 4]
        },{
            intensity: "Powerful",
            style: "Variable speeds and patterns",
            size: "Medium",
            feel: "Flexible, contoured and g-spot"
        }, {
            name: 'Jil Hayden Rechargeable Flexible Couples Rabbit Vibrator',
            price: '£85.00',
            brand: 'Jil',
            forCouples: true,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Sensations Feel The G-Spot Rampant Rabbit
    ASRFS.pushRabbit(
        48,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/sensations-feel-the-g-spot-rampant-rabbit/76386.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1042026_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3, 4],
            size: [3],
            feel: [2, 3, 4]
        },{
            intensity: "Powerful",
            style: "Variable vibration patterns and thrusting",
            size: "Medium",
            feel: "Straight, flexible and g-spot"
        }, {
            name: 'Sensations Feel The G-Spot Rampant Rabbit',
            price: '£55.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: false,
                normal: true
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );

    // Rampant Rabbit Vibrator - The Silicone Neon One
    ASRFS.pushRabbit(
        49,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-silicone-neon-one/37204.html',
        'https://i1.adis.ws/i/annsummers/07OTOTAS1034041_Z?$product-large$',
        {
            intensity: [3],
            style: [2, 3],
            size: [4],
            feel: [2, 3]
        },{
            intensity: "Powerful",
            style: "Vibration patterns and rotations",
            size: "Larger",
            feel: "Straight and g-spot"
        }, {
            name: 'The Silicone Neon One',
            price: '£60.00',
            brand: 'Ann Summers',
            forCouples: false,
            waterResistant: true,
            flexibility: {
                firm: false,
                flexable: true,
                soft: false
            },
            material: {
                silicone: true,
                metal: false
            },
            controllerType: {
                pushButton: true,
                switch: false,
                app: false
            },
            noiseLevel: {
                quiet: true,
                normal: false
            },
            powerSource: {
                USB: false,
                battery: {
                    used: false,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            matchedFeatures: {
                size: false,
                intensity: false,
                feel: false,
                style: false
            }
        },
        0
    );


}


ASRFS.pushRabbit = function (id, rabbitURL, imageURL, options, optionsValue, features) {
    ASRFS.rabbitList.push(new ASRFS.rabbit(id, rabbitURL, imageURL, options, optionsValue, features));
}

ASRFS.getAllRabbits = function () {
    return ASRFS.rabbitList;
}

ASRFS.filterRabbits = function (searchOptions) {
    // Test options
    if (searchOptions === undefined) {
        searchOptions = { intensity: [2], feel: [3, 2], size: [3, 2, 1], style: [] };
    }
    var rabbits = ASRFS.rabbitList;
    var matchedRabbits = [];

    for (var i = 0; i < rabbits.length; i++) {

        var matchCount = 0;

        // match vibration intensity
        for (let x = 0; x < searchOptions.intensity.length; x++) {
            let rabbitIntensity = rabbits[i].options.intensity;
            for (let a = 0; a < rabbitIntensity.length; a++) {
                if (rabbitIntensity[a] === searchOptions.intensity[x]) {
                    // intensityMatch = true;
                    matchCount++;
                    rabbits[i].features.matchedFeatures.intensity = true;
                    break;
                }
            }
        }
        // }


        // match shape/feel
        for (let x = 0; x < searchOptions.feel.length; x++) {
            let rabbitFeel = rabbits[i].options.feel;
            for (let a = 0; a < rabbitFeel.length; a++) {
                if (rabbitFeel[a] === searchOptions.feel[x]) {
                    // feelMatch = true;
                    matchCount++;
                    rabbits[i].features.matchedFeatures.feel = true;
                    break;
                }
            }
        }
        // }

        // match size
        for (let x = 0; x < searchOptions.size.length; x++) {
            let rabbitSize = rabbits[i].options.size;
            for (let a = 0; a < rabbitSize.length; a++) {
                if (rabbitSize[a] === searchOptions.size[x]) {
                    // sizeMatch = true;
                    matchCount++;
                    rabbits[i].features.matchedFeatures.size = true;
                    break;
                }
            }
        }
        // }

        // match vibration style
        for (let x = 0; x < searchOptions.style.length; x++) {
            let rabbitStyle = rabbits[i].options.style;
            for (let a = 0; a < rabbitStyle.length; a++) {
                if (rabbitStyle[a] === searchOptions.style[x]) {
                    // styleMatch = true;
                    matchCount++;
                    rabbits[i].features.matchedFeatures.style = true;
                    break;
                }
            }
        }
        // }

        // Set match priority
        rabbits[i].matches = matchCount;

        // Push rabbit if it matches ANY criteria
        if (matchCount > 0) {
            matchedRabbits.push(rabbits[i]);
        }
    }

    // Sort matched rabbits
    matchedRabbits.sort(function(a, b){
        return b.matches - a.matches;
    })

    return matchedRabbits;
}

// Refine filters
ASRFS.refineFilterRabbits = function (refineOptions, filteredRabbitList, filterCount) {
    // Refine options
    // waterproof 
    // quiet
    // forCouples
    // usb
    let refinedList = [];
    var rabbits = filteredRabbitList;
    for (let i = 0; i < rabbits.length; i++) {
        let count = 0;
        let features = rabbits[i].features;
        let waterproof = false;
        let quiet = false;
        let forCouples = false;
        let usb = false;
        for (const prop in features) {
            if (features.hasOwnProperty(prop)) {
                if (prop === "forCouples") {
                    if (features[prop] && refineOptions.forCouples) {
                        count++;
                        continue;
                    }
                }
                if (prop === "waterResistant") {
                    if (features[prop] && refineOptions.waterproof) {
                        count++;
                        continue;
                    }
                }
                if (prop === "noiseLevel") {
                    if (features[prop].quiet && refineOptions.quiet) {
                        count++;
                        continue;
                    }
                }
                if (prop === "powerSource") {
                    if (features[prop].USB && refineOptions.usb) {
                        count++;
                        continue;
                    }
                }
            }
        }

        // Check if more than one filter is applied
        if (count === filterCount) {
            refinedList.push(rabbits[i]);
        }
    }

    return refinedList;

}

ASRFS.singleSearch = function (searchOption) {
    var rabbits = ASRFS.rabbitList;
    var matchedRabbits = [];
    for (var i = 0; i < rabbits.length; i++) {
        if (rabbits[i][searchOption] !== null && rabbits[i][searchOption] !== undefined) {
            matchedRabbits.push(rabbits[i]);
        }
    }

    return matchedRabbits;
}

ASRFS.setupRabbits();