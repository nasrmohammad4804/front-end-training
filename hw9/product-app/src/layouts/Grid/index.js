import './main.scss';
import Rectangle1 from  './../../assets/images/Rectangle1.png';
import Rectangle2 from  './../../assets/images/Rectangle2.png';
import Rectangle3 from  './../../assets/images/Rectangle3.png';
import Rectangle4 from  './../../assets/images/Rectangle4.png';
import Rectangle5 from  './../../assets/images/Rectangle5.png';
import Rectangle6 from  './../../assets/images/Rectangle6.png';
import Rectangle7 from  './../../assets/images/Rectangle7.png';
import Rectangle8 from  './../../assets/images/Rectangle8.png';
import Rectangle9 from  './../../assets/images/Rectangle9.png';
import Rectangle10 from  './../../assets/images/Rectangle10.png';
import Rectangle11 from  './../../assets/images/Rectangle11.png';
import Rectangle12 from  './../../assets/images/Rectangle12.png';
import Rectangle13 from  './../../assets/images/Rectangle13.png';
import Rectangle14 from  './../../assets/images/Rectangle14.png';
import Rectangle15 from  './../../assets/images/Rectangle15.png';
import Rectangle16 from  './../../assets/images/Rectangle16.png';
import Rectangle17 from  './../../assets/images/Rectangle17.png';
import Rectangle18 from  './../../assets/images/Rectangle18.png';
import Rectangle19 from  './../../assets/images/Rectangle19.png';
import Rectangle20 from  './../../assets/images/Rectangle20.png';
import Rectangle21 from  './../../assets/images/Rectangle21.png';
import Rectangle22 from  './../../assets/images/Rectangle22.png';
import Rectangle23 from  './../../assets/images/Rectangle23.png';
import Rectangle24 from  './../../assets/images/Rectangle24.png';
import Rectangle25 from  './../../assets/images/Rectangle25.png';
import Rectangle26 from  './../../assets/images/Rectangle26.png';
import Rectangle27 from  './../../assets/images/Rectangle27.png';

import GridItem from '../../components/GridItem';

function CreateItem(picture,content1,content2,footer,style){
    this.picture = picture;
    this.content1=content1;
    this.content2=content2;
    this.footer =footer;
    this.style=style;
}

function getItems(){
    return [

        new CreateItem(Rectangle1,"Melodius","Music Streaming App UI Kit",'Duplicate This',{ gridArea: '1 / 1 / 2 / 2'}),
        new CreateItem(Rectangle2,"Vakantie","Travel App UI Kit",'Duplicate This',{gridArea: '1 / 2 / 2 / 3'}),
        new CreateItem(Rectangle3,"Wasted Well Way","Food Waste App UI Kitt",'Duplicate This',{gridArea: '1 / 3 / 2 / 4'}),
        new CreateItem(Rectangle4,"EventEase","Event Booking App UI Kit",'Duplicate This',{ gridArea: '1 / 4 / 3 / 6'}),
    
        new CreateItem(Rectangle5,"Snapay","eWallet App UI Kit",'Duplicate This',{ gridArea: '2 / 1 / 4 / 3'}),
        new CreateItem(Rectangle6,"Hols!",'Tour and Travel App UI Kit','Duplicate This',{ gridArea: '2 / 3 / 3 / 4'}),
        new CreateItem(Rectangle7,"Popscene",'Movie Streaming App UI Kit','Duplicate This'),
        new CreateItem(Rectangle8,"DugStak",'Music and Podcast Streaming App UI Kit','Duplicate This'),
        new CreateItem(Rectangle9,"United Nations Foundation",'Free UN Foundation Website Redesign','Duplicate This'),
        new CreateItem(Rectangle10,"Imaginify",'AI Image Generator Mobile App UI Kit','Duplicate This'),
        new CreateItem(Rectangle11,"Flexi",'The Dynamic UI Design System Mastery Kit','Duplicate This',{ gridArea: '4 / 2 / 6 / 4'}),
        new CreateItem(Rectangle12,"Let’s Glow",'Beauty Shopping App UI Kit','Duplicate This',{gridRow: '5 / 6'}),
        new CreateItem(Rectangle13,"Balb",'Social Media App UI Kit','Duplicate This'),
        new CreateItem(Rectangle14,"Landing Page UI Kit",'eCommerce, SEO Agency & Travel','Duplicate This'),
        new CreateItem(Rectangle15,"Foodstock",'Food Delivery App UI Kit','Duplicate This',{gridRow:'5 / span 2',gridColumn:'4 / span 2'}),
        new CreateItem(Rectangle16,"Chatify",'AI Chat Mobile App UI Kit','Duplicate This',{gridArea:'6 / 1 / 8 / 3'}),
        new CreateItem(Rectangle17,"Flixism",'Movie Streaming App UI Kit','Duplicate This'),
        new CreateItem(Rectangle18,"Shopphile",'eCommerce App UI Kit','Duplicate This',{gridArea:'7 / 3 / 9 / 5'}),
        new CreateItem(Rectangle19,"Rail",'Train Travel App UI Kit','Duplicate This'),
        new CreateItem(Rectangle20,"I Can Fly",'Flight Booking App iOS Kit','Duplicate This',{gridColumn:'5 / span 1'}),
        new CreateItem(Rectangle21,"Alaya",'Hotel Booking App UI Kit','Duplicate This'),
        new CreateItem(Rectangle22,"Protasko",'Productivity App UI Design Kit','Duplicate This',{gridRow:'8 / span 1'}),
        new CreateItem(Rectangle23,"Textop.ai",'Ultimate AI Writer Landing Page Kit','Duplicate This',{gridRow:'8 / span 1'}),
        new CreateItem(Rectangle24,"Mariposign",'Mobile App UI Kit','Duplicate This',{gridArea:' 9 / 2 / 11 / 4'}),
        new CreateItem(Rectangle25,"Flexi SaaS",'Ultimate Landing Page Kit with Framer Template','Duplicate This',{gridColumn:'1 / 2'}),
        new CreateItem(Rectangle26,"Glowup",'Appointment Marketplace App UI Kit','Duplicate This',{gridColumn:'4 / span 2',gridRow:' 9 / span 2'}),
        new CreateItem(Rectangle27,"De Grido",'Portfolio Website Template','Duplicate This',{gridColumn:'1 / span 2',gridRow:' 11 / span 2'}),

    ];

}
export default function Grid(){

    const items= getItems();


    const result = items.map((item) => <  GridItem  key={crypto.randomUUID()} item={item} />);

    return <div className="container">
        {result}
    </div>
}