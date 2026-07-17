import React from "react";
import PostCard from "../../components/PostCard";

function Posts() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center text-center gap-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a24] tracking-tight">
          Explore Our Posts
        </h1>
        <p className="text-[#6c7281] text-base md:text-lg max-w-2xl">
          Discover amazing content from talented writers across various topics
        </p>
        <div className="w-full max-w-xl relative mt-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5636f3]/20 focus:border-[#5636f3] transition-all placeholder:text-gray-400 shadow-sm"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl flex justify-center mb-10">
        <div className="inline-flex p-1.5 bg-[#f6f7fb] rounded-[14px] gap-1">
          <button className="px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-white text-[#1a1a24] shadow-sm transition-all">
            All
          </button>
          <button className="px-5 py-2 text-[14px] font-medium rounded-[10px] text-[#6c7281] hover:text-[#1a1a24] transition-all">
            Technology
          </button>
          <button className="px-5 py-2 text-[14px] font-medium rounded-[10px] text-[#6c7281] hover:text-[#1a1a24] transition-all">
            Productivity
          </button>
          <button className="px-5 py-2 text-[14px] font-medium rounded-[10px] text-[#6c7281] hover:text-[#1a1a24] transition-all">
            Design
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PostCard
          article={{
            id: 1,
            image:
              "https://tevoj98108.pythonanywhere.com/media/images/bmw_dakFt6r.jpg",
            category: { name: "Design" },
            created_at: "2026-07-17T12:39:08.310160+05:00",
            title: "BMW",
            content:
              "BMW M5 CS buBMW M divizioni tarixidagi eng kuchli va eng yengil sedan635 ot kuchiga ega 4,4 litrli ikki turbinali V8 dvigateli bilan jihozlangan u rekord darajadagi 3 soniyada 0 dan 100 km/soatgacha tezlashadi. Uglerod tolasining ko'pligi tufayli Competition versiyasidan 70 kg yengilroq va ishga tushirilgandagi maksimal narxi 142 000 dollardan oshdi.",
          }}
        />
        <PostCard
          article={{
            id: 2,
            image:
              "https://tevoj98108.pythonanywhere.com/media/images/bugati.jpg",
            category: { name: "Technology" },
            created_at: "2026-07-17T13:29:58.408337+05:00",
            title: "Buggati",
            content:
              "Bugatti (1909–1963)\
1909-yilda Ettore Bugatti kompaniyaga asos solgan [ 2 ] . U Molsheimdagi tashlandiq bo'yoq zavodidan fabrika sifatida foydalangan . Bugatti Type 13 1910-yilda paydo bo'lgan va Ernest Fridrix boshqargan avtomobil 1911-yilgi Fransiya Gran-prisida kuchliroq mashinalarni ortda qoldirib, ikkinchi o'rinni egallagan [ 3 ] .",
          }}
        />
        <PostCard
          article={{
            id: 3,
            image:
              "https://tevoj98108.pythonanywhere.com/media/images/1000040744.png",
            category: { name: "Productivity" },
            created_at: "2026-07-17T16:12:49.467715+05:00",
            title: "Vibe Coding",
            content: "Vibe coding boshqachda",
          }}
        />
      </div>
    </section>
  );
}

export default Posts;

// <PostCard
//           image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60"
//           category="Productivity"
//           date="Nov 18, 2025"
//           title="Mastering Productivity"
//           description="Proven strategies and tools to boost your productivity and achieve your goals faster."
//         />

//         <PostCard
//           image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=60"
//           category="Design"
//           date="Nov 15, 2025"
//           title="Design Principles That Matter"
//           description="Essential design principles every creator should know to build stunning user experiences."
//         />

//         <PostCard
//           image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60"
//           category="Technology"
//           date="Nov 12, 2025"
//           title="Building Scalable Applications"
//           description="Learn how to architect and build applications that can scale to millions of users."
//         />

//         <PostCard
//           image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60"
//           category="Productivity"
//           date="Nov 10, 2025"
//           title="The Art of Remote Work"
//           description="Tips and best practices for thriving in a remote work environment."
//         />

//         <PostCard
//           image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=60"
//           category="Design"
//           date="Nov 8, 2025"
//           title="Color Theory in Digital Design"
//           description="Understanding how color affects user perception and behavior in digital products."
//         />
