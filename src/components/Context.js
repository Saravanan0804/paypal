import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Joystick",
                "src": "https://i0.wp.com/ae02.alicdn.com/kf/Hf7e8b4b3714045f2830502e6839845feb/e87bf/gamepad-joystick-controle-2-4g-draadloze-controller-voor-de-xbox-een-console-voor-pc-voor-3.jpg_640x640.jpg",
                "description": "Gamepad Joystick Controle 2.4G",
                "content": "Gamepad Joystick Controle 2.4G Draadloze Controller Voor S/X Controller Console Pc Voor Android Smart Telefoon Gamepad Joystick joypad",
                "price": 120,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Gaming Laptop",
                "src": "http://technology-23.com/wp-content/uploads/2019/01/37wd5cMqW2sD7xUSdvNKN9.jpg",
                "description": "I7 10th Generation 512 SSD",
                "content": "Thunderobot 911 Pro Gaming Laptop RTX2070 I7-10875H Notebook 240Hz 72% Ntsc 16G Ram 512G Ssd Fhd Ips wifi 6 Rgb Toetsenbord",
                "price": 1000,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Laser Printer",
                "src": "https://th.bing.com/th/id/OIP.niqKnRhKsU3vvfUtYMNwOQHaHa?pid=ImgDet&rs=1",
                "description": "HL2230 Monochrome Laser Printer",
                "content": "Nieuwe Aangekomen 80 Mm Autosnijder Thermische Bonprinter Pos Printer Met Usb/Ethernet/Bluetoot Voor Hotel/keuken/Restaurant",
                "price": 380,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Computer System",
                "src": "https://pluspng.com/img-png/computer-cpu-png--1024.png",
                "description": "A01 Mini Itx Computer Case",
                "content": "A01 Mini Itx Computer Case Chassis Aluminium Aktetas Home Theater AC-DC Htpc Computer Doos Desktop Pc Behuizing",
                "price": 150,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Gaming PC",
                "src": "https://th.bing.com/th/id/OIP.cIsC5SO3oTFVsExJKdudoQHaHa?pid=ImgDet&rs=1",
                "description": "Gamer Desktop Computer Core I5",
                "content": "Win10 16Gb Ram Ssd Hdd 1Tb 256Gb Ssd Pc Gamer Desktop Computer Core I5 E5-2650 Cpu Met GTX1050 GTX750 Gaming Pc",
                "price": 750,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Mause",
                "src": "https://pluspng.com/img-png/computer-mouse-png-mouse-image-1000.jpg",
                "description": "3200Dpi Led Optical Usb Mause",
                "content": "Nieuwe Bedrade Gaming Muis Gamer 7 Button 3200Dpi Led Optical Usb Computer Muis Spel Muizen Mause Voor Pc computer Gamer",
                "price": 100,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Scanner",
                "src": "https://th.bing.com/th/id/OIP.WOWkVZRo0co-Nzsv8nM8pAHaG7?pid=ImgDet&rs=1",
                "description": "Kodak i2900 Scanner",
                "content": "The  Kodak i2900 Scanner combines the power of a desk top and a flat bed scanner in one compact device.  Scan at up to 60 pages per minute (120 images per minute) while still having the flexibility to scan books and other documents on a built in flat bed scanner.",
                "price": 250,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Gaming Keyboard",
                "src": "https://th.bing.com/th/id/R.b8b18b00e833c9fab1d0b0140971df8f?rik=G2lV5zxoQcXRoQ&pid=ImgRaw&r=0",
                "description": "Rainbow Color Backlight Keyboard",
                "content": "Suspension style key caps, waterproof and dustproof, and easy to take down to clean thoroughly for longer work time Amphitheatre style and Curve key design provides super cool mechanical feeling The transmission line is equipped with anti-interference magnet ring for better operation",
                "price": 170,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}