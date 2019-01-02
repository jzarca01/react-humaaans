import React from 'react';
import PropTypes from 'prop-types';


import Wrapper from '../../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Standing23 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  shirtColor,
  coatColor
}) => (
  <Wrapper className={className}>
    <svg width={0.8 * height} height={height} viewBox={`0 0 380 480`}>
      <g
        id="humaaans/standing-23"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="humaaan-8" transform="translate(34.000000, 18.000000)">
          <g id="Head/Front/Curly" transform="translate(85.439497, 0.000000)">
            <g
              id="Head"
              stroke-width="1"
              transform="translate(56.316359, 32.329762)"
              fill={skinColor}
            >
              <path d="M8.61668863,35.9695996 C3.8111203,30.3288374 0.558611141,23.4160055 1.10210733,15.6699789 C2.66807119,-6.64848056 33.7361385,-1.73870383 39.7795208,9.52573796 C45.8229031,20.7901798 45.1047922,49.3633705 37.294259,51.3766405 C34.1794292,52.1795298 27.5439155,50.2127726 20.7905107,46.1421897 L25.0294931,76.1313749 L0,76.1313749 L8.61668863,35.9695996 Z" />
            </g>
            <path
              d="M107.18432,26.2397085 C106.666011,24.4178338 105.271891,22.8579294 103.393081,22.3951495 C102.937473,22.2828961 102.466945,22.2375565 101.998137,22.2564594 C101.829973,22.2631713 101.782811,22.3116615 101.704229,22.194066 C101.645929,22.1068795 101.644622,21.8938789 101.620628,21.7914194 C101.545966,21.4728088 101.452603,21.1581705 101.337377,20.8516825 C100.944262,19.8063356 100.28364,18.8811868 99.4872363,18.1018509 C97.9976224,16.6438581 95.984887,15.6376184 93.8937763,15.4555747 C92.7492892,15.3559918 91.6131209,15.5419393 90.5311278,15.9142452 C89.9709499,16.1069732 89.4277534,16.3469585 88.8987194,16.6122847 C88.7394249,16.6921428 88.2226284,17.0832832 88.0627839,17.0579423 C87.886233,17.0299988 87.5314124,16.5912586 87.3878617,16.4811283 C85.6134838,15.1197734 83.4223413,14.5845322 81.2122237,14.6009011 C78.7176172,14.6193246 76.3154798,14.7439745 74.2349567,16.2647032 C73.7945419,16.5866698 73.375096,16.9391825 72.9757252,17.3103241 C72.7654179,17.5057231 72.5617106,17.7084504 72.3674221,17.9196018 C72.2502027,18.0469913 72.1360771,18.1772573 72.0262141,18.3110162 C71.8397631,18.5380571 71.8696695,18.6126416 71.6086932,18.4542266 C70.607413,17.8459077 69.4471133,17.5614046 68.2784261,17.7050259 C67.58446,17.7903632 66.9092628,17.9987066 66.2681658,18.2729364 C66.0498834,18.3662868 65.544637,18.7386612 65.3119859,18.7422912 C65.0811909,18.7458526 64.5830259,18.4006683 64.3452871,18.3129339 C63.0612368,17.8389218 61.6772234,17.7220797 60.3275853,17.9411074 C58.9353906,18.1671209 57.5678086,18.7225663 56.3882588,19.490122 C55.8209309,19.859346 55.3259283,20.2684305 54.9283451,20.817438 C54.7566754,21.0544783 54.6015059,21.3052163 54.4069424,21.5249974 C54.293023,21.6536881 54.0674531,21.7857348 54.0063341,21.9486016 C54.0429093,21.8510733 52.4837888,21.2500142 52.336663,21.2115919 C51.5528402,21.0068784 50.7547174,21.0483827 49.9871884,21.30097 C48.5439123,21.7759409 47.3026934,22.8410811 46.2825757,23.9331375 C45.7586292,24.494062 45.3001331,25.1140925 44.9109374,25.7746685 C44.7244177,26.0910875 44.5538481,26.416547 44.3977848,26.7489239 C44.3221594,26.9099414 44.2720404,27.1113674 44.1724211,27.256427 C44.0439954,27.4433334 43.9577137,27.4468948 43.7251313,27.5283967 C42.5439315,27.9422069 41.4671635,28.6426435 40.647178,29.5890923 C39.8177737,30.5466364 39.279596,31.7258107 39.0539573,32.967584 C39.0406885,33.0407302 39.0327822,33.3438623 38.9899508,33.3834489 C38.9312379,33.4379661 38.6937055,33.413858 38.6038488,33.4244053 C38.2926847,33.4609099 37.9837206,33.5152216 37.6788815,33.587409 C37.1169161,33.7204146 36.5699383,33.916156 36.0525232,34.1721677 C34.0355253,35.1701203 32.5931429,37.041033 31.8872143,39.1462465 C31.146498,41.3555632 31.1596293,43.8867095 32.0449276,46.0547958 C32.1879283,46.4049799 32.3580855,46.7448905 32.5579427,47.0664462 C32.6806621,47.2638313 32.7202623,47.2643108 32.6405807,47.4714214 C32.5517552,47.7018182 32.3895044,47.9257086 32.2840413,48.1508318 C31.9399458,48.8855128 31.6993883,49.6647116 31.5474501,50.4605533 C31.2981613,51.7660213 31.1746169,53.1379235 31.4205369,54.4533224 C31.5347312,55.0641069 31.7336948,55.6611936 32.0372276,56.2052013 C32.1919846,56.4825816 32.373073,56.7456477 32.5775366,56.9889889 C32.6836871,57.115351 32.7964377,57.2360286 32.9143446,57.3516379 C32.9817887,57.4176613 33.0702016,57.475466 33.1275394,57.5492286 C33.2675151,57.7290806 33.2969403,57.5812129 33.2247524,57.8453063 C33.1238269,58.2145303 32.8950257,58.578823 32.7549125,58.9381161 C32.6105368,59.3083674 32.4800486,59.6836868 32.360698,60.0627047 C32.1189717,60.8301919 31.9145769,61.6115824 31.78677,62.4063967 C31.5413313,63.9323991 31.5844377,65.5583954 32.3062477,66.958926 C32.614868,67.5579989 33.0576203,68.0835146 33.5946293,68.4923252 C33.8574619,68.692313 34.1421571,68.8646997 34.4408087,69.0062663 C34.5942594,69.0791386 34.7901979,69.1103695 34.8601858,69.2587851 C34.9355362,69.4183644 34.8236794,69.7352628 34.798173,69.9136765 C34.5762468,71.4657732 34.46494,73.0953994 34.9263236,74.6164021 C35.3512696,76.0173436 36.2868931,77.2542541 37.5016431,78.0731766 C39.858199,79.6617779 43.0347403,79.5721943 45.510853,78.3004229 C46.1562813,77.9688679 46.7601156,77.5572493 47.2987746,77.0717311 C48.6704129,78.9181933 51.4929587,78.8597722 53.4976502,78.3336401 C55.995213,77.6782008 57.9992858,75.9415263 59.153948,73.6597483 C60.7327999,75.5817539 64.0462919,74.9581619 65.1411412,72.8730842 C65.4091301,72.362773 65.5680809,71.8003417 65.6463188,71.2311985 C65.6875003,70.9319018 65.6612376,70.6300025 65.6921753,70.3331028 C65.731638,69.9547699 65.9843643,69.5871212 66.1296338,69.2211162 C66.4125415,68.5088311 66.5881987,67.7730542 66.5957612,67.0047451 C66.59968,66.6036053 66.5488735,66.2126704 66.510717,65.8147495 C66.4764106,65.4565523 66.5757548,65.1228056 66.6321989,64.7692657 C65.9916518,64.8747386 65.2112666,64.7020095 64.607776,64.5162675 C64.0155604,64.3340183 63.4608826,63.8539793 63.0428805,63.4155815 C62.0723317,62.3975616 61.4794287,61.0630544 61.0739391,59.7348481 C60.1838283,56.8196842 60.5486864,53.3221588 63.4808202,51.7222568 C64.8467522,50.97696 68.9389121,50.9794047 70.5657976,51.3477557 C72.2763966,51.7350608 74.2156378,55.509559 74.3110633,55.8643318 C74.3701198,56.0839074 74.3404197,56.3556716 74.5421332,56.501964 C74.9854355,56.8236566 75.7165268,56.2654031 76.0435034,55.989872 C76.6077376,55.5143532 77.0102021,54.8816523 77.3587664,54.2403217 C78.1182516,52.843147 78.7305422,51.3448142 79.1630507,49.8152504 C79.4964899,48.6360075 79.7096848,47.4199862 80.1454932,46.27081 C80.5791705,45.1273184 81.262824,44.1052577 82.3257732,43.4574892 C83.4820854,42.7528064 84.8075234,42.3816647 86.0769299,41.9388151 C87.3351989,41.4999379 88.5717427,40.9635324 89.547104,40.0322881 C89.7615363,39.8275061 89.9698499,39.6099167 90.1424821,39.3688356 C90.2787453,39.1785048 90.4134272,38.8141436 90.6210533,38.693466 C90.9438362,38.5057378 91.4149136,38.9939271 91.69404,39.1711765 C93.0711096,40.0457804 94.2199967,41.2655687 95.146614,42.5980898 C96.068075,43.9233511 96.8241777,45.1985469 97.4385996,46.6783878 C97.8943457,47.7759233 98.1787795,49.1815221 98.9803399,50.0809875 C99.3381855,50.4826067 101.998137,50.7255754 102.859716,50.3749421 C103.721295,50.0243088 104.686894,49.113855 104.976058,48.5432735 C105.272097,47.9592682 105.342841,47.3177321 105.216341,46.6783878 C105.141953,46.3022464 104.990015,45.9508981 104.906895,45.5814687 C104.836907,45.2711452 104.773382,44.977807 104.622338,44.6935094 C104.336061,44.1547753 103.846971,43.7675387 103.257162,43.6056308 C103.870965,43.0397066 104.37958,42.3626933 104.731513,41.6058903 C105.097196,40.8196371 105.407123,39.8634628 105.495055,39.000502 C105.566555,38.2995861 105.456211,37.5733977 105.072515,36.9710373 C104.669982,36.3391582 103.956903,35.9269232 103.339937,35.5327693 C104.282367,34.7954172 105.088946,33.8986913 105.752043,32.9058754 C107.041594,30.9751718 107.839235,28.5414853 107.18432,26.2397085 Z"
              id="hair"
              fill={hairColor}
            />
          </g>
          <g
            id="Bottom/Standing/Skinny-Jeans-Walk"
            transform="translate(0.000000, 194.763541)"
          >
            <polygon
              id="Leg"
              fill={darken(pantColor)}
              points="133.49063 0 183.634758 132.684377 218.782099 230.479916 238.82308 230.479916 190.509575 1.02353644e-13"
            />
            <path
              d="M121.097514,0 C120.552445,45.5267591 120.946508,106.821151 119.676509,109.659057 C118.829844,111.550995 92.4953159,133.107162 40.6729263,174.327559 L51.0027861,191.89278 C112.527888,152.21665 144.863197,129.735517 148.008713,124.44938 C152.726988,116.520175 176.431228,43.5545895 188.764094,0 L121.097514,0 Z"
              id="Leg"
              fill={pantColor}
            />
            <g
              id="Accessories/Shoe/Flat-Pointy"
              transform="translate(58.923598, 197.107258) rotate(50.000000) translate(-58.923598, -197.107258) translate(27.115284, 176.249347)"
              fill={shoeColor}
            >
              <path
                d="M0,41.7158218 L1.04289555,19.8150154 L22.943702,19.8150154 C33.3284421,27.1152842 46.8860842,33.0250256 63.6166283,37.5442397 L63.6166283,41.7158218 L23.9865976,41.7158218 L10.4289555,39.6300307 L10.4289555,41.7158218 L0,41.7158218 Z"
                id="Shoe"
              />
            </g>
            <g
              id="Accessories/Shoe/Flat-Pointy"
              transform="translate(216.922274, 207.536214)"
              fill={shoeColor}
            >
              <path
                d="M0,41.7158218 L1.04289555,19.8150154 L22.943702,19.8150154 C33.3284421,27.1152842 46.8860842,33.0250256 63.6166283,37.5442397 L63.6166283,41.7158218 L23.9865976,41.7158218 L10.4289555,39.6300307 L10.4289555,41.7158218 L0,41.7158218 Z"
                id="Shoe"
              />
            </g>
          </g>
          <g id="Body/Hoodie" transform="translate(22.922792, 85.404334)">
            <path
              d="M198.964869,96.1669474 L232.231433,120.595314 C241.254011,123.029931 248.792082,126.059006 254.845649,129.682538 C256.275606,130.985537 258.003844,133.624326 252.073465,133.168278 C246.143085,132.712229 239.884706,132.499245 239.066429,134.522006 C238.248152,136.544766 241.836896,138.963766 240.182801,141.693 C239.080072,143.512489 233.870334,138.950187 224.553589,128.006095 L191.610963,114.34562 L198.964869,96.1669474 Z M71.2380339,97.0100305 L93.0318307,97.0957353 C79.5751668,140.53616 72.3105679,163.585377 71.2380339,166.243387 C68.8248325,172.223909 73.9314912,181.33214 76.1153011,186.226836 C69.002705,189.409511 69.7605597,177.622767 60.788211,181.797022 C52.5986673,185.607089 46.3689017,192.510675 36.9070672,186.672433 C35.7437902,185.954655 34.4690282,183.252093 37.5490144,181.140184 C45.2223833,175.878647 56.2801726,166.67001 57.7742541,163.638916 C59.8117011,159.505478 64.2996277,137.295849 71.2380339,97.0100305 Z"
              id="Skin"
              fill={skinColor}
            />
            <path
              d="M127.996379,9.99126343 L136.845297,7.66438547 C172.696724,33.5424787 191.22711,87.6619834 234.647976,113.391279 L225.880465,126.441219 C154.233028,123.866416 130.7617,57.9296166 127.996379,9.99126343 Z"
              id="Coat-Back"
              fill={darken(coatColor)}
              transform="translate(181.322177, 67.052802) rotate(5.000000) translate(-181.322177, -67.052802) "
            />
            <path
              d="M93.8605991,118.890092 C130.019619,118.890092 156.617436,118.890092 173.65405,118.890092 C177.300204,118.890092 176.613156,113.625177 176.086082,110.968472 C170.003016,80.3068849 146.257032,47.2551777 146.257032,3.60918021 L123.240844,0 C104.2035,30.6177517 97.6200564,68.3144034 93.8605991,118.890092 Z"
              id="Shirt"
              fill={shirtColor}
            />
            <path
              d="M94.5018144,30.0958364 C91.159002,29.1349436 88.5118406,26.8938416 86.5603303,23.3725304 C78.1478728,8.19306644 81.186005,-0.164352814 90.176254,-2.91148372 C99.1665031,-5.65861462 107.183923,-2.17603713e-14 121.507793,-7.54951657e-15 C122.286892,-6.66133815e-15 123.000459,0.0488414414 123.648494,0.146524324 L130.853759,0.557677906 C151.526451,70.6198746 157.227856,117.364282 147.957974,140.790899 L85.1543132,140.790899 C81.433263,149.467655 77.8725321,156.767924 74.4721203,162.691705 L57.359255,162.691705 C55.7486939,110.616897 68.1295471,66.4182737 94.5018144,30.0958364 Z"
              id="Coat-Front"
              fill={coatColor}
            />
            <path
              d="M98.8302349,104.808535 C100.805398,121.334664 104.015698,133.328785 108.461137,140.790899 L85.1543132,140.790899 C89.4948142,130.669705 94.0534546,118.675583 98.8302345,104.808534 Z"
              id="Shade"
              fill-opacity="0.1"
              fill="#000000"
            />
          </g>
        </g>
      </g>
    </svg>
  </Wrapper>
);

Standing23.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  shirtColor: PropTypes.string,
  coatColor: PropTypes.string,
  pantColor: PropTypes.string
};

Standing23.defaultProps = {
  height: 480,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  shirtColor: '#DDE3E9',
  coatColor: '#89C5CC',
  pantColor: '#2F3676'
};

export default Standing23;
