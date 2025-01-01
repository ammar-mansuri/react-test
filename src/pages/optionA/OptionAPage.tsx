import {Text,} from "@mantine/core";
import classes from './OptionAPage.module.css';
import {Routes} from "../../routes/Routes";

export function OptionAPage() {
    return (
        <>
            <Text size='xl'>Welcome to OptionA!</Text>

            <button className={classes.subscribeButton}>SUBSCRIBE</button>
            <button className={classes.joinButton}>JOIN</button>
            <button className={classes.tweetButton}>TWEET</button>

            <br/>
            <Text className={classes.videoTitle}> Video Title Text Video Title Text Video Title Text Video Title Text
                Video Title Tex
            </Text>
            <p className={classes.videoStats}> 10M QWERTY</p>
            <p className={classes.name}> Insert Name Here</p>
            <p className={classes.content}> Insert Content Here Insert Content Here Insert Content Here Insert Content
                Here Insert Content Here Insert Content Here Insert Content Here Insert Content Here Insert Content Here
                Insert Content Here Insert Content Here Insert Content Here Insert Content Here Insert Content Here
                Insert Content Here Insert Content Here Insert Content Here Insert Content Here Insert Content Here
                Insert Content Here Insert Content Here Insert Content Here Insert Content Here Insert Content Here
                Insert Content Here Insert Content Here</p>

            <p className={classes.footerBanner}> Footer Banner here - Insert Content.
                <span className={classes.shop}><a target={'_blank'} href={Routes.HOME}>Click here &#62;</a></span>
            </p>

            <div className={classes.grid1Div}>
                <div className={classes.grid1Div1}>
                    Div1
                </div>
                <div className={classes.grid1Div2}>
                    Div2
                </div>
            </div>

            <div className={classes.grid2Div}>
                <div className={classes.grid1Div1}>
                    Div1
                </div>
                <div className={classes.grid1Div2}>
                    Div2
                </div>
                <div className={classes.grid1Div3}>
                    Div3
                </div>
            </div>


            <div className={classes.grid3Div}>
                <div className={classes.grid1Div1}>
                    Div1
                </div>
                <div className={classes.grid1Div2}>
                    Div2
                </div>
            </div>

            <div className={classes.flexContainer1}>
                <div className={classes.flexDiv1}>
                    Flex Div 1
                    Flex Div 1
                </div>
                <div className={classes.flexDiv2}>
                    Flex Div 2
                    <p>Flex Div2</p>
                </div>
            </div>
        </>
    );
}