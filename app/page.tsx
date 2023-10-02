import ContactUs from './components/contactus';
import Header from './components/header';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const statisticsData: Stat[] = [
  { label: 'Annual Turnover', value: 100000, suffix: '+' },
  { label: 'Client Network', value: 1200, suffix: '+' },
  { label: 'Distribution Channels', value: 9, suffix: '+' },
  { label: 'Ready Stock', value: 9000, suffix: '+' },
];

const colors = [
  { name: 'Red 120', hex: '#FF3F3F', category: 'Reactive Dye Shade' },
  { name: 'Red 195', hex: '#FF0000', category: 'Reactive Dye Shade' },
  { name: 'Yellow 15', hex: '#FFD700', category: 'Reactive Dye Shade' },
  { name: 'Navy Blue RGB', hex: '#000080', category: 'Reactive Dye Shade' },
  { name: 'Navy Blue 9', hex: '#000066', category: 'MX Cold Dyes' },
  { name: 'Blue 140', hex: '#0000FF', category: 'MX Cold Dyes' },
  { name: 'Black 5', hex: '#000000', category: 'MX Cold Dyes' },
  { name: 'Orange 4', hex: '#FFA500', category: 'MX Cold Dyes' },
];





export default function Home() {
  return (
    <main>
      <section 
        className="p-5 h-screen flex flex-col justify-end items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(ink.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div className='max-w-3xl px-12 md:px-20'>
          <h1 className="text-xl md:text-4xl  py-5 text-left text-white font-bold font-mono">Welcome to Ashwini DyeChem Industries</h1>
          <p className='text-xs md:text-base font-mono py-3 mb-28 text-left text-white'>a trusted leader in manufacturing reliable reactive dyes, with a proven track record, skilled staff, punctual delivery, customization options, and competitive prices, we’re the preferred choice for textile manufacturers worldwide. Choose ADI for vibrant and enduring color solutionsFrom the fashion industry to home textiles and industrial applications, our reactive dyes cater to diverse sectors.Precise color matching and consistencyUsing advanced technology and a high-quality spectrophotometer, we deliver customized tones and shades that meet your specifications. Trust ADI for perfectly colored textiles.</p>
        </div>
      </section>
      <section>
        <img src="/example-info.jpg" alt="Infographic" />
      </section>
      <section className="bg-white p-6 md:p-12">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-5xl font-medium mt-12 font-mono text-center mb-20 text-neutral-700">Our Products</h2>
          
          {/* Left Side */}
          <div className="mb-12">
            {/* <h3 className="text-base md:text-2xl font-medium font-mono mb-6 text-center">Reactive Dyes</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {colors.filter(color => color.category === 'Reactive Dye Shade').map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2 rounded-full transform transition-transform duration-500 cursor-pointer hover:scale-125" style={{ backgroundColor: color.hex, animation: 'pulse 10s' }}></div>
                  <h2 className="mb-2 text-sm font-light font-mono">{color.name}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* <h3 className="text-base md:text-2xl font-medium font-mono mb-6 text-center">MX Cold Dyes</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {colors.filter(color => color.category === 'MX Cold Dyes').map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2 rounded-full transform transition-transform duration-500 cursor-pointer hover:scale-125" style={{ backgroundColor: color.hex, animation: 'pulse 10s' }}></div>
                  <h2 className="mb-2 text-sm font-light font-mono">{color.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <button className="text-red-900 border mb-10 p-3 border-red-900 rounded-lg hover:scale-95">
            Explore All Products
          </button>
        </div>
      </section>


      <section 
          className="p-5 h-screen flex flex-col justify-center items-end"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(red-stat.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='max-w-3xl px-12 md:px-20'>
            <h1 className="text-3xl md:text-6xl  py-5 text-right text-neutral-50 font-medium font-mono">Statistics</h1>
            {statisticsData.map((stat, index) => (
              <div key={index} className="flex-col flex font-mono text-neutral-50 justify-between items-end my-10">
                <span className='text-sm'>{stat.label}</span>
                <span className='text-xl text-medium'>{stat.value}{stat.suffix}</span>
              </div>
            ))}
          </div>
        </section>
      <section className="">
        <img src="/worldmap.jpg" alt="World Map" />
      </section>
      <ContactUs />
    </main>
  );
}