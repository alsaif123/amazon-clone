import React from 'react';
import './Home.css'
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='main'>
            <div className='frontpage'>
            </div>
         <div className='container'>
         <div className='home_row'>
         <Product
             id ="B06XWMQRS6"
             name="QacQoc M9C max Android 6.0 Marshmallow TV Box New Amlogic S905X Chipset [2G DDR3/16G eMMC] 4K Smart Box Unlocked 2.4G WIFI Media Player"
             star={4}
             img="https://images-na.ssl-images-amazon.com/images/I/41Sx5HrzuhL._AC_US218_.jpg"
             price={49.99}

            />
          <Product
             id ="B01N41AKT3"
             name="Antimi Sweatproof Smart Watch Phone for Android HTC Sony Samsung LG Google Pixel /Pixel and iPhone 5 5S 6 6 Plus 7 Smartphones Black"
             star={5}
             img="https://images-na.ssl-images-amazon.com/images/I/41Z3XFc1-5L._AC_US218_.jpg"
             price={25.99}

            />

          </div>
          <div className="home_row">

          <Product
             id ="B0713WPJKX"
             name="Celltronics Micro USB Cable,10FT Nylon Braided Tangle-free Data Sync Heavy Duty Android Charging Cable Power Cord High Speed USB2.0 for Samsung HTC LG MP3 Bluetooth Speaker-3 Pack"
             star={4}
             img="https://images-na.ssl-images-amazon.com/images/I/61+-qmTKy8L._AC_US218_.jpg"
             price={10.99}

            />
          <Product
             id ="B01LPZD1N6"
             name="ATOTO 7HD Touchscreen 2Din Android Car Navigation Stereo - Quadcore Car Entertainment Multimedia w/ FM/RDS Radio,WIFI,BT,Mirror Link,and more(No DVD Player)M4171 (178101/16G)"
             star={3}
             img="https://images-na.ssl-images-amazon.com/images/I/51xI8gJTNYL._AC_US218_.jpg"
             price={164.9}

            />
          <Product
             id ="B01N1SE4EP"
             name="NeuTab 7 inch Quad Core Android 5.1 Lollipop Tablet PC, Bluetooth 4.0, Dual Camera, FCC Certified(2017 Upgraded Edition)"
             star={1}
             img="https://images-na.ssl-images-amazon.com/images/I/41HNbRSKpfL._AC_US218_.jpg"
             price={49}

            />
          </div>
          <div className="home_row">
          <Product
             id ="B01N4HS7B8"
             name="Smart tv box Wechip V5 Android 6.0 Marshmallow 2g 16g Amlogic S905X quad core 4K Dual WiFi"
             star={4}
             img="https://images-na.ssl-images-amazon.com/images/I/41q+adG0lNL._AC_US218_.jpg"
             price={53.99}

            />
          <Product
             id ="B017LDNLIG"
             name="Tracfone Alcatel Onetouch Pixi Glitz A463BG. camera 5 mp with dual camera"
             star={4}
             img="https://images-na.ssl-images-amazon.com/images/I/51QdgznaNTL._AC_US218_.jpg"
             price={19.99}

            />
          </div>
          <div className="home_row">
          <Product
             id ="B01LX0JZUM"
             name="ONSON Android Charger Cable,3Pack 10FT Extra Long Nylon Braided High Speed 2.0 USB to Micro USB Charging Cord Fast Charger Cable for Samsung Galaxy S7/S6 Edge,Note 5/4,HTC,LG,Nexus(Gray White)"
             star={3}
             img="https://images-na.ssl-images-amazon.com/images/I/51P8qI8KzNL._AC_US218_.jpg"
             price={11.99}

            />
          <Product
             id ="B072NYXDLY"
             name="5.0 Phone Unlocked Dual Sim Quad Core 8GB Android 5.1 Cellphone Gold by TIMMY"
             star={5}
             img="https://images-na.ssl-images-amazon.com/images/I/411fzxxuuFL._AC_US218_.jpg"
             price={68.99}

            />
          <Product
             id ="B071RK857H"
             name="QacQoc A12 Pro Android 6.0 TV BOX Amlogic S912 Octa-Core [2G DDR3/16G eMMC] Dual Wifi 2.4G/5G AC OTA Update 4K 1000M Android TV Box"
             star={5}
             img="https://images-na.ssl-images-amazon.com/images/I/51+GT3mluJL._AC_US218_.jpg"
             price={65.99}

            />
          </div>
          <div className="home_row">
          <Product
             id ="B00OSTKZWM"
             name="RCA M1 4.0 Unlocked Cell Phone, Dual SIM, 5MP Camera, Android 4.4, 1.3GHz (White)"
             star={3}
             img="https://images-na.ssl-images-amazon.com/images/I/51VCP05020L._AC_US218_.jpg"
             price={57.99}

            />
          <Product
             id ="B01H2E0J5M"
             name="BLU R1 HD - 16 GB - Black - Prime Exclusive - with Lockscreen Offers & Ads"
             star={3}
             img="https://images-na.ssl-images-amazon.com/images/I/416TS-ODxfL._AC_US218_.jpg"
             price={59.99}

            />
          </div>
         </div>

            
        </div>
    );
};

export default Home;