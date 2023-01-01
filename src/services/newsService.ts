import { IApiErrorRes, IApiSuccessRes } from "../interfaces/IApiRes";
import IArticle from "../interfaces/IArtcile";
import axios from "axios";

export default async function loadNews(page: number, count: number, keyword?: string): Promise<IApiSuccessRes | IApiErrorRes> {
    const apiKey = import.meta.env.NEWS_API_KEY;

    try {
        const res = await axios.get<IApiSuccessRes>(`https://newsapi.org/v2/everything?q=${(keyword ?? 'a')}&apiKey=${apiKey}&language=en&pageSize=${count}&page=${page}`);
        return res.data;
    } catch (error) {
        //console.log(error)
        return error.response.data as IApiErrorRes;
    }
}

export const dummyData = [
    {
        source: { id: 'engadget', name: 'Engadget' },
        author: 'Jon Fingas',
        title: 'Polestar 2 gets a 68HP power boost through a paid update, no subscription required',
        description: "Polestar is delivering a not-so-subtle snub to Mercedes' subscription performance upgrade. The automaker has released an update that gives the Polestar 2's long range dual motor variant a 68HP power boost (plus 15lb. ft. of torque) in the US and Canada for a …",
        url: 'https://www.engadget.com/polestar-2-68hp-performance-boost-202735126.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-12/1505da50-7597-11ed-9c3d-d17d8de24ba5',
        publishedAt: '2022-12-06T20:27:35Z',
        content: "Polestar is delivering a not-so-subtle snub to Mercedes' subscription performance upgrade. The automaker has released an update that gives the Polestar 2's long range dual motor variant a 68HP power … [+1768 chars]"
    },
    {
        source: { id: 'engadget', name: 'Engadget' },
        author: 'Jon Fingas',
        title: 'South Carolina EV battery recycling plant could salvage parts for a million cars a year',
        description: 'The push to recycle electric vehicle batteries just gained some momentum. Redwood Materials has unveiled plans to build an EV battery recycling plant on the outskirts of Charleston, South Carolina. The roughly 600-acre facility (previewed in a render above) w…',
        url: 'https://www.engadget.com/redwood-materials-ev-battery-recycling-plant-south-carolina-183146247.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-12/577884c0-7bd5-11ed-a4ff-89a3d64b9f84',
        publishedAt: '2022-12-14T18:31:46Z',
        content: 'The push to recycle electric vehicle batteries just gained some momentum. Redwood Materials has unveiled plans to build an EV battery recycling plant on the outskirts of Charleston, South Carolina. T… [+1851 chars]'
    },
    {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Jordan Hicks and Allie Chanthorn Reinmann',
        title: 'The Right Way to Hone a Knife',
        description: 'A sharp knife is a happy knife—and careful honing will keep it that way.',
        url: 'https://lifehacker.com/the-right-way-to-hone-a-knife-1849845256',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3758f94ffb402116b667259edd43900f.png',
        publishedAt: '2022-12-02T15:30:00Z',
        content: 'A sharp knife is a happy knifeand careful honing will keep it that way.\r\n' +
            'We may earn a commission from links on this page.'
    },
    {
        source: { id: 'engadget', name: 'Engadget' },
        author: 'Jessica Conditt',
        title: "'Season: A letter to the future' is a solo cycling adventure coming to PC and PlayStation January 31st",
        description: 'The next game from Scavengers Studio is something completely different. Scavengers is the Montreal-based indie team behind Darwin Project, the online survival game that was a low-key and short-lived cult hit in 2020. Darwin Project offered a twist on battle r…',
        url: 'https://www.engadget.com/scavengers-studio-season-letter-future-darwin-project-release-date-170004272.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-12/a10b7830-7717-11ed-bfec-5637446b3464',
        publishedAt: '2022-12-08T17:00:04Z',
        content: 'The next game from Scavengers Studio is something completely different. Scavengers is the Montreal-based indie team behind Darwin Project, the online survival game that was a low-key and short-lived … [+1710 chars]'
    },
    {
        source: { id: 'the-verge', name: 'The Verge' },
        author: 'Jay Peters',
        title: 'Instagram is adding a BeReal clone, a tweet-ish feature, and groups',
        description: 'Instagram is announcing a suite of new features coming to the app, including a BeReal clone called Candid Stories, the ability to post very short text “Notes,” and Group Profiles.',
        url: 'https://www.theverge.com/2022/12/13/23507417/instagram-bereal-tweet-twitter-clone-group-profiles',
        urlToImage: 'https://cdn.vox-cdn.com/thumbor/xRrjKN5fIu2GQgUDowwsFuhOV0o=/0x0:890x775/1200x628/filters:focal(444x156:445x157)/cdn.vox-cdn.com/uploads/chorus_asset/file/24288556/03_Candid_1.jpg',
        publishedAt: '2022-12-13T17:54:21Z',
        content: 'Instagram is adding a BeReal clone, a tweet-ish feature, and groups\r\n' +
            'Instagram is adding a BeReal clone, a tweet-ish feature, and groups\r\n' +
            ' / The company is testing a more direct competitor to BeReal,… [+2167 chars]'
    },
    {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Amy Drader',
        title: "How to Hold a Coworker Accountable When Your Boss Won't",
        description: 'When working with teams, I hear a lot of complaints about bosses. One of the most common is about a manager who doesn’t hold people accountable. Someone (or maybe a couple people) on the team consistently perform poorly in their jobs, and the boss doesn’t do …',
        url: 'https://lifehacker.com/how-to-hold-a-coworker-accountable-when-your-boss-wont-1849816741',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a268bdd2c41b97c4af5b51640462b3ec.jpg',
        publishedAt: '2022-11-23T18:30:00Z',
        content: 'When working with teams, I hear a lot of complaints about bosses. One of the most common is about a manager who doesnt hold people accountable. Someone (or maybe a couple people) on the team consiste… [+5711 chars]'
    },
    {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Jake Peterson',
        title: 'Every Samsung Phone Has a Hidden Chihuahua for Some Reason',
        description: 'I’m not trying to bullshit you. If you have a Samsung Galaxy—virtually any one of them—then you have a hidden chihuahua on your phone. You would never stumble upon it, which is why you’ve likely never seen nor known about it, but it’s there, lurking, ready to…',
        url: 'https://lifehacker.com/every-samsung-phone-has-a-hidden-chihuahua-for-some-rea-1849812864',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c2c0725a5bd599444d67d2c1a29ce721.jpg',
        publishedAt: '2022-11-22T19:30:00Z',
        content: 'Im not trying to bullshit you. If you have a Samsung Galaxyvirtually any one of themthen you have a hidden chihuahua on your phone. You would never stumble upon it, which is why youve likely never se… [+2037 chars]'
    },
    {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Meredith Dietz',
        title: 'You Can Still (Probably) Make a Killing on I Bonds',
        description: 'With soaring inflation causing concerns for your investments, U.S. savings bonds are considered a safe bet, since they’re fully backed by the government. In October we told you to buy Series I bonds in order to lock in an interest rate of 9.62%, the reason be…',
        url: 'https://lifehacker.com/you-can-still-probably-make-a-killing-on-i-bonds-1849855295',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ce958b7ee005a346f7646c0e5fb21993.jpg',
        publishedAt: '2022-12-06T14:00:00Z',
        content: 'With soaring inflation causing concerns for your investments, U.S. savings bonds are considered a safe bet, since theyre fully backed by the government. In October we told you to buy Series I bonds i… [+3386 chars]'
    },
    {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Beth Skwarecki',
        title: '9 Ways to Give Your ‘Performance’ Oatmeal a Competitive Edge',
        description: 'Oatmeal is one of the great underrated foods for athletes, whether you’re a runner, a weightlifter, or just somebody who wants a filling breakfast before hitting the gym. If you want more whole grains or fiber in your diet, congrats—oats have plenty. If you n…',
        url: 'https://lifehacker.com/9-ways-to-give-your-performance-oatmeal-a-competitive-1849905042',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c6ed505fd19f02bfc7e7017d0199157b.jpg',
        publishedAt: '2022-12-19T17:30:00Z',
        content: 'Oatmeal is one of the great underrated foods for athletes, whether youre a runner, a weightlifter, or just somebody who wants a filling breakfast before hitting the gym. If you want more whole grains… [+463 chars]'
    },
    {
        source: { id: null, name: 'Gizmodo.com' },
        author: 'Ed Cara',
        title: "A Bite From a Kitten Led to a Man's Death Four Years Later, Family Says",
        description: 'An unlucky kitten bite appears to have led to a Danish man’s death four years later. He reportedly contracted a serious infection following the bite that hospitalized him for a month, caused the amputation of his finger, and left him in ever-declining health.…',
        url: 'https://gizmodo.com/cat-bite-death-four-years-later-1849899909',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6b25e52220e042bc710bd53385b71313.jpg',
        publishedAt: '2022-12-15T20:23:46Z',
        content: 'An unlucky kitten bite appears to have led to a Danish mans death four years later. He reportedly contracted a serious infection following the bite that hospitalized him for a month, caused the amput… [+2938 chars]'
    }
]