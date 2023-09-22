export default {
  /**
   * value：唯一值
   * label：类型名称
   * productIntroduction：产品简介
   * productDetails 产品详情
   * ProductParameters 产品参数
   */

  statementType: [{
      link: 1,
      label: '云广播',
      statement: [{
          value: 1,
          label: '入户式智能广播',
          // img: ['@/assets/img/img_1.png'],
          img: ['img_1'],
          productIntroduction: '这是一块微型，具体极高性价比的壁挂应急广播产品，主要用户室内，如：客厅、办公室及小商铺等场景。',
          productDetails: `1、分级管理，为总部等，提供跨地区，跨城市分级管控功能，便于集中统一管理及信息传达。
          2、精准控制，组网灵活，可以对广播设备进行任意单台或多台组合进行播控，能满足各种广播需求。
          3、移动操作，手机小程序可以完成播控操作，如播放通知，喊话等，不再像传统广播系统需要在设备端和电脑端完成操作。
          4、远程覆盖，发送广播通知，不再受地域限制，可以远程在任何上网的地方进行操作。
          5、内容播放可后台上传，编辑及运营，按时按场景建立单次，手动及循环任务。
          6、安装施工维护极简，插电后，用户自行添加设备进系统，任务组合，编排。
          7、流量随时监控，产品运营状况随时查询。
          8、经常播放的内容可以下载到本地，减少流量消耗。`,
          ProductParameters: `1、存储：4Gb
          2、支持音频：MP3
          3、EQ模式：系统自适应
          4、输出功率：5-10W（可覆盖30-50平米空间）
          5、音量控制：后台（小程序+H5网页）0-100
          6、扬声器阻抗：8欧
          7、频率响应：100-18KHz
          8、灵敏度：91dB
          9、功放：D类功放
          10、电源：5V/2A
          11、产品尺寸：约100*100*30
          12、重量：约0.3KG`
        },
        {
          value: 2,
          label: '智能音柱',
          // img: ['@/assets/img/img_2.png'],
          img: 'img_2',
          productIntroduction: '用于街道，公园、村委等场所进行广播、喊话、播放录制语音文件、背景音乐、在线内容等。',
          productDetails: `整机采用金属+工程塑料设计，防腐防潮；
          2、内部电路板喷涂三防设计，提高户外使用稳定性；
          3、全网通 4G 接入+LAN网络+UHF（选配）；
          4、支持多任务接收，终端可根据任务优先级选择高优先级的优先播放；
          5、产品工作状态指示，产品带 LED 指示灯，可指示不同状态；
          6、支持加密传输，保证传输过程的安全可控；
          7、终端支持手机扫码上线，免配置，极大简化工程安装；
          8、支持网页调试，查看终端信息；
          9、4G 接收带宽要求低（最低 8kbps 码率），播放稳定性好；
          10、4G 支持贴片式 SIM 芯片和插卡式双卡模式，都有做防水防潮设计，可避免室外设备用 SIM 卡产生的接触不良问题；
          11、以太网可以由路由器自动分配地址（DHCP）或固定IP地址，支持POE供电（部分机型支持）；
          12、支持远程音量控制，可通过远程修改终端音量；
          13、支持地理位置信息，可在 APP/小程序/平台上显示终端位置，并可通过 APP/小程序直接导航到终端安装位置；
          14、支持终端参数，状态上报，可在平台查看终端参数；
          15、支持实时远程查看终端的播放状态；
          16、产品支持远程升级，远程维护，远程重启功能，可通过平台对终端做远程操作；
          17、具有广播断电自动恢复功能（断电时保存所有设置，供电正常后自动恢复之前广播）；
          18、具有过热、过压及过载保护功能；
          19、抗感应雷击（外壳需可靠接地）、防水（IPX6）、防潮；
          20、电源：DC18V/1.65A或24V/2.5A。`,
          ProductParameters: ''
        },
        {
          value: 3,
          label: '云收扩机',
          // img: ['@/assets/img/img_3.png'],
          img: 'img_3',
          productIntroduction: '用于林场，乡村、公路、大型广场等场所进行广播、喊话、播放录制语音文件、背景音乐、在线内容等。',
          productDetails: `1、整机采用全金属设计，防腐防潮；
          2、内部电路板喷涂三防漆，提高户外使用稳定性；
          3、全网通 4G 接入+LAN以太网+UHF（选配）；
          4、支持多任务接收，终端可根据任务优先级选择高优先级的优先播放；
          5、产品工作状态指示，产品带 LED 指示灯，可指示不同状态；
          6、支持加密传输，保证传输过程的安全可控；
          7、终端支持手机扫码上线，免配置，极大简化工程安装；
          8、支持网页调试，查看终端信息；
          9、4G 接收带宽要求低（最低 8kbps 码率），播放稳定性好；
          10、4G 支持贴片式 SIM 芯片和插卡式双卡模式，都有做防水防潮设计，可避免室外设备用 SIM 卡产生的接触不良问题；
          11、支持远程音量控制，可通过远程修改终端音量；
          12、支持地理位置信息，可在 APP/小程序/平台上显示终端位置，并可通过 APP/小程序直接导航到终端安装位置；
          13、支持终端参数，状态上报，可在平台查看终端参数；
          14、支持实时远程查看终端的播放状态；
          15、产品支持远程升级，远程维护，远程重启功能，可通过平台对终端做远程操作；
          16、具有广播断电自动恢复功能（断电时保存所有设置，供电正常后自动恢复之前广播）；
          17、具有过热、过压及过载保护功能；
          18、抗感应雷击（外壳需可靠接地）、防水（IPX6）、防潮；
          19、输出功率：8欧姆 120W/200W
          20、宽电压范围输入，支持 AC110V-240V 电压输入。`,
          ProductParameters: ''
        },
        {
          value: 4,
          label: '壁挂智能广播音箱',
          // img: ['@/assets/img/img_4.png'],
          img: 'img_4',
          productIntroduction: '用于教室、走廊、办公室、会议室等室内场所进行广播、播放录制语音文件、背景音乐、在线内容等。',
          productDetails: `1、整机采用工程ABS外壳+金属网设计，防腐防潮；
          2、内部优质电路板，提高使用稳定性；
          3、全网通4G 接入+LAN网络；
          4、支持多任务接收，终端可根据任务优先级选择高优先级的优先播放；
          5、产品工作状态指示，产品带 LED 指示灯，可指示不同状态；
          6、支持加密传输，保证传输过程的安全可控；
          7、终端支持手机扫码上线，免配置，极大简化工程安装；
          8、支持网页调试，查看终端信息；
          9、4G 支持贴片式 SIM 芯片和插卡式双卡模式；
          10、以太网可以由路由器自动分配地址（DHCP）或固定IP地址，支持POE供电；
          11、支持远程音量控制，可通过远程修改终端音量；
          12、支持地理位置信息，可在 APP/小程序/平台上显示终端位置，并可通过 APP/小程序直接导航到终端安装位置；
          13、支持终端参数，状态上报，可在平台查看终端参数；
          14、支持实时远程查看终端的播放状态；
          15、产品支持远程升级，远程维护，远程重启功能，可通过平台对终端做远程操作；
          16、具有广播断电自动恢复功能（断电时保存所有设置，供电正常后自动恢复之前广播）；
          17、具有过热、过压及过载保护功能； 电源：DC18V/1.65A。`,
          ProductParameters: ''
        },
        {
          value: 5,
          label: '智能广播播放盒',
          // img: ['@/assets/img/img_5.png'],
          img: 'img_5',
          productIntroduction: '用于教室、走廊、办公室、会议室等校园场所进行广播、播放录制语音文件、背景音乐、在线内容等，可直接安装在各个广播管理区域，无需更换音箱设备。',
          productDetails: `1、采用嵌入式计算机和DSP音频处理技术应用，高速的嵌入式机芯片。
          2、壁挂级机箱设计，抽屉式插拔，安装施工方便。
          3、内置8G超大内存储存空间。
          4、支持以太网、AUX、无线咪头等连接播放，一秒速连。
          5、失真度小于1%，信噪比>85dB，声音保真通透。
          6、采用壁挂式设计，安装简单，改造灵活，复制方便。
          8、待机功率毫瓦级。
          9、所有声音完全同步，极低延时。
          10、支持POE及DC供电双模式。
          11、支持离线播放。`,
          ProductParameters: `1、功能定义：以太网+无线咪头+语音点播+LINEIN
          2、音频输出功率：30W/LINEOUT
          3、本机储存：4Gb
          4、颜色：白色
          5、尺寸：110x180x50mm`

        },
        {
          value: 6,
          label: '吸顶广播音箱',
          // img: ['@/assets/img/img_6.png'],
          img: 'img_6',
          productIntroduction: '用于写字楼、商场、办公室、会议室等校园场所进行广播、播放录制语音文件、背景音乐、在线内容等，可直接安装在各个广播管理区域，无需更换音箱设备。',
          productDetails: `1、采用嵌入式计算机和DSP音频处理技术应用，高速的嵌入式机芯片。
          2、吸顶设计，标准孔径,安装施工方便。
          3、内置4Gb内存储存空间。
          4、支持以太网、AUX、无线咪头等连接播放，一秒速连。
          5、失真度小于1%，信噪比>85dB，声音保真通透。
          6、采用壁挂式设计，安装简单，改造灵活，复制方便。
          8、待机功率毫瓦级。
          9、所有声音完全同步，极低延时。
          10、支持POE及DC供电双模式。
          11、支持离线播放。`,
          ProductParameters: `1、扬声器(喇叭)：6.5英寸同轴喇叭
          2、功放：D类功放
          3、喇叭功率:20W
          4、整机尺寸：240*160*170mm
          5、失真度：小于1%
          6、信噪比：>85dB
          7、频响范围：100Hz~20KHz
          8、工作环境温度：-40℃～80℃
          9、工作环境湿度：20%～80%相对湿度，无结露
          10、尺寸：直径190mm,高度150mm`
        },
        {
          value: 7,
          label: '云广播摄像机',
          // img: ['@/assets/img/img_7(1).png'],
          img: 'img_7',
          productIntroduction: '摄像头+智能广播二合一产品，极具性价比，具备摄像头和智能广播的全部功能，采购成本和安装维护成本极低，非常适合同时需要监控及广播的场景，比如：商业、学校、教育机构、企业、应急、社区、连锁机构等',
          productDetails: `1、  400 万真实高清晰度（非插值）像素摄像机
          2、  视频码流支持 H.264/H.265
          3、  支持 20W 大音量高音质音柱（音箱/号角），支持采样率高达 44.1KHZ 音频播放
          4、  广播覆盖面积 50-100 平方米。
          5、  中央广播控制云平台系统，支持集中播控。
          6、  支持微信小程序，方便快捷的 APP 程序。
          7、  支持文字、录音、音乐、麦克风等多种语音模式。 8.  支持人形识别
          9、  支持区域入侵、支持拌线等轻智能功能
          10、  支持 TF 卡前端存储，最高支持 256G 存储卡。
          11、  支持 ONVIF,支持 28181-2016（可选）
          12、  支持手机 APP 语音对话。
          13、  支持前端语音采集。 `,
          ProductParameters: ''
        },
        {
          value: 8,
          label: '定向广播',
          // img: ['@/assets/img/img_8.png'],
          img: 'img_8',
          productIntroduction: '该产品采用超声波载波技术开发的一款定向智能广播，广泛应用在交通灯、展馆、博物馆、学校操场、小区入口等需要清晰播报但又不扰民的场景。',
          productDetails: `1、整机采用全铸铝金属设计，防腐防潮；
          2、内部电路板喷涂三防漆，提高户外使用稳定性；
          3、采用100~500颗超声波压电探头，前期载波驱动电电路功率50~250W输出；
          4、声音角度10~15度，传输30~100米（外部嘈杂环境）
          5、全网通 4G 接入+LAN以太网+UHF（选配）；
          6、支持多任务接收，终端可根据任务优先级选择高优先级的优先播放；
          7、产品工作状态指示，产品带 LED 指示灯，可指示不同状态；
          8、支持加密传输，保证传输过程的安全可控；
          9、终端支持手机扫码上线，免配置，极大简化工程安装；
          10、支持网页调试，查看终端信息；
          11、4G 接收带宽要求低（最低 8kbps 码率），播放稳定性好；
          12、4G 支持贴片式 SIM 芯片和插卡式双卡模式，都有做防水防潮设计，可避免室外设备用 SIM 卡产生的接触不良问题；
          13、支持远程音量控制，可通过远程修改终端音量；
          14、支持地理位置信息，可在 APP/小程序/平台上显示终端位置，并可通过 APP/小程序直接导航到终端安装位置；
          15、支持终端参数，状态上报，可在平台查看终端参数；
          16、支持实时远程查看终端的播放状态；
          17、产品支持远程升级，远程维护，远程重启功能，可通过平台对终端做远程操作；
          18、具有广播断电自动恢复功能（断电时保存所有设置，供电正常后自动恢复之前广播）；
          19、具有过热、过压及过载保护功能；`,
          ProductParameters: `1、抗感应雷击（外壳需可靠接地）、防水（IPX6）、防潮；
          2、输出功率：50~250W；
          3、超声波矩阵发声板，直线传输夹角小于15度，传输距离30~100米；
          4、DC30V。`
        },
        {
          value: 9,
          label: '号角喇叭',
          // img: ['@/assets/img/img_9.png'],
          img: 'img_9',
          productIntroduction: '大功率高音号角喇叭',
          productDetails: '高音号角是一种无源的方向性较好的喇叭，需要搭配功放或收扩机配套使用，适应于乡村，大的广场，高速路等声音要求传输远的场景。',
          ProductParameters: `1、功率：25W/50W/100W
          2、口径：500mm
          3、阻抗：8/16欧姆
          4、传播距离：200-500米
          5、频响：400-12KHz
          6、灵敏度：99dB
          7、净重：2.8Kg`
        },
        {
          value: 10,
          label: '手持麦克风',
          // img: ['@/assets/img/img_10.png'],
          img: 'img_10',
          productIntroduction: '无线麦克风的一种，配合智能广播音响进行使用，可用于公共场所。',
          productDetails: `1、重量较轻，手感舒适。
          2、支持100米超长传输距离，防啸叫距离0.5米，声音清晰可听。
          3、采用U段频道，无干扰。
          4、非常高的语音可辨识度，舒适的高音。
          5、完整、自然的声音，环境噪音很低。
          6、铝合金材质，防氧化防摔，有效保护首音头
          7、2节5号干电池供电。`,
          ProductParameters: `1、功能定义：无线语音传输
          2、按键定义：电源开关，频道切换
          3、供电方式：干电池
          4、显示屏：段码屏
          5、使用方式：手持
          6、链接主体：智能广播终端
          7、传输方式：无线
          8、指向特征：心型指向
          9、传输距离：约100米
          11、尺寸：50x240mm`
        },
        {
          value: 11,
          label: '远场扩音麦',
          // img: ['@/assets/img/img_11.png'],
          img: 'img_11',
          productIntroduction: '该产品是用于会议，教学等场景，进行远场拾音并扩音的麦克风设备，安装使用极简。',
          productDetails: `1、无感扩音 音质清晰，解放教师双手，同时免接触式扩音便于防疫和保持健康教学环境。
          2、麦克风阵列，教师可以在教室更大范围内自由走动，教室内的学生的发言都可被拾取，师生可以互相听到对方清晰的语音。
          3、自适应快速收敛算法，支持啸叫抑制，混响抑制，智能降噪及自动增益控制，在嘈杂环境下也可以轻松聆听。
          4、超强音频系统集成度，内置强大音频处理单元，超低信号处理延时，无需额外机柜放置机架式音频处理器，易于快速低成本安装部署。
          5、运维简单方便，解决无线麦、小蜜蜂等设备的发放回收充电等设备管理问题，减少运维成本。`,
          ProductParameters: `1、麦克风类型 全指向麦克风
          2、麦克风阵列 内置六个全向麦组成环形阵列，360 度全向拾音
          3、拾音距离 3~5 米清晰拾音
          4、灵敏度 -26 dBFS
          5、信噪比 64 dB(A)
          6、频率响应 80Hz - 16kHz
          7、采样率 32K 采样，高清宽带音频
          8、支持啸叫抑制，自动增益控制
          9、供电 USB DC5V`
        },
        {
          value: 12,
          label: 'IP&4G寻呼话筒',
          // img: ['@/assets/img/img_12.png'],
          img: 'img_12',
          productIntroduction: 'IP寻呼话筒（电话编码播控器）是一款集4G和IP播出于一体的，针对IOT云广播系统多模式的播控设备。IP播出是将控制信号进行加密，并将输入的模拟音频信号经采样、编码、压缩后转换成IP数据包和音频流输出，最终实现对终端设备的远程控制和管理。',
          productDetails: `1、整机采用铝合金铣加工工艺加工而成，美观厚实；
          2、安卓5.1X系统，7寸触摸高清屏界面，操作方便，一目了然；
          3、全网通 4G 接入+LAN网络；
          4、支持多任务接收，终端可根据任务优先级选择高优先级的优先播放；
          5、集接收、编码和播控管理功能于一体，集成度高
          6、支持实时应急插播(支持按优先级广播，紧急广播优先播出
          7、支持登录密码认证，保证控制系统安全
          8、内置监听扬声器，高保真信号源监听
          9、软件系统支持远程控制、配置与维护
          10、支持一键式开启应急/正常广播功能
          11、支持后台管理
          12、应急广播优先级可自定义选择(上级优先/下级优先)功能
          13、具有监听输出音源功能，监听音量可调
          14、系统逻辑码寻址操作功能
          15、支持本地存储播放功能`,
          ProductParameters: ''
        }
      ]
    },
    {
      link: 2,
      label: '前端产品',
      statement: []
    },
    {
      link: 3,
      label: '主机及服务器',
      statement: [{
        value: 1,
        label: '主机及服务器',
        img: 'main_engine',
        productIntroduction: '工业级无扇X86主机，可安装在广播站主控室，对整个广播系统进行实时有效的管理，控制及直播；IP网络广播服务器软件的运行载体，系统管理控制中心，支持长时间7*24小时工作。',
        productDetails: `1、Linux嵌入式系统，杜绝病毒侵扰，长时间运行，系统更安全可靠；
          2、 配置27寸高清IPS广角液晶屏显示器及标准键盘鼠标。
          3、 工业级机箱设计，机箱采用整体高硬度合金铝铣加工结构，有较高的抗震、防磁、防尘、防冲击的能力。
          4、 内置256GB SSD硬盘，具有抗震动、抗摔、读写速度快、功耗低等特点。
          5、 一体定制高性能集成主板，千兆双网卡。
          6、 工业级专用主板设计，Intel Core  i5六核处理器，12MB三级缓存处理速度更快，运作性能更强，可以长时期不断电稳定工作。
          7、 运载服务器软件后构成系统管理控制中心，服务器软件采用后台系统服务运行，是企业级的标准服务器工作模式。
          8、 开机系统即可自动运行，相比运行在界面前台的软件具有更高的稳定性和可靠性。`,
        ProductParameters: `1、显示器：尺寸 27英寸，亮度 350cd/m²，色数 10.7亿
          2、软件操作平台：ubuntu系统
          3、操控方式 键盘鼠标操作
          4、支持2xSATA3.0、1x mSATA、2xUSB2.0、2xUSB3.0、2xHDMI、2xRJ45、2xHMID
          5、工作环境温度：-20℃～60℃
          6、工作环境湿度/湿度：5%～95%相对湿度，无结露
          7、主板：工业级主板，防潮，防感应雷击、防静电、耐高温
          8、标准接口：HDMI，VGA，USB（X8），LAN（X2），AUDIO（I/O）
          9、硬盘：256G SSD 固态硬盘（可根据用户需求升级）
          10、内存：DDR4  16G|(因产品不断升级，容量会不断增加)
          11、网卡：千兆有线网卡（X2）
          12、CPU Intel Core i5 6Core 12MB
          13、系统音频信号信噪比 LINE：70dB；MIC：60dB
          14、系统音频信号失真度 1KHz<0.5%`
      }]
    }
  ]
}
