import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/styles.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);
  
  const [showYesContent, setShowYesContent] = useState(false);
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

  const handleYesClick = () => {
    setShowYesContent(true);
  };

  const handleNoClick = () => {
    if (noButtonRef.current) {
      const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); 
      const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); 
      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = randomX + 'px';
      noButtonRef.current.style.top = randomY + 'px';
    }
  };

  return (
    <div className="App">
      {/* Section 1 */}
      <div className="section bg-blue-50 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <div className="mb-10 max-sm:mb-5 fade-in">
            <p className="text-4xl max-sm:text-4xl">hello my princess</p>
          </div>
          <div className="fade-in">
            <p className="text-2xl max-sm:text-2xl">
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 2 */}
      <div className="section bg-blue-100 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-4xl max-sm:text-3xl fade-in">
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 3 */}
      <div className="section bg-blue-200 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-2xl leading-8 fade-in">
            I struggle to put into words how much you mean to me and <br />
            how grateful I am for having you in my life, <br />
            so I made this website
          </p>
          <p className="text-md fade-in mt-2">plus I'm not in DC rn, lmao</p>
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 4 */}
      <div className="section bg-blue-300 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-2xl mt-4 fade-in">
            Every time I think about you and our relationship, I feel incredibly lucky.
          </p>
          <p className="text-2xl mt-4 fade-in">
            I am so grateful that our paths crossed and we found each other.
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 5 */}
      <div className="section bg-sky-200 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-2xl mt-4 fade-in">
            I simply lack enough vocabulary to express how much I love you and how much you mean to me.
          </p>
          <p className="text-2xl mt-4 fade-in">
            As much as we love, support and care for each other, I still am excited about the future of us, where we can finally live the dream that we always text about.
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 6 */}
      <div className="section bg-sky-300 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-2xl mt-4 fade-in">
            You are such a blessing to have and be with
          </p>
          <p className="text-2xl mt-4 fade-in">
            The best investment is you, because your smile is my profit
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 7 */}
      <div className="section bg-teal-200 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-2xl mt-4 fade-in">
            Everyday I wake up and think of unique ways to make you feel loved
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 8 */}
      <div className="section bg-teal-300 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-2xl mt-4 fade-in">
            If you were a cozy sweater, I would be the gentle breeze making you feel needed.
          </p>
          <p className="text-2xl mt-4 fade-in">
            If you were the ocean, I would be the shore waiting to meet your waves.
          </p>
          <p className="text-2xl mt-4 fade-in">
            If you were a flower, I would be the garden giving you the space and care to bloom beautifully.
          </p>
          <p className="text-2xl mt-4 fade-in">
            If you were the moon, I would be the tide forever drawn toward your gentle pull.
          </p>
          <p className="text-2xl mt-4 fade-in">
            If you were a usucha, I would be the oat milk
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 9 */}
      <div className="section bg-cyan-200 border-[10px] border-white flex items-center justify-center p-6">
        <div className="text-center text-gray-800">
          <p className="text-4xl fade-in">With that all being said</p>
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
                className="w-8 h-8 text-gray-800 animate-bounce"
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

      {/* Section 10 (Last Section) */}
      <div className="section bg-cyan-300 border-[10px] border-white flex items-center justify-center p-6">
        <div className="relative text-center text-gray-800">
          <p className="text-4xl fade-in">Will you be my Valentine?</p>
          <div className="mt-5 fade-in">
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
            <div className="mt-5 fade-in p-2">
              <img
                src="images/image7.gif"
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
  );
}

export default App;
