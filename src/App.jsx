import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/styles.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);
  
  // State to control the display of the GIF + text
  const [showYesContent, setShowYesContent] = useState(false);

  // We'll keep a ref for the "No" button so we can move it around
  const noButtonRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        id: `section-${index + 1}`,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 1, max: 1.4 },
        delay: 0.1,
        ease: 'power1.inOut',
      },
    });

    sections.forEach((section) => {
      const fadeItems = section.querySelectorAll('.fade-in');
      if (fadeItems.length) {
        gsap.from(fadeItems, {
          opacity: 0,
          y: 50,
          stagger: 0.3,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    sectionsRef.current = sections;

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Handle "Yes" click -> show the GIF and text
  const handleYesClick = () => {
    setShowYesContent(true);
  };

  // Handle "No" click -> randomize the button's position on the screen
  const handleNoClick = () => {
    if (noButtonRef.current) {
      const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // subtract button width to keep it in view
      const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // subtract button height
      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = randomX + 'px';
      noButtonRef.current.style.top = randomY + 'px';
    }
  };

  return (
    <div className="App bg-red-300">
      {/* Section 1 */}
      <div className="section border-[10px] border-white">
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-10 max-sm:mb-5 fade-in">
              <p className="text-4xl max-sm:text-3xl">hello my princess</p>
            </div>
            <div className="fade-in">
              <p className="text-2xl max-sm:text-xl">
                today is a <span className="text-red-600 animate-pulse">special</span> day, isn't it?
              </p>
            </div>
            <div className="fade-in mt-10 flex justify-center">
              <button
                onClick={() => {
                  window.scrollBy({
                    top: 100,
                    behavior: 'smooth',
                  });
                }}
              >
                <svg
                  className="w-8 h-8 text-white animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section bg-blue-200 border-[10px] border-white">
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center text-white">
            <p className="fade-in text-4xl">
              That's why I want to make this day special for <span className="text-red-600 animate-pulse">you</span>
            </p>
            <div className="fade-in mt-10 flex justify-center">
              <button
                onClick={() => {
                  window.scrollBy({
                    top: 100,
                    behavior: 'smooth',
                  });
                }}
              >
                <svg
                  className="w-8 h-8 text-white animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section bg-orange-500 border-[10px] border-white">
        <div className="h-full w-full flex items-center justify-center">
          <div className="fade-in text-white">
            <p className="text-2xl leading-15">
              I struggle to put into words how much you mean to me and <br />
              how grateful I am for having you in my life, <br />
              so I made this website
            </p>
            <p className="text-md font-sans">plus I'm not in DC rn, lmao</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section bg-teal-200 border-[10px] border-white">
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-4xl">Section 4</p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="section bg-purple-200">
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-4xl">With that all being said</p>
          </div>
        </div>
      </div>

      {/* Section 6 (Last Section) */}
      <div className="section bg-purple-200">
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-4xl">Will you be my Valentine?</p>
            <div className="mt-5">
              {/* YES Button */}
              <button
                onClick={handleYesClick}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-4"
              >
                Yes
              </button>
              {/* NO Button */}
              <button
                ref={noButtonRef}
                onClick={handleNoClick}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                No
              </button>
            </div>

            {/* Content that shows up when YES is clicked */}
            {showYesContent && (
              <div className="mt-5 fade-in">
                <img
                  src="src/images/image7.gif"
                  alt="Happy Valentine"
                  className="mx-auto mb-4"
                  style={{ maxWidth: '250px' }}
                />
                <p className="text-2xl">YIPIEEEEEEEEEEEE</p>
                <p className="text-2xl">I LOVE YOU SOSOSOSOSOSOSOSOSOSOSOSOSOSO MUCH</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
