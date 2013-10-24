ninja-LightSymphony
===================
Date: October 2013

Much of this is recycling the excellent LimitlessRGB code here: https://github.com/theojulienne/ninja-limitlessLED



This is a test package to try to actuate LightSymphony controls from a ninjablock.


LightSymphony is a proprietary lighting control for internal and external lights.


Lightsymphony accepts simple ascii UDP commands at port 10001 with an end char.


***************************************************************************************************

Short documentation for LS commands below
http://www.lightsymphony.com/images/instructions/base-manual_vrf2.pdf

ASCII Interface 
The port expects simple lower-case ASCII messages in the format below; 
Pg 19 Section 5 

Interfacing – Advanced Setup 
Message Action 

all_on // Switch ON all areas 

all_off //Switch OFF all areas 

area_on x // Switch ON area ‘x’, where x = “0” to “9” 

area_off x // Switch OFF area ‘x’, where x = “0” to “9” 

start-show // Start light-show running 

stop_show // STOP light show 

inten_x // Set intensity of last selected area to ‘x’ 

where x = “0” to “9” 

***************************************************************************************************
