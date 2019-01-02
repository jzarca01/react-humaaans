import React from 'react';
import PropTypes from 'prop-types';


import Wrapper from '../../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Standing21 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  shirtColor,
  coatColor,
  hatColor
}) => (
  <Wrapper className={className}>
    <svg width={0.8 * height} height={height} viewBox={`0 0 380 480`}>
      <g
        id="humaaans/standing-21"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="humaaan-9" transform="translate(34.000000, 10.000000)">
          <g
            id="Head/Front/Hijab-1"
            transform="translate(180.256501, 70.920231) rotate(15.000000) translate(-180.256501, -70.920231) translate(109.404234, 16.687113)"
          >
            <g
              id="Head"
              transform="translate(56.316359, 32.329762)"
              fill={skinColor}
            >
              <path d="M8.61668863,35.9695996 C3.8111203,30.3288374 0.558611141,23.4160055 1.10210733,15.6699789 C2.66807119,-6.64848056 33.7361385,-1.73870383 39.7795208,9.52573796 C45.8229031,20.7901798 45.1047922,49.3633705 37.294259,51.3766405 C34.1794292,52.1795298 27.5439155,50.2127726 20.7905107,46.1421897 L25.0294931,76.1313749 L0,76.1313749 L8.61668863,35.9695996 Z" />
            </g>
            <g id="Hijab" transform="translate(37.544240, 29.201075)">
              <path
                d="M52.9113057,5.22644165 C52.3379954,4.88426335 51.1385301,4.16250736 50.5308697,3.90091987 C50.3870706,3.83797362 49.380229,3.11967006 49.353153,3.12877241 C48.5908497,3.38594877 46.3834354,4.33546175 46.1939709,5.15593345 C46.1646049,5.2181095 46.1357777,5.27643455 46.1076914,5.3274077 C45.7949033,5.89602442 45.5079114,6.47878479 45.2341207,7.06861698 C44.6333303,8.36339107 44.1147108,9.71663025 43.6193955,11.0592267 C42.6546285,13.6739814 41.8164855,16.3496518 41.0458978,19.0314137 C40.2613679,21.7614182 39.5955144,24.5232808 38.8501167,27.2645581 C37.7775173,31.2090959 36.4047248,35.0568688 35.3395342,38.9997962 C34.6593344,41.5174358 34.2810116,44.064623 34.4596322,46.6558517 C34.4613834,46.6870097 34.4623937,46.7177476 34.4652226,46.7493958 C34.4663002,46.7623491 34.4679167,46.7751624 34.4690617,46.7881158 C34.499438,47.1864486 34.5427461,47.5857616 34.6004678,47.9862649 C34.6509826,48.3287233 34.7016322,48.672442 34.7556495,49.0160907 C35.7286335,47.07589 36.4714718,44.9380284 37.2597734,42.9089048 C37.3368928,42.7102636 37.4104425,42.5101519 37.4823083,42.3094101 C37.7364992,41.897914 37.9956743,41.4893585 38.2577455,41.0823435 C39.9104579,38.5157613 41.5697035,35.9586315 43.1545238,33.3456272 C46.0050452,28.6459446 48.828962,23.8469063 52.2084752,19.5312727 C53.20638,18.2568739 54.2275216,17.0020101 55.2128986,15.7171786 C55.7736138,14.9860499 56.3197808,14.2426681 56.8482338,13.4860529 C57.2260178,12.9450233 58.8684616,11.0592267 58.2736966,9.92619432 C57.9693896,9.34648698 54.3985313,6.11420071 52.9113057,5.22644165 Z"
                id="Front"
                fill={hairColor}
              />
              <path
                d="M50.7118566,3.99550595 C51.2693892,4.18286549 50.9981434,3.02268747 50.4581278,2.61441847 C47.9563507,0.72299535 38.3917519,0.0366368799 30.0684339,1.76445805 C24.4925908,2.92193632 18.0077445,5.80284064 13.554153,9.50647072 C9.53935997,12.8453019 6.77828339,18.1976232 5.35675211,23.3688645 C3.86419231,28.7987687 3.63813631,34.4596543 4.46968475,40.0277578 C4.65236875,41.2508251 5.04491287,42.4163731 5.26362582,43.6134977 C5.50992667,44.961619 5.63626823,46.2595935 6.07534118,47.5712002 C6.34422018,48.374175 6.80113604,49.1613616 7.03055475,49.9689269 C7.29243383,50.8904178 7.13280838,51.7429135 6.94182056,52.6801927 C6.63059896,54.2078271 6.24471162,55.7323317 5.6963165,57.1913185 C4.87279737,59.3821982 3.8734569,61.4341136 3.24689609,63.7076209 C2.41322022,66.7327042 -1.07409261,76.5768331 1.47443399,79.2600615 L49.9884774,79.2600615 C48.7668553,75.9277682 45.0999227,72.0059779 44.3575889,68.4388083 C43.9203688,66.3374416 43.7123616,61.7483484 43.6665877,61.5815633 C42.5733181,54.0452847 40.4386149,50.4463839 39.1016387,49.1402978 C37.7646625,47.8342117 35.9839091,47.4325836 35.8921553,46.2996553 C35.5129247,41.6139547 37.3762054,37.1243205 38.7424923,32.7512549 C40.3708641,27.5392563 41.564212,22.197961 43.2429557,17.0036285 C43.986319,14.7034829 47.8170054,3.02268747 50.7118566,3.99550595 Z"
                id="Turban"
                fill={hatColor}
              />
              <path
                d="M33.7022496,9.38605991 C31.8728096,15.1907655 31.4793375,18.2892962 31.8728096,26.2205929 L30.9753742,26.2205929 C29.2988714,18.7358327 30.7909724,11.6897193 32.5742773,9.38605991 L33.7022496,9.38605991 Z M9.15880291,24.366533 C12.5679994,32.6388508 14.1224017,37.5237763 23.642592,44.2178851 L22.9074559,44.7326329 C13.4566114,39.3764572 10.7044279,32.9874219 8.441721,24.711152 L9.15880291,24.366533 Z M23.1663139,15.9482772 C24.7147622,27.6899904 25.1668297,34.3968662 33.2333745,47.2407044 L32.3751528,47.5030892 C24.0732886,36.3200311 22.7573159,27.1925599 22.365094,16.0127636 L23.1663139,15.9482772 Z M14.2558122,50.8268886 L14.9900831,49.9342904 C25.0095315,53.0726049 23.8934621,59.5518044 36.5130324,66.1134391 L35.4584486,66.7524218 C24.4083729,62.1921004 21.8252672,52.4110626 14.2558122,50.8268886 Z"
                id="Shade"
                fill-opacity="0.2"
                fill="#000000"
              />
            </g>
          </g>
          <g
            id="Bottom/Standing/Sprint"
            transform="translate(0.000000, 211.717748)"
          >
            <path
              d="M216.369041,-10.0727044 C196.423859,6.18867371 204.011561,148.763054 202.680276,150.558065 C202.088594,151.355848 170.480298,158.144276 107.855391,170.923349 L110.558525,181.958225 C183.813718,178.322541 222.576083,173.785976 226.845617,168.348531 C232.958368,160.563665 240.513402,117.025606 249.510719,37.7343524 L216.369041,-10.0727044 Z"
              id="Leg"
              fill={skinColor}
              transform="translate(178.683055, 85.942760) rotate(-55.000000) translate(-178.683055, -85.942760) "
            />
            <path
              d="M118.410452,159.31044 L123.171728,177.082905 C177.777854,183.353061 213.77612,175.591864 226.44697,163.538776 C234.894203,155.503384 242.468693,112.083653 249.170439,33.2795813 L213.716837,-17.3534084 C166.238637,18.4658455 194.538929,135.722899 193.325609,138.405883 C192.11229,141.088866 163.314424,143.210373 118.410452,159.31044 Z"
              id="Pant"
              fill={darken(pantColor)}
              transform="translate(183.790445, 80.977311) rotate(-55.000000) translate(-183.790445, -80.977311) "
            />
            <g
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(232.966090, 195.312561) rotate(20.000000) translate(-232.966090, -195.312561) translate(201.157776, 174.454650)"
              fill={shoeColor}
            >
              <path
                d="M2.79301173,26.4915537 C1.62626761,29.6061473 1.04289555,31.9365831 1.04289555,33.4828611 C1.04289555,35.3635003 1.35619618,38.1078205 1.98279745,41.7158218 C4.16447086,41.7158218 23.7715371,41.7158218 60.8039962,41.7158218 C62.3325506,36.662479 61.4501804,33.9343419 58.1568854,33.5314103 C54.8635904,33.1284788 52.1277943,32.7646639 49.9494971,32.4399656 L22.6099678,20.2518671 C22.0839009,20.0173438 21.4673207,20.2536867 21.2327974,20.7797536 C21.2287854,20.7887531 21.2249011,20.7978091 21.2211457,20.8069187 L19.4637818,25.069848 C16.415052,26.4923128 13.9376425,27.2035452 12.0315534,27.2035452 C10.4829012,27.2035452 8.34419941,26.5780944 5.61544804,25.3271928 L5.61545374,25.3271803 C4.56828164,24.8471405 3.33023177,25.3068921 2.85019196,26.3540642 C2.82950154,26.3991988 2.81042931,26.4450579 2.79301173,26.4915537 Z"
                id="shoe"
              />
            </g>
            <polygon
              id="Leg"
              fill={darken(skinColor)}
              points="135.576421 0 81.6107873 129.55569 28.5709689 239.084106 41.0847787 239.084106 177.994829 0"
            />
            <g
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(25.029493, 207.536214)"
              fill={shoeColor}
            >
              <path
                d="M2.79301173,26.4915537 C1.62626761,29.6061473 1.04289555,31.9365831 1.04289555,33.4828611 C1.04289555,35.3635003 1.35619618,38.1078205 1.98279745,41.7158218 C4.16447086,41.7158218 23.7715371,41.7158218 60.8039962,41.7158218 C62.3325506,36.662479 61.4501804,33.9343419 58.1568854,33.5314103 C54.8635904,33.1284788 52.1277943,32.7646639 49.9494971,32.4399656 L22.6099678,20.2518671 C22.0839009,20.0173438 21.4673207,20.2536867 21.2327974,20.7797536 C21.2287854,20.7887531 21.2249011,20.7978091 21.2211457,20.8069187 L19.4637818,25.069848 C16.415052,26.4923128 13.9376425,27.2035452 12.0315534,27.2035452 C10.4829012,27.2035452 8.34419941,26.5780944 5.61544804,25.3271928 L5.61545374,25.3271803 C4.56828164,24.8471405 3.33023177,25.3068921 2.85019196,26.3540642 C2.82950154,26.3991988 2.81042931,26.4450579 2.79301173,26.4915537 Z"
                id="shoe"
              />
            </g>
            <path
              d="M33.3607151,216.330836 L61.1665391,221.545314 C82.6659242,189.93722 172.641729,60.3334253 182.506721,2.84217094e-14 L120.604689,2.84217094e-14 C87.6604606,43.6149576 53.8540692,184.199884 33.3607151,216.330836 Z"
              id="Pant"
              fill={pantColor}
            />
          </g>
          <g
            id="Body/Jacket"
            transform="translate(156.291764, 199.723885) rotate(10.000000) translate(-156.291764, -199.723885) translate(22.922792, 102.208568)"
          >
            <path
              d="M202.36805,92.9454703 L231.911096,121.765913 C240.507033,125.432536 247.550179,129.481229 253.040534,133.911991 C254.275232,135.401321 255.619403,138.254954 249.810207,136.977994 C244.001012,135.701034 237.83318,134.619125 236.741352,136.508318 C235.649525,138.397511 238.866684,141.292426 236.848851,143.764894 C235.503629,145.413206 230.979542,140.170249 223.27659,128.036023 L192.55573,109.923763 L202.36805,92.9454703 Z M71.2380339,97.0100305 L93.0318307,97.0957353 C79.5751668,140.53616 72.3105679,163.585377 71.2380339,166.243387 C68.8248325,172.223909 73.9314912,181.33214 76.1153011,186.226836 C69.002705,189.409511 69.7605597,177.622767 60.788211,181.797022 C52.5986673,185.607089 46.3689017,192.510675 36.9070672,186.672433 C35.7437902,185.954655 34.4690282,183.252093 37.5490144,181.140184 C45.2223833,175.878647 56.2801726,166.67001 57.7742541,163.638916 C59.8117011,159.505478 64.2996277,137.295849 71.2380339,97.0100305 Z"
              id="Skin"
              fill={skinColor}
            />
            <path
              d="M127.253062,9.62801148 L136.10198,7.30113352 C154.949431,44.5858758 185.024817,77.3308125 226.328138,105.535944 L200.300388,143.465978 C157.830582,101.876039 130.018383,57.5663646 127.253062,9.62801148 Z"
              id="Coat-Back"
              fill={darken(coatColor)}
              transform="translate(176.790600, 75.383556) rotate(5.000000) translate(-176.790600, -75.383556) "
            />
            <path
              d="M93.8605991,118.890092 L174.163556,118.890092 C155.559206,73.654651 146.257032,35.2276804 146.257032,3.60918021 L122.033596,0 C102.996252,30.6177517 97.6200564,68.3144034 93.8605991,118.890092 Z"
              id="Shirt"
              fill={shirtColor}
            />
            <path
              d="M121.520728,0.017124206 C121.523909,0.0114151449 121.527089,0.00570707617 121.530269,-1.6252454e-14 L123.111475,-4.26344666e-14 C125.003525,0.0651529549 127.885361,0.18253894 131.756981,0.352157954 L137.610232,17.0793753 C138.229376,37.4737638 141.845084,78.5739596 148.457356,140.379963 L95.8171563,140.379963 C95.9551521,144.648648 96.1826852,148.957209 96.4997555,153.305645 L57.359255,153.305645 C63.2139835,87.2527747 84.5947197,36.1508929 121.501464,1.42108547e-14 L121.520728,0.0171241994 Z"
              id="Coat-Front"
              fill={coatColor}
            />
            <path
              d="M99.2943249,85.760535 C100.792458,112.369797 104.543326,130.713251 110.546928,140.790899 L95.8307133,140.790899 C95.1864427,121.646313 96.3409801,103.30288 99.2943237,85.7605423 Z"
              id="Shade"
              fill-opacity="0.1"
              fill="#000000"
            />
            <polygon
              id="Light"
              fill-opacity="0.2"
              fill="#FFFFFF"
              points="107.533897 108.461137 133.49063 96.3940759 133.49063 108.461137"
            />
          </g>
        </g>
      </g>
    </svg>
  </Wrapper>
);

Standing21.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  shirtColor: PropTypes.string,
  coatColor: PropTypes.string,
  pantColor: PropTypes.string,
  hatColor: PropTypes.string
};

Standing21.defaultProps = {
  height: 480,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  shirtColor: '#DDE3E9',
  coatColor: '#89C5CC',
  pantColor: '#2F3676',
  hatColor: '#8991DC'
};

export default Standing21;
