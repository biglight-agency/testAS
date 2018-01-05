/* 
 Author: Chris Davies 
 Company: Biglight 
 Date: Thursday 28th December 2017
 Description: Rabbit finder search functionality
*/

/*
    Options scale - 1-5 *TODO
*/

var ASRFS = {};
ASRFS.rabbitList = [];
ASRFS.rabbit = function (id, url, imgURL, options, features) {
    this.id = id;
    this.url = url;
    this.imgURL = imgURL;
    this.options = options;
    this.features = features;

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
        }, {
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
            mainFeatures: [
                '7 Vibration patterns',
                'Insertable length: 3.5"',
                'Girth: 3"'
            ]
        });

    // CHEAP THRILLS MINI RABBIT>>PINK>>NO SIZE -- REMOVED FROM SITE
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/bunny-banger-mini-rabbit-vibrator/88295.html',
    //     'https://i1.adis.ws/i/annsummers/07SCNRAS1187041_Z?$product-large$',
    //     {
    //         intensity: 1,
    //         style: 1,
    //         size: 1,
    //         feel: 4
    //     });

    // THE BUNNY BANGER MINI RABBIT >>PINK>>NO SIZE
    ASRFS.pushRabbit(
        2,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/bunny-banger-mini-rabbit-vibrator/88295.html#start=4',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1187041_Z?$product-large$',
        {
            intensity: [1],
            style: [0],
            size: [1],
            feel: [1]
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
            mainFeatures: [
                'Single speed function',
                'Insertable length: 3"',
                'Girth: 4.5"'
            ]
        });


    // THE METAL ONE (SILICONE)>>PURPLE>>NO SIZE
    ASRFS.pushRabbit(
        3,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-metal-one/59967.html#q=the+metal+one&qrd=1&start=2',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1265043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [2, 3],
            feel: [4]
        }, {
            name: 'Rampant Rabbit The Metal One',
            price: '£48.00',
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
            mainFeatures: [
                '10 settings: 3 vibration speeds and 7 pulse patterns in the ears',
                'Insertable length: 4.5"',
                'Girth: 4"'
            ]
        });

    // THE AQUA ONE>>GREEN>>NO SIZE
    ASRFS.pushRabbit(
        4,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-aqua-one/73526.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1018026_Z?$product-large$',
        {
            intensity: [3],
            style: [3, 4],
            size: [3],
            feel: [3]
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
            mainFeatures: [
                '5 settings: 3 vibration speeds and 2 pulse patterns in shaft',
                'Insertable length: 4.5"',
                'Girth: 4"'
            ]
        });

    // THE SIGNATURE ONE MOREGASM RABBIT>>BLACK>>NO SIZE
    ASRFS.pushRabbit(
        5,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator--the-signature-moregasm-black-one/74872.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1029006_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [3]
        }, {
            name: 'Rampant Rabbit Vibrator -The Signature Moregasm Black One',
            price: '£35.00',
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
            mainFeatures: [
                '6 vibration speeds and pulses',
                'Insertable length: 4.5"',
                'Girth: 4"'
            ]
        });

    // MOREGASM CONTOUR RABBIT>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        6,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/moregasm-contour-rampant-rabbit/77726.html#q=MOREGASM%2BCONTOUR%2BRABBIT&start=2',
        'https://i1.adis.ws/i/annsummers/07NCSVAS1145041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [3],
            feel: [3]
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
            mainFeatures: [
                '6 settings: 3 vibration speeds and 3 pulse patterns',
                'Insertable length: 4.5"',
                'Girth: 4.5"'
            ]
        });

    // THE PEARLISED ONE (SB)>>WHITE>>NO SIZE
    ASRFS.pushRabbit(
        7,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-pearlised-one/85199.html',
        'https://i1.adis.ws/i/annsummers/07SCRTAS1050051_Z?$product-large$',
        {
            intensity: [1],
            style: [1, 2, 3, 4],
            size: [3],
            feel: [3]
        }, {
            name: 'Rampant Rabbit The Pearlised One',
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
            mainFeatures: [
                '10 vibration settings in the ears and 3 speeds in the shaft, Rippling Pearl Beads',
                'Insertable length: 4.5"',
                'Girth: 5"'
            ]
        });

    // INA WAVE CERISE>>CERISE>>NO SIZE
    ASRFS.pushRabbit(
        8,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/lelo-ina-wave-luxury-g-spot-vibrator/65936.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1163016_Z?$product-large$',
        {
            intensity: [4],
            style: [3],
            size: [3],
            feel: [2, 3]
        }, {
            name: 'LELO Ina Wave Luxury G-Spot Vibrator',
            price: '£134.10',
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
            mainFeatures: [
                '10 vibration settings and finger-like motions to massage your G-spot',
                'Insertable length: 4.5"',
                'Girth: 4.5"'
            ]
        });

    // WE VIBE NOVA RABBIT>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        9,
        'https://www.annsummers.com/we-vibe-nova-rabbit-vibrator.html',
        'https://i1.adis.ws/i/annsummers/WeVibe_product_image_nova_1.jpg?qlt=90&fmt.jpeg.chroma=1,1,1',
        {
            intensity: [0],
            style: [3],
            size: [3],
            feel: [2, 3]
        }, {
            name: 'NOVA BY WE-VIBE',
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
            mainFeatures: [
                '10 vibration modes with two motors and controllable via app',
                'Insertable length: 4"',
                'Girth: 4.25"'
            ]
        });

    // THE MIGHTY ONE PINK>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        10,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-mighty-one/63326.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1155041_Z?$product-large$',
        {
            intensity: [3],
            style: [3],
            size: [4],
            feel: [2, 3]
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
            mainFeatures: [
                'Simple accelerator buttons give different speed vibrations in the shaft',
                'Insertable length: 5.5"',
                'Girth: 4.5"'
            ]
        });

    // PURPLE SILICONE CURVED RABBIT (UPF)>>PURPLE>>NO SIZE
    ASRFS.pushRabbit(
        11,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-purple-silicone-curved-one/80292.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1047043_Z?$product-large$',
        {
            intensity: [1],
            style: [3],
            size: [3],
            feel: [3]
        }, {
            name: 'Rampant Rabbit Vibrator - The Purple Silicone Curved One',
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
            mainFeatures: [
                '7 vibration functions shaft and ears.',
                'Insertable length: 5"',
                'Girth: 4.8"'
            ]
        });

    // RR THROBBING>>NO COLOUR>>NO SIZE
    ASRFS.pushRabbit(
        12,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-throbbing-one/43571.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1105037_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 4],
            size: [4],
            feel: [4]
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
            mainFeatures: [
                '10 settings: 7 vibration speeds in the Rabbit ears and 3 throbbing speeds in the shaft',
                'Insertable length: 5.5"',
                'Girth: 5.5"'
            ]
        });

    // SENSATIONS FEEL THE RIPPLE ONE>>PINK>>NO SIZE
    ASRFS.pushRabbit(
        13,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/sensations-feel-the-ripple-rampant-rabbit/76408.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1043041_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [1, 4]
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
                    used: true,
                    batteryType: 'AAA',
                    noBattery: 3,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                '5 shaft speeds and 7 Rabbit Ear vibration settings - controlled independently',
                'Insertable length: 5.5"',
                'Girth: 4.5"'
            ]
        });

    // THE THRUSTING ONE>>PURPLE>>NO SIZE -- REMOVED FROM SITE
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/thrusting-purple-rabbit/104973.html#q=THRUSTING&start=1',
    //     'https://i1.adis.ws/i/annsummers/07NCHDAS1320043_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });

    // THE THRUSTING ONE>>PINK>>NO SIZE
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/thrusting-pink-rabbit/104972.html#q=THRUSTING&start=2',
    //     'https://i1.adis.ws/i/annsummers/07NCHDAS1319041_Z?$product-large$',
    //     {
    //         intensity: 1,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });

    // // THE THRUSTING ONE>>BLACK>>NO SIZE
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/thrusting-black-rabbit/104971.html#q=THRUSTING&start=3',
    //     'https://i1.adis.ws/i/annsummers/07NCHDAS1318006_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });

    // RR ROTATING ONE UPDATE>>SILVER>>NO SIZE
    ASRFS.pushRabbit(
        14,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-platinum-rotating-one/76410.html#q=rotating+one&qrd=1&start=1',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1045047_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3, 4],
            size: [4],
            feel: [1]
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
            mainFeatures: [
                '10 settings: 3 rotation speeds in the shaft and 7 functions in the Rabbit ears',
                'Insertable length: 7"',
                'Girth: 5"'
            ]
        });

    // MAGNET RABBIT>>NO COLOUR>>NO SIZE
    ASRFS.pushRabbit(
        15,
        'https://www.annsummers.com/magnetize-rampant-rabbit.html',
        'https://i1.adis.ws/i/annsummers/Magnetize_product_image_hero_rabbit?$product-large$',
        {
            intensity: [3],
            style: [1, 3, 4],
            size: [3],
            feel: [2, 3]
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
            mainFeatures: [
                '7 vibration settings in the ears, 7 in the shaft and 3 power levels for each setting',
                'Insertable length: 5"',
                'Total length: 8"'
            ]
        });

    // SENSATIONS G-SPOT GESTURE ONE>>GREEN>>NO SIZE -- REMOVED FROM SITE
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/sex-toy-shop-by-category-gspot-vibrators/sensations-g-spot-gesture-vibrator/77606.html',
    //     'https://i1.adis.ws/i/annsummers/07NCSVAS1142041_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });

    // STRAP ON COCK VIBRATING RABBIT>>PURPLE>>NO SIZE -- IS THIS REQUIRED?
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-strap-ons/strap-on-rabbit/86670.html',
    //     'https://i1.adis.ws/i/annsummers/07DLSNAS1062043_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });

    // RR THE NEON ONE SILICONE>>PINK>>NO SIZE -- REMOVED FROM SITE
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-silicone-neon-one/37204.html',
    //     'https://i1.adis.ws/i/annsummers/07OTOTAS1034041_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });

    // RR THE BENDY ONE>>NO COLOUR>>NO SIZE
    ASRFS.pushRabbit(
        16,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-the-bendy-one/42791.html',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1099037_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3, 4],
            size: [3],
            feel: [2, 3, 4]
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
            mainFeatures: [
                '10 settings: 3 vibration speeds in shaft and 7 pulse patterns in Rabbit ears',
                'Insertable length: 6"',
                'Girth: 5.5"'
            ]
        });

    // RR THE MOREGASM MOVE ONE WHITE>>PURPLE>>NO SIZE
    ASRFS.pushRabbit(
        17,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-moregasm-move-rechargeable-one/73902.html',
        'https://i1.adis.ws/i/annsummers/07CSSPAS1019043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3, 4],
            size: [4],
            feel: [3]
        }, {
            name: 'Rampant Rabbit Vibrator - The Moregasm Move Rechargeable One',
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
            mainFeatures: [
                '6 settings: 3 speed moving shaft and 3 pulse patterns in the Rabbit ears',
                'Insertable length: 6"',
                'Girth: 4.5"'
            ]
        });

    // RR USB Rechargeable COCK RING>>BLACK>>NO SIZE -- IS THIS REQUIRED?
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/rocks-off-ignition-usb-rechargeable-bullet-vibrator/85228.html',
    //     'https://i1.adis.ws/i/annsummers/07CSHDAS1573025_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });


    // // JUST THE EARS UPDATE>>PURPLE>>NO SIZE -- IS THIS REQUIRED?
    // ASRFS.pushRabbit(
    //     'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-vibrators/just-the-ears-rampant-rabbit-vibrator/91256.html',
    //     'https://i1.adis.ws/i/annsummers/07CSHDAS1580025_Z?$product-large$',
    //     {
    //         intensity: 2,
    //         style: 3,
    //         size: 1,
    //         feel: 1
    //     });


    // NEWLY ADDED TO THE SITE 01/01/2018

    // THE SLIM RECHARGABLE ONE
    ASRFS.pushRabbit(
        18,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-slim-rechargeable-one/91253.html#start=1',
        'https://i1.adis.ws/i/annsummers/07CSNRAS1041043_Z?$product-mobile-large$',
        {
            intensity: [1],
            style: [1, 2],
            size: [3],
            feel: [1]
        }, {
            name: 'Rampant Rabbit Vibrator - The Slim Rechargeable One',
            price: '£55.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

    // MILA RECHARGABLE FLEXIBLE ONE
    ASRFS.pushRabbit(
        19,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/mila-rechargeable-flexible-rabbit-vibrator/88414.html#start=10',
        'https://i1.adis.ws/i/annsummers/07SCNRAS1189043_Z?$product-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [4],
            feel: [2, 3]
        }, {
            name: 'Mila Rechargeable Flexible Rabbit Vibrator',
            price: '£90.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

    // PORNHUB TURBO CHARGED
    ASRFS.pushRabbit(
        20,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/pornhub-turbo-rabbit-vibrator/94589.html#start=11',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1295006_Z?$product-large$',
        {
            intensity: [2],
            style: [1, 3],
            size: [3],
            feel: [3]
        }, {
            name: 'Pornhub Turbo Rabbit Vibrator',
            price: '£75.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });



    // RR SUCTION BASE ONE
    ASRFS.pushRabbit(
        21,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/rampant-rabbit-vibrator---the-suction-base-one/92295.html#start=2',
        'https://i1.adis.ws/i/annsummers/07CSNRAS1047028_Z?$product-mobile-large$',
        {
            intensity: [2],
            style: [1, 3],
            size: [3],
            feel: [3]
        }, {
            name: 'Rampant Rabbit Vibrator - The Suction Base One',
            price: '£44.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

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
        }, {
            name: 'Searle Black Rechargeable Rabbit',
            price: '£70.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });


    // SEARLE BLACK RECHARGABLE
    ASRFS.pushRabbit(
        23,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/searle-black-rechargeable-rabbit/104974.html#start=5',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1321006_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1, 3],
            size: [2],
            feel: [3]
        }, {
            name: 'Searle Black Rechargeable Rabbit',
            price: '£70.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

    // SEARLE PURPLE RECHARGABLE
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
            name: 'Searle Purple Rechargeable Rabbit',
            price: '£70.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

    // SILICONE PURPLE G-SPOT ONE
    ASRFS.pushRabbit(
        25,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/silicone-bunny-purple-rabbit/104967.html#start=4',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1323043_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1],
            size: [2],
            feel: [2, 4]
        }, {
            name: 'Silicone Bunny Purple Rabbit',
            price: '£70.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

    // SILICONE PINK G-SPOT ONE
    ASRFS.pushRabbit(
        26,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/silicone-bunny-pink-rabbit/104966.html#start=8',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1316041_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1],
            size: [2],
            feel: [2, 4]
        }, {
            name: 'Silicone Bunny Pink Rabbit',
            price: '£70.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });

    // SILICONE BLACK G-SPOT ONE
    ASRFS.pushRabbit(
        27,
        'https://www.annsummers.com/sex-toys/sex-toys-shop-by-category/sex-toys-rampant-rabbits/silicone-bunny-black-rabbit/104962.html#start=9',
        'https://i1.adis.ws/i/annsummers/07NCHDAS1315006_Z?$product-mobile-large$',
        {
            intensity: [3],
            style: [1],
            size: [2],
            feel: [2, 4]
        }, {
            name: 'Silicone Bunny Black Rabbit',
            price: '£70.00',
            brand: 'OVO',
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
                USB: true,
                battery: {
                    used: false,
                    batteryType: '',
                    noBattery: 0,
                    batteryIncluded: false,
                }
            },
            mainFeatures: [
                'None yet',
                'None yet',
                'None yet'
            ]
        });
}

ASRFS.pushRabbit = function (id, rabbitURL, imageURL, options, features) {
    ASRFS.rabbitList.push(new ASRFS.rabbit(id, rabbitURL, imageURL, options, features));
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
        var intensityMatch = false;
        var feelMatch = false;
        var sizeMatch = false;
        var styleMatch = false;

        // 0 should match all (no value set)
        // match vibration intensity
        if (searchOptions.intensity.length === 0) {
            intensityMatch = true;
        } else {
            for (let x = 0; x < searchOptions.intensity.length; x++) {
                let rabbitIntensity = rabbits[i].options.intensity;
                for (let a = 0; a < rabbitIntensity.length; a++) {
                    if (rabbitIntensity[a] === searchOptions.intensity[x]) {
                        intensityMatch = true;
                        break;
                    }
                }
            }
        }


        // match shape/feel
        if (searchOptions.feel.length === 0) {
            feelMatch = true;
        } else {
            for (let x = 0; x < searchOptions.feel.length; x++) {
                let rabbitFeel = rabbits[i].options.feel;
                for (let a = 0; a < rabbitFeel.length; a++) {
                    if (rabbitFeel[a] === searchOptions.feel[x]) {
                        feelMatch = true;
                        break;
                    }
                }
            }
        }

        // match size
        if (searchOptions.size.length === 0) {
            sizeMatch = true;
        } else {
            for (let x = 0; x < searchOptions.size.length; x++) {
                let rabbitSize = rabbits[i].options.size;
                for (let a = 0; a < rabbitSize.length; a++) {
                    if (rabbitSize[a] === searchOptions.size[x]) {
                        sizeMatch = true;
                        break;
                    }
                }
            }
        }

        // match vibration style
        if (searchOptions.style.length === 0) {
            styleMatch = true;
        } else {
            for (let x = 0; x < searchOptions.style.length; x++) {
                let rabbitStyle = rabbits[i].options.style;
                for (let a = 0; a < rabbitStyle.length; a++) {
                    if (rabbitStyle[a] === searchOptions.style[x]) {
                        styleMatch = true;
                        break;
                    }
                }
            }
        }

        if (sizeMatch && feelMatch && intensityMatch && styleMatch) {
            matchedRabbits.push(rabbits[i]);
        }
    }

    return matchedRabbits;
}

// Refine filters
ASRFS.refineFilterRabbits = function (refineOptions, rabbitList, filterCount) {
    // Refine options
    // waterproof 
    // quiet
    // forCouples
    // usb
    let refinedList = [];
    var rabbits = ASRFS.rabbitList;
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