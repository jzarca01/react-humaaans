import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Sitting7 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  shirtColor,
  coatColor,
  wheelchairColor
}) => (
  <Wrapper className={className}>
    <svg
      width={0.95 * height}
      height={height}
      viewBox="0 0 380 400"
      version="1.1"
    >
      <g
        id="humaaans/sitting-7"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="A-Human/Sitting"
          transform="translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000) translate(40.000000, 24.000000)"
        >
          <g id="Head/Front/Chongo" transform="translate(82.000000, 0.000000)">
            <g
              id="Head"
              stroke-width="1"
              transform="translate(54.000000, 31.000000)"
              fill={skinColor}
            >
              <path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z" />
            </g>
            <path
              d="M82.6634951,28.3699763 C79.3840534,27.3699763 74.6234565,27.0308443 72.6208149,27.2602642 C73.7600087,24.5308439 74.2120576,21.4899413 73.8435286,18.5290858 C73.4853344,15.6520661 72.1997702,13.2023672 71.0108165,10.6353788 C70.4627695,9.45216518 69.8416903,8.27540043 68.9156982,7.37037661 C67.972405,6.44834378 66.7783223,5.83972796 65.5262119,5.54936581 C64.2448581,5.2521517 62.9050174,5.27689939 61.6216732,5.54662502 C61.0539519,5.66592985 60.5445644,5.92549845 59.9877902,6.0697928 C59.4176191,6.21763405 59.141031,5.86076752 58.7271824,5.50212755 C57.7298424,4.63797369 56.2677456,4.21137833 55.0059895,4.0587004 C53.5903607,3.88748186 52.1214506,4.10102137 50.7713517,4.56639079 C49.457233,5.01942668 48.1947879,5.75508602 47.2446815,6.82681415 C46.8216464,7.30387223 46.4376536,7.8468704 46.188089,8.44637714 C46.0857368,8.69240304 46.0688185,8.83814839 45.8233112,8.9282719 C45.5962532,9.01170466 45.3306889,9.014123 45.0963584,9.0935252 C42.8305256,9.86094542 40.8932607,11.6116631 39.8384289,13.8595111 C39.2230147,15.1708968 38.9314987,17.4797836 39.0113441,20.0676663 C39.0911894,22.655549 41.4279109,29.4080735 43.613439,31.8710732 C45.5642539,34.0695065 48.4317213,35.5202692 51.1990566,36.1553256 C49.36223,38.2548487 48.1395162,40.8784262 47.2353419,43.5466625 C46.2532361,46.4450442 45.6454006,49.4566043 45.4209456,52.525076 C45.2077438,55.4404668 45.187993,58.5235291 45.8714634,61.3766879 C46.5108389,64.0448435 47.8781623,66.233684 50.1607604,67.6222954 C51.2063292,68.2583997 52.331284,68.7362639 53.4627459,69.1730163 C54.5778253,69.6034004 55.6962731,70.021854 56.8643276,70.2633656 C59.0749653,70.7202709 61.6221325,70.641836 63.3249903,68.8822511 C63.9387204,68.2479202 64.6136933,67.450835 65.0614552,66.675918 C65.2224473,66.3972445 65.3195173,66.2149822 65.1239229,65.9425963 C64.8895924,65.6163621 64.5105756,65.3663863 64.2095669,65.1111707 C62.493006,63.6560549 61.4304424,61.7134822 61.1625814,59.4049338 C60.8908162,57.0626093 61.5200101,54.03928 63.7973259,53.0170472 C66.6084499,51.7551569 69.7042766,53.2035819 72.2028323,54.5537417 C73.264707,50.805958 75.4450295,47.4314855 78.8633764,45.7123675 C82.6451998,43.8105035 86.9847925,43.5879355 90.871188,41.9561196 C91.8839153,41.5308947 92.9153983,41.0481938 93.6610301,40.1817828 C93.9726032,39.8196765 94.3381465,39.3499541 94.4625461,38.871042 C94.625988,38.2419509 94.220254,37.7145107 93.9068437,37.2240711 C92.2450186,34.623629 85.9429367,29.3699763 82.6634951,28.3699763 Z"
              id="hair"
              fill={hairColor}
            />
          </g>
          <g
            id="Bottom/Sitting/Wheelchair"
            transform="translate(0.000000, 187.000000)"
          >
            <path
              d="M254.883773,18.0957316 C262.063646,8.35806555 280.010812,14.8042773 280,22.8655557 C279.971611,44.0311277 260.656682,144.512004 259.648224,150.855869 C258.639766,157.199734 247.83665,159.275085 247.20755,151.348454 C246.206544,138.735846 244.3468,95.012719 246.20755,74.6716648 C246.751065,68.7301478 247.324175,62.9870828 247.901388,57.6067645 C237.750194,75.8431618 222.314107,101.618833 201.593128,134.933778 L190.076573,129.672175 C199.120166,99.8760987 206.535776,78.8408618 212.323403,66.5664641 C222.233227,45.5497154 231.525307,27.551672 235.436043,21.2120072 C240.601842,12.8377695 248.98061,13.9494614 254.883773,18.0957316 Z"
              id="Skin"
              fill={skinColor}
            />
            <path
              d="M208.819223,123.340112 L213.936922,21.8299349 C217.625361,4.27739957 248.84365,12.4235349 248.830812,21.8299349 C248.801666,43.1853748 235.973522,116.956762 235.964839,123.319261 L208.819223,123.340112 Z"
              id="Leg-Back"
              fill={darken(pantColor)}
              transform="translate(228.825019, 67.419630) rotate(20.000000) translate(-228.825019, -67.419630) "
            />
            <path
              d="M281,30.1765514 C281,56.7177303 269.366261,119.105994 269.358267,124.950436 L241.17615,124 C246.102422,69.7571864 248.179877,42.4520039 247.408516,42.0844525 C245.672952,41.2574617 176.262132,51.6911698 155.444697,52.4790258 C125.425854,53.615118 113.00766,35.1988173 112,0.25055648 L170.147646,0.25055648 C219.869047,6.18567094 252.548003,10.3136421 268.184514,12.63447 C278.225902,14.1248493 281,22.8651399 281,30.1765514 Z"
              id="Leg-Front"
              fill={pantColor}
            />
            <g
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(216.820222, 128.225467) rotate(14.000000) translate(-216.820222, -128.225467) translate(186.320222, 108.225467)"
              fill={shoeColor}
            >
              <path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id={shoeColor}
              />
            </g>
            <g
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(243.000000, 111.000000)"
              fill="#E4E4E4"
            >
              <path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id="shoe"
              />
            </g>
            <rect
              id="Base"
              fill="#2F3676"
              x="245"
              y="151"
              width="53"
              height="7"
              rx="3.5"
            />
            <path
              d="M109,6 L216,6 C221.522847,6 226,10.4771525 226,16 L226,65 L103,65 C100.790861,65 99,63.209139 99,61 L99,16 C99,10.4771525 103.477153,6 109,6 Z"
              id="Seat"
              fill={wheelchairColor}
            />
            <path
              d="M216,6 L218.193678,6 C223.091205,6 227.268082,9.54701889 228.061559,14.3798408 L250,148 L239.314286,148"
              id="Wheel-Stuff"
              fill={wheelchairColor}
            />
            <circle
              id="Front-Wheel"
              fill={wheelchairColor}
              cx="245"
              cy="150"
              r="18"
            />
            <g
              id="Wheel"
              stroke-width="1"
              transform="translate(36.000000, 14.000000)"
              fill={wheelchairColor}
            >
              <path d="M76,152 C34.026359,152 0,117.973641 0,76 C0,34.026359 34.026359,0 76,0 C117.973641,0 152,34.026359 152,76 C152,117.973641 117.973641,152 76,152 Z M76,138 C110.241654,138 138,110.241654 138,76 C138,41.7583455 110.241654,14 76,14 C41.7583455,14 14,41.7583455 14,76 C14,110.241654 41.7583455,138 76,138 Z" />
              <rect id="Wheel-Stuff" x="72" y="10" width="8" height="132" />
              <rect
                id="Wheel-Stuff"
                transform="translate(76.000000, 76.000000) rotate(45.000000) translate(-76.000000, -76.000000) "
                x="72"
                y="10"
                width="8"
                height="132"
                rx="2"
              />
              <rect
                id="Wheel-Stuff"
                transform="translate(76.000000, 76.000000) rotate(90.000000) translate(-76.000000, -76.000000) "
                x="72"
                y="10"
                width="8"
                height="132"
                rx="2"
              />
              <rect
                id="Wheel-Stuff"
                transform="translate(76.000000, 76.000000) rotate(135.000000) translate(-76.000000, -76.000000) "
                x="72"
                y="10"
                width="8"
                height="132"
                rx="2"
              />
            </g>
          </g>
          <g id="Body/Pointing-Up" transform="translate(22.000000, 82.000000)">
            <path
              d="M191.456243,2.34082269 L229.360019,-9.03759567 C236.431,-14.5420411 243.100557,-18.5666331 249.36869,-21.1113719 C251.191683,-21.4545034 254.209733,-21.2552209 250.438302,-16.9769837 C246.666871,-12.6987465 242.892301,-8.02906778 243.969107,-6.23518449 C245.045914,-4.44130119 248.969279,-5.79360164 250.104775,-2.95198204 C250.861773,-1.05756897 244.361683,0.299249329 230.604506,1.11847287 L201.133571,18.4625605 L191.456243,2.34082269 Z M188.106855,69.1681252 L220.005126,92.5917238 C228.656594,94.9262021 235.884616,97.8306872 241.689192,101.305179 C243.060333,102.554584 244.717486,105.084837 239.031031,104.647546 C233.344575,104.210255 227.34361,104.006032 226.55899,105.945594 C225.774369,107.885156 229.215504,110.204659 227.629445,112.821636 C226.572072,114.566288 221.576617,110.191639 212.64308,99.6976902 L181.055424,86.5990869 L188.106855,69.1681252 Z"
              id="Skin"
              fill={skinColor}
            />
            <path
              d="M126.984936,15.649923 C152.146796,42.4399518 182.83581,59.9216266 224.690767,75.4277614 L215.396057,94.0136202 C172.211363,89.9419212 149.124049,86.6900124 131.024869,59.8586619 C126.482342,53.1245369 118.360034,29.953677 113.494175,17.9210142 L126.984936,15.649923 Z"
              id="Coat-Back"
              fill={darken(coatColor)}
              transform="translate(169.092471, 54.831772) rotate(15.000000) translate(-169.092471, -54.831772) "
            />
            <path
              d="M90,114 L167,114 C149.558211,60.8053811 140.648283,24.2959016 140.270216,4.47156148 C140.250941,3.46089747 138.384379,1.67996472 137.55857,1.91319372 C131.519523,3.61877223 125.057267,2.98104099 118.1718,0 C99.917485,29.3584068 93.6048263,65.5045499 90,114 Z"
              id="Shirt"
              fill={shirtColor}
            />
            <path
              d="M124.742502,0.0473953679 C146.814238,0.228130238 182.624,4.25865631 223.922675,-9 L228,11.3734803 C196.78685,31.4482286 165.18092,46.9990656 137.486251,44.790754 C149.512444,96.3770989 148.957979,138.605966 122.407472,138.605966 C109.728284,138.605966 96.0428359,138.605966 81.3511268,138.605966 C74.8304314,94.783947 91.9680949,34.0236152 107.855955,3.37659428 C108.462665,2.20627687 109.75441,-3.65929509e-13 112.797001,-3.65929509e-13 C115.448059,-3.65929509e-13 119.424647,-3.65929509e-13 124.726763,-3.65929509e-13 C124.73201,0.0157984696 124.737257,0.0315969258 124.742502,0.0473953679 Z"
              id="Coat-Front"
              fill={coatColor}
            />
          </g>
        </g>
      </g>
    </svg>
  </Wrapper>
);

Sitting7.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  coatColor: PropTypes.string,
  shirtColor: PropTypes.string,
  pantColor: PropTypes.string,
  wheelchairColor: PropTypes.string
};

Sitting7.defaultProps = {
  height: 400,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  shirtColor: '#DDE3E9',
  coatColor: '#FF4133',
  pantColor: '#2F3676',
  wheelchairColor: '#000000'
};

export default Sitting7;