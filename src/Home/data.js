import React from 'react';
import chance from '../asset/chance.jpeg';
import mbabazi from '../asset/mbabazi.jpeg';
import cyusa from '../asset/cyusa.jpeg';

function ood() {
  return (new Date()).getTime() >= (new Date('2018/01/07 06:00:00')).getTime();
}

const data = {
  button: ood() ? 'GET STARTED' : '01.06 线上同步直播', // 立即报名
  code: '支付宝扫码报名',
  url: 'https://render.alipay.com/p/w/seeconftwa/www/enrol.html',
  pre_url: 'https://render-pre.alipay.com/p/w/seeconftwa/www/enrol.html',
  schemeUrl: 'https://ds.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender.alipay.com%252Fp%252Fw%252Fseeconftwa%252Fwww%252Fenrol.html%253F__webview_options__%253D',
  pre_schemeUrl: 'https://ds.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender-pre.alipay.com%252Fp%252Fw%252Fseeconftwa%252Fwww%252Fenrol.html%253F__webview_options__%253D',
  banner: {
    enName: [
      <span key="1">Seeking Customers Trust</span>,
    ],
    title: 'As PanelTech pressure to experience our customers taste.',
    cnName: 'PanelTech on our hearts, Sacrify is our strong part, Halt us requires more energy.',
  },
  page1: {
    title: 'Popular services',
    coming: '更多重量级大咖，敬请期待',
    row: [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpEv-XNLhNqN7wD2VXATr0mSfAvoZhMEuImw&usqp=CAU', name: 'Printing', post: 'Printing and Binding' },
      { src: 'https://cdn.pixabay.com/photo/2013/07/13/11/36/charger-158460_960_720.png', name: 'Battery', post: 'Computer Battery replacement' },
      { src: 'https://d3nevzfk7ii3be.cloudfront.net/igi/nckvVlDQQhYMMxR4.full', name: 'Maintenance', post: 'Computer repairing' },
      { src: 'https://cdn.shopify.com/s/files/1/2586/9756/products/laptop-keyboard_x700.png?v=1522315458', name: 'Keyboard', post: 'Keyboard Replacement' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrjPct4ZPl5HU71K0zxY46LdQUC5RSqRxAMQ&usqp=CAU', name: 'Website', post: 'Website Desgin and Development' },
      { src: 'https://cdn.shopify.com/s/files/1/0921/6422/products/laptop_screen_repair_image_large.jpeg?v=1494720588', name: 'Screen', post: 'Computer Screen repair' },
      { src: 'https://axiomdesigns.com/wp-content/uploads/2016/11/27356839-Graphic-designer-at-work-Color-swatch-samples-Stock-Photo-design.jpg', name: 'Graphic design', post: 'Business Card, Banner and Stamp' },
      { src: 'https://www.colocationamerica.com/images/antivirus-software.jpg', name: 'Computer protection', post: 'Antivirus installation and software maintenance' },
    ],
  },
  page2: {
    title: 'Team Panel',
    timeline: [
      {
        src: chance,
        name: 'IRADUKUNDA Chance Desire',
        post: 'Software Engineer',
        time: '09:00 - 09:15',
        title: 'The more you learn, the better you know. when i code i fill more a live, I love my job !!',
      },
      {
        src: mbabazi,
        name: 'MBABAZI Nancy',
        post: 'Marketing and communication Agent',
        time: '09:15 - 10:00',
        title: 'The trust of customer is my goal and make sure the customer is fully satisfied.',
        content: '',
      },
      {
        src: cyusa,
        name: 'CYUSA Dieudonne',
        post: 'IT Support Technician',
        time: '10:00 - 10:45',
        title: 'All i care is the quality. Hardware is not about connection only, it\'s being wise in what your doing. ',
        content: '',
      },
    ],
  },
  page4: {
    title: 'E-mail: paneltech2020@gmail.com',
    content: 'Tel: 0788202115/078575552',
    content2: 'Address: KN 2 st Kigali',
  },
  page3: {
    title: 'Ndaru Arcade',
    content: 'KN 2 st Kigali',
  },
  page6: {
    title: 'Partnership',
    block: [
      {
        name: 'Gura Gure Ltd',
        log: '',
      },
      {
        name: 'SL Solution Tech',
        log: '',
      },
    ],
  },
  footer: {
    name: 'Copyright © 2020 All rights reserved',
    logoName: 'PanelTech',
  },
};

export default data;

// image 预加载，避逸出不了图;
const div = document.createElement('div');
div.style.display = 'none';
document.body.appendChild(div);
function loadImage(src) {
  const img = new Image();
  img.src = src;
  div.appendChild(img);
}
let imageArray = [];

function mapImage(d) {
  d.forEach((item) => {
    item.forEach((c) => {
      imageArray.push(c.src);
    });
  });
}
mapImage([data.page1.row, data.page2.timeline]);
imageArray = imageArray.concat(data.page6.block, 'https://gw.alipayobjects.com/zos/rmsportal/CPGuYZxqYoqLAeBUknUd.png');
imageArray.forEach((src) => {
  loadImage(src);
});
