/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="relative isolate">
      {/* Background */}
      <div
        className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      {/* Header section */}
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            My Story
          </h2>
          <p className="mt-6 text-lg px-8 leading-8 text-gray-300">
            Join me on my journey
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                I started this blog to share insights into the development
                trends I'm passionate about, alongside personal anecdotes and
                updates. Living between Korea and the United States has provided
                me with a unique perspective, from navigating the vibrant
                streets of Seoul to the laid-back countryside life in America.
              </p>
            </div>
            <div>
              <p>
                I'll be offering glimpses into these contrasting lifestyles and
                sharing my experiences straddling two different cultures.
                Whether it's discussing the latest tech trends or exploring the
                diverse culinary scene in Seoul, I invite you to join me on this
                journey. So grab a seat, get comfortable, and let's explore
                together!
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4"></dl>
        </div>
      </div>
    </main>
  );
}
