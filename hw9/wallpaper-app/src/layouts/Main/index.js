import Button from '../../components/Button';
import ExploreWallpaperIcon from './../../assets/images/bi_arrow-90deg-down.png';
import GridItem1 from './../../assets/images/Rectangle 7.png';
import GridItem2 from './../../assets/images/Rectangle 8.png';
import GridItem3 from './../../assets/images/Rectangle 9.png';
import GridItem4 from './../../assets/images/Rectangle 10.png';
import GridItem5 from './../../assets/images/Rectangle 11.png';
import GridItem6 from './../../assets/images/Rectangle 12.png';
import GridItem7 from './../../assets/images/Rectangle 13.png';
import GridItem8 from './../../assets/images/Rectangle 14.png';
import GridItem9 from './../../assets/images/Rectangle 15.png';
import GridItem10 from './../../assets/images/Rectangle 16.jpg';
import GridItem11 from './../../assets/images/Rectangle 17.jpg';
import GridItem12 from './../../assets/images/Rectangle 18.jpg';
import GridItem13 from './../../assets/images/Rectangle 19.jpg';
import GridItem14 from './../../assets/images/Rectangle 20.jpg';
import GridItem15 from './../../assets/images/Rectangle 21.jpg';
import './main.scss';
import Grid from '../../components/Grid';

export default function Main(){

    const gridItems = [
        GridItem1,GridItem2,GridItem3,GridItem4,GridItem5,GridItem6,GridItem7,
        GridItem8,GridItem9,GridItem10,GridItem11,GridItem12,GridItem13,GridItem14,GridItem15
    ];

    return (
        <main className='main'>

            <section className='main__content'>
            <h1 className='main__content__heading main__content__heading--h2'>Best 4K <span className='main__content__heading--h2__span'>Wallpapers!</span></h1>
            <h4 className='main__content__heading main__content__heading--h4'>for the People, by the People.</h4>
            <p className='main__content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Sed mattis posuere mi tellus et dictum nam.</p>


            <section className='main__link'>
                <Button icon={ExploreWallpaperIcon} content={{text:'Explore Wallpapers',style:{fontSize:'12px',fontWeight:'bold'}}} style={{background:'linear-gradient(#05F591,#05F5D9)'}}/>
                <a href='#'>Know more</a>
            </section>
            </section>

            <section className='main__grid'>
                <Grid items={gridItems}/>
            </section>

        </main>
    )
}