import SocialIcons from '../socialIcons';

export default function Footer({ settings }) {
  return (
    <div className="relative w-screen h-24  border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <footer className="absolute bottom-0  mx-auto left-0 w-screen h-24 z-20">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4   h-full w-full max-w-screen-xl mx-auto">
          <SocialIcons settings={settings} />

          <p className="flex gap-2 items-center text-lg text-[#bfbecb] h-[24px] ">
            Built with{' '}
            <a target="_blank" href="https://nextjs.org" className="text-white">
              <svg
                height="30px"
                viewBox="0 0 207 124"
                version="1.1"
                fill="#FFFFFF"
                className="text-white"
              >
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="#FFFFFF">
                  <g
                    transform="translate(-247.000000, -138.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="next-black"
                      transform="translate(247.000000, 138.000000)"
                    >
                      <g id="EXT-+-Type-something">
                        <path
                          d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                          id="EXT"
                          fill="#FFFFFF"
                        ></path>
                        <polygon
                          id="Type-something"
                          fill="#FFFFFF"
                          points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                        ></polygon>
                      </g>
                      <path
                        fill="#FFFFFF"
                        d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                        id=".JS"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>{' '}
            Open sourced on
            <a
              target="_blank"
              href="https://github.com/tao101/my-portfolio-v3-web"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <path
                  fill="#ffffff"
                  d="M6 1q1.633 0 3.012.805t2.184 2.184.805 3.012q0 1.961-1.145 3.527t-2.957 2.168q-.211.039-.312-.055t-.102-.234l.004-.598q.004-.575.004-1.051 0-.758-.406-1.109.445-.047.801-.141t.734-.305.633-.52.414-.82.16-1.176q0-.93-.617-1.609.289-.711-.062-1.594-.219-.07-.633.086t-.719.344l-.297.187q-.727-.203-1.5-.203t-1.5.203q-.125-.086-.332-.211t-.652-.301-.664-.105q-.352.883-.062 1.594-.617.68-.617 1.609 0 .664.16 1.172t.41.82.629.523.734.305.801.141q-.305.281-.383.805-.164.078-.352.117t-.445.039-.512-.168-.434-.488q-.148-.25-.379-.406t-.387-.187l-.156-.023q-.164 0-.227.035t-.039.09.07.109.102.094l.055.039q.172.078.34.297t.246.398l.078.18q.102.297.344.48t.523.234.543.055.434-.027l.18-.031q0 .297.004.691t.004.426q0 .141-.102.234t-.312.055q-1.812-.602-2.957-2.168T.001 7.001q0-1.633.805-3.012T2.99 1.805 6.002 1zM2.273 9.617q.023-.055-.055-.094-.078-.023-.102.016-.023.055.055.094.07.047.102-.016zm.243.266q.055-.039-.016-.125-.078-.07-.125-.023-.055.039.016.125.078.078.125.023zm.234.351q.07-.055 0-.148-.062-.102-.133-.047-.07.039 0 .141t.133.055zm.328.328q.062-.062-.031-.148-.094-.094-.156-.023-.07.062.031.148.094.094.156.023zm.445.196q.023-.086-.102-.125-.117-.031-.148.055t.102.117q.117.047.148-.047zm.493.039q0-.102-.133-.086-.125 0-.125.086 0 .102.133.086.125 0 .125-.086zm.453-.078q-.016-.086-.141-.07-.125.023-.109.117t.141.062.109-.109z"
                ></path>
              </svg>
            </a>
            deployed on{' '}
            <a target="_blank" href="https://vercel.com">
              <svg
                version="1.1"
                id="layer"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="-153 -46 652 652"
                height="70px"
                fill="#ffffff"
              >
                <path
                  d="M168.3,240.9c-23.4,0-40.3,15.3-40.3,38.2c0,22.9,19,38.2,42.4,38.2c14.2,0,26.6-5.6,34.4-15l-16.2-9.4
	c-4.3,4.7-10.8,7.4-18.1,7.4c-10.2,0-18.8-5.3-22-13.8h59.5c0.5-2.4,0.7-4.8,0.7-7.4C208.6,256.1,191.8,240.9,168.3,240.9
	L168.3,240.9z M148.2,271.6c2.7-8.5,9.9-13.8,20.1-13.8c10.2,0,17.4,5.3,20.1,13.8H148.2z M396.8,240.9c-23.4,0-40.3,15.3-40.3,38.2
	c0,22.9,19,38.2,42.4,38.2c14.2,0,26.6-5.6,34.4-15l-16.2-9.4c-4.3,4.7-10.8,7.4-18.1,7.4c-10.2,0-18.8-5.3-22-13.8h59.5
	c0.5-2.4,0.7-4.8,0.7-7.4C437.2,256.1,420.3,240.9,396.8,240.9L396.8,240.9z M376.8,271.6c2.7-8.5,9.9-13.8,20.1-13.8
	c10.2,0,17.4,5.3,20.1,13.8H376.8L376.8,271.6z M294,279.1c0,12.7,8.3,21.2,21.2,21.2c8.7,0,15.3-4,18.7-10.4l16.3,9.4
	c-6.7,11.2-19.4,18-35,18c-23.5,0-40.3-15.3-40.3-38.2c0-22.9,16.9-38.2,40.3-38.2c15.6,0,28.2,6.8,35,18l-16.3,9.4
	c-3.4-6.5-9.9-10.4-18.7-10.4C302.3,257.8,294,266.3,294,279.1z M469,217.5v97.6h-19.1v-97.6H469z M-52.6,206.9l78.4,135.8H-131
	L-52.6,206.9z M143.5,217.5L84.7,319.4L25.9,217.5h22.1l36.8,63.7l36.8-63.7H143.5z M268.5,243v20.6c-2.1-0.6-4.4-1-6.8-1
	c-12.3,0-21.2,8.5-21.2,21.2v31.4h-19.1V243h19.1v19.5C240.5,251.7,253,243,268.5,243z"
                />
              </svg>
            </a>
          </p>
          <p className="text-[#bfbecb] flex gap-2 text-lg">
            <a className="text-white" href="https://taoufiqlotfi.tech">
              @TaoufiqLotfi
            </a>
            2020-{new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

//
