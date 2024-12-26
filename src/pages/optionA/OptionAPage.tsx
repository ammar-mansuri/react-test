import {Container, Text,} from "@mantine/core";
import classes from './OptionAPage.module.css';
import {Routes} from "../../routes/Routes";

export function OptionAPage() {
    return (
        <Container>
            <Text size='xl'>Welcome to OptionA!</Text>

            <button className={classes.subscribeButton}>SUBSCRIBE</button>
            <button className={classes.joinButton}>JOIN</button>
            <button className={classes.tweetButton}>TWEET</button>

            <br/>
            <text className={classes.videoTitle}> Video Title Text Video Title Text Video Title Text Video Title Text
                Video Title Tex
            </text>
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
        </Container>
    );
}