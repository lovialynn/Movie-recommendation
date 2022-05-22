import React from "react";
import "./Detail.css";
import { Rate } from "antd";
import { useParams } from "react-router-dom";
import pic1 from "../../static/01.webp";
import pic2 from '../../static/02.jpg';
import pic3 from '../../static/03.webp'

const movieDetail = {
  10: {
    title: "肖申克的救赎",
    date: "1994-09-10(多伦多电影节) / 1994-10-14(美国)",
    time: "142分钟",
    content:
      "一场谋杀案使银行家安迪（蒂姆•罗宾斯 Tim Robbins 饰）蒙冤入狱，谋杀妻子及其情人的指控将囚禁他终生。在肖申克监狱的首次现身就让监狱“大哥”瑞德（摩根•弗里曼 Morgan Freeman 饰）对他另眼相看。瑞德帮助他搞到一把石锤和一幅女明星海报，两人渐成患难 之交。很快，安迪在监狱里大显其才，担当监狱图书管理员，并利用自己的金融知识帮助监狱官避税，引起了典狱长的注意，被招致麾下帮助典狱长洗黑钱。偶然一次，他得知一名新入狱的小偷能够作证帮他洗脱谋杀罪。燃起一丝希望的安迪找到了典狱长，希望他能帮自己翻案。阴险伪善的狱长假装答应安迪，背后却派人杀死小偷，让他唯一能合法出狱的希望泯灭。沮丧的安迪并没有绝望，在一个电闪雷鸣的风雨夜，一场暗藏几十年的越狱计划让他自我救赎，重获自由！老朋友瑞德在他的鼓舞和帮助下，也勇敢地奔向自由。",
    publicScore: "9.7",
    publicStart: 4,
    myScore: 4,
    type: "犯罪",
    imgSrc: pic1,
  },
  '01':{
    title: "千与千寻",
    date: "2001年7月20日(日本)",
    time: "125 分钟",
    content:"有点娇气任性的10岁少女千寻（柊瑠美 配）跟随父母搬往新家，途中误入一座神庙，来到了另一个世界：一条专门给神仙提供服务的热闹非凡的浴场街。双亲因为吃了给神准备的美食而被变成了猪。千寻仓皇逃出，此时，一个叫白（入野自由 配）的男孩出现并救了她，在白帮助下千寻得以安身。为了等待机会救出父母回到自己的世界，首先要为掌管镇中大浴场的魔女汤婆婆工作（夏木真理 配），第二要被她剥夺名字，千寻便改名为“千”。在这里有指导她工作的小玲（玉井夕海 配）、负责煲洗澡水的锅炉爷爷（菅原文太 配）、煤炭屎鬼、以及入侵浴场捣乱的无面男等，在大家的激励下，千寻以自己的纯真之心屡屡化险为夷，并交到了许多新朋友。最终，千寻拯救了白，发现了他的真实身份。然而要救出双亲，她还必须面临严酷的考验 [28]  。",
    publicScore: "9.8",
    publicStart: 4,
    myScore: 4,
    type: "动画",
    imgSrc: pic2,
  },
  '02':{
    title: "我不是药神 (2018)",
    date: "2018-07-05(中国大陆",
    time: " 117分钟",
    content:"普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。不速之客吕受益（王传君 饰）的到来，让他开辟了一条去印度买药做“代购”的新事业，虽然困难重重，但他在这条“买药之路”上发现了商机，一发不可收拾地做起了治疗慢粒白血病的印度仿制药独家代理商。赚钱的同时，他也认识了几个病患及家属，为救女儿被迫做舞女的思慧（谭卓 饰）、说一口流利“神父腔”英语的刘牧师（杨新鸣 饰），以及脾气暴烈的“黄毛”（章宇 饰），几个人合伙做起了生意，利润倍增的同时也危机四伏。程勇昔日的小舅子曹警官（周一围 饰）奉命调查仿制药的源头，假药贩子张长林（王砚辉 饰）和瑞士正牌医药代表（李乃文 饰）也对其虎视眈眈，生意逐渐变成了一场关于救赎的拉锯战。",
    publicScore: "9.0",
    publicStart: 4,
    myScore: 3,
    type: "喜剧",
    imgSrc: pic3,
  },
};

const Home = () => {
  let { movieId } = useParams();
  const currentMovie = movieDetail[movieId];
  return (
    <div style={{ position: "relative" }}>
      <img className="bgImg" src={currentMovie.imgSrc} alt="" />
      <div className="container">
        <div className="img">
          <img className="img" src={currentMovie.imgSrc} alt="" />
        </div>
        <div className="detailContainer">
          <div className="detailTitle">详情</div>
          <div className="title">{currentMovie.title}</div>
          <div>
            {currentMovie.time} ｜ {currentMovie.date}
          </div>
          <div className="contentDetail">{currentMovie.content}</div>
          <div style={{ marginBottom: "20px" }}>
            <span className="type">{currentMovie.type}</span>
          </div>
          <Rate defaultValue={currentMovie.publicStart} />
          <div className="number">
            {currentMovie.publicScore}{" "}
            <span style={{ color: "gray", fontSize: "15px" }}>/ 10</span>
          </div>
          <div className="personalJudge">您的评价</div>
          <Rate defaultValue={currentMovie.myScore} />
        </div>
      </div>
    </div>
  );
};

export default Home;
